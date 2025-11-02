/* ========================================================================
   B2D KITCHEN - JavaScript Application
   Complete application logic for B2D Kitchen homepage
   ======================================================================== */

// ========================================================================
// CONFIGURATION & CONSTANTS
// ========================================================================

// WhatsApp Configuration
const WHATSAPP_NUMBER = "2340000000000"; // TODO: Replace with actual WhatsApp number

// Firebase Configuration
// TODO: Replace with your Firebase credentials
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Menu Data - Full seed data as specified
const MENU = [
  // =========================
  // BREAKFAST CLASSICS
  // =========================
  {id:"bf-01",cat:"Breakfast",name:"Full Nigerian Breakfast",price:3500,desc:"Eggs, sausages, baked beans, fried plantain, toast.",image:"https://res.cloudinary.com/demo/image/upload/v1/breakfast_full.jpg",allergens:["egg","gluten"],spice:"none"},
  {id:"bf-02",cat:"Breakfast",name:"Akara & Pap",price:1800,desc:"Crispy bean cakes with warm pap (ogi).",image:"https://res.cloudinary.com/demo/image/upload/v1/akara_pap.jpg",allergens:["none"],spice:"none"},
  {id:"bf-03",cat:"Breakfast",name:"Yam & Egg Sauce",price:2200,desc:"Boiled yam with rich tomato egg sauce.",image:"https://res.cloudinary.com/demo/image/upload/v1/yam_egg.jpg",allergens:["egg"],spice:"mild"},
  {id:"bf-04",cat:"Breakfast",name:"Moi-Moi (Bean Pudding)",price:1500,desc:"Steamed, protein-packed bean pudding.",image:"https://res.cloudinary.com/demo/image/upload/v1/moimoi.jpg",allergens:["none"],spice:"none"},
  {id:"bf-05",cat:"Breakfast",name:"Pancakes & Syrup",price:1900,desc:"Fluffy pancakes, syrup, butter.",image:"https://res.cloudinary.com/demo/image/upload/v1/pancakes.jpg",allergens:["gluten","dairy","egg"],spice:"none"},

  // =========================
  // SWALLOW & SOUPS
  // =========================
  {id:"sw-01",cat:"Swallow & Soups",name:"Semo with Egusi Soup",price:3000,desc:"Melon seed soup with beef & stockfish.",image:"https://res.cloudinary.com/demo/image/upload/v1/semo_egusi.jpg",allergens:["fish"],spice:"medium"},
  {id:"sw-02",cat:"Swallow & Soups",name:"Amala with Ewedu & Gbegiri",price:3200,desc:"Yam flour swallow with jute & bean soup trio.",image:"https://res.cloudinary.com/demo/image/upload/v1/amala_ewedu_gbegiri.jpg",allergens:["none"],spice:"mild"},
  {id:"sw-03",cat:"Swallow & Soups",name:"Pounded Yam with Egusi",price:3500,desc:"Classic combo, hearty and satisfying.",image:"https://res.cloudinary.com/demo/image/upload/v1/pounded_yam_egusi.jpg",allergens:["fish"],spice:"medium"},
  {id:"sw-04",cat:"Swallow & Soups",name:"Efo Riro with Beef",price:3000,desc:"Spinach stew with assorted meats.",image:"https://res.cloudinary.com/demo/image/upload/v1/efo_riro.jpg",allergens:["fish"],spice:"hot"},
  {id:"sw-05",cat:"Swallow & Soups",name:"Okro Soup with Fish",price:2900,desc:"Fresh okro in rich seafood broth.",image:"https://res.cloudinary.com/demo/image/upload/v1/okro.jpg",allergens:["fish"],spice:"mild"},

  // =========================
  // RICE DISHES
  // =========================
  {id:"rc-01",cat:"Rice Dishes",name:"Jollof Rice with Chicken",price:2800,desc:"Smoky party jollof with grilled chicken.",image:"https://res.cloudinary.com/demo/image/upload/v1/jollof_chicken.jpg",allergens:["none"],spice:"medium"},
  {id:"rc-02",cat:"Rice Dishes",name:"Fried Rice with Shrimps",price:3200,desc:"Vibrant veg & shrimp fried rice.",image:"https://res.cloudinary.com/demo/image/upload/v1/fried_rice_shrimp.jpg",allergens:["shellfish"],spice:"mild"},
  {id:"rc-03",cat:"Rice Dishes",name:"Coconut Rice",price:2600,desc:"Fragrant coconut-infused rice.",image:"https://res.cloudinary.com/demo/image/upload/v1/coconut_rice.jpg",allergens:["none"],spice:"mild"},
  {id:"rc-04",cat:"Rice Dishes",name:"Ofada Rice & Ayamase",price:3600,desc:"Local rice with spicy green 'designer' stew.",image:"https://res.cloudinary.com/demo/image/upload/v1/ofada_ayamase.jpg",allergens:["fish"],spice:"hot"},

  // =========================
  // PASTA & NOODLES
  // =========================
  {id:"ps-01",cat:"Pasta & Noodles",name:"Jollof Spaghetti & Chicken",price:2800,desc:"Tomato-rich spaghetti with grilled chicken.",image:"https://res.cloudinary.com/demo/image/upload/v1/spag_jollof.jpg",allergens:["gluten"],spice:"medium"},
  {id:"ps-02",cat:"Pasta & Noodles",name:"Stir-Fry Noodles (Beef/Chicken)",price:2700,desc:"Wok-tossed noodles, mixed veg.",image:"https://res.cloudinary.com/demo/image/upload/v1/noodles_stirfry.jpg",allergens:["gluten","soy"],spice:"mild"},

  // =========================
  // PROTEINS & GRILLS
  // =========================
  {id:"pg-01",cat:"Proteins & Grills",name:"Grilled Chicken (Quarter)",price:2500,desc:"Flame-grilled, juicy, spiced.",image:"https://res.cloudinary.com/demo/image/upload/v1/grilled_chicken.jpg",allergens:["none"],spice:"medium"},
  {id:"pg-02",cat:"Proteins & Grills",name:"Turkey Wings",price:3200,desc:"Smoky & tender wings.",image:"https://res.cloudinary.com/demo/image/upload/v1/turkey_wings.jpg",allergens:["none"],spice:"medium"},
  {id:"pg-03",cat:"Proteins & Grills",name:"Suya (Beef/Chicken)",price:2200,desc:"Street-style spicy skewers, onions & tomatoes.",image:"https://res.cloudinary.com/demo/image/upload/v1/suya.jpg",allergens:["none"],spice:"hot"},
  {id:"pg-04",cat:"Proteins & Grills",name:"Assorted Beef",price:2300,desc:"Chef's mix, peppered to perfection.",image:"https://res.cloudinary.com/demo/image/upload/v1/assorted.jpg",allergens:["none"],spice:"hot"},

  // =========================
  // PASTRIES & SNACKS
  // =========================
  {id:"sn-01",cat:"Pastries & Snacks",name:"Meat Pie",price:700,desc:"Buttery crust, savoury filling.",image:"https://res.cloudinary.com/demo/image/upload/v1/meat_pie.jpg",allergens:["gluten","dairy"],spice:"none"},
  {id:"sn-02",cat:"Pastries & Snacks",name:"Chicken Pie",price:800,desc:"Creamy chicken & veg.",image:"https://res.cloudinary.com/demo/image/upload/v1/chicken_pie.jpg",allergens:["gluten","dairy"],spice:"none"},
  {id:"sn-03",cat:"Pastries & Snacks",name:"Puff-Puff (6pcs)",price:600,desc:"Golden, airy bites.",image:"https://res.cloudinary.com/demo/image/upload/v1/puffpuff.jpg",allergens:["gluten"],spice:"none"},
  {id:"sn-04",cat:"Pastries & Snacks",name:"Moi-Moi Wrap",price:1500,desc:"Steamed bean pudding on-the-go.",image:"https://res.cloudinary.com/demo/image/upload/v1/moimoi_wrap.jpg",allergens:["none"],spice:"none"},

  // =========================
  // SIDES & EXTRAS
  // =========================
  {id:"sd-01",cat:"Sides & Extras",name:"Fried Plantain (Dodo)",price:900,desc:"Sweet & golden.",image:"https://res.cloudinary.com/demo/image/upload/v1/dodo.jpg",allergens:["none"],spice:"none"},
  {id:"sd-02",cat:"Sides & Extras",name:"Coleslaw",price:700,desc:"Creamy crunch.",image:"https://res.cloudinary.com/demo/image/upload/v1/coleslaw.jpg",allergens:["dairy"],spice:"none"},
  {id:"sd-03",cat:"Sides & Extras",name:"Salad Bowl",price:1200,desc:"Fresh greens & vinaigrette.",image:"https://res.cloudinary.com/demo/image/upload/v1/salad.jpg",allergens:["none"],spice:"none"},
  {id:"sd-04",cat:"Sides & Extras",name:"Jollof Scoop (Side)",price:1000,desc:"Extra party jollof.",image:"https://res.cloudinary.com/demo/image/upload/v1/jollof_side.jpg",allergens:["none"],spice:"mild"},

  // =========================
  // DRINKS & SMOOTHIES
  // =========================
  {id:"dr-01",cat:"Drinks",name:"Zobo",price:800,desc:"Hibiscus refresher.",image:"https://res.cloudinary.com/demo/image/upload/v1/zobo.jpg",allergens:["none"],spice:"none"},
  {id:"dr-02",cat:"Drinks",name:"Chapman",price:1200,desc:"Citrus & bitters mocktail.",image:"https://res.cloudinary.com/demo/image/upload/v1/chapman.jpg",allergens:["none"],spice:"none"},
  {id:"dr-03",cat:"Drinks",name:"Fresh Juice (Pineapple/Orange)",price:1500,desc:"Pressed & chilled.",image:"https://res.cloudinary.com/demo/image/upload/v1/juice.jpg",allergens:["none"],spice:"none"},
  {id:"dr-04",cat:"Drinks",name:"Bottled Water",price:400,desc:"Still water.",image:"https://res.cloudinary.com/demo/image/upload/v1/water.jpg",allergens:["none"],spice:"none"},

  // =========================
  // COMBOS / VALUE MEALS
  // =========================
  {id:"cb-01",cat:"Combos",name:"Jollof + Grilled Chicken + Drink",price:3800,desc:"Value plate & beverage.",image:"https://res.cloudinary.com/demo/image/upload/v1/combo_jollof_chicken.jpg",allergens:["none"],spice:"mild"},
  {id:"cb-02",cat:"Combos",name:"Fried Rice + Turkey Wing + Drink",price:4200,desc:"Weekend favourite set.",image:"https://res.cloudinary.com/demo/image/upload/v1/combo_fried_turkey.jpg",allergens:["shellfish"],spice:"mild"}
];

