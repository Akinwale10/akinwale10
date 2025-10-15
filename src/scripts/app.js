import { categories, promoSlides, coupons, trustBadges, products } from './data/products.js';

const state = {
  cart: [],
  loyaltyBalance: 1240,
  recentSearches: JSON.parse(localStorage.getItem('omoola-recent-searches') || '[]')
};

const subscribers = new Set();
let cartPageSubscriptionBound = false;

const formatCurrency = (value) => `₦${value.toLocaleString('en-NG')}`;

const persistCart = () => {
  localStorage.setItem('omoola-cart', JSON.stringify(state.cart));
  localStorage.setItem('omoola-loyalty', String(state.loyaltyBalance));
  subscribers.forEach((fn) => fn());
};

const loadCart = () => {
  const saved = localStorage.getItem('omoola-cart');
  const loyalty = localStorage.getItem('omoola-loyalty');
  state.cart = saved ? JSON.parse(saved) : [];
  state.loyaltyBalance = loyalty ? Number(loyalty) : state.loyaltyBalance;
};

const addToCart = (productId, quantity = 1) => {
  const item = state.cart.find((entry) => entry.id === productId);
  if (item) {
    item.quantity += quantity;
  } else {
    state.cart.push({ id: productId, quantity });
  }
  showToast('Added to cart');
  persistCart();
};

const updateCartQty = (productId, quantity) => {
  state.cart = state.cart
    .map((entry) => (entry.id === productId ? { ...entry, quantity } : entry))
    .filter((entry) => entry.quantity > 0);
  persistCart();
};

const removeFromCart = (productId) => {
  state.cart = state.cart.filter((entry) => entry.id !== productId);
  persistCart();
};

const getCartItems = () =>
  state.cart.map((entry) => {
    const product = products.find((p) => p.id === entry.id);
    return {
      ...product,
      quantity: entry.quantity,
      lineTotal: product ? product.price * entry.quantity : 0
    };
  });

const calculateCartSummary = () => {
  const items = getCartItems();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const savings = subtotal >= 25000 ? subtotal * 0.05 : 0;
  const deliveryFee = subtotal >= 20000 ? 0 : 1200;
  const loyaltyEarned = Math.round(subtotal * 0.02);
  const total = subtotal - savings + deliveryFee;
  return { subtotal, savings, deliveryFee, loyaltyEarned, total };
};

const renderCartCount = () => {
  const countEl = document.querySelector('[data-cart-count]');
  const items = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countEl) {
    countEl.textContent = items;
    countEl.setAttribute('aria-label', `${items} items in cart`);
  }
  const stickyCount = document.querySelector('[data-sticky-cart-count]');
  if (stickyCount) stickyCount.textContent = items;
};

const renderLoyalty = () => {
  const loyaltyEls = document.querySelectorAll('[data-loyalty]');
  loyaltyEls.forEach((el) => {
    el.textContent = `${state.loyaltyBalance.toLocaleString('en-NG')} pts`;
  });
};

const subscribe = (fn) => {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
};

let toastTimer;
const showToast = (message) => {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('active'), 2200);
};

const renderTopBar = () => `
  <div class="top-bar" role="region" aria-label="OMOOLA announcement">
    <div class="container">
      <div>Call/WhatsApp <a href="https://wa.me/2348030000000">+234 803 000 0000</a></div>
      <div class="ticker" aria-live="polite">
        <span>Delivery ETA: Same-day within Lagos • Next-day nationwide</span>
        <span>Save 10% on your first order • Use code <strong>OMOOLA10</strong></span>
      </div>
    </div>
  </div>
`;

