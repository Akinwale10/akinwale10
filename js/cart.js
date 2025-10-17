import { products } from './data.js';
import { formatCurrency, showToast } from './ui.js';

const CART_KEY = 'omoola:cart';

function loadCart() {
  try {
    const stored = window.localStorage.getItem(CART_KEY);
    if (stored) return JSON.parse(stored);
  } catch (error) {
    console.warn('Cart storage error', error);
  }
  return { items: [] };
}

function saveCart(cart) {
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn('Cart storage error', error);
  }
}

function findProduct(sku) {
  return products.find((product) => product.sku === sku);
}

export function initCart() {
  const cart = loadCart();
  renderCartCount(cart.items.reduce((sum, item) => sum + item.qty, 0));
  bindCartButtons();
  renderCartDrawer();
}

export function addToCart(sku, quantity = 1) {
  const cart = loadCart();
  const product = findProduct(sku);
  if (!product) return;
  const existing = cart.items.find((item) => item.sku === sku);
  if (existing) existing.qty += quantity;
  else cart.items.push({ sku, qty: quantity });
  saveCart(cart);
  renderCartCount(cart.items.reduce((sum, item) => sum + item.qty, 0));
  renderCartDrawer();
  showToast(`${product.name} added to cart`, 'success');
  window.dispatchEvent(new CustomEvent('ga:add_to_cart', { detail: { sku, qty: quantity } }));
}

export function updateQuantity(sku, qty) {
  const cart = loadCart();
  const item = cart.items.find((entry) => entry.sku === sku);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
  renderCartCount(cart.items.reduce((sum, i) => sum + i.qty, 0));
  renderCartDrawer();
}

export function removeFromCart(sku) {
  const cart = loadCart();
  cart.items = cart.items.filter((item) => item.sku !== sku);
  saveCart(cart);
  renderCartCount(cart.items.reduce((sum, i) => sum + i.qty, 0));
  renderCartDrawer();
}

function renderCartCount(count) {
  const badge = document.querySelector('[data-cart-count]');
  if (badge) badge.textContent = count;
}

function bindCartButtons() {
  document.body.addEventListener('click', (event) => {
    const addBtn = event.target.closest('[data-add-to-cart]');
    if (addBtn) {
      event.preventDefault();
      const sku = addBtn.dataset.addToCart;
      const qtyInput = document.querySelector(`[data-qty-input="${sku}"]`);
      const qty = qtyInput ? Number.parseInt(qtyInput.value, 10) || 1 : 1;
      addToCart(sku, qty);
    }
    const removeBtn = event.target.closest('[data-cart-remove]');
    if (removeBtn) {
      event.preventDefault();
      removeFromCart(removeBtn.dataset.cartRemove);
    }
    const increaseBtn = event.target.closest('[data-cart-increase]');
    if (increaseBtn) {
      const sku = increaseBtn.dataset.cartIncrease;
      const cart = loadCart();
      const item = cart.items.find((entry) => entry.sku === sku);
      if (!item) return;
      item.qty += 1;
      saveCart(cart);
      renderCartDrawer();
      renderCartCount(cart.items.reduce((sum, i) => sum + i.qty, 0));
    }
    const decreaseBtn = event.target.closest('[data-cart-decrease]');
    if (decreaseBtn) {
      const sku = decreaseBtn.dataset.cartDecrease;
      const cart = loadCart();
      const item = cart.items.find((entry) => entry.sku === sku);
      if (!item) return;
      item.qty = Math.max(1, item.qty - 1);
      saveCart(cart);
      renderCartDrawer();
      renderCartCount(cart.items.reduce((sum, i) => sum + i.qty, 0));
    }
  });
  document.body.addEventListener('change', (event) => {
    const qtyInput = event.target.closest('[data-cart-qty]');
    if (qtyInput) {
      const sku = qtyInput.dataset.cartQty;
      updateQuantity(sku, Number.parseInt(qtyInput.value, 10) || 1);
    }
  });
}

export function renderCartDrawer() {
  const drawer = document.querySelector('[data-cart-drawer]');
  if (!drawer) return;
  const cart = loadCart();
  const items = cart.items.map((item) => {
    const product = findProduct(item.sku);
    if (!product) return '';
    const lineTotal = product.price * item.qty;
    return `
      <article class="d-grid gap-sm">
        <div class="d-flex gap-md">
          <img src="${product.images[0]}" alt="${product.name}" width="96" height="96" loading="lazy" />
          <div class="d-grid gap-xs">
            <h4>${product.name}</h4>
            <p class="text-muted">${product.unit}</p>
            <p class="text-primary">${formatCurrency(product.price)}</p>
            <div class="qty-stepper">
              <button type="button" data-cart-decrease="${item.sku}"><img src="assets/icons/minus.svg" alt="Decrease quantity" width="20" height="20"></button>
              <input type="number" min="1" value="${item.qty}" aria-label="Quantity for ${product.name}" data-cart-qty="${item.sku}" />
              <button type="button" data-cart-increase="${item.sku}"><img src="assets/icons/plus.svg" alt="Increase quantity" width="20" height="20"></button>
            </div>
          </div>
          <button class="product-card__wishlist" data-cart-remove="${item.sku}" aria-label="Remove ${product.name} from cart">
            <img src="assets/icons/close.svg" alt="Remove" width="18" height="18">
          </button>
        </div>
        <p class="text-right text-muted">Line total: <strong>${formatCurrency(lineTotal)}</strong></p>
      </article>
    `;
  });
  const subtotal = cart.items.reduce((sum, item) => {
    const product = findProduct(item.sku);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  drawer.querySelector('[data-cart-items]').innerHTML = items.join('') || '<p>Your cart is feeling light. Start shopping!</p>';
  drawer.querySelector('[data-cart-subtotal]').textContent = formatCurrency(subtotal);
  drawer.querySelector('[data-cart-delivery]').textContent = formatCurrency(subtotal >= 25000 ? 0 : 1500);
  drawer.querySelector('[data-cart-total]').textContent = formatCurrency(subtotal >= 25000 ? subtotal : subtotal + 1500);
}

export function getCartItems() {
  return loadCart().items;
}

export function clearCart() {
  saveCart({ items: [] });
  renderCartDrawer();
  renderCartCount(0);
}
