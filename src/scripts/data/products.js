export const categories = [
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Soft drinks, teas, coffees, water, malt drinks, and energy boosters for every occasion.',
    image:
      'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=80',
    icon: '🥤'
  },
  {
    id: 'cereals',
    name: 'Breakfast & Cereals',
    description: 'Wholesome cereals, oats, chocolate drinks, and spreads for nourishing mornings.',
    image:
      'https://images.unsplash.com/photo-1612874472540-6aa2f0f8e82f?auto=format&fit=crop&w=900&q=80',
    icon: '🥣'
  },
  {
    id: 'canned-foods',
    name: 'Canned & Packaged Foods',
    description: 'Sardines, tomato pastes, beans, noodles, pasta, and ready-to-eat delicacies.',
    image:
      'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=900&q=80',
    icon: '🥫'
  },
  {
    id: 'toiletries',
    name: 'Toiletries & Personal Care',
    description: 'Soaps, shower gels, skincare, oral care, and grooming essentials for the family.',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    icon: '🧴'
  },
  {
    id: 'baby-items',
    name: 'Baby & Kids Essentials',
    description: 'Baby food, diapers, wipes, formula, and kid-friendly snacks for happy little ones.',
    image:
      'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=900&q=80',
    icon: '🍼'
  },
  {
    id: 'household',
    name: 'Household & Cleaning',
    description: 'Laundry care, disinfectants, tissue, kitchenware, and home maintenance supplies.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    icon: '🧼'
  }
];

export const products = [
  {
    id: 'bev-001',
    name: 'Malta Guinness Can (24 x 330ml)',
    category: 'beverages',
    price: '₦12,500',
    description:
      'Rich, refreshing malt drink packed in convenient cans. Ideal for parties, offices, and family gatherings.',
    image:
      'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=900&q=80',
    highlights: ['Customer favourite', 'Call for bulk pricing'],
    tags: ['malt', 'party pack', 'beverages']
  },
  {
    id: 'bev-002',
    name: 'Ribena Blackcurrant Drink (1L)',
    category: 'beverages',
    price: '₦2,800',
    description:
      'Vitamin C-rich goodness perfect for lunchboxes and refreshment corners. Available chilled on request.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
    highlights: ['Rich in Vitamin C'],
    tags: ['juice', 'kids', 'health']
  },
  {
    id: 'cer-001',
    name: 'Golden Morn Grainsmart (500g)',
    category: 'cereals',
    price: '₦1,950',
    description:
      'Energising breakfast cereal fortified with vitamins and minerals for the whole family.',
    image:
      'https://images.unsplash.com/photo-1612874472540-6aa2f0f8e82f?auto=format&fit=crop&w=900&q=80',
    highlights: ['Fortified with vitamins'],
    tags: ['breakfast', 'nestle']
  },
  {
    id: 'cer-002',
    name: 'Quaker Oats Quick Cooking (1kg)',
    category: 'cereals',
    price: '₦3,750',
    description: 'Heart-healthy oats ideal for porridge, smoothies, and baking recipes.',
    image:
      'https://images.unsplash.com/photo-1604908815111-6d42b1bdbb41?auto=format&fit=crop&w=900&q=80',
    highlights: ['Heart healthy', 'Family size'],
    tags: ['whole grain', 'fiber']
  },
  {
    id: 'can-001',
    name: 'Dangote Tomato Paste (70g x 50 sachets)',
    category: 'canned-foods',
    price: '₦7,800',
    description:
      'Fresh-tasting tomato paste sachets packed for restaurants and homes that love authentic stews.',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=900&q=80',
    highlights: ['Bulk saver pack'],
    tags: ['tomato', 'party cooking']
  },
  {
    id: 'can-002',
    name: 'Geisha Mackerel in Tomato Sauce (425g)',
    category: 'canned-foods',
    price: '₦1,450',
    description:
      'Premium mackerel fillets in zesty tomato sauce. Pair with rice, pasta, or bread.',
    image:
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=900&q=80',
    highlights: ['Rich protein'],
    tags: ['seafood', 'pantry staple']
  },
  {
    id: 'tol-001',
    name: 'Dettol Original Antibacterial Soap (Pack of 6)',
    category: 'toiletries',
    price: '₦3,600',
    description:
      'Trusted germ protection for the entire family with a refreshing fragrance.',
    image:
      'https://images.unsplash.com/photo-1598514982500-02730f883a3d?auto=format&fit=crop&w=900&q=80',
    highlights: ['Dermatologist recommended'],
    tags: ['hygiene', 'family care']
  },
  {
    id: 'tol-002',
    name: 'Colgate Total Whitening Toothpaste (150ml)',
    category: 'toiletries',
    price: '₦2,100',
    description:
      '12-hour protection against bacteria with enamel-safe whitening action.',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
    highlights: ['Fresh breath'],
    tags: ['oral care', 'family care']
  },
  {
    id: 'baby-001',
    name: 'Huggies Dry Comfort Diapers (Size 3, 72pcs)',
    category: 'baby-items',
    price: '₦12,200',
    description:
      'Gentle, breathable diapers with superior absorbency to keep your baby comfortable all day.',
    image:
      'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=900&q=80',
    highlights: ['Sensitive skin friendly'],
    tags: ['baby', 'diaper']
  },
  {
    id: 'baby-002',
    name: 'Cerelac Wheat & Milk (1kg)',
    category: 'baby-items',
    price: '₦5,450',
    description:
      'Nutritious, iron-rich cereal for babies 6 months and older. Easy to prepare with warm water or milk.',
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80',
    highlights: ['Iron fortified'],
    tags: ['baby food', 'nestle']
  },
  {
    id: 'home-001',
    name: 'Morning Fresh Dishwashing Liquid (900ml)',
    category: 'household',
    price: '₦1,650',
    description:
      'Powerful grease-cutting formula with fresh lemon scent to leave dishes sparkling.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    highlights: ['Economy size'],
    tags: ['kitchen', 'cleaning']
  },
  {
    id: 'home-002',
    name: 'Sunlight 2-in-1 Laundry Detergent (2kg)',
    category: 'household',
    price: '₦3,350',
    description:
      'Brightens clothes while leaving a long-lasting fragrance. Ideal for machine and hand washing.',
    image:
      'https://images.unsplash.com/photo-1582719478175-2cf4e5250540?auto=format&fit=crop&w=900&q=80',
    highlights: ['Long lasting fragrance'],
    tags: ['laundry', 'detergent']
  }
];

