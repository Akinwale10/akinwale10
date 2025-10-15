import {
  categories,
  products,
  testimonials,
  blogPosts,
  galleryImages
} from './data/products.js';

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const formatStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  return `${'★'.repeat(fullStars)}${halfStar ? '½' : ''}`.padEnd(5, '☆');
};

const openModal = (content) => {
  const modal = qs('[data-modal]');
  if (!modal) return;
  const container = qs('[data-modal-content]', modal);
  container.innerHTML = '';
  container.append(content);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  qs('[data-modal-close]', modal).focus();
};

const closeModal = () => {
  const modal = qs('[data-modal]');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
};

const createProductCard = (product) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <picture>
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
    </picture>
    <div class="product-card__body">
      <div class="product-card__badge">${[product.categoryIcon, product.categoryLabel]
        .filter(Boolean)
        .join(' ')}</div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-card__meta">
        <span>${product.price || 'Call for price'}</span>
        <span>${product.tags?.slice(0, 2).join(', ') || ''}</span>
      </div>
      <div class="product-card__actions">
        <button class="btn btn-outline" type="button" data-product-preview="${product.id}">Quick view</button>
        <a class="btn btn-primary" href="https://wa.me/2348035551088?text=Hello%20OMOOLA!%20I%20would%20like%20to%20order%20${encodeURIComponent(
          product.name
        )}" target="_blank" rel="noopener">Order via WhatsApp</a>
      </div>
    </div>
  `;
  return card;
};

const renderProductModal = (product) => {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <h3 id="modal-title">${product.name}</h3>
    <p><strong>Price:</strong> ${product.price || 'Call for price'}</p>
    <p>${product.description}</p>
    ${product.highlights?.length ? `<h4>Highlights</h4><ul>${product.highlights
      .map((item) => `<li>${item}</li>`)
      .join('')}</ul>` : ''}
    <a class="btn btn-primary" href="https://wa.me/2348035551088?text=Hello%20OMOOLA!%20I%20want%20to%20order%20${encodeURIComponent(
      product.name
    )}" target="_blank" rel="noopener">Chat on WhatsApp</a>
  `;
  return wrap;
};

const initNavigation = () => {
  const toggle = qs('.nav-toggle');
  const nav = qs('.site-nav');
  if (!toggle || !nav) return;

  const toggleNav = () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  };

  toggle.addEventListener('click', toggleNav);

  qsa('a, button', nav).forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 960) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  });
};

const initDropdown = () => {
  const dropdown = qs('[data-category-menu]');
  if (!dropdown) return;
  dropdown.innerHTML = categories
    .map(
      (category) => `
        <li>
          <a href="#featured-products" data-category-filter="${category.id}">
            <span>${category.icon}</span>
            <span>${category.name}</span>
          </a>
        </li>
      `
    )
    .join('');

  const trigger = qs('.has-dropdown > button');
  if (!trigger) return;

  const setExpanded = (expanded) => trigger.setAttribute('aria-expanded', String(expanded));

  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setExpanded(false);
      trigger.blur();
    }
  });

  dropdown.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    setExpanded(false);
  });
};

const renderCategories = () => {
  const grid = qs('[data-category-grid]');
  if (!grid) return;
  grid.innerHTML = '';
  categories.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'category-card';
    card.innerHTML = `
      <picture>
        <img src="${category.image}" alt="${category.name}" loading="lazy" />
      </picture>
      <div class="category-card__content">
        <h3>${category.name}</h3>
        <p>${category.description}</p>
        <a class="category-card__cta" href="#featured-products" data-category-filter="${category.id}">
          Explore ${category.name}
        </a>
      </div>
    `;
    grid.append(card);
  });
};

const renderProducts = (filteredProducts) => {
  const grid = qs('[data-product-grid]');
  if (!grid) return;
  grid.innerHTML = '';

  filteredProducts.forEach((product) => {
    const enrichedProduct = {
      ...product,
      categoryLabel: categories.find((cat) => cat.id === product.category)?.name || '',
      categoryIcon: categories.find((cat) => cat.id === product.category)?.icon || ''
    };
    grid.append(createProductCard(enrichedProduct));
  });
};