// Fallback data for showcase/gallery
const SHOWCASE_MEDIA = [
  {type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase1.jpg', alt: 'Kitchen view'},
  {type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase2.jpg', alt: 'Fresh ingredients'},
  {type: 'video', url: 'https://res.cloudinary.com/demo/video/upload/v1/cooking.mp4', alt: 'Cooking process'},
  {type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase3.jpg', alt: 'Plated dish'},
  {type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase4.jpg', alt: 'Dining area'},
  {type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/showcase5.jpg', alt: 'Team at work'}
];

const GALLERY_IMAGES = [
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery1.jpg', alt: 'Jollof rice'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery2.jpg', alt: 'Grilled chicken'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery3.jpg', alt: 'Suya platter'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery4.jpg', alt: 'Fresh vegetables'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery5.jpg', alt: 'Kitchen setup'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery6.jpg', alt: 'Drinks selection'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery7.jpg', alt: 'Meat pies'},
  {url: 'https://res.cloudinary.com/demo/image/upload/v1/gallery8.jpg', alt: 'Happy customers'}
];

const TESTIMONIALS = [
  {name: 'Adebayo Oluwaseun', rating: 5, text: 'Best jollof rice in Lagos! The taste is consistently amazing and delivery is always on time. B2D Kitchen has become my go-to for Nigerian food.'},
  {name: 'Chioma Nwankwo', rating: 5, text: 'The hygiene standards here are impressive. You can tell they take food safety seriously. Plus, the suya is absolutely delicious!'},
  {name: 'Ibrahim Musa', rating: 5, text: 'As someone who values halal options, I appreciate B2D Kitchen. The food is fresh, tasty, and they understand our dietary requirements.'},
  {name: 'Funmi Ajayi', rating: 5, text: '24/7 delivery is a lifesaver! Had a late-night craving and they delivered hot, fresh food within 30 minutes. Highly recommended!'}
];

// ========================================================================
// STATE MANAGEMENT
// ========================================================================

let db = null;
let menuItems = [...MENU];
let cart = [];
let currentFilter = 'all';
let searchQuery = '';

// ========================================================================
// FIREBASE INITIALIZATION
// ========================================================================

function initFirebase() {
  try {
    if (typeof firebase !== 'undefined' && FIREBASE_CONFIG.apiKey !== 'YOUR_API_KEY') {
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.firestore();
      console.log('Firebase initialized successfully');
      loadFirestoreData();
    } else {
      console.log('Firebase not configured, using local data');
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

// ========================================================================
// FIRESTORE DATA LOADING
// ========================================================================

async function loadFirestoreData() {
  if (!db) return;
  
  try {
    // Load menu items from Firestore
    const menuSnapshot = await db.collection('menu').get();
    if (!menuSnapshot.empty) {
      menuItems = menuSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
      renderMenu();
    }
  } catch (error) {
    console.error('Error loading menu from Firestore:', error);
  }
  
  try {
    // Load testimonials from Firestore
    const testimonialsSnapshot = await db.collection('testimonials').get();
    if (!testimonialsSnapshot.empty) {
      const firestoreTestimonials = testimonialsSnapshot.docs.map(doc => doc.data());
      renderTestimonials(firestoreTestimonials);
    } else {
      renderTestimonials(TESTIMONIALS);
    }
  } catch (error) {
    console.error('Error loading testimonials:', error);
    renderTestimonials(TESTIMONIALS);
  }
  
  try {
    // Load media from Firestore
    const mediaSnapshot = await db.collection('media').get();
    if (!mediaSnapshot.empty) {
      const firestoreMedia = mediaSnapshot.docs.map(doc => doc.data());
      renderShowcase(firestoreMedia);
    } else {
      renderShowcase(SHOWCASE_MEDIA);
    }
  } catch (error) {
    console.error('Error loading media:', error);
    renderShowcase(SHOWCASE_MEDIA);
  }
}

// ========================================================================
// UTILITY FUNCTIONS
// ========================================================================

function formatCurrency(amount) {
  return `₦${amount.toLocaleString()}`;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastContent = document.getElementById('toastContent');
  
  toast.className = `toast toast--${type}`;
  toastContent.textContent = message;
  toast.style.display = 'block';
  
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.getElementById('header').offsetHeight;
    const targetPosition = section.offsetTop - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// ========================================================================
// HEADER & NAVIGATION
// ========================================================================

function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  // Sticky header with shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
  });
  
  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
  
  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      
      // Close mobile menu
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
      
      // Scroll to section
      scrollToSection(targetId);
    });
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY + 200;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ========================================================================
// MENU FUNCTIONALITY
// ========================================================================

function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  const noResults = document.getElementById('noResults');
  
  // Filter menu items
  let filteredItems = menuItems;
  
  if (currentFilter !== 'all') {
    filteredItems = filteredItems.filter(item => item.cat === currentFilter);
  }
  
  if (searchQuery) {
    filteredItems = filteredItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Show/hide no results message
  if (filteredItems.length === 0) {
    menuGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  } else {
    noResults.style.display = 'none';
  }
  
  // Render menu cards
  menuGrid.innerHTML = filteredItems.map(item => `
    <div class="menu-card" data-id="${item.id}">
      <img src="${item.image}" alt="${item.name}" class="menu-card__image" loading="lazy">
      <div class="menu-card__content">
        <h3 class="menu-card__name">${item.name}</h3>
        <p class="menu-card__desc">${item.desc}</p>
        <div class="menu-card__footer">
          <span class="menu-card__price">${formatCurrency(item.price)}</span>
          <div class="menu-card__actions">
            <button class="menu-card__btn menu-card__btn--add" onclick="addToCart('${item.id}')">Add</button>
            <button class="menu-card__btn menu-card__btn--details" onclick="showItemDetails('${item.id}')">Details</button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function initMenuFilters() {
  const filterButtons = document.querySelectorAll('.menu__filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update filter and render
      currentFilter = button.getAttribute('data-category');
      renderMenu();
    });
  });
}

function initMenuSearch() {
  const searchInput = document.getElementById('menuSearch');
  
  const debouncedSearch = debounce((value) => {
    searchQuery = value;
    renderMenu();
  }, 300);
  
  searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
  });
}

// ========================================================================
// MODAL - ITEM DETAILS
// ========================================================================

function showItemDetails(itemId) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;
  
  const modal = document.getElementById('itemModal');
  const modalBody = document.getElementById('modalBody');
  
  // Get spice level display
  const spiceDisplay = {
    'none': '🟢 Not Spicy',
    'mild': '🟡 Mildly Spicy',
    'medium': '🟠 Medium Spicy',
    'hot': '🔴 Very Spicy'
  };
  
  // Get allergens display
  const allergensDisplay = item.allergens[0] === 'none' 
    ? 'None' 
    : item.allergens.join(', ');
  
  modalBody.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="modal__image">
    <h2 class="modal__title">${item.name}</h2>
    <div class="modal__price">${formatCurrency(item.price)}</div>
    <p class="modal__desc">${item.desc}</p>
    
    <div class="modal__details">
      <div class="modal__detail-item">
        <span class="modal__detail-label">Category:</span>
        <span class="modal__detail-value">${item.cat}</span>
      </div>
      <div class="modal__detail-item">
        <span class="modal__detail-label">Spice Level:</span>
        <span class="modal__detail-value">${spiceDisplay[item.spice]}</span>
      </div>
      <div class="modal__detail-item">
        <span class="modal__detail-label">Allergens:</span>
        <span class="modal__detail-value">${allergensDisplay}</span>
      </div>
    </div>
    
    <div class="modal__quantity">
      <span class="modal__quantity-label">Quantity:</span>
      <div class="modal__quantity-controls">
        <button class="modal__quantity-btn" onclick="updateModalQuantity(-1)">-</button>
        <span class="modal__quantity-value" id="modalQuantity">1</span>
        <button class="modal__quantity-btn" onclick="updateModalQuantity(1)">+</button>
      </div>
    </div>
    
    <button class="btn btn--primary btn--full" onclick="addToCartFromModal('${item.id}')">
      Add to Order
    </button>
  `;
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function updateModalQuantity(change) {
  const quantityEl = document.getElementById('modalQuantity');
  let quantity = parseInt(quantityEl.textContent);
  quantity = Math.max(1, quantity + change);
  quantityEl.textContent = quantity;
}

function addToCartFromModal(itemId) {
  const quantity = parseInt(document.getElementById('modalQuantity').textContent);
  addToCart(itemId, quantity);
  closeModal();
}

function closeModal() {
  const modal = document.getElementById('itemModal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function initModal() {
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('modalOverlay');
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
}

// ========================================================================
// CART FUNCTIONALITY
// ========================================================================

function loadCart() {
  const savedCart = localStorage.getItem('b2d_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
  }
}

function saveCart() {
  localStorage.setItem('b2d_cart', JSON.stringify(cart));
}

function addToCart(itemId, quantity = 1) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;
  
  const existingItem = cart.find(c => c.id === itemId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  
  saveCart();
  updateCartDisplay();
  showToast(`${item.name} added to order!`);
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  saveCart();
  updateCartDisplay();
  showToast('Item removed from order');
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const mobileOrderBar = document.getElementById('mobileOrderBar');
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartCount.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;
  cartTotal.textContent = formatCurrency(totalPrice);
  
  // Show/hide mobile order bar
  if (totalItems > 0) {
    mobileOrderBar.style.display = 'block';
  } else {
    mobileOrderBar.style.display = 'none';
  }
}

function checkoutOnWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty', 'error');
    return;
  }
  
  // Build WhatsApp message
  let message = '🍽️ *B2D KITCHEN ORDER*\n\n';
  
  cart.forEach(item => {
    message += `• ${item.name}\n`;
    message += `  Qty: ${item.quantity} × ${formatCurrency(item.price)} = ${formatCurrency(item.price * item.quantity)}\n\n`;
  });
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `*Total: ${formatCurrency(total)}*\n\n`;
  message += 'Please confirm my order. Thank you!';
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// ========================================================================
// SHOWCASE & GALLERY
// ========================================================================

function renderShowcase(media = SHOWCASE_MEDIA) {
  const showcaseGrid = document.getElementById('showcaseGrid');
  
  showcaseGrid.innerHTML = media.slice(0, 6).map(item => {
    if (item.type === 'video') {
      return `
        <div class="showcase__item">
          <video src="${item.url}" autoplay loop muted playsinline></video>
        </div>
      `;
    } else {
      return `
        <div class="showcase__item">
          <img src="${item.url}" alt="${item.alt}" loading="lazy">
        </div>
      `;
    }
  }).join('');
}

function renderGallery(images = GALLERY_IMAGES) {
  const galleryGrid = document.getElementById('galleryGrid');
  
  galleryGrid.innerHTML = images.map((image, index) => `
    <div class="gallery__item" onclick="openLightbox(${index})">
      <img src="${image.url}" alt="${image.alt}" loading="lazy">
    </div>
  `).join('');
}

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const images = GALLERY_IMAGES;
  
  lightboxImage.src = images[index].url;
  lightboxImage.alt = images[index].alt;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = '';
}

function initLightbox() {
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
}

// ========================================================================
// TESTIMONIALS
// ========================================================================

function renderTestimonials(testimonials = TESTIMONIALS) {
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  
  testimonialsGrid.innerHTML = testimonials.map(testimonial => {
    const initials = testimonial.name.split(' ').map(n => n[0]).join('');
    const stars = '⭐'.repeat(testimonial.rating);
    
    return `
      <div class="testimonial-card">
        <div class="testimonial-card__header">
          <div class="testimonial-card__avatar">${initials}</div>
          <div>
            <div class="testimonial-card__name">${testimonial.name}</div>
            <div class="testimonial-card__rating">${stars}</div>
          </div>
        </div>
        <p class="testimonial-card__text">"${testimonial.text}"</p>
      </div>
    `;
  }).join('');
}

// ========================================================================
// CONTACT FORM
// ========================================================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('contactName').value,
      email: document.getElementById('contactEmail').value,
      phone: document.getElementById('contactPhone').value,
      message: document.getElementById('contactMessage').value,
      timestamp: new Date().toISOString()
    };
    
    // Validate
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      showToast('Please fill in all fields', 'error');
      return;
    }
    
    try {
      // Try to save to Firestore
      if (db) {
        await db.collection('messages').add(formData);
        showToast('Message sent successfully!');
      } else {
        // Log to console if Firebase not available
        console.log('Contact form submission:', formData);
        showToast('Message sent successfully!');
      }
      
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      showToast('Error sending message. Please try again.', 'error');
    }
  });
}

// ========================================================================
// NEWSLETTER
// ========================================================================

function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('newsletterEmail').value;
    
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    
    try {
      // Try to save to Firestore
      if (db) {
        await db.collection('newsletter').add({
          email,
          timestamp: new Date().toISOString()
        });
        showToast('Successfully subscribed to newsletter!');
      } else {
        console.log('Newsletter subscription:', email);
        showToast('Successfully subscribed to newsletter!');
      }
      
      form.reset();
    } catch (error) {
      console.error('Error subscribing:', error);
      showToast('Error subscribing. Please try again.', 'error');
    }
  });
}