export const testimonials = [
  {
    id: 't-01',
    name: 'Bisi A.',
    role: 'Restaurant Owner, Ilaro Road',
    rating: 5,
    quote:
      'OMOOLA SUPERMARKET STORES never disappoints. Their bulk delivery arrives fresh and on time, keeping our kitchen running smoothly.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 't-02',
    name: 'Kunle O.',
    role: 'Logistics Manager',
    rating: 4.5,
    quote:
      'From beverages to toiletries, they stock everything our staff needs. The team is friendly and always ready to help.',
    avatar: 'https://i.pravatar.cc/150?img=14'
  },
  {
    id: 't-03',
    name: 'Amina F.',
    role: 'New Mom',
    rating: 5,
    quote:
      'Their baby aisle is a lifesaver. I love that I can call ahead and have my order waiting for pick-up. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=31'
  }
];

export const blogPosts = [
  {
    id: 'b-01',
    title: 'Smart shopping tips for festive seasons in Owode Yewa',
    excerpt:
      'Plan your holiday pantry with these expert tips from our merchandising team. Discover bulk savings, gift hampers, and delivery hacks.',
    date: 'April 12, 2024',
    author: 'OMOOLA Editorial',
    image:
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
    tags: ['shopping tips', 'holiday', 'owode yewa']
  },
  {
    id: 'b-02',
    title: 'Top 10 affordable household items for first-time renters',
    excerpt:
      'Moving into a new apartment in Owode Yewa? Stock up on these essential cleaning and kitchen products without breaking the bank.',
    date: 'March 28, 2024',
    author: 'Funke Omoola',
    image:
      'https://images.unsplash.com/photo-1598514982641-2992b30fbc24?auto=format&fit=crop&w=900&q=80',
    tags: ['household', 'budget', 'checklist']
  },
  {
    id: 'b-03',
    title: 'New arrivals: Premium beverages and healthy snacks',
    excerpt:
      'Explore the latest additions to our beverage aisle, including zero-sugar options, cold brews, and nutritious snacks.',
    date: 'February 16, 2024',
    author: 'Ayo Omoola',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80',
    tags: ['new arrivals', 'beverages', 'healthy living']
  }
];

export const galleryImages = [
  {
    id: 'g-01',
    caption: 'Aisle of premium beverages and sparkling drinks.',
    image:
      'https://images.unsplash.com/photo-1515706886584-8426e1c4100b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-02',
    caption: 'Fresh produce and pantry essentials neatly displayed.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-03',
    caption: 'Happy customers at the checkout counter.',
    image:
      'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-04',
    caption: 'Household and cleaning section with best-selling brands.',
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-05',
    caption: 'Baby products aisle featuring diapers, wipes, and formula.',
    image:
      'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'g-06',
    caption: 'Seasonal gift hampers curated for celebrations.',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80'
  }
];
