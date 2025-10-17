// UI helpers for Omoola Supermarket Stores

const drawerSelectors = new Map();

export function initDrawer(triggerSelector, drawerSelector) {
  const trigger = document.querySelector(triggerSelector);
  const drawer = document.querySelector(drawerSelector);
  if (!trigger || !drawer) return;
  const closeBtn = drawer.querySelector('[data-drawer-close]');
  const focusable = drawer.querySelectorAll('a, button, input, select, textarea');
  const firstFocusable = focusable[0];
  const lastFocusable = focusable[focusable.length - 1];

  const openDrawer = () => {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    const previouslyFocused = document.activeElement;
    drawer.dataset.previousFocus = previouslyFocused ? previouslyFocused.id || previouslyFocused.className : '';
    document.body.style.overflow = 'hidden';
    if (firstFocusable) firstFocusable.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    trigger.focus();
  };

  trigger.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer();
      return;
    }
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  });

  drawer.addEventListener('click', (event) => {
    if (event.target === drawer) {
      closeDrawer();
    }
  });

  drawerSelectors.set(drawerSelector, { openDrawer, closeDrawer });
}

export function toggleDrawer(drawerSelector, open = true) {
  const config = drawerSelectors.get(drawerSelector);
  if (!config) return;
  if (open) config.openDrawer();
  else config.closeDrawer();
}

export function initTabs(tablistSelector) {
  document.querySelectorAll(tablistSelector).forEach((tablist) => {
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
    const activateTab = (tab) => {
      tabs.forEach((t) => {
        const isActive = t === tab;
        t.setAttribute('aria-selected', String(isActive));
        t.tabIndex = isActive ? 0 : -1;
      });
      panels.forEach((panel) => panel?.setAttribute('hidden', 'true'));
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel?.removeAttribute('hidden');
    };
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => activateTab(tab));
      tab.addEventListener('keydown', (event) => {
        const currentIndex = tabs.indexOf(tab);
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          const next = tabs[(currentIndex + 1) % tabs.length];
          next.focus();
          activateTab(next);
        }
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          const prev = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
          prev.focus();
          activateTab(prev);
        }
      });
    });
    const defaultTab = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') || tabs[0];
    if (defaultTab) activateTab(defaultTab);
  });
}

export function initAccordion(selector) {
  document.querySelectorAll(selector).forEach((accordion) => {
    accordion.querySelectorAll('[data-accordion-button]').forEach((trigger) => {
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isExpanded));
        panel?.toggleAttribute('hidden');
      });
    });
  });
}

export function showToast(message, variant = 'info') {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast--${variant}`;
  toast.innerHTML = `<strong>${message}</strong>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('is-leaving');
    toast.addEventListener('transitionend', () => toast.remove());
    toast.style.opacity = '0';
  }, 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

export function initTicker(selector) {
  const ticker = document.querySelector(selector);
  if (!ticker) return;
  const list = ticker.querySelector('ul');
  if (!list) return;
  const clone = list.cloneNode(true);
  ticker.appendChild(clone);
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  }).format(amount);
}

export function debounce(fn, delay = 200) {
  let timeout;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn.apply(null, args), delay);
  };
}

export function trapFocus(element) {
  const focusable = element.querySelectorAll('a, button, input, select, textarea, [tabindex="0"]');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  element.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

export function setupCookieBanner() {
  const banner = document.querySelector('[data-cookie-banner]');
  if (!banner) return;
  const accepted = window.localStorage.getItem('omoola:cookies-accepted');
  if (accepted) {
    banner.remove();
    return;
  }
  banner.removeAttribute('hidden');
  const accept = banner.querySelector('button[data-cookie-accept]');
  accept?.addEventListener('click', () => {
    window.localStorage.setItem('omoola:cookies-accepted', 'true');
    banner.remove();
  });
}
