import {
  categories,
  products,
  valueProps,
  heroPromos,
  promoBanners,
  blogPosts,
  featuredBrands,
  trustBadges,
  coupons,
  siteContent,
  faqs,
  careerOpenings,
  careerBenefits,
} from './data.js';
import { initDrawer, initTabs, initTicker, setupCookieBanner, formatCurrency, showToast } from './ui.js';
import { initSearch } from './search.js';
import { initCart, getCartItems, renderCartDrawer, addToCart, removeFromCart, clearCart } from './cart.js';
import { initProductPage } from './product.js';
import { initCheckout } from './checkout.js';
import { initPWA } from './pwa.js';

const state = {
  heroIndex: 0,
};

document.addEventListener('DOMContentLoaded', () => {
  initCart();
  initDrawer('[data-cart-trigger]', '[data-cart-drawer]');
  initSearch();
  initTicker('.topbar__ticker');
  setupCookieBanner();
  attachGlobalEvents();
  initPWA();
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const page = document.body.dataset.page;
  switch (page) {
    case 'home':
      renderHome();
      break;
    case 'category':
      renderCategoryPage();
      break;
    case 'product':
      initProductPage();
      break;
    case 'cart':
      renderCartPage();
      break;
    case 'checkout':
      initCheckout();
      break;
    case 'account':
      renderAccountPage();
      break;
    case 'about':
      renderAboutPage();
      break;
    case 'contact':
      renderContactPage();
      break;
    case 'faq':
      renderFAQPage();
      break;
    case 'policies':
      renderPoliciesPage();
      break;
    case 'wishlist':
      renderWishlistPage();
      break;
    case 'deals':
      renderDealsPage();
      break;
    case 'careers':
      renderCareersPage();
      break;
    default:
      break;
  }

  window.dispatchEvent(new CustomEvent('ga:view_item_list', { detail: { page } }));
});

function renderHome() {
  renderHero();
  renderValueProps();
  renderCategoryHighlights();
  renderFeaturedCollections();
  renderPromoSection();
  renderBlogSection();
  renderTrustLogos();
}

function renderHero() {
  const heroContainer = document.querySelector('[data-hero]');
  if (!heroContainer) return;
  const slides = heroPromos
    .map(
      (slide, index) => `
        <div class="hero__slide ${index === state.heroIndex ? 'is-active' : ''}" role="group" aria-roledescription="slide" aria-label="${slide.title}">
          <div class="hero__bg">
            <img src="${slide.image}" alt="${slide.title}" />
          </div>
          <div class="hero__content">
            <h1 class="hero__title">OMOOLA SUPERMARKET STORES</h1>
            <p class="hero__subtitle">${slide.subtitle}</p>
            <div class="hero__actions">
              <a class="btn btn--primary" href="${slide.ctaPrimary.href}">${slide.ctaPrimary.label}</a>
              <a class="btn btn--secondary" href="${slide.ctaSecondary.href}">${slide.ctaSecondary.label}</a>
            </div>
          </div>
        </div>
      `
    )
    .join('');
  const dots = heroPromos
    .map((_, index) => `<button class="hero__dot" data-hero-dot="${index}" aria-label="Go to slide ${index + 1}"></button>`)
    .join('');
  heroContainer.innerHTML = `
    <div class="hero__slides">${slides}</div>
    <div class="hero__dots" role="tablist">${dots}</div>
  `;
  heroContainer.querySelectorAll('.hero__dot').forEach((dot, index) => {
    dot.classList.toggle('is-active', index === state.heroIndex);
    dot.setAttribute('aria-selected', index === state.heroIndex ? 'true' : 'false');
    dot.addEventListener('click', () => {
      state.heroIndex = Number.parseInt(dot.dataset.heroDot, 10);
      renderHero();
    });
  });
}

function renderValueProps() {
  const container = document.querySelector('[data-value-props]');
  if (!container) return;
  container.innerHTML = valueProps
    .map(
      (item) => `
        <article class="card d-grid gap-sm" role="listitem">
          <div class="d-flex gap-sm items-center">
            <img src="${item.icon}" alt="" width="32" height="32">
            <h3>${item.title}</h3>
          </div>
          <p>${item.copy}</p>
        </article>
      `
    )
    .join('');
}

