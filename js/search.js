import { products, categories, searchSynonyms } from './data.js';
import { debounce } from './ui.js';

const RECENT_KEY = 'omoola:recent-searches';

function getRecentSearches() {
  try {
    const stored = window.localStorage.getItem(RECENT_KEY);
    if (stored) return JSON.parse(stored);
  } catch (error) {
    console.warn('Search storage error', error);
  }
  return [];
}

function setRecentSearches(terms) {
  try {
    window.localStorage.setItem(RECENT_KEY, JSON.stringify(terms.slice(0, 6)));
  } catch (error) {
    console.warn('Search storage error', error);
  }
}

export function initSearch() {
  const searchForm = document.querySelector('[data-search-form]');
  const input = document.querySelector('[data-search-input]');
  const panel = document.querySelector('[data-search-panel]');
  if (!searchForm || !input || !panel) return;

  const renderPanel = debounce(() => {
    const query = input.value.trim().toLowerCase();
    const synonyms = searchSynonyms[query] || query;
    const matchedProducts = products
      .filter((product) => product.name.toLowerCase().includes(synonyms) || product.slug.includes(synonyms))
      .slice(0, 6);
    const matchedCategories = categories
      .filter((category) => category.name.toLowerCase().includes(query))
      .slice(0, 4);
    const recents = getRecentSearches();

    panel.innerHTML = `
      <div class="card" role="list">
        <h3 class="text-muted" id="search-heading">Quick results</h3>
        <div class="d-grid gap-md mt-md">
          ${matchedProducts
            .map(
              (product) => `
                <a class="d-flex items-center gap-md" role="listitem" href="product.html?id=${product.sku}" data-analytics="select_item">
                  <img src="${product.images[0]}" alt="${product.name}" width="64" height="64" loading="lazy" />
                  <div>
                    <p class="product-card__title">${product.name}</p>
                    <p class="text-muted">${product.unit}</p>
                  </div>
                </a>`
            )
            .join('') || '<p class="text-muted">No direct matches yet. Try another term.</p>'}
        </div>
        <div class="mt-lg">
          <h4 class="text-muted">Categories</h4>
          <div class="chip-group mt-sm">
            ${matchedCategories
              .map((category) => `<a class="chip" href="category.html?slug=${category.id}">${category.name}</a>`)
              .join('') || '<span class="text-muted">No category suggestions yet.</span>'}
          </div>
        </div>
        <div class="mt-lg">
          <h4 class="text-muted">Recent searches</h4>
          <div class="chip-group mt-sm">
            ${recents
              .map((term) => `<button type="button" class="chip" data-search-quick="${term}">${term}</button>`)
              .join('') || '<span class="text-muted">Start exploring Omoola groceries.</span>'}
          </div>
        </div>
        <div class="mt-lg text-right">
          <a class="text-primary" href="category.html?slug=deals" data-search-viewall>View all results</a>
        </div>
      </div>
    `;
    panel.hidden = false;
  }, 150);

  input.addEventListener('input', renderPanel);
  input.addEventListener('focus', renderPanel);

  panel.addEventListener('click', (event) => {
    const target = event.target.closest('[data-search-quick]');
    if (target) {
      input.value = target.dataset.searchQuick;
      renderPanel();
    }
  });

  document.addEventListener('click', (event) => {
    if (!panel.contains(event.target) && !searchForm.contains(event.target)) {
      panel.hidden = true;
    }
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    const recents = getRecentSearches();
    const updated = [query, ...recents.filter((item) => item !== query)];
    setRecentSearches(updated);
    window.location.href = `category.html?search=${encodeURIComponent(query)}`;
  });
}
