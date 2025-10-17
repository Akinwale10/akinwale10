import { products } from './data.js';
import { addToCart } from './cart.js';
import { formatCurrency, initTabs, showToast } from './ui.js';

export function initProductPage() {
  const productContainer = document.querySelector('[data-product-detail]');
  if (!productContainer) return;
  const params = new URLSearchParams(window.location.search);
  const sku = params.get('id');
  const product = products.find((item) => item.sku === sku) || products[0];
  renderProduct(product, productContainer);
  initTabs('[data-product-tabs]');
}

function renderProduct(product, container) {
  container.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-2xl);">
          <div class="card d-grid gap-lg">
            <div class="d-grid gap-sm" data-product-gallery>
              ${product.images
                .map(
                  (image, index) => `
                    <figure class="product-card__media">
                      <img src="${image}" alt="${product.name} view ${index + 1}" loading="lazy" />
                    </figure>
                  `
                )
                .join('')}
            </div>
            <div class="d-flex gap-sm flex-wrap">
              <span class="badge badge--success">Rating ${product.rating.toFixed(1)}</span>
              <span class="badge badge--accent">${product.inStock ? 'In Stock' : 'Back Soon'}</span>
            </div>
          </div>
          <div class="d-grid gap-lg">
            <header class="d-grid gap-sm">
              <nav class="breadcrumbs" aria-label="Breadcrumb">
                <a href="index.html">Home</a>
                <img src="assets/icons/chevron-right.svg" alt="" width="16" height="16">
                <a href="category.html?slug=${product.category}">Category</a>
                <img src="assets/icons/chevron-right.svg" alt="" width="16" height="16">
                <span aria-current="page">${product.name}</span>
              </nav>
              <h1>${product.name}</h1>
              <p class="text-muted">${product.shortDescription}</p>
              <div class="d-flex gap-md items-center">
                <p class="price">${formatCurrency(product.price)}</p>
                <p class="text-muted">${product.unit}</p>
              </div>
            </header>
            <div class="d-grid gap-md">
              <label class="text-muted" for="qty">Quantity</label>
              <div class="qty-stepper">
                <button type="button" data-qty-decrease><img src="assets/icons/minus.svg" alt="Decrease" width="20" height="20"></button>
                <input type="number" id="qty" min="1" value="1" data-qty-input />
                <button type="button" data-qty-increase><img src="assets/icons/plus.svg" alt="Increase" width="20" height="20"></button>
              </div>
              <div class="d-flex gap-sm flex-wrap">
                <button class="btn btn--primary" data-add-product="${product.sku}">Add to Cart</button>
                <button class="btn btn--ghost" data-buy-now="${product.sku}">Buy Now</button>
              </div>
              <div class="card d-grid gap-sm">
                <h3>Key Highlights</h3>
                <table class="table">
                  <tbody>
                    <tr><th scope="row">Freshness</th><td>${product.highlights.freshnessDate}</td></tr>
                    <tr><th scope="row">Origin</th><td>${product.highlights.origin}</td></tr>
                    <tr><th scope="row">Storage</th><td>${product.highlights.storage}</td></tr>
                    <tr><th scope="row">Allergens</th><td>${product.highlights.allergens}</td></tr>
                    <tr><th scope="row">Nutrition</th><td>${product.highlights.nutrition}</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="card d-grid gap-sm">
                <h3>Delivery & Returns</h3>
                <p>Enter your Lagos postcode to see delivery ETA.</p>
                <div class="input-field">
                  <label for="postcode">Delivery area</label>
                  <input id="postcode" type="text" placeholder="e.g. Lekki Phase 1" />
                </div>
                <p class="text-muted">Free delivery from ₦25,000. Returns accepted within 24hrs of delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" data-product-tabs>
      <div class="container">
        <div class="tabs">
          <div role="tablist" class="tablist" aria-label="Product details">
            <button role="tab" aria-controls="panel-description" aria-selected="true">Description</button>
            <button role="tab" aria-controls="panel-nutrition" aria-selected="false">Nutrition</button>
            <button role="tab" aria-controls="panel-reviews" aria-selected="false">Reviews</button>
          </div>
          <div id="panel-description" role="tabpanel" class="tabs__panel">
            <p>${product.description}</p>
          </div>
          <div id="panel-nutrition" role="tabpanel" class="tabs__panel" hidden>
            <p>${product.highlights.nutrition}. Perfect for balanced meals across Nigerian cuisines.</p>
          </div>
          <div id="panel-reviews" role="tabpanel" class="tabs__panel" hidden>
            <div class="d-grid gap-md">
              <p class="text-muted">Reviews are curated by the Omoola team to guarantee authenticity.</p>
              <article class="card d-grid gap-sm">
                <h4>Adaobi A.</h4>
                <p>“Always fresh and carefully packaged. Delivery rider was polite and on time.”</p>
              </article>
              <article class="card d-grid gap-sm">
                <h4>Kunle O.</h4>
                <p>“Great value for money. I love the freshness guarantee Omoola provides.”</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="related">
      <div class="container">
        <header class="section__header">
          <h2>Related Groceries</h2>
          <a class="text-primary" href="category.html?slug=${product.category}">View all</a>
        </header>
        <div class="product-grid">
          ${product.relatedSkus
            .map((sku) => products.find((item) => item.sku === sku))
            .filter(Boolean)
            .map((related) => productCard(related))
            .join('')}
        </div>
      </div>
    </section>
  `;
  const qtyInput = container.querySelector('[data-qty-input]');
  container.querySelector('[data-qty-decrease]')?.addEventListener('click', () => {
    qtyInput.value = Math.max(1, Number.parseInt(qtyInput.value, 10) - 1);
  });
  container.querySelector('[data-qty-increase]')?.addEventListener('click', () => {
    qtyInput.value = Number.parseInt(qtyInput.value, 10) + 1;
  });
  container.querySelector('[data-add-product]')?.addEventListener('click', (event) => {
    const sku = event.currentTarget.getAttribute('data-add-product');
    addToCart(sku, Number.parseInt(qtyInput.value, 10) || 1);
  });
  container.querySelector('[data-buy-now]')?.addEventListener('click', (event) => {
    const sku = event.currentTarget.getAttribute('data-buy-now');
    addToCart(sku, Number.parseInt(qtyInput.value, 10) || 1);
    showToast('Great choice! Let’s checkout now.', 'info');
    window.location.href = 'checkout.html';
  });
}

function productCard(product) {
  if (!product) return '';
  return `
    <article class="product-card">
      <div class="product-card__media">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="d-grid gap-sm">
        <h3 class="product-card__title">${product.name}</h3>
        <div class="product-card__meta">
          <span class="price">${formatCurrency(product.price)}</span>
          <span class="text-muted">${product.unit}</span>
        </div>
        <div class="product-card__actions">
          <button class="btn btn--primary" data-add-to-cart="${product.sku}">Add</button>
          <button class="product-card__wishlist" aria-label="Wishlist ${product.name}">
            <img src="assets/icons/heart.svg" alt="" width="20" height="20" />
          </button>
        </div>
      </div>
    </article>
  `;
}
