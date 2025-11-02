// ========================================
// B2D Kitchen - Main JavaScript
// ========================================

// ========================================
// CONFIGURATION
// ========================================
const WHATSAPP_NUMBER = "2340000000000"; // TODO: Replace with actual WhatsApp number
// TODO: Add Firebase configuration
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// ========================================
// MENU DATA (Fallback if Firestore unavailable)
// ========================================
const MENU = [
    // BREAKFAST CLASSICS
    {id:"bf-01",cat:"Breakfast",name:"Full Nigerian Breakfast",price:3500,desc:"Eggs, sausages, baked beans, fried plantain, toast.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/breakfast_full.jpg",allergens:["egg","gluten"],spice:"none"},
    {id:"bf-02",cat:"Breakfast",name:"Akara & Pap",price:1800,desc:"Crispy bean cakes with warm pap (ogi).",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/akara_pap.jpg",allergens:["none"],spice:"none"},
    {id:"bf-03",cat:"Breakfast",name:"Yam & Egg Sauce",price:2200,desc:"Boiled yam with rich tomato egg sauce.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/yam_egg.jpg",allergens:["egg"],spice:"mild"},
    {id:"bf-04",cat:"Breakfast",name:"Moi-Moi (Bean Pudding)",price:1500,desc:"Steamed, protein-packed bean pudding.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/moimoi.jpg",allergens:["none"],spice:"none"},
    {id:"bf-05",cat:"Breakfast",name:"Pancakes & Syrup",price:1900,desc:"Fluffy pancakes, syrup, butter.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/pancakes.jpg",allergens:["gluten","dairy","egg"],spice:"none"},

    // SWALLOW & SOUPS
    {id:"sw-01",cat:"Swallow & Soups",name:"Semo with Egusi Soup",price:3000,desc:"Melon seed soup with beef & stockfish.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/semo_egusi.jpg",allergens:["fish"],spice:"medium"},
    {id:"sw-02",cat:"Swallow & Soups",name:"Amala with Ewedu & Gbegiri",price:3200,desc:"Yam flour swallow with jute & bean soup trio.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/amala_ewedu_gbegiri.jpg",allergens:["none"],spice:"mild"},
    {id:"sw-03",cat:"Swallow & Soups",name:"Pounded Yam with Egusi",price:3500,desc:"Classic combo, hearty and satisfying.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/pounded_yam_egusi.jpg",allergens:["fish"],spice:"medium"},
    {id:"sw-04",cat:"Swallow & Soups",name:"Efo Riro with Beef",price:3000,desc:"Spinach stew with assorted meats.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/efo_riro.jpg",allergens:["fish"],spice:"hot"},
    {id:"sw-05",cat:"Swallow & Soups",name:"Okro Soup with Fish",price:2900,desc:"Fresh okro in rich seafood broth.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/okro.jpg",allergens:["fish"],spice:"mild"},

    // RICE DISHES
    {id:"rc-01",cat:"Rice Dishes",name:"Jollof Rice with Chicken",price:2800,desc:"Smoky party jollof with grilled chicken.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/jollof_chicken.jpg",allergens:["none"],spice:"medium"},
    {id:"rc-02",cat:"Rice Dishes",name:"Fried Rice with Shrimps",price:3200,desc:"Vibrant veg & shrimp fried rice.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/fried_rice_shrimp.jpg",allergens:["shellfish"],spice:"mild"},
    {id:"rc-03",cat:"Rice Dishes",name:"Coconut Rice",price:2600,desc:"Fragrant coconut-infused rice.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/coconut_rice.jpg",allergens:["none"],spice:"mild"},
    {id:"rc-04",cat:"Rice Dishes",name:"Ofada Rice & Ayamase",price:3600,desc:"Local rice with spicy green 'designer' stew.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/ofada_ayamase.jpg",allergens:["fish"],spice:"hot"},

    // PASTA & NOODLES
    {id:"ps-01",cat:"Pasta & Noodles",name:"Jollof Spaghetti & Chicken",price:2800,desc:"Tomato-rich spaghetti with grilled chicken.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/spag_jollof.jpg",allergens:["gluten"],spice:"medium"},
    {id:"ps-02",cat:"Pasta & Noodles",name:"Stir-Fry Noodles (Beef/Chicken)",price:2700,desc:"Wok-tossed noodles, mixed veg.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/noodles_stirfry.jpg",allergens:["gluten","soy"],spice:"mild"},

    // PROTEINS & GRILLS
    {id:"pg-01",cat:"Proteins & Grills",name:"Grilled Chicken (Quarter)",price:2500,desc:"Flame-grilled, juicy, spiced.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/grilled_chicken.jpg",allergens:["none"],spice:"medium"},
    {id:"pg-02",cat:"Proteins & Grills",name:"Turkey Wings",price:3200,desc:"Smoky & tender wings.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/turkey_wings.jpg",allergens:["none"],spice:"medium"},
    {id:"pg-03",cat:"Proteins & Grills",name:"Suya (Beef/Chicken)",price:2200,desc:"Street-style spicy skewers, onions & tomatoes.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/suya.jpg",allergens:["none"],spice:"hot"},
    {id:"pg-04",cat:"Proteins & Grills",name:"Assorted Beef",price:2300,desc:"Chef's mix, peppered to perfection.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/assorted.jpg",allergens:["none"],spice:"hot"},

    // PASTRIES & SNACKS
    {id:"sn-01",cat:"Pastries & Snacks",name:"Meat Pie",price:700,desc:"Buttery crust, savoury filling.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/meat_pie.jpg",allergens:["gluten","dairy"],spice:"none"},
    {id:"sn-02",cat:"Pastries & Snacks",name:"Chicken Pie",price:800,desc:"Creamy chicken & veg.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/chicken_pie.jpg",allergens:["gluten","dairy"],spice:"none"},
    {id:"sn-03",cat:"Pastries & Snacks",name:"Puff-Puff (6pcs)",price:600,desc:"Golden, airy bites.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/puffpuff.jpg",allergens:["gluten"],spice:"none"},
    {id:"sn-04",cat:"Pastries & Snacks",name:"Moi-Moi Wrap",price:1500,desc:"Steamed bean pudding on-the-go.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/moimoi_wrap.jpg",allergens:["none"],spice:"none"},

    // SIDES & EXTRAS
    {id:"sd-01",cat:"Sides & Extras",name:"Fried Plantain (Dodo)",price:900,desc:"Sweet & golden.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/dodo.jpg",allergens:["none"],spice:"none"},
    {id:"sd-02",cat:"Sides & Extras",name:"Coleslaw",price:700,desc:"Creamy crunch.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/coleslaw.jpg",allergens:["dairy"],spice:"none"},
    {id:"sd-03",cat:"Sides & Extras",name:"Salad Bowl",price:1200,desc:"Fresh greens & vinaigrette.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/salad.jpg",allergens:["none"],spice:"none"},
    {id:"sd-04",cat:"Sides & Extras",name:"Jollof Scoop (Side)",price:1000,desc:"Extra party jollof.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/jollof_side.jpg",allergens:["none"],spice:"mild"},

    // DRINKS & SMOOTHIES
    {id:"dr-01",cat:"Drinks",name:"Zobo",price:800,desc:"Hibiscus refresher.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/zobo.jpg",allergens:["none"],spice:"none"},
    {id:"dr-02",cat:"Drinks",name:"Chapman",price:1200,desc:"Citrus & bitters mocktail.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/chapman.jpg",allergens:["none"],spice:"none"},
    {id:"dr-03",cat:"Drinks",name:"Fresh Juice (Pineapple/Orange)",price:1500,desc:"Pressed & chilled.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/juice.jpg",allergens:["none"],spice:"none"},
    {id:"dr-04",cat:"Drinks",name:"Bottled Water",price:400,desc:"Still water.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/water.jpg",allergens:["none"],spice:"none"},

    // COMBOS / VALUE MEALS
    {id:"cb-01",cat:"Combos",name:"Jollof + Grilled Chicken + Drink",price:3800,desc:"Value plate & beverage.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/combo_jollof_chicken.jpg",allergens:["none"],spice:"mild"},
    {id:"cb-02",cat:"Combos",name:"Fried Rice + Turkey Wing + Drink",price:4200,desc:"Weekend favourite set.",image:"https://res.cloudinary.com/demo/image/upload/v1/b2d/combo_fried_turkey.jpg",allergens:["none"],spice:"mild"}
];

// ========================================
// STATE MANAGEMENT
// ========================================
let menuData = [];
let cart = [];
let currentFilter = 'all';
let searchQuery = '';
let galleryImages = [];
let currentLightboxIndex = 0;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize cart from localStorage
    loadCart();
    
    // Try to load data from Firestore, fallback to local data
    await loadMenuData();
    
    // Render menu
    renderMenu();
    renderFilters();
    
    // Load other sections
    loadMediaSection();
    loadGallery();
    loadTestimonials();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize observers
    setupIntersectionObserver();
    
    // Initialize FAQ accordions
    setupFAQs();
}