const initProducts = () => {
  const select = qs('#product-category');
  const searchInput = qs('#product-search');
  const resetButton = qs('[data-reset-products]');
  let filters = { query: '', category: 'all' };

  if (select) {
    select.innerHTML += categories.map((cat) => `<option value="${cat.id}">${cat.name}</option>`).join('');
    select.addEventListener('change', (event) => {
      filters = { ...filters, category: event.target.value };
      applyFilters();
    });
  }

  const applyFilters = () => {
    const query = filters.query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const searchTarget = `${product.name} ${product.description} ${product.tags.join(' ')}`.toLowerCase();
      const matchesQuery = !query || searchTarget.includes(query);
      return matchesCategory && matchesQuery;
    });
    renderProducts(filtered);
  };

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      filters = { ...filters, query: event.target.value };
      applyFilters();
    });

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        window.showSearchResults?.(searchInput.value.trim());
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener('click', () => {
      filters = { query: '', category: 'all' };
      if (searchInput) searchInput.value = '';
      if (select) select.value = 'all';
      applyFilters();
    });
  }

  applyFilters();
};

const renderGallery = () => {
  const grid = qs('[data-gallery-grid]');
  if (!grid) return;
  grid.innerHTML = '';
  galleryImages.forEach((item) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'gallery-card';
    card.setAttribute('data-gallery-id', item.id);
    card.innerHTML = `
      <img src="${item.image}" alt="${item.caption}" loading="lazy" />
    `;
    card.addEventListener('click', () => {
      const modalContent = document.createElement('div');
      modalContent.innerHTML = `
        <h3 id="modal-title">${item.caption}</h3>
        <img src="${item.image}" alt="${item.caption}" />
      `;
      openModal(modalContent);
    });
    grid.append(card);
  });
};

const renderTestimonials = () => {
  const track = qs('[data-testimonial-track]');
  if (!track) return;
  track.innerHTML = '';
  testimonials.forEach((testimonial) => {
    const card = document.createElement('article');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <blockquote>“${testimonial.quote}”</blockquote>
      <footer>
        <img src="${testimonial.avatar}" alt="Portrait of ${testimonial.name}" loading="lazy" />
        <div>
          <strong>${testimonial.name}</strong>
          <div class="star-rating" aria-label="${testimonial.rating} out of 5 stars">${formatStars(
            testimonial.rating
          )}</div>
          <span>${testimonial.role}</span>
        </div>
      </footer>
    `;
    track.append(card);
  });

  let index = 0;
  const updateSlider = () => {
    const width = track.clientWidth;
    track.scrollTo({ left: width * index, behavior: 'smooth' });
  };

  const prev = qs('[data-slider-prev]');
  const next = qs('[data-slider-next]');

  const move = (direction) => {
    index = (index + direction + testimonials.length) % testimonials.length;
    updateSlider();
  };

  prev?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));

  let autoSlide = setInterval(() => move(1), 6000);

  track.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => move(1), 6000);
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
};

const renderBlogPosts = () => {
  const grid = qs('[data-blog-grid]');
  if (!grid) return;
  grid.innerHTML = '';
  blogPosts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
      <picture>
        <img src="${post.image}" alt="${post.title}" loading="lazy" />
      </picture>
      <div class="blog-card__body">
        <div class="blog-card__meta">
          <span>${post.date}</span>
          <span>${post.author}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="blog-card__meta">${post.tags.map((tag) => `#${tag}`).join(' ')}</div>
        <a class="btn btn-outline" href="mailto:hello@omoolastores.ng?subject=Enquiry:%20${encodeURIComponent(
          post.title
        )}">Ask about this update</a>
      </div>
    `;
    grid.append(card);
  });
};

const initNewsletterForm = () => {
  const form = qs('[data-newsletter-form]');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = new FormData(form).get('email');
    const feedback = qs('.form-feedback', form);
    if (!email || !/.+@.+\..+/.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.style.color = '#d64545';
      return;
    }
    feedback.textContent = 'Thank you! Look out for our weekly deals in your inbox.';
    feedback.style.color = 'var(--color-primary)';
    form.reset();
  });
};

const initContactForm = () => {
  const form = qs('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let hasError = false;

    ['name', 'email', 'phone', 'message'].forEach((field) => {
      const value = data.get(field)?.toString().trim();
      const errorEl = qs(`#${field}-error`);
      if (!value) {
        errorEl.textContent = 'This field is required.';
        hasError = true;
      } else if (field === 'email' && !/.+@.+\..+/.test(value)) {
        errorEl.textContent = 'Enter a valid email address.';
        hasError = true;
      } else {
        errorEl.textContent = '';
      }
    });

    if (hasError) return;

    const feedback = qs('.form-feedback', form);
    feedback.textContent = 'Thank you! Our customer experience team will reach out shortly.';
    form.reset();
  });
};