const renderHeader = () => {
  const navLinks = categories
    .map(
      (category) => `
        <a href="category.html?category=${category.id}" data-category-link="${category.id}">
          <span aria-hidden="true">${category.icon}</span>
          ${category.name}
        </a>
      `
    )
    .join('');

  return `
    ${renderTopBar()}
    <header class="header" role="banner">
      <div class="container header-inner">
        <a class="logo" href="index.html" aria-label="OMOOLA SUPERMARKET home">
          OMOOLA <span style="color: var(--color-secondary);">SUPERMARKET</span>
        </a>
        <form class="search-bar" role="search" aria-label="Site search">
          <div class="search-input-wrap" style="position: relative;">
            <select aria-label="Select category">
              <option value="all">All categories</option>
              ${categories
                .map((cat) => `<option value="${cat.id}">${cat.name}</option>`)
                .join('')}
            </select>
            <input type="search" placeholder="Search for groceries, brands, or deals" aria-label="Search products" autocomplete="off" />
            <ul class="search-suggestions" role="listbox"></ul>
          </div>
          <button class="btn btn-secondary" type="submit">Search</button>
        </form>
        <nav class="header-actions" aria-label="Account and cart">
          <a href="account.html">Account</a>
          <a href="wishlist.html">Wishlist</a>
          <button type="button" data-mini-cart-trigger>
            Cart
            <span class="count" data-cart-count>0</span>
          </button>
        </nav>
      </div>
      <div class="container">
        <nav class="mega-nav" aria-label="Primary">
          ${navLinks}
        </nav>
      </div>
    </header>
  `;
};

const renderFooter = () => `
  <footer role="contentinfo">
    <div class="container footer-top">
      <div class="footer-column">
        <div class="logo" style="color:#fff;">OMOOLA SUPERMARKET</div>
        <p class="tagline">Fresh groceries, fast delivery. We proudly serve Nigerian families with quality food, friendly service, and fair prices.</p>
        <div class="badge">Open Daily • 7am – 9pm</div>
      </div>
      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="faqs.html">FAQs</a></li>
          <li><a href="store-locator.html">Store Locator</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Help</h4>
        <ul>
          <li><a href="delivery-returns.html">Delivery & Returns</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms & Conditions</a></li>
          <li><a href="careers.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer-column footer-newsletter">
        <h4>Stay in the loop</h4>
        <p>Sign up for deals, recipes, and community updates.</p>
        <form data-newsletter-form>
          <label class="sr-only" for="footer-email">Email address</label>
          <input id="footer-email" type="email" placeholder="Enter your email" required />
          <button class="btn btn-secondary" type="submit">Subscribe</button>
        </form>
        <a class="btn btn-outline" href="https://wa.me/2348030000000" target="_blank" rel="noopener">Order on WhatsApp</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <div>© ${new Date().getFullYear()} OMOOLA SUPERMARKET. All rights reserved.</div>
      <div>Secure payments with <strong>Paystack</strong> & <strong>Flutterwave</strong>.</div>
      <div>
        Follow us:
        <a href="https://www.instagram.com" aria-label="Instagram">Instagram</a> •
        <a href="https://www.facebook.com" aria-label="Facebook">Facebook</a> •
        <a href="https://www.twitter.com" aria-label="Twitter">Twitter</a>
      </div>
    </div>
  </footer>
`;