// ========================================
// FIREBASE / FIRESTORE (TODO: Implement)
// ========================================
async function loadMenuData() {
    try {
        // TODO: Initialize Firebase and load from Firestore
        // For now, use local MENU constant
        menuData = MENU;
    } catch (error) {
        console.error('Error loading menu data:', error);
        menuData = MENU;
    }
}

async function loadMediaSection() {
    const mediaGrid = document.getElementById('media-grid');
    
    // TODO: Load from Firestore 'media' collection
    // Fallback to placeholder data
    const mediaItems = [
        { type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/showcase1.jpg', alt: 'Fresh ingredients' },
        { type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/showcase2.jpg', alt: 'Kitchen preparation' },
        { type: 'video', url: 'https://res.cloudinary.com/demo/video/upload/v1/b2d/cooking.mp4', alt: 'Cooking process' },
        { type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/showcase3.jpg', alt: 'Plated dish' },
        { type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/showcase4.jpg', alt: 'Restaurant ambiance' },
        { type: 'image', url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/showcase5.jpg', alt: 'Happy customers' }
    ];
    
    mediaGrid.innerHTML = mediaItems.map(item => {
        if (item.type === 'video') {
            return `
                <div class="media-item">
                    <video autoplay muted loop playsinline>
                        <source src="${item.url}" type="video/mp4">
                    </video>
                </div>
            `;
        }
        return `
            <div class="media-item">
                <img src="${item.url}" alt="${item.alt}" loading="lazy">
            </div>
        `;
    }).join('');
}

async function loadGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    // TODO: Load from Firestore 'gallery' collection
    // Fallback to placeholder data
    galleryImages = [
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery1.jpg', alt: 'Jollof rice' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery2.jpg', alt: 'Grilled chicken' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery3.jpg', alt: 'Fresh salad' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery4.jpg', alt: 'Suya platter' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery5.jpg', alt: 'Breakfast spread' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery6.jpg', alt: 'Desserts' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery7.jpg', alt: 'Drinks' },
        { url: 'https://res.cloudinary.com/demo/image/upload/v1/b2d/gallery8.jpg', alt: 'Chef at work' }
    ];
    
    galleryGrid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${img.url}" alt="${img.alt}" loading="lazy">
        </div>
    `).join('');
}

async function loadTestimonials() {
    const testimonialsGrid = document.getElementById('testimonials-grid');
    
    // TODO: Load from Firestore 'testimonials' collection
    // Fallback to placeholder data
    const testimonials = [
        { name: 'Adebayo Johnson', role: 'Regular Customer', rating: 5, text: 'Best jollof rice in Lagos! The quality is consistent and delivery is always on time. B2D Kitchen never disappoints!' },
        { name: 'Fatima Ibrahim', role: 'Food Blogger', rating: 5, text: 'As someone who reviews restaurants, I can confidently say B2D Kitchen serves authentic Nigerian food with exceptional hygiene standards.' },
        { name: 'Chinedu Okafor', role: 'Corporate Client', rating: 5, text: 'We order for our office meetings regularly. Professional service, great packaging, and delicious food every single time!' },
        { name: 'Grace Eze', role: 'First-time Customer', rating: 5, text: 'Ordered through WhatsApp and was amazed by how smooth the process was. The food arrived hot and tasted amazing!' }
    ];
    
    testimonialsGrid.innerHTML = testimonials.slice(0, 3).map(t => `
        <div class="testimonial-card">
            <div class="testimonial-rating">
                ${'★'.repeat(t.rating)}
            </div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.name.charAt(0)}</div>
                <div class="testimonial-info">
                    <h4>${t.name}</h4>
                    <p>${t.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// MENU RENDERING
// ========================================
function renderFilters() {
    const filtersContainer = document.getElementById('menu-filters');
    const categories = ['all', ...new Set(menuData.map(item => item.cat))];
    
    filtersContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
            ${cat === 'all' ? 'All' : cat}
        </button>
    `).join('');
}

function renderMenu() {
    const menuGrid = document.getElementById('menu-grid');
    const noResults = document.getElementById('no-results');
    
    let filtered = menuData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(item => item.cat === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    if (filtered.length === 0) {
        noResults.style.display = 'block';
        menuGrid.innerHTML = '';
        return;
    }
    
    noResults.style.display = 'none';
    menuGrid.innerHTML = filtered.map(item => `
        <div class="menu-card">
            <img src="${item.image}" alt="${item.name}" class="menu-card-image" loading="lazy">
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3 class="menu-card-name">${item.name}</h3>
                    <p class="menu-card-price">₦${item.price.toLocaleString()}</p>
                </div>
                <p class="menu-card-desc">${item.desc}</p>
                <div class="menu-card-actions">
                    <button class="btn btn-primary" onclick="addToCart('${item.id}')">Add to Order</button>
                    <button class="btn btn-outline" onclick="showItemDetails('${item.id}')">Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// ITEM DETAILS MODAL
// ========================================
function showItemDetails(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const modal = document.getElementById('item-modal');
    const modalBody = document.getElementById('modal-body');
    
    const spiceEmoji = {
        'none': '—',
        'mild': '🌶️',
        'medium': '🌶️🌶️',
        'hot': '🌶️🌶️🌶️'
    };
    
    modalBody.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="modal-image">
        <div class="modal-header">
            <h2 class="modal-title">${item.name}</h2>
            <p class="modal-price">₦${item.price.toLocaleString()}</p>
        </div>
        <p>${item.desc}</p>
        <div class="modal-info">
            <div class="modal-info-item">
                <strong>Category:</strong> ${item.cat}
            </div>
            <div class="modal-info-item">
                <strong>Spice Level:</strong> ${spiceEmoji[item.spice]} ${item.spice}
            </div>
            <div class="modal-info-item">
                <strong>Allergens:</strong> ${item.allergens.join(', ')}
            </div>
        </div>
        <div class="modal-quantity">
            <strong>Quantity:</strong>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="changeModalQuantity(-1)">−</button>
                <span class="quantity-value" id="modal-quantity">1</span>
                <button class="quantity-btn" onclick="changeModalQuantity(1)">+</button>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn btn-primary btn-block" onclick="addToCartFromModal('${item.id}')">
                Add to Order
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}

function changeModalQuantity(delta) {
    const quantityEl = document.getElementById('modal-quantity');
    let quantity = parseInt(quantityEl.textContent) + delta;
    quantity = Math.max(1, Math.min(20, quantity));
    quantityEl.textContent = quantity;
}

function addToCartFromModal(itemId) {
    const quantity = parseInt(document.getElementById('modal-quantity').textContent);
    addToCart(itemId, quantity);
    closeModal();
}

function closeModal() {
    const modal = document.getElementById('item-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
}

// ========================================
// CART MANAGEMENT
// ========================================
function loadCart() {
    const saved = localStorage.getItem('b2d-cart');
    cart = saved ? JSON.parse(saved) : [];
    updateCartDisplay();
}

function saveCart() {
    localStorage.setItem('b2d-cart', JSON.stringify(cart));
    updateCartDisplay();
}

function addToCart(itemId, quantity = 1) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;
    
    const existingIndex = cart.findIndex(c => c.id === itemId);
    
    if (existingIndex >= 0) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ ...item, quantity });
    }
    
    saveCart();
    showToast(`${item.name} added to order!`, 'success');
}

function updateCartDisplay() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const mobileBar = document.getElementById('mobile-order-bar');
    const cartCountEl = document.getElementById('cart-count-mobile');
    const cartTotalEl = document.getElementById('cart-total-mobile');
    
    if (count > 0) {
        mobileBar.style.display = 'block';
        cartCountEl.textContent = `${count} item${count > 1 ? 's' : ''}`;
        cartTotalEl.textContent = `₦${total.toLocaleString()}`;
    } else {
        mobileBar.style.display = 'none';
    }
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'warning');
        return;
    }
    
    let message = '*B2D Kitchen Order*\n\n';
    
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\n*Total: ₦${total.toLocaleString()}*\n\n`;
    message += 'Please confirm my order. Thank you!';
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Menu search
    const searchInput = document.getElementById('menu-search');
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value;
            renderMenu();
        }, 300);
    });
    
    // Menu filters
    document.getElementById('menu-filters').addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            renderMenu();
        }
    });
    
    // Modal close
    document.querySelector('.modal-overlay').addEventListener('click', closeModal);
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    
    // WhatsApp buttons
    document.getElementById('hero-whatsapp').addEventListener('click', (e) => {
        e.preventDefault();
        const message = 'Hello! I would like to place an order from B2D Kitchen.';
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
    
    document.getElementById('whatsapp-float').addEventListener('click', (e) => {
        e.preventDefault();
        const message = 'Hello B2D Kitchen!';
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
    
    document.getElementById('checkout-mobile').addEventListener('click', checkoutWhatsApp);
    
    // Scroll to top
    const scrollTopBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Gallery lightbox
    document.getElementById('gallery-grid').addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            currentLightboxIndex = parseInt(item.dataset.index);
            showLightbox();
        }
    });
    
    document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
    document.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            message: e.target.message.value,
            timestamp: new Date().toISOString()
        };
        
        // TODO: Save to Firestore 'messages' collection
        console.log('Contact form submission:', formData);
        
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        e.target.reset();
    });
    
    // Newsletter form
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // TODO: Save to Firestore or email service
        console.log('Newsletter subscription:', email);
        
        showToast('Thank you for subscribing!', 'success');
        e.target.reset();
    });
}

// ========================================
// LIGHTBOX
// ========================================
function showLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = galleryImages[currentLightboxIndex].url;
    lightboxImage.alt = galleryImages[currentLightboxIndex].alt;
    
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = galleryImages.length - 1;
    if (currentLightboxIndex >= galleryImages.length) currentLightboxIndex = 0;
    
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = galleryImages[currentLightboxIndex].url;
    lightboxImage.alt = galleryImages[currentLightboxIndex].alt;
}

// ========================================
// FAQ ACCORDIONS
// ========================================
function setupFAQs() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            const answer = button.nextElementSibling;
            
            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                btn.nextElementSibling.style.maxHeight = '0';
            });
            
            // Toggle current FAQ
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// ========================================
// INTERSECTION OBSERVER
// ========================================
function setupIntersectionObserver() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================
document.addEventListener('keydown', (e) => {
    // Close modal on Escape
    if (e.key === 'Escape') {
        const modal = document.getElementById('item-modal');
        const lightbox = document.getElementById('lightbox');
        if (modal.classList.contains('active')) {
            closeModal();
        }
        if (lightbox.classList.contains('active')) {
            closeLightbox();
        }
    }
    
    // Navigate lightbox with arrow keys
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    }
});

// Export functions to global scope for onclick handlers
window.addToCart = addToCart;
window.showItemDetails = showItemDetails;
window.changeModalQuantity = changeModalQuantity;
window.addToCartFromModal = addToCartFromModal;
