import { lgas } from './data.js';
import { getCartItems, clearCart } from './cart.js';
import { products } from './data.js';
import { formatCurrency, showToast } from './ui.js';

export function initCheckout() {
  const checkout = document.querySelector('[data-checkout]');
  if (!checkout) return;
  const steps = Array.from(checkout.querySelectorAll('[data-step]'));
  let currentStep = 0;

  const renderStep = () => {
    steps.forEach((step, index) => {
      step.toggleAttribute('hidden', index !== currentStep);
    });
    checkout.querySelector('[data-step-indicator]').textContent = `Step ${currentStep + 1} of ${steps.length}`;
  };

  checkout.addEventListener('click', (event) => {
    if (event.target.matches('[data-next-step]')) {
      event.preventDefault();
      currentStep = Math.min(steps.length - 1, currentStep + 1);
      renderStep();
    }
    if (event.target.matches('[data-prev-step]')) {
      event.preventDefault();
      currentStep = Math.max(0, currentStep - 1);
      renderStep();
    }
  });

  const lgaSelect = checkout.querySelector('#delivery-lga');
  if (lgaSelect) {
    lgaSelect.innerHTML = '<option value="">Select preferred LGA</option>' + lgas.map((lga) => `<option value="${lga}">${lga}</option>`).join('');
  }

  const summary = checkout.querySelector('[data-checkout-summary]');
  if (summary) {
    const items = getCartItems()
      .map((item) => {
        const product = products.find((entry) => entry.sku === item.sku);
        if (!product) return '';
        return `<li class="d-flex justify-between"><span>${product.name} × ${item.qty}</span><strong>${formatCurrency(product.price * item.qty)}</strong></li>`;
      })
      .join('');
    const subtotal = getCartItems().reduce((sum, item) => {
      const product = products.find((entry) => entry.sku === item.sku);
      return product ? sum + product.price * item.qty : sum;
    }, 0);
    summary.innerHTML = `
      <ul class="d-grid gap-sm" aria-label="Order summary">
        ${items}
      </ul>
      <div class="mt-lg d-grid gap-xs">
        <div class="d-flex justify-between"><span class="text-muted">Subtotal</span><strong>${formatCurrency(subtotal)}</strong></div>
        <div class="d-flex justify-between"><span class="text-muted">Delivery</span><strong>${formatCurrency(subtotal >= 25000 ? 0 : 1500)}</strong></div>
        <div class="d-flex justify-between"><span class="text-muted">Est. total</span><strong>${formatCurrency(subtotal >= 25000 ? subtotal : subtotal + 1500)}</strong></div>
      </div>
    `;
  }

  const paymentButtons = checkout.querySelectorAll('[data-payment-provider]');
  paymentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const provider = button.dataset.paymentProvider;
      showToast(`Redirecting to ${provider} for secure payment`, 'info');
      window.dispatchEvent(new CustomEvent('ga:add_payment_info', { detail: { provider } }));
    });
  });

  const placeOrder = checkout.querySelector('[data-place-order]');
  placeOrder?.addEventListener('click', (event) => {
    event.preventDefault();
    showToast('Order confirmed! Thank you for shopping with Omoola.', 'success');
    window.dispatchEvent(new CustomEvent('ga:purchase'));
    clearCart();
    window.location.href = 'order-confirmation.html';
  });

  renderStep();
}