const setupLayout = () => {
  const root = document.querySelector('[data-app-root]');
  if (!root) return;
  root.insertAdjacentHTML('afterbegin', renderHeader());
  root.insertAdjacentHTML('beforeend', renderFooter());

  const sticky = document.createElement('button');
  sticky.className = 'sticky-cart';
  sticky.setAttribute('type', 'button');
  sticky.setAttribute('data-mini-cart-trigger', '');
  sticky.innerHTML = '<span aria-hidden="true">🛒</span> Cart <span class="badge" data-sticky-cart-count>0</span>';
  document.body.appendChild(sticky);

  const miniCart = document.createElement('aside');
  miniCart.className = 'mini-cart-drawer';
  miniCart.setAttribute('aria-hidden', 'true');
  miniCart.innerHTML = `
    <div class="mini-cart-header">
      <h3>Shopping Cart</h3>
      <button type="button" data-close-mini-cart aria-label="Close cart">✕</button>
    </div>
    <div class="cart-items" data-cart-items></div>
    <div class="card" data-cart-summary></div>
    <a class="btn btn-primary" href="checkout.html">Checkout</a>
  `;
  document.body.appendChild(miniCart);

  const toggleMiniCart = (open) => {
    miniCart.classList.toggle('active', open);
    miniCart.setAttribute('aria-hidden', String(!open));
  };

  document.querySelectorAll('[data-mini-cart-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => toggleMiniCart(!miniCart.classList.contains('active')));
  });
  miniCart.querySelector('[data-close-mini-cart]').addEventListener('click', () => toggleMiniCart(false));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleMiniCart(false);
  });

  const renderMiniCart = () => {
    const itemsContainer = miniCart.querySelector('[data-cart-items]');
    const summaryContainer = miniCart.querySelector('[data-cart-summary]');
    const items = getCartItems();
    if (!items.length) {
      itemsContainer.innerHTML = '<p>Your cart is empty. Start adding fresh groceries!</p>';
    } else {
      itemsContainer.innerHTML = items
        .map(
          (item) => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" loading="lazy" />
              <div>
                <h5>${item.name}</h5>
                <div class="price">${formatCurrency(item.price)}</div>
                <div class="qty-control" role="group" aria-label="Update quantity">
                  <button type="button" data-qty="down" data-product="${item.id}">−</button>
                  <span>${item.quantity}</span>
                  <button type="button" data-qty="up" data-product="${item.id}">+</button>
                </div>
              </div>
              <strong>${formatCurrency(item.lineTotal)}</strong>
            </div>
          `
        )
        .join('');
    }

    const summary = calculateCartSummary();
    summaryContainer.innerHTML = `
      <div class="summary-row"><span>Subtotal</span><span>${formatCurrency(summary.subtotal)}</span></div>
      <div class="summary-row"><span>Savings</span><span>- ${formatCurrency(summary.savings)}</span></div>
      <div class="summary-row"><span>Delivery</span><span>${summary.deliveryFee ? formatCurrency(summary.deliveryFee) : 'Free'}</span></div>
      <div class="summary-row"><span>Loyalty earned</span><span>${summary.loyaltyEarned} pts</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatCurrency(summary.total)}</span></div>
    `;
  };

  miniCart.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('[data-qty]')) {
      const product = target.getAttribute('data-product');
      const current = state.cart.find((entry) => entry.id === product)?.quantity || 0;
      if (target.dataset.qty === 'up') updateCartQty(product, current + 1);
      if (target.dataset.qty === 'down') updateCartQty(product, Math.max(0, current - 1));
    }
  });

  subscribe(() => {
    renderCartCount();
    renderMiniCart();
    renderLoyalty();
  });

  renderCartCount();
  renderMiniCart();
  renderLoyalty();
};

const setupSearch = () => {
  const form = document.querySelector('.search-bar');
  if (!form) return;
  const select = form.querySelector('select');
  const input = form.querySelector('input[type="search"]');
  const suggestions = form.querySelector('.search-suggestions');

  const renderSuggestions = (value) => {
    const query = value.trim().toLowerCase();
    if (!query) {
      suggestions.classList.remove('active');
      return;
    }
    const match = products
      .filter((product) =>
        [product.name, ...(product.tags || [])].some((field) => field?.toLowerCase().includes(query))
      )
      .slice(0, 6);
    const recent = state.recentSearches.filter((item) => item.toLowerCase().includes(query));
    if (!match.length && !recent.length) {
      suggestions.classList.remove('active');
      return;
    }
    suggestions.innerHTML = `
      ${recent
        .map((term) => `<li><button type="button" data-suggestion="${term}">Recent: ${term}</button></li>`)
        .join('')}
      ${match
        .map(
          (product) =>
            `<li><button type="button" data-suggestion-product="${product.slug}" data-suggestion-name="${product.name}">${product.name}</button></li>`
        )
        .join('')}
    `;
    suggestions.classList.add('active');
  };

  input.addEventListener('input', (event) => {
    renderSuggestions(event.target.value);
  });

  suggestions.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.suggestion) {
      input.value = button.dataset.suggestion;
      suggestions.classList.remove('active');
      form.requestSubmit();
    }
    if (button.dataset.suggestionProduct) {
      window.location.href = `product.html?slug=${button.dataset.suggestionProduct}`;
    }
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const term = input.value.trim();
    if (!term) return;
    if (!state.recentSearches.includes(term)) {
      state.recentSearches.unshift(term);
      state.recentSearches = state.recentSearches.slice(0, 6);
      localStorage.setItem('omoola-recent-searches', JSON.stringify(state.recentSearches));
    }
    const category = select.value;
    window.location.href = `category.html?search=${encodeURIComponent(term)}&category=${category}`;
  });
};

const getQueryParams = () => Object.fromEntries(new URLSearchParams(window.location.search));

const filterProducts = ({ category, search, priceMin, priceMax, brand, dietary }) => {
  return products.filter((product) => {
    if (category && category !== 'all' && product.category !== category) return false;
    if (search) {
      const query = search.toLowerCase();
      const haystack = [product.name, product.description, ...(product.tags || [])].join(' ').toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    if (priceMin && product.price < priceMin) return false;
    if (priceMax && product.price > priceMax) return false;
    if (brand && !product.name.toLowerCase().includes(brand.toLowerCase())) return false;
    if (dietary && dietary === 'halal' && product.category === 'meat-fish') return product.badges?.includes('Halal');
    if (dietary && dietary === 'gluten-free') return !/wheat|flour|gluten/i.test(product.description);
    return true;
  });
};

const sortProducts = (items, sortBy) => {
  const sorted = [...items];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'newest':
      return sorted.sort((a, b) => b.id.localeCompare(a.id));
    case 'popular':
      return sorted.sort((a, b) => b.reviews - a.reviews);
    default:
      return items;
  }
};

const renderProductCard = (product) => `
  <article class="product-card" data-product-card="${product.id}">
    <img src="${product.image}" alt="${product.name}" loading="lazy" />
    <div class="content">
      <div class="badge" aria-label="Rating ${product.rating} of 5">★ ${product.rating.toFixed(1)}</div>
      <a class="title" href="product.html?slug=${product.slug}">${product.name}</a>
      <div class="price">${formatCurrency(product.price)}</div>
      <div class="stock">${product.inStock ? 'In stock' : 'Back soon'}</div>
      <button class="add-btn" type="button" data-add-cart="${product.id}">Add to cart</button>
    </div>
  </article>
`;

const renderHomePage = () => {
  const hero = document.querySelector('[data-hero]');
  if (hero) {
    hero.innerHTML = promoSlides
      .map(
        (slide, index) => `
          <section class="hero-slide" data-slide="${index}" style="background-image:url('${slide.image}'); background-size:cover; background-position:center;">
            <div class="hero-content">
              <div class="badge">${slide.tag}</div>
              <h1>${slide.title}</h1>
              <p>${slide.subtitle}</p>
              <a class="btn btn-primary" href="${index === 2 ? 'category.html?category=fresh-produce' : 'deals.html'}">${slide.cta}</a>
            </div>
          </section>
        `
      )
      .join('');
    const indicators = hero.parentElement.querySelector('.hero-indicators');
    indicators.innerHTML = promoSlides
      .map((_, idx) => `<button type="button" data-hero-dot="${idx}" ${idx === 0 ? 'class="active"' : ''}></button>`)
      .join('');

    let activeSlide = 0;
    const setActive = (next) => {
      activeSlide = next;
      hero.querySelectorAll('[data-slide]').forEach((slide, idx) => {
        slide.style.display = idx === activeSlide ? 'grid' : 'none';
      });
      indicators.querySelectorAll('button').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === activeSlide);
      });
    };

    setActive(0);
    const rotate = () => setActive((activeSlide + 1) % promoSlides.length);
    let heroTimer = setInterval(rotate, 6000);
    indicators.addEventListener('click', (event) => {
      const btn = event.target.closest('button');
      if (!btn) return;
      clearInterval(heroTimer);
      setActive(Number(btn.dataset.heroDot));
      heroTimer = setInterval(rotate, 6000);
    });
  }

  const categoriesWrap = document.querySelector('[data-category-tiles]');
  if (categoriesWrap) {
    categoriesWrap.innerHTML = categories
      .map(
        (cat) => `
          <a class="category-card" href="category.html?category=${cat.id}">
            <span class="icon">${cat.icon}</span>
            <strong>${cat.name}</strong>
            <p>${cat.description}</p>
          </a>
        `
      )
      .join('');
  }

  const renderList = (selector, filterFn) => {
    const container = document.querySelector(selector);
    if (!container) return;
    const items = products.filter(filterFn).slice(0, 8);
    container.innerHTML = items.map((item) => renderProductCard(item)).join('');
  };

  renderList('[data-popular]', (item) => item.reviews > 150);
  renderList('[data-new-arrivals]', (item) => item.id.startsWith('gen-') || item.id.startsWith('var-'));
  renderList('[data-under-1500]', (item) => item.price <= 1500);

  const promoStrip = document.querySelector('[data-promo-strip]');
  if (promoStrip) {
    promoStrip.innerHTML = `
      <div class="promo-item"><strong>Free delivery threshold</strong><span>Spend ₦25,000+ and get Lagos delivery free.</span></div>
      <div class="promo-item"><strong>Loyalty points</strong><span>Earn 2 points for every ₦100 spent. Balance: <span data-loyalty></span></span></div>
      <div class="promo-item"><strong>Easy returns</strong><span>Not happy? Get replacements within 24 hours.</span></div>
    `;
  }

  const newsletterCard = document.querySelector('[data-newsletter-card]');
  if (newsletterCard) {
    newsletterCard.innerHTML = `
      <div>
        <h3>Join our foodie community</h3>
        <p>Get exclusive coupons, fresh recipes, and invites to local tasting events.</p>
        <div class="badge">Save 10% on your first order • Code OMOOLA10</div>
      </div>
      <form data-newsletter-form>
        <input type="email" placeholder="Email address" required aria-label="Email address" />
        <button class="btn btn-secondary" type="submit">Subscribe</button>
        <a class="btn btn-outline" href="https://wa.me/2348030000000" target="_blank" rel="noopener">Order via WhatsApp</a>
      </form>
    `;
  }

  const trustContainer = document.querySelector('[data-trust-badges]');
  if (trustContainer) {
    trustContainer.innerHTML = trustBadges
      .map(
        (badge) => `
          <div class="trust-card">
            <h4>${badge.title}</h4>
            <p>${badge.description}</p>
          </div>
        `
      )
      .join('');
  }
};

const renderCategoryPage = () => {
  const params = getQueryParams();
  const categoryId = params.category || 'all';
  const search = params.search || '';
  const categoryData = categories.find((cat) => cat.id === categoryId);
  const title = document.querySelector('[data-page-title]');
  if (title) {
    title.textContent = categoryData ? categoryData.name : 'All Groceries';
  }
  const description = document.querySelector('[data-category-description]');
  if (description && categoryData) description.textContent = categoryData.description;

  const filtersForm = document.querySelector('[data-filter-form]');
  const sortSelect = document.querySelector('[data-sort]');
  const resultsGrid = document.querySelector('[data-product-grid]');
  if (!resultsGrid) return;

  const activeFilters = { category: categoryId, search, priceMin: null, priceMax: null, brand: null, dietary: null };

  if (sortSelect && params.sort) {
    sortSelect.value = params.sort;
  }

  if (params.priceMin) {
    activeFilters.priceMin = Number(params.priceMin);
    filtersForm?.querySelector('[name="price-min"]').value = params.priceMin;
  }
  if (params.priceMax) {
    activeFilters.priceMax = Number(params.priceMax);
    filtersForm?.querySelector('[name="price-max"]').value = params.priceMax;
  }
  if (params.brand) {
    activeFilters.brand = params.brand;
    filtersForm?.querySelector('[name="brand"]').value = params.brand;
  }
  if (params.dietary) {
    activeFilters.dietary = params.dietary;
    const radio = filtersForm?.querySelector(`[name="dietary"][value="${params.dietary}"]`);
    if (radio) radio.checked = true;
  }

  const applyFilters = () => {
    let items = filterProducts(activeFilters);
    items = sortProducts(items, sortSelect?.value);
    resultsGrid.innerHTML = items.map((item) => renderProductCard(item)).join('');
    if (!items.length) {
      resultsGrid.innerHTML = '<p>No products match your filters. Try broadening your search.</p>';
    }
  };

  if (filtersForm) {
    filtersForm.addEventListener('input', () => {
      const formData = new FormData(filtersForm);
      activeFilters.priceMin = Number(formData.get('price-min')) || null;
      activeFilters.priceMax = Number(formData.get('price-max')) || null;
      activeFilters.brand = formData.get('brand') || null;
      activeFilters.dietary = formData.get('dietary') || null;
      applyFilters();
    });
  }

  sortSelect?.addEventListener('change', applyFilters);
  applyFilters();
};

const renderProductPage = () => {
  const params = getQueryParams();
  const slug = params.slug;
  if (!slug) return;
  const product = products.find((item) => item.slug === slug);
  if (!product) return;

  const breadcrumbs = document.querySelector('[data-breadcrumbs]');
  if (breadcrumbs) {
    breadcrumbs.innerHTML = `
      <a href="index.html">Home</a> / <a href="category.html?category=${product.category}">Category</a> / <span>${product.name}</span>
    `;
  }

  document.title = `${product.name} | OMOOLA SUPERMARKET`;
  const preview = document.querySelector('[data-gallery-preview]');
  const thumbs = document.querySelector('[data-gallery-thumbs]');
  if (preview && thumbs) {
    const images = [product.image, `${product.image}&auto=format&fit=crop&w=600&q=60`, `${product.image}&auto=format&fit=crop&w=600&q=40`];
    preview.innerHTML = `<img src="${images[0]}" alt="${product.name}" />`;
    thumbs.innerHTML = images
      .map((img, idx) => `<button type="button" data-thumb="${idx}" class="${idx === 0 ? 'active' : ''}"><img src="${img}" alt="${product.name} view ${idx + 1}" /></button>`)
      .join('');
    thumbs.addEventListener('click', (event) => {
      const btn = event.target.closest('button[data-thumb]');
      if (!btn) return;
      thumbs.querySelectorAll('button').forEach((el) => el.classList.remove('active'));
      btn.classList.add('active');
      const idx = Number(btn.dataset.thumb);
      preview.innerHTML = `<img src="${images[idx]}" alt="${product.name}" />`;
    });
  }

  const titleEl = document.querySelector('[data-product-title]');
  const priceEl = document.querySelector('[data-product-price]');
  const unitEl = document.querySelector('[data-product-unit]');
  const ratingEl = document.querySelector('[data-product-rating]');
  const highlights = document.querySelector('[data-product-highlights]');
  const nutritionTable = document.querySelector('[data-nutrition-table] tbody');

  titleEl.textContent = product.name;
  priceEl.textContent = formatCurrency(product.price);
  unitEl.textContent = product.unit;
  ratingEl.innerHTML = `★ ${product.rating.toFixed(1)} (${product.reviews} reviews)`;
  highlights.innerHTML = `
    <div class="highlight-card"><strong>Freshness</strong><p>${product.freshnessDate || 'Fresh stock daily'}</p></div>
    <div class="highlight-card"><strong>Origin</strong><p>${product.origin || 'Nigeria'}</p></div>
    <div class="highlight-card"><strong>Storage Tips</strong><p>${product.storage || 'Store appropriately'}</p></div>
    <div class="highlight-card"><strong>Allergens</strong><p>${product.allergens || 'None'}</p></div>
  `;

  if (nutritionTable) {
    nutritionTable.innerHTML = (product.nutrition || [])
      .map((row) => `<tr><td>${row.label}</td><td>${row.value}</td></tr>`)
      .join('');
  }

  const qtyInput = document.querySelector('[data-qty-input]');
  document.querySelector('[data-qty-increase]')?.addEventListener('click', () => {
    qtyInput.value = Number(qtyInput.value) + 1;
  });
  document.querySelector('[data-qty-decrease]')?.addEventListener('click', () => {
    qtyInput.value = Math.max(1, Number(qtyInput.value) - 1);
  });

  document.querySelector('[data-add-product]')?.addEventListener('click', () => {
    addToCart(product.id, Number(qtyInput.value));
  });
  document.querySelector('[data-buy-now]')?.addEventListener('click', () => {
    addToCart(product.id, Number(qtyInput.value));
    window.location.href = 'checkout.html';
  });

  const related = document.querySelector('[data-related-products]');
  if (related) {
    const items = products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, 4);
    related.innerHTML = items.map((item) => renderProductCard(item)).join('');
  }

  const fbt = document.querySelector('[data-fbt]');
  if (fbt) {
    const combos = products.filter((item) => item.category !== product.category).slice(0, 3);
    fbt.innerHTML = combos.map((item) => renderProductCard(item)).join('');
  }
};

const renderCartPage = () => {
  const table = document.querySelector('[data-cart-table] tbody');
  const summary = document.querySelector('[data-cart-summary]');
  if (!table || !summary) return;
  const items = getCartItems();
  table.innerHTML = items
    .map(
      (item) => `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <img src="${item.image}" alt="${item.name}" style="width:72px;height:72px;border-radius:12px;object-fit:cover;" />
              <div>
                <strong>${item.name}</strong>
                <div>${item.unit}</div>
              </div>
            </div>
          </td>
          <td>${formatCurrency(item.price)}</td>
          <td>
            <div class="qty-control">
              <button type="button" data-qty="down" data-product="${item.id}">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-qty="up" data-product="${item.id}">+</button>
            </div>
          </td>
          <td>${formatCurrency(item.lineTotal)}</td>
          <td><button type="button" data-remove="${item.id}">Remove</button></td>
        </tr>
      `
    )
    .join('');

  const totals = calculateCartSummary();
  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>${formatCurrency(totals.subtotal)}</span></div>
    <div class="summary-row"><span>Savings</span><span>- ${formatCurrency(totals.savings)}</span></div>
    <div class="summary-row"><span>Delivery fee</span><span>${totals.deliveryFee ? formatCurrency(totals.deliveryFee) : 'Free'}</span></div>
    <div class="summary-row"><span>Loyalty earned</span><span>${totals.loyaltyEarned} pts</span></div>
    <div class="summary-row total"><span>Total</span><span>${formatCurrency(totals.total)}</span></div>
    <label style="display:block;margin-top:1rem;">
      <span>Coupon code</span>
      <input type="text" placeholder="Enter coupon" data-coupon-input style="width:100%;margin-top:0.4rem;padding:0.6rem;border-radius:12px;border:1px solid rgba(17,24,39,0.12);" />
    </label>
    <button class="btn btn-secondary" data-apply-coupon type="button" style="margin-top:0.75rem;width:100%;">Apply coupon</button>
  `;

  const tableEl = document.querySelector('[data-cart-table]');
  if (tableEl && !tableEl.dataset.eventsBound) {
    tableEl.addEventListener('click', (event) => {
      const target = event.target;
      if (target.matches('[data-qty]')) {
        const product = target.getAttribute('data-product');
        const entry = state.cart.find((item) => item.id === product);
        if (!entry) return;
        if (target.dataset.qty === 'up') updateCartQty(product, entry.quantity + 1);
        if (target.dataset.qty === 'down') updateCartQty(product, Math.max(0, entry.quantity - 1));
      }
      if (target.matches('[data-remove]')) {
        removeFromCart(target.dataset.remove);
      }
    });
    tableEl.dataset.eventsBound = 'true';
  }

  const applyCouponBtn = document.querySelector('[data-apply-coupon]');
  if (applyCouponBtn && !applyCouponBtn.dataset.eventsBound) {
    applyCouponBtn.addEventListener('click', () => {
      const input = document.querySelector('[data-coupon-input]');
      const code = input.value.trim().toUpperCase();
      const coupon = coupons.find((item) => item.code === code);
      if (!coupon) return showToast('Coupon not valid');
      const totals = calculateCartSummary();
      if (totals.subtotal < coupon.minimumSpend) {
        showToast(`Spend ${formatCurrency(coupon.minimumSpend)} to use this coupon.`);
        return;
      }
      if (coupon.discountType === 'percentage') {
        showToast(`${coupon.value}% discount applied!`);
      } else if (coupon.discountType === 'free-delivery') {
        showToast('Delivery fee waived for eligible areas.');
      }
      input.value = '';
    });
    applyCouponBtn.dataset.eventsBound = 'true';
  }

  if (!cartPageSubscriptionBound) {
    subscribe(() => {
      renderCartPage();
    });
    cartPageSubscriptionBound = true;
  }
};

const renderCheckoutPage = () => {
  const summary = document.querySelector('[data-checkout-summary]');
  const deliveryFeeEstimate = document.querySelector('[data-delivery-estimate]');
  const totals = calculateCartSummary();
  if (summary) {
    summary.innerHTML = `
      <div class="summary-row"><span>Items</span><span>${formatCurrency(totals.subtotal)}</span></div>
      <div class="summary-row"><span>Savings</span><span>- ${formatCurrency(totals.savings)}</span></div>
      <div class="summary-row"><span>Delivery</span><span>${totals.deliveryFee ? formatCurrency(totals.deliveryFee) : 'Free'}</span></div>
      <div class="summary-row total"><span>Amount due</span><span>${formatCurrency(totals.total)}</span></div>
      <p style="margin-top:1rem;">You will earn <strong>${totals.loyaltyEarned} loyalty points</strong> on this order.</p>
    `;
  }

  document.querySelector('[data-delivery-form]')?.addEventListener('change', (event) => {
    if (event.target.name === 'postcode') {
      const value = event.target.value.trim();
      if (!value) return;
      const fee = value.startsWith('10') ? 1200 : 1800;
      deliveryFeeEstimate.textContent = `Estimated delivery fee: ${formatCurrency(fee)}`;
    }
  });

  document.querySelector('[data-payment-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('Processing payment with Paystack sandbox...');
    setTimeout(() => {
      window.location.href = 'order-confirmation.html?order=OMO' + Date.now().toString().slice(-6);
    }, 1500);
  });
};