function renderCategoryHighlights() {
  const container = document.querySelector('[data-category-grid]');
  if (!container) return;
  container.innerHTML = categories
    .map(
      (category) => `
        <a href="category.html?slug=${category.id}" class="category-card card" role="listitem">
          <figure class="product-card__media" style="aspect-ratio: 4 / 3;">
            <img src="${category.image}" alt="${category.name} groceries" loading="lazy" />
          </figure>
          <div class="d-grid gap-xs">
            <h3>${category.name}</h3>
            <p class="text-muted">${category.description}</p>
            <span class="tag">Shop now</span>
          </div>
        </a>
      `
    )
    .join('');
}

function renderFeaturedCollections() {
  const collections = [
    {
      id: 'popular',
      title: 'Popular this week',
      products: products.slice(0, 8),
    },
    {
      id: 'new',
      title: 'New arrivals',
      products: products.slice(8, 16),
    },
    {
      id: 'under-1500',
      title: 'Under ₦1,500',
      products: products.filter((product) => product.price <= 1500).slice(0, 12),
    },
  ];
  const container = document.querySelector('[data-featured-collections]');
  if (!container) return;
  container.innerHTML = collections
    .map(
      (collection) => `
        <section class="section" id="${collection.id}">
          <div class="container">
            <header class="section__header">
              <h2>${collection.title}</h2>
              <a class="text-primary" href="category.html?slug=pantry-essentials">View all</a>
            </header>
            <div class="product-grid">
              ${collection.products.map(productCard).join('')}
            </div>
          </div>
        </section>
      `
    )
    .join('');
}

function renderPromoSection() {
  const bannerContainer = document.querySelector('[data-promo-banner]');
  if (bannerContainer) {
    const banner = promoBanners[0];
    bannerContainer.innerHTML = `
      <div class="banner" aria-label="${banner.title}">
        <div class="d-grid gap-sm">
          <span class="tag">Coupon ${coupons[0].code}</span>
          <h2>${banner.title}</h2>
          <p>${banner.copy}</p>
          <a class="btn btn--primary" href="cart.html">${banner.cta}</a>
        </div>
        <img src="${banner.image}" alt="${banner.title}" loading="lazy" />
      </div>
    `;
  }
  const blogBanner = document.querySelector('[data-promo-secondary]');
  if (blogBanner) {
    const banner = promoBanners[1];
    blogBanner.innerHTML = `
      <div class="banner" style="background: linear-gradient(135deg, rgba(31,168,77,0.92), rgba(14,165,233,0.85));">
        <div class="d-grid gap-sm">
          <span class="tag">Loyalty</span>
          <h2>${banner.title}</h2>
          <p>${banner.copy}</p>
          <a class="btn btn--ghost" href="account.html#loyalty">${banner.cta}</a>
        </div>
        <img src="${banner.image}" alt="${banner.title}" loading="lazy" />
      </div>
    `;
  }
}

function renderBlogSection() {
  const container = document.querySelector('[data-blog-list]');
  if (!container) return;
  container.innerHTML = blogPosts
    .slice(0, 3)
    .map(
      (post) => `
        <article class="card d-grid gap-md">
          <figure class="product-card__media" style="aspect-ratio: 16 / 10;">
            <img src="${post.image}" alt="${post.title}" loading="lazy" />
          </figure>
          <div class="d-grid gap-sm">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a class="btn btn--ghost" href="blog/${post.slug}.html">Read More</a>
          </div>
        </article>
      `
    )
    .join('');
}

function renderTrustLogos() {
  const trustContainer = document.querySelector('[data-trust-logos]');
  if (trustContainer) {
    trustContainer.innerHTML = trustBadges
      .map((item) => `<img src="${item.image}" alt="${item.label}" loading="lazy" height="54">`)
      .join('');
  }
  const brandContainer = document.querySelector('[data-brand-logos]');
  if (brandContainer) {
    brandContainer.innerHTML = featuredBrands
      .map((brand) => `<img src="${brand.image}" alt="${brand.label}" loading="lazy" height="48">`)
      .join('');
  }
}

function renderCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const search = params.get('search');
  const category = categories.find((item) => item.id === slug);
  const title = document.querySelector('[data-category-title]');
  if (category && title) {
    title.textContent = category.name;
  } else if (search && title) {
    title.textContent = `Search results for “${search}”`;
  }
  const description = document.querySelector('[data-category-description]');
  if (description) {
    description.textContent = category ? category.description : 'Explore Omoola groceries tailored to your search.';
  }
  const grid = document.querySelector('[data-category-grid]');
  if (grid) {
    let filtered = products;
    if (category) {
      filtered = filtered.filter((product) => product.category === category.id);
    }
    if (search) {
      const query = search.toLowerCase();
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(query) || product.slug.includes(query));
    }
    grid.innerHTML = filtered.map(productCard).join('');
    const count = document.querySelector('[data-category-count]');
    if (count) count.textContent = `${filtered.length} items`;
  }
}

function renderCartPage() {
  const list = document.querySelector('[data-cart-page-items]');
  const summary = document.querySelector('[data-cart-page-summary]');
  if (!list || !summary) return;
  const items = getCartItems();
  if (items.length === 0) {
    list.innerHTML = '<p>Your cart is empty. Discover tasty deals on our homepage.</p>';
    summary.innerHTML = '';
    return;
  }
  list.innerHTML = items
    .map((item) => {
      const product = products.find((entry) => entry.sku === item.sku);
      if (!product) return '';
      return `
        <article class="card d-grid gap-md">
          <div class="d-flex gap-md">
            <img src="${product.images[0]}" alt="${product.name}" width="128" height="128" loading="lazy">
            <div class="d-grid gap-xs">
              <h3>${product.name}</h3>
              <p class="text-muted">${product.unit}</p>
              <p class="price">${formatCurrency(product.price)}</p>
              <div class="qty-stepper">
                <button type="button" data-cart-decrease="${item.sku}"><img src="assets/icons/minus.svg" alt="Decrease" width="20" height="20"></button>
                <input type="number" value="${item.qty}" min="1" aria-label="Quantity for ${product.name}">
                <button type="button" data-cart-increase="${item.sku}"><img src="assets/icons/plus.svg" alt="Increase" width="20" height="20"></button>
              </div>
            </div>
          </div>
          <button class="product-card__wishlist" data-cart-remove="${item.sku}">Remove</button>
        </article>
      `;
    })
    .join('');
  const subtotal = items.reduce((sum, item) => {
    const product = products.find((entry) => entry.sku === item.sku);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  summary.innerHTML = `
    <div class="card d-grid gap-md">
      <div class="d-flex justify-between"><span class="text-muted">Subtotal</span><strong>${formatCurrency(subtotal)}</strong></div>
      <div class="d-flex justify-between"><span class="text-muted">Delivery</span><strong>${formatCurrency(subtotal >= 25000 ? 0 : 1500)}</strong></div>
      <div class="d-flex justify-between"><span class="text-muted">Total</span><strong>${formatCurrency(subtotal >= 25000 ? subtotal : subtotal + 1500)}</strong></div>
      <div class="input-field">
        <label for="coupon">Coupon code</label>
        <input id="coupon" type="text" placeholder="Apply coupon" />
      </div>
      <button class="btn btn--primary" onclick="window.location.href='checkout.html'">Proceed to checkout</button>
    </div>
  `;
  renderCartDrawer();
}

function renderAccountPage() {
  initTabs('[data-account-tabs]');
  const loyalty = document.querySelector('[data-loyalty]');
  if (loyalty) {
    loyalty.innerHTML = `
      <div class="card d-grid gap-sm">
        <h3>Loyalty balance</h3>
        <p>You have <strong>2,450 points</strong>. Redeem for free delivery vouchers and tasting events.</p>
        <div class="chip-group">
          <span class="chip">Bronze tier</span>
          <span class="chip">Spend ₦50,000 to reach Silver</span>
        </div>
      </div>
    `;
  }
}

function renderAboutPage() {
  const target = document.querySelector('[data-about-copy]');
  if (target) target.textContent = siteContent.about;
}

function renderContactPage() {
  const { contact } = siteContent;
  const info = document.querySelector('[data-contact-info]');
  if (!info) return;
  info.innerHTML = `
    <div class="card d-grid gap-sm">
      <div class="d-flex gap-sm"><img src="assets/icons/location.svg" alt="Location" width="24" height="24"><p>${contact.address}</p></div>
      <div class="d-flex gap-sm"><img src="assets/icons/phone.svg" alt="Phone" width="24" height="24"><p>${contact.phone}</p></div>
      <div class="d-flex gap-sm"><img src="assets/icons/whatsapp.svg" alt="WhatsApp" width="24" height="24"><p>${contact.whatsapp}</p></div>
      <div class="d-flex gap-sm"><img src="assets/icons/mail.svg" alt="Email" width="24" height="24"><p>${contact.email}</p></div>
      <div class="d-flex gap-sm"><img src="assets/icons/star.svg" alt="Hours" width="24" height="24"><p>${contact.hours}</p></div>
    </div>
  `;
}

function renderFAQPage() {
  const container = document.querySelector('[data-faq-list]');
  if (!container) return;
  container.innerHTML = faqs
    .map(
      (faq, index) => `
        <div class="accordion__item">
          <button class="accordion__trigger" data-accordion-button aria-expanded="${index === 0}" aria-controls="faq-${index}">
            ${faq.question}
          </button>
          <div id="faq-${index}" class="accordion__panel" ${index === 0 ? '' : 'hidden'}>
            <p>${faq.answer}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderPoliciesPage() {
  const container = document.querySelector('[data-policy-list]');
  if (!container) return;
  container.innerHTML = siteContent.policies
    .map(
      (policy) => `
        <article class="card d-grid gap-sm">
          <h3>${policy.title}</h3>
          <p>${policy.body}</p>
        </article>
      `
    )
    .join('');
}

function renderWishlistPage() {
  const grid = document.querySelector('[data-wishlist-grid]');
  if (!grid) return;
  const curated = products
    .filter((product) => (product.tags && product.tags.includes('Omoola Picks')) || product.discount)
    .slice(0, 12);
  grid.innerHTML = curated.map(productCard).join('');
  const countEl = document.querySelector('[data-wishlist-count]');
  if (countEl) countEl.textContent = curated.length;
  const emptyState = document.querySelector('[data-wishlist-empty]');
  if (emptyState) emptyState.hidden = curated.length > 0;
}

function renderDealsPage() {
  const banner = document.querySelector('[data-deals-banner]');
  if (banner) {
    const highlight =
      promoBanners.find((item) => item.title.toLowerCase().includes('deal')) || promoBanners[0];
    if (highlight) {
      banner.innerHTML = `
        <div class="d-flex gap-md flex-wrap items-center">
          <figure class="product-card__media" style="max-width: 320px;">
            <img src="${highlight.image}" alt="${highlight.title}" loading="lazy">
          </figure>
          <div class="d-grid gap-sm">
            <h2>${highlight.title}</h2>
            <p>${highlight.copy}</p>
            <a class="btn btn--primary" href="checkout.html">${highlight.cta}</a>
          </div>
        </div>
      `;
    }
  }

  const couponList = document.querySelector('[data-coupon-list]');
  if (couponList) {
    couponList.innerHTML = coupons.map(couponCard).join('');
  }

  const deals = products.filter((product) => product.discount && product.discount > 0);
  const grid = document.querySelector('[data-deals-grid]');
  const countEl = document.querySelector('[data-deals-count]');
  const emptyState = document.querySelector('[data-deals-empty]');
  if (grid) {
    if (deals.length) {
      grid.innerHTML = deals.map(productCard).join('');
      if (emptyState) emptyState.hidden = true;
    } else {
      grid.innerHTML = '';
      if (emptyState) emptyState.hidden = false;
    }
  }
  if (countEl) countEl.textContent = deals.length;
}

function renderCareersPage() {
  const list = document.querySelector('[data-careers-list]');
  const emptyState = document.querySelector('[data-careers-empty]');
  const countEl = document.querySelector('[data-careers-count]');
  if (list) {
    if (careerOpenings.length) {
      list.innerHTML = careerOpenings.map(careerCard).join('');
      if (emptyState) emptyState.hidden = true;
    } else {
      list.innerHTML = '';
      if (emptyState) emptyState.hidden = false;
    }
  }
  if (countEl) countEl.textContent = careerOpenings.length;

  const benefitsList = document.querySelector('[data-benefits-list]');
  if (benefitsList) {
    benefitsList.innerHTML = careerBenefits
      .map(
        (benefit) => `
          <article class="card d-grid gap-sm" role="listitem">
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
          </article>
        `
      )
      .join('');
  }
}

function productCard(product) {
  return `
    <article class="product-card" data-product-sku="${product.sku}">
      <div class="product-card__media">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
        ${product.discount ? `<span class="tag" style="position:absolute;top:12px;left:12px;">-${product.discount}%</span>` : ''}
      </div>
      <div class="d-grid gap-sm">
        <h3 class="product-card__title">${product.name}</h3>
        <p class="text-muted">${product.unit}</p>
        <div class="product-card__meta">
          <span class="price">${formatCurrency(product.price)}</span>
          <span class="rating"><img src="assets/icons/star.svg" alt="" width="16" height="16">${product.rating.toFixed(1)}</span>
        </div>
        <div class="product-card__actions">
          <div class="qty-stepper" aria-label="Quantity selector">
            <button type="button" data-qty-control="down" data-qty-target="${product.sku}"><img src="assets/icons/minus.svg" alt="Decrease" width="18" height="18"></button>
            <input type="number" value="1" min="1" data-qty-input="${product.sku}" aria-label="Quantity for ${product.name}">
            <button type="button" data-qty-control="up" data-qty-target="${product.sku}"><img src="assets/icons/plus.svg" alt="Increase" width="18" height="18"></button>
          </div>
          <button class="btn btn--primary" data-add-to-cart="${product.sku}">Add</button>
        </div>
      </div>
    </article>
  `;
}

function couponCard(coupon) {
  const valueText =
    coupon.discountType === 'percentage'
      ? `${coupon.value}% off`
      : `${formatCurrency(coupon.value)} off`;
  const expiry = coupon.expires
    ? new Date(coupon.expires).toLocaleDateString('en-NG', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'No expiry';
  const minSpend = coupon.minSpend ? formatCurrency(coupon.minSpend) : '₦0';
  return `
    <article class="card d-grid gap-sm" role="listitem">
      <div class="d-flex justify-between items-center flex-wrap gap-sm">
        <span class="tag">${coupon.code}</span>
        <span class="text-muted">${valueText}</span>
      </div>
      <h3>${coupon.title}</h3>
      <p>${coupon.description}</p>
      <p class="text-muted">Min spend ${minSpend} • Expires ${expiry}</p>
    </article>
  `;
}

function careerCard(career) {
  const responsibilities = career.responsibilities
    ? career.responsibilities
        .map((item) => `<li>${item}</li>`)
        .join('')
    : '';
  const subject = encodeURIComponent(`Application: ${career.title}`);
  return `
    <article class="card d-grid gap-sm" role="listitem">
      <div class="d-flex justify-between items-center flex-wrap gap-sm">
        <span class="tag">${career.team}</span>
        <span class="text-muted">${career.location} • ${career.type}</span>
      </div>
      <h3>${career.title}</h3>
      <p>${career.summary}</p>
      ${responsibilities ? `<ul class="d-grid gap-xs" role="list">${responsibilities}</ul>` : ''}
      <a class="btn btn--primary" href="mailto:careers@omoola.ng?subject=${subject}">Apply now</a>
    </article>
  `;
}

function attachGlobalEvents() {
  document.body.addEventListener('click', (event) => {
    const qtyControl = event.target.closest('[data-qty-control]');
    if (qtyControl) {
      const target = qtyControl.dataset.qtyTarget;
      const input = document.querySelector(`[data-qty-input="${target}"]`);
      if (!input) return;
      const value = Number.parseInt(input.value, 10) || 1;
      input.value = qtyControl.dataset.qtyControl === 'up' ? value + 1 : Math.max(1, value - 1);
    }
    const wishlist = event.target.closest('[data-wishlist]');
    if (wishlist) {
      event.preventDefault();
      showToast('Saved to wishlist', 'info');
    }
  });

  window.addEventListener('ga:add_to_cart', (event) => {
    console.log('GA4 add_to_cart', event.detail);
  });
  window.addEventListener('ga:add_payment_info', (event) => {
    console.log('GA4 add_payment_info', event.detail);
  });
  window.addEventListener('ga:purchase', () => {
    console.log('GA4 purchase event');
  });
}

window.omoola = {
  addToCart,
  removeFromCart,
  clearCart,
};