// ========================================================================
// FLOATING BUTTONS
// ========================================================================

function initFloatingButtons() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  const whatsappBtn = document.getElementById('floatingWhatsapp');
  const orderNowBtn = document.getElementById('orderNowBtn');
  const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
  const mobileCheckoutBtn = document.getElementById('mobileCheckoutBtn');
  
  // Scroll to top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollToTopBtn.style.display = 'flex';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // WhatsApp buttons
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello B2D Kitchen! I would like to place an order.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };
  
  whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openWhatsApp();
  });
  
  orderNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('menu');
  });
  
  whatsappOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openWhatsApp();
  });
  
  mobileCheckoutBtn.addEventListener('click', checkoutOnWhatsApp);
}

// ========================================================================
// INTERSECTION OBSERVER (ANIMATIONS)
// ========================================================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ========================================================================
// INITIALIZATION
// ========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  const copyrightYear = document.getElementById('copyrightYear');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }
  
  // Initialize Firebase
  initFirebase();
  
  // Initialize components
  initHeader();
  initMenuFilters();
  initMenuSearch();
  initModal();
  initLightbox();
  initContactForm();
  initNewsletter();
  initFloatingButtons();
  initScrollAnimations();
  
  // Load cart from localStorage
  loadCart();
  
  // Render initial content
  renderMenu();
  renderShowcase();
  renderGallery();
  renderTestimonials();
  
  console.log('B2D Kitchen app initialized successfully');
});

// Make functions globally accessible
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.showItemDetails = showItemDetails;
window.updateModalQuantity = updateModalQuantity;
window.addToCartFromModal = addToCartFromModal;
window.checkoutOnWhatsApp = checkoutOnWhatsApp;
window.openLightbox = openLightbox;