const renderAccountPage = () => {
  const loyalty = document.querySelector('[data-loyalty]');
  if (loyalty) loyalty.textContent = `${state.loyaltyBalance.toLocaleString('en-NG')} pts`;
  const orders = document.querySelector('[data-orders]');
  if (orders) {
    orders.innerHTML = `
      <div class="timeline">
        <div class="item"><strong>OMO123456</strong><p>Delivered - 2 days ago</p></div>
        <div class="item"><strong>OMO122998</strong><p>Out for delivery</p></div>
        <div class="item"><strong>OMO120776</strong><p>Completed - 1 week ago</p></div>
      </div>
    `;
  }
};

const initNewsletterForms = () => {
  document.querySelectorAll('[data-newsletter-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      showToast('Thanks! Check your inbox to confirm your subscription.');
      form.reset();
    });
  });
};

const initAddToCartButtons = () => {
  document.body.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-add-cart]');
    if (!btn) return;
    addToCart(btn.dataset.addCart);
  });
};

const initPWA = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  }
};

const initAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-OMOOLA1');
};

const initApp = () => {
  loadCart();
  setupLayout();
  setupSearch();
  initNewsletterForms();
  initAddToCartButtons();
  initPWA();
  initAnalytics();
  renderCartCount();
};

initApp();

if (document.body.dataset.page === 'home') {
  renderHomePage();
}
if (document.body.dataset.page === 'category') {
  renderCategoryPage();
}
if (document.body.dataset.page === 'product') {
  renderProductPage();
}
if (document.body.dataset.page === 'cart') {
  renderCartPage();
}
if (document.body.dataset.page === 'checkout') {
  renderCheckoutPage();
}
if (document.body.dataset.page === 'account') {
  renderAccountPage();
}

subscribe(renderCartCount);