const initModal = () => {
  const modal = qs('[data-modal]');
  if (!modal) return;
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.hasAttribute('data-modal-close')) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeModal();
  });
};

const initProductPreview = () => {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-product-preview]');
    if (!button) return;
    const id = button.getAttribute('data-product-preview');
    const product = products.find((item) => item.id === id);
    if (!product) return;
    openModal(renderProductModal(product));
  });
};

const initSearchOverlay = () => {
  const overlay = qs('[data-search-overlay]');
  const resultsList = qs('[data-search-results]');
  const closeBtn = qs('[data-search-close]');
  if (!overlay || !resultsList || !closeBtn) return;

  const close = () => {
    overlay.hidden = true;
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  window.showSearchResults = (query) => {
    const cleaned = query.trim().toLowerCase();
    if (!cleaned) return;
    const productMatches = products
      .filter((product) => `${product.name} ${product.description}`.toLowerCase().includes(cleaned))
      .map((product) => ({
        title: product.name,
        type: 'Product',
        description: product.description,
        link: '#featured-products'
      }));

    const blogMatches = blogPosts
      .filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(cleaned))
      .map((post) => ({
        title: post.title,
        type: 'Blog post',
        description: post.excerpt,
        link: '#blog'
      }));

    const results = [...productMatches, ...blogMatches];

    resultsList.innerHTML = results.length
      ? results
          .map(
            (result) => `
            <li class="search-result">
              <span class="badge">${result.type}</span>
              <strong>${result.title}</strong>
              <p>${result.description}</p>
              <a class="btn btn-outline" href="${result.link}">View section</a>
            </li>
          `
          )
          .join('')
      : '<li>No matching results found.</li>';

    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  };
};

const initWhatsAppFab = () => {
  const fab = qs('[data-whatsapp]');
  if (!fab) return;
  fab.addEventListener('click', () => {
    window.open('https://wa.me/2348035551088?text=Hello%20OMOOLA!%20I%20would%20like%20to%20place%20an%20order.', '_blank');
  });
};

const initObservers = () => {
  const elements = qsa('[data-animate]');
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((element) => observer.observe(element));
};

const initCategoryFilters = () => {
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-category-filter]');
    if (!target) return;
    const category = target.getAttribute('data-category-filter');
    const select = qs('#product-category');
    if (select) {
      select.value = category;
      select.dispatchEvent(new Event('change'));
    }
    document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' });
  });
};

const initFooterYear = () => {
  const yearEl = qs('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
};

const init = () => {
  initNavigation();
  initDropdown();
  initSearchOverlay();
  renderCategories();
  initProducts();
  renderGallery();
  renderTestimonials();
  renderBlogPosts();
  initNewsletterForm();
  initContactForm();
  initModal();
  initProductPreview();
  initWhatsAppFab();
  initObservers();
  initCategoryFilters();
  initFooterYear();
};

init();
