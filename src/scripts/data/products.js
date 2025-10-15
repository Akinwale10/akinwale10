export const categories = [
  {
    "id": "fresh-produce",
    "name": "Fresh Produce",
    "icon": "🥬",
    "description": "Crisp vegetables and seasonal fruits picked daily from trusted farms."
  },
  {
    "id": "meat-fish",
    "name": "Meat & Fish",
    "icon": "🐟",
    "description": "Premium proteins, expertly cut and chilled for peak freshness."
  },
  {
    "id": "pantry",
    "name": "Pantry",
    "icon": "🥫",
    "description": "Everyday staples, grains, and cooking essentials."
  },
  {
    "id": "beverages",
    "name": "Beverages",
    "icon": "🥤",
    "description": "Refreshing drinks, teas, and juices for every moment."
  },
  {
    "id": "breakfast-dairy",
    "name": "Breakfast & Dairy",
    "icon": "🥛",
    "description": "Start your mornings with wholesome cereals, breads, and dairy."
  },
  {
    "id": "snacks",
    "name": "Snacks",
    "icon": "🍪",
    "description": "Sweet and savoury bites for the whole family."
  },
  {
    "id": "household",
    "name": "Household",
    "icon": "🧼",
    "description": "Cleaning supplies and home care must-haves."
  },
  {
    "id": "personal-care",
    "name": "Personal Care",
    "icon": "🧴",
    "description": "Self-care essentials that pamper and protect."
  },
  {
    "id": "babies",
    "name": "Babies",
    "icon": "🍼",
    "description": "Trusted products for mums, dads, and little ones."
  },
  {
    "id": "deals",
    "name": "Deals",
    "icon": "💥",
    "description": "Limited-time savings and bundle offers."
  }
];

export const promoSlides = [
  {
    "id": "promo-1",
    "title": "Fresh groceries, fast delivery.",
    "subtitle": "Shop quality food and essentials at the best prices—delivered today.",
    "cta": "Shop Now",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1600&q=80",
    "tag": "Free delivery on orders over ₦25,000"
  },
  {
    "id": "promo-2",
    "title": "Save 10% on your first order",
    "subtitle": "Use code OMOOLA10 at checkout to unlock welcome savings.",
    "cta": "View Deals",
    "image": "https://images.unsplash.com/photo-1586201375761-83865001e31b?auto=format&fit=crop&w=1600&q=80",
    "tag": "Welcome offer"
  },
  {
    "id": "promo-3",
    "title": "Market-fresh produce daily",
    "subtitle": "Hand-picked fruits and veggies from Nigerian partner farms.",
    "cta": "Shop Fresh Produce",
    "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1600&q=80",
    "tag": "New in season"
  }
];

export const coupons = [
  {
    "code": "OMOOLA10",
    "description": "Save 10% on your first order when you spend ₦10,000 or more.",
    "discountType": "percentage",
    "value": 10,
    "minimumSpend": 10000,
    "expiry": "2024-12-31"
  },
  {
    "code": "FREEDELIVERY",
    "description": "Enjoy free delivery within Lagos Mainland on orders above ₦20,000.",
    "discountType": "free-delivery",
    "value": 0,
    "minimumSpend": 20000,
    "expiry": "2025-03-31"
  }
];

export const trustBadges = [
  {
    "id": "secure",
    "title": "Secure Payments",
    "description": "Pay safely with Paystack or Flutterwave."
  },
  {
    "id": "delivery",
    "title": "Same-day Delivery",
    "description": "Order by 4pm for delivery today in Lagos."
  },
  {
    "id": "quality",
    "title": "Verified Quality",
    "description": "Sourced from certified suppliers with freshness checks."
  }
];

export const products = [
  {
    "id": "fp-001",
    "name": "Organic Ugu Leaves (Pumpkin Leaves)",
    "slug": "organic-ugu-leaves",
    "category": "fresh-produce",
    "price": 950,
    "unit": "Bundle",
    "rating": 4.8,
    "reviews": 134,
    "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80",
    "description": "Freshly harvested ugu leaves, perfect for soups and stews. Washed and ready to cook.",
    "badges": [
      "Farm Fresh",
      "Washed & Ready"
    ],
    "tags": [
      "vegetable",
      "ugu",
      "greens"
    ],
    "perUnit": "₦950 / bundle",
    "freshnessDate": "Harvested today",
    "origin": "Ogun State, Nigeria",
    "storage": "Keep refrigerated and consume within 3 days.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "45 kcal"
      },
      {
        "label": "Vitamin A",
        "value": "35% DV"
      },
      {
        "label": "Iron",
        "value": "15% DV"
      }
    ]
  },
  {
    "id": "fp-002",
    "name": "Sweet Ripe Plantain Fingers",
    "slug": "sweet-ripe-plantain",
    "category": "fresh-produce",
    "price": 1800,
    "unit": "Pack of 5",
    "rating": 4.7,
    "reviews": 98,
    "image": "https://images.unsplash.com/photo-1522184216315-dc4a88b26ec5?auto=format&fit=crop&w=800&q=80",
    "description": "Hand-selected ripe plantains with a creamy texture. Ideal for frying and grilling.",
    "badges": [
      "Customer Favourite"
    ],
    "tags": [
      "plantain",
      "ripe"
    ],
    "perUnit": "₦360 / finger",
    "freshnessDate": "Checked this morning",
    "origin": "Oyo State, Nigeria",
    "storage": "Store at room temperature until ripe enough.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "218 kcal"
      },
      {
        "label": "Potassium",
        "value": "20% DV"
      },
      {
        "label": "Fiber",
        "value": "14% DV"
      }
    ]
  },
  {
    "id": "fp-003",
    "name": "Crunchy Garden Carrots",
    "slug": "crunchy-garden-carrots",
    "category": "fresh-produce",
    "price": 1100,
    "unit": "1kg pack",
    "rating": 4.6,
    "reviews": 72,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    "description": "Bright orange carrots, washed and trimmed for easy cooking and snacking.",
    "badges": [
      "High in Vitamin A"
    ],
    "tags": [
      "carrots",
      "vegetables"
    ],
    "perUnit": "₦1,100 / kg",
    "freshnessDate": "Harvested within 24 hours",
    "origin": "Jos Plateau, Nigeria",
    "storage": "Keep refrigerated in perforated bag.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "41 kcal"
      },
      {
        "label": "Vitamin A",
        "value": "334% DV"
      },
      {
        "label": "Fiber",
        "value": "2.8g"
      }
    ]
  },
  {
    "id": "mf-001",
    "name": "Fresh Catfish Steaks",
    "slug": "fresh-catfish-steaks",
    "category": "meat-fish",
    "price": 4800,
    "unit": "1.2kg pack",
    "rating": 4.7,
    "reviews": 116,
    "image": "https://images.unsplash.com/photo-1604908177522-4023ac76e1f8?auto=format&fit=crop&w=800&q=80",
    "description": "Descaled and cleaned catfish steaks perfect for pepper soup or grilling.",
    "badges": [
      "Rich in Omega-3"
    ],
    "tags": [
      "catfish",
      "seafood"
    ],
    "perUnit": "₦4,000 / kg",
    "freshnessDate": "Processed this morning",
    "origin": "Epe, Lagos",
    "storage": "Keep frozen and thaw before use.",
    "allergens": "Fish",
    "nutrition": [
      {
        "label": "Protein",
        "value": "18g"
      },
      {
        "label": "Fat",
        "value": "6g"
      },
      {
        "label": "Omega-3",
        "value": "1.2g"
      }
    ]
  },
  {
    "id": "mf-002",
    "name": "Tender Chicken Drumsticks",
    "slug": "tender-chicken-drumsticks",
    "category": "meat-fish",
    "price": 4200,
    "unit": "1.5kg pack",
    "rating": 4.8,
    "reviews": 205,
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    "description": "Well-trimmed chicken drumsticks, hormone-free and freshly packed.",
    "badges": [
      "Halal"
    ],
    "tags": [
      "chicken"
    ],
    "perUnit": "₦2,800 / kg",
    "freshnessDate": "Processed today",
    "origin": "Ibadan, Nigeria",
    "storage": "Keep chilled at 4°C or below.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Protein",
        "value": "24g"
      },
      {
        "label": "Fat",
        "value": "9g"
      }
    ]
  },
  {
    "id": "mf-003",
    "name": "Smoked Titus (Mackerel)",
    "slug": "smoked-titus-mackerel",
    "category": "meat-fish",
    "price": 3600,
    "unit": "4 pieces",
    "rating": 4.5,
    "reviews": 93,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "description": "Traditional smoked Titus fish with rich flavour and aroma.",
    "badges": [
      "Customer Favourite"
    ],
    "tags": [
      "smoked fish",
      "titus"
    ],
    "perUnit": "₦900 / piece",
    "freshnessDate": "Smoked within 12 hours",
    "origin": "Ondo State, Nigeria",
    "storage": "Store in a cool, dry place.",
    "allergens": "Fish",
    "nutrition": [
      {
        "label": "Protein",
        "value": "21g"
      },
      {
        "label": "Omega-3",
        "value": "1.9g"
      }
    ]
  },
  {
    "id": "pa-001",
    "name": "Golden Penny Semovita",
    "slug": "golden-penny-semovita-2kg",
    "category": "pantry",
    "price": 2100,
    "unit": "2kg bag",
    "rating": 4.8,
    "reviews": 302,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "description": "Smooth, lump-free semovita for perfect swallow meals.",
    "badges": [
      "Best Seller"
    ],
    "tags": [
      "semovita",
      "swallow"
    ],
    "perUnit": "₦1,050 / kg",
    "freshnessDate": "Milled last week",
    "origin": "Nigeria",
    "storage": "Store in a cool, dry place.",
    "allergens": "Gluten",
    "nutrition": [
      {
        "label": "Carbohydrates",
        "value": "74g"
      },
      {
        "label": "Protein",
        "value": "8g"
      }
    ]
  },
  {
    "id": "pa-002",
    "name": "Indomie Instant Noodles Chicken Flavour",
    "slug": "indomie-chicken-flavour-70g",
    "category": "pantry",
    "price": 3100,
    "unit": "Pack of 20 (70g)",
    "rating": 4.9,
    "reviews": 512,
    "image": "https://images.unsplash.com/photo-1589307000277-891dd4e85c9b?auto=format&fit=crop&w=800&q=80",
    "description": "Nigeria’s favourite instant noodles with rich chicken seasoning.",
    "badges": [
      "Bundle Deal"
    ],
    "tags": [
      "indomie",
      "noodles",
      "chicken"
    ],
    "perUnit": "₦155 / pack",
    "freshnessDate": "Factory fresh",
    "origin": "Nigeria",
    "storage": "Store in a dry place.",
    "allergens": "Gluten, Soy",
    "nutrition": [
      {
        "label": "Calories",
        "value": "320 kcal"
      },
      {
        "label": "Protein",
        "value": "6g"
      }
    ]
  },
  {
    "id": "pa-003",
    "name": "Dano Full Cream Milk Powder",
    "slug": "dano-full-cream-milk",
    "category": "pantry",
    "price": 5200,
    "unit": "900g pouch",
    "rating": 4.8,
    "reviews": 268,
    "image": "https://images.unsplash.com/photo-1580915411954-282cb1c6b8c5?auto=format&fit=crop&w=800&q=80",
    "description": "Creamy and nutritious milk powder fortified with vitamins.",
    "badges": [
      "Rich in Calcium"
    ],
    "tags": [
      "milk",
      "powder"
    ],
    "perUnit": "₦5,778 / kg",
    "freshnessDate": "Best before 2025",
    "origin": "Denmark",
    "storage": "Store in an airtight container after opening.",
    "allergens": "Milk",
    "nutrition": [
      {
        "label": "Protein",
        "value": "26g"
      },
      {
        "label": "Calcium",
        "value": "720mg"
      }
    ]
  },
  {
    "id": "be-001",
    "name": "Chi Exotic Pineapple & Coconut Juice",
    "slug": "chi-exotic-pineapple-coconut",
    "category": "beverages",
    "price": 1350,
    "unit": "1L pack",
    "rating": 4.6,
    "reviews": 152,
    "image": "https://images.unsplash.com/photo-1571074921856-17e2d9c95c87?auto=format&fit=crop&w=800&q=80",
    "description": "Tropical blend of pineapple and coconut with refreshing taste.",
    "badges": [
      "No Preservatives"
    ],
    "tags": [
      "juice",
      "pineapple"
    ],
    "perUnit": "₦1,350 / L",
    "freshnessDate": "Best before 2024",
    "origin": "Nigeria",
    "storage": "Chill before serving. Refrigerate after opening.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "120 kcal"
      },
      {
        "label": "Vitamin C",
        "value": "35% DV"
      }
    ]
  },
  {
    "id": "be-002",
    "name": "Nescafé Classic Instant Coffee",
    "slug": "nescafe-classic-coffee",
    "category": "beverages",
    "price": 2850,
    "unit": "200g jar",
    "rating": 4.7,
    "reviews": 197,
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "description": "Rich aromatic instant coffee for bold mornings.",
    "badges": [
      "Morning Booster"
    ],
    "tags": [
      "coffee"
    ],
    "perUnit": "₦14,250 / kg",
    "freshnessDate": "Roasted within 3 months",
    "origin": "Côte d’Ivoire",
    "storage": "Keep in airtight container.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Caffeine",
        "value": "65mg"
      }
    ]
  },
  {
    "id": "bd-001",
    "name": "Peak Evaporated Milk",
    "slug": "peak-evaporated-milk",
    "category": "breakfast-dairy",
    "price": 550,
    "unit": "160g tin",
    "rating": 4.8,
    "reviews": 420,
    "image": "https://images.unsplash.com/photo-1580915412050-99869371b7b7?auto=format&fit=crop&w=800&q=80",
    "description": "Rich and creamy evaporated milk for beverages and cooking.",
    "badges": [
      "Family Favourite"
    ],
    "tags": [
      "milk",
      "evaporated"
    ],
    "perUnit": "₦3,438 / kg",
    "freshnessDate": "Best before 2025",
    "origin": "Netherlands",
    "storage": "Refrigerate after opening and use within 3 days.",
    "allergens": "Milk",
    "nutrition": [
      {
        "label": "Calories",
        "value": "170 kcal"
      },
      {
        "label": "Calcium",
        "value": "240mg"
      }
    ]
  },
  {
    "id": "bd-002",
    "name": "Fresh Farm Eggs (Large)",
    "slug": "fresh-farm-eggs-large",
    "category": "breakfast-dairy",
    "price": 2500,
    "unit": "Crate of 30",
    "rating": 4.9,
    "reviews": 310,
    "image": "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80",
    "description": "Farm-raised large eggs delivered with care to maintain freshness.",
    "badges": [
      "Daily Fresh"
    ],
    "tags": [
      "eggs"
    ],
    "perUnit": "₦83 / egg",
    "freshnessDate": "Laid within 72 hours",
    "origin": "Ogun State, Nigeria",
    "storage": "Keep refrigerated.",
    "allergens": "Eggs",
    "nutrition": [
      {
        "label": "Protein",
        "value": "6g"
      },
      {
        "label": "Vitamin D",
        "value": "15% DV"
      }
    ]
  },
  {
    "id": "sn-001",
    "name": "Plantain Chips Spicy",
    "slug": "plantain-chips-spicy",
    "category": "snacks",
    "price": 450,
    "unit": "80g pack",
    "rating": 4.6,
    "reviews": 156,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80&sat=50",
    "description": "Crispy spicy plantain chips fried in fresh vegetable oil.",
    "badges": [
      "Made in Nigeria"
    ],
    "tags": [
      "plantain chips"
    ],
    "perUnit": "₦5,625 / kg",
    "freshnessDate": "Fried this week",
    "origin": "Lagos, Nigeria",
    "storage": "Store in airtight container after opening.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "150 kcal"
      },
      {
        "label": "Fat",
        "value": "6g"
      }
    ]
  },
  {
    "id": "sn-002",
    "name": "Kilishi (Spicy Beef Jerky)",
    "slug": "kilishi-spicy-jerky",
    "category": "snacks",
    "price": 3900,
    "unit": "250g pack",
    "rating": 4.9,
    "reviews": 143,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Authentic Northern Nigeria kilishi made with premium beef.",
    "badges": [
      "Protein Rich"
    ],
    "tags": [
      "kilishi",
      "jerky"
    ],
    "perUnit": "₦15,600 / kg",
    "freshnessDate": "Smoked this week",
    "origin": "Kano State, Nigeria",
    "storage": "Store in airtight pack.",
    "allergens": "Peanuts",
    "nutrition": [
      {
        "label": "Protein",
        "value": "28g"
      },
      {
        "label": "Calories",
        "value": "210 kcal"
      }
    ]
  },
  {
    "id": "hh-001",
    "name": "Morning Fresh Dishwashing Liquid",
    "slug": "morning-fresh-dishwash-lemon",
    "category": "household",
    "price": 1150,
    "unit": "700ml bottle",
    "rating": 4.7,
    "reviews": 220,
    "image": "https://images.unsplash.com/photo-1600962815717-d87cc3e93721?auto=format&fit=crop&w=800&q=80",
    "description": "Powerful grease-cutting formula with zesty lemon fragrance.",
    "badges": [
      "Best Seller"
    ],
    "tags": [
      "dishwashing liquid"
    ],
    "perUnit": "₦1,643 / L",
    "freshnessDate": "Manufactured this quarter",
    "origin": "Nigeria",
    "storage": "Store upright and away from children.",
    "allergens": "None",
    "nutrition": []
  },
  {
    "id": "hh-002",
    "name": "Viva Plus Detergent",
    "slug": "viva-plus-detergent",
    "category": "household",
    "price": 1650,
    "unit": "2kg bag",
    "rating": 4.5,
    "reviews": 146,
    "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    "description": "Foamy detergent with long-lasting fragrance for clean laundry.",
    "badges": [
      "Value Pack"
    ],
    "tags": [
      "detergent"
    ],
    "perUnit": "₦825 / kg",
    "freshnessDate": "Manufactured this year",
    "origin": "Nigeria",
    "storage": "Store in a dry place.",
    "allergens": "Avoid contact with eyes",
    "nutrition": []
  },
  {
    "id": "pc-001",
    "name": "Dettol Antibacterial Soap Original",
    "slug": "dettol-antibacterial-soap",
    "category": "personal-care",
    "price": 450,
    "unit": "110g bar",
    "rating": 4.7,
    "reviews": 275,
    "image": "https://images.unsplash.com/photo-1584265549845-1a3081b27390?auto=format&fit=crop&w=800&q=80",
    "description": "Trusted antibacterial soap for all skin types.",
    "badges": [
      "Dermatologist Tested"
    ],
    "tags": [
      "soap",
      "antibacterial"
    ],
    "perUnit": "₦4,091 / kg",
    "freshnessDate": "Manufactured this year",
    "origin": "Nigeria",
    "storage": "Store in cool dry place.",
    "allergens": "Contains chloroxylenol",
    "nutrition": []
  },
  {
    "id": "pc-002",
    "name": "Shea Moisture Coconut & Hibiscus Curl Enhancing Smoothie",
    "slug": "shea-moisture-curl-smoothie",
    "category": "personal-care",
    "price": 8500,
    "unit": "326ml jar",
    "rating": 4.8,
    "reviews": 122,
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "description": "Defines curls and reduces frizz with natural ingredients.",
    "badges": [
      "Natural Ingredients"
    ],
    "tags": [
      "haircare",
      "curl"
    ],
    "perUnit": "₦26,073 / L",
    "freshnessDate": "Manufactured this year",
    "origin": "USA",
    "storage": "Store at room temperature.",
    "allergens": "Contains tree nut oils",
    "nutrition": []
  },
  {
    "id": "ba-001",
    "name": "Pampers Premium Care Diapers Size 3",
    "slug": "pampers-premium-care-size3",
    "category": "babies",
    "price": 8900,
    "unit": "Pack of 60",
    "rating": 4.9,
    "reviews": 342,
    "image": "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
    "description": "Ultra-soft diapers with 12-hour dryness for babies 6-10kg.",
    "badges": [
      "Mum Approved"
    ],
    "tags": [
      "diapers"
    ],
    "perUnit": "₦148 / diaper",
    "freshnessDate": "Manufactured this year",
    "origin": "Poland",
    "storage": "Store in cool dry place.",
    "allergens": "Hypoallergenic materials",
    "nutrition": []
  },
  {
    "id": "ba-002",
    "name": "Johnson’s Baby Wipes (Aloe Vera)",
    "slug": "johnsons-baby-wipes",
    "category": "babies",
    "price": 2350,
    "unit": "Pack of 3 (192 wipes)",
    "rating": 4.6,
    "reviews": 150,
    "image": "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=800&q=80",
    "description": "Ultra-soft wipes infused with aloe for gentle cleansing.",
    "badges": [
      "Dermatologist Tested"
    ],
    "tags": [
      "baby wipes"
    ],
    "perUnit": "₦12 / wipe",
    "freshnessDate": "Manufactured this year",
    "origin": "Thailand",
    "storage": "Keep sealed to maintain moisture.",
    "allergens": "None",
    "nutrition": []
  },
  {
    "id": "de-001",
    "name": "OMOOLA Saver Combo: Rice + Oil + Seasoning",
    "slug": "omoola-saver-combo",
    "category": "deals",
    "price": 24500,
    "unit": "Bundle",
    "rating": 4.9,
    "reviews": 212,
    "image": "https://images.unsplash.com/photo-1604908177522-4023ac76e1f8?auto=format&fit=crop&w=800&q=80&sat=30",
    "description": "Get 10kg royal stallion rice, 3L vegetable oil, and a pack of seasoning cubes at a bundle price.",
    "badges": [
      "Bundle & Save"
    ],
    "tags": [
      "bundle",
      "rice",
      "oil"
    ],
    "perUnit": "Save ₦3,500",
    "freshnessDate": "Packed this week",
    "origin": "Nigeria",
    "storage": "Store in cool dry place.",
    "allergens": "None",
    "nutrition": []
  },
  {
    "id": "de-002",
    "name": "Weekend BBQ Box",
    "slug": "weekend-bbq-box",
    "category": "deals",
    "price": 18500,
    "unit": "Bundle",
    "rating": 4.8,
    "reviews": 98,
    "image": "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80&sat=40",
    "description": "Includes marinated chicken wings, suya spice, bell peppers, and charcoal.",
    "badges": [
      "Limited Offer"
    ],
    "tags": [
      "bbq",
      "bundle"
    ],
    "perUnit": "Feeds 6 people",
    "freshnessDate": "Prepared today",
    "origin": "Nigeria",
    "storage": "Keep meats refrigerated.",
    "allergens": "Peanuts",
    "nutrition": []
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Farm Fresh"
    ],
    "tags": [
      "farm fresh tomatoe"
    ],
    "perUnit": "₦2,400",
    "freshnessDate": "Checked today",
    "origin": "Benue State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-fr-001",
    "name": "Farm Fresh Tomatoes Basket",
    "slug": "farm-fresh-tomatoes",
    "category": "fresh-produce",
    "price": 2400,
    "unit": "4kg basket",
    "image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality farm fresh tomatoes basket sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Farm Fresh"
    ],
    "tags": [
      "juicy watermelon h"
    ],
    "perUnit": "₦1,800",
    "freshnessDate": "Checked today",
    "origin": "Nasarawa, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-fr-002",
    "name": "Juicy Watermelon Half",
    "slug": "juicy-watermelon-half",
    "category": "fresh-produce",
    "price": 1800,
    "unit": "Half melon",
    "image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality juicy watermelon half sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Farm Fresh"
    ],
    "tags": [
      "pineapple royale"
    ],
    "perUnit": "₦1,200",
    "freshnessDate": "Checked today",
    "origin": "Cross River, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-fr-003",
    "name": "Pineapple Royale",
    "slug": "pineapple-royale",
    "category": "fresh-produce",
    "price": 1200,
    "unit": "Large fruit",
    "image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality pineapple royale sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Farm Fresh"
    ],
    "tags": [
      "fresh okro pods"
    ],
    "perUnit": "₦950 / pack",
    "freshnessDate": "Checked today",
    "origin": "Delta State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-fr-004",
    "name": "Fresh Okro Pods",
    "slug": "fresh-okro-pods",
    "category": "fresh-produce",
    "price": 950,
    "unit": "500g pack",
    "image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality fresh okro pods sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Farm Fresh"
    ],
    "tags": [
      "irish potatoes"
    ],
    "perUnit": "₦2,300 / pack",
    "freshnessDate": "Checked today",
    "origin": "Plateau State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-fr-005",
    "name": "Irish Potatoes",
    "slug": "irish-potatoes",
    "category": "fresh-produce",
    "price": 2300,
    "unit": "2kg bag",
    "image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality irish potatoes sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Farm Fresh"
    ],
    "tags": [
      "fresh lime pack"
    ],
    "perUnit": "₦700 / pack",
    "freshnessDate": "Checked today",
    "origin": "Lagos, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-fr-006",
    "name": "Fresh Lime Pack",
    "slug": "fresh-lime-pack",
    "category": "fresh-produce",
    "price": 700,
    "unit": "Pack of 6",
    "image": "https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality fresh lime pack sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "lean beef mince"
    ],
    "perUnit": "₦5,200 / pack",
    "freshnessDate": "Checked today",
    "origin": "Lagos, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-me-007",
    "name": "Lean Beef Mince",
    "slug": "lean-beef-mince",
    "category": "meat-fish",
    "price": 5200,
    "unit": "1kg pack",
    "image": "https://images.unsplash.com/photo-1514516345957-556ca7d90a5a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality lean beef mince sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "turkey wings"
    ],
    "perUnit": "₦5,600 / pack",
    "freshnessDate": "Checked today",
    "origin": "Ogun State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-me-008",
    "name": "Turkey Wings",
    "slug": "turkey-wings",
    "category": "meat-fish",
    "price": 5600,
    "unit": "1.2kg pack",
    "image": "https://images.unsplash.com/photo-1514516345957-556ca7d90a5a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality turkey wings sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "goat meat mixed cu"
    ],
    "perUnit": "₦6,800 / pack",
    "freshnessDate": "Checked today",
    "origin": "Niger State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-me-009",
    "name": "Goat Meat Mixed Cut",
    "slug": "goat-meat-mixed-cut",
    "category": "meat-fish",
    "price": 6800,
    "unit": "1kg pack",
    "image": "https://images.unsplash.com/photo-1514516345957-556ca7d90a5a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality goat meat mixed cut sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "fresh tilapia whol"
    ],
    "perUnit": "₦3,800",
    "freshnessDate": "Checked today",
    "origin": "Oyo State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-me-010",
    "name": "Fresh Tilapia Whole",
    "slug": "fresh-tilapia-whole",
    "category": "meat-fish",
    "price": 3800,
    "unit": "1.3kg fish",
    "image": "https://images.unsplash.com/photo-1514516345957-556ca7d90a5a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality fresh tilapia whole sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "chicken gizzard pa"
    ],
    "perUnit": "₦3,100 / pack",
    "freshnessDate": "Checked today",
    "origin": "Ibadan, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-me-011",
    "name": "Chicken Gizzard Pack",
    "slug": "chicken-gizzard-pack",
    "category": "meat-fish",
    "price": 3100,
    "unit": "1kg pack",
    "image": "https://images.unsplash.com/photo-1514516345957-556ca7d90a5a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality chicken gizzard pack sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "ofada brown rice"
    ],
    "perUnit": "₦5,800 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Ogun State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-012",
    "name": "Ofada Brown Rice",
    "slug": "ofada-brown-rice",
    "category": "pantry",
    "price": 5800,
    "unit": "5kg bag",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality ofada brown rice sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "honey beans"
    ],
    "perUnit": "₦4,600 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Oyo State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-013",
    "name": "Honey Beans (Oloyin)",
    "slug": "honey-beans",
    "category": "pantry",
    "price": 4600,
    "unit": "5kg bag",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality honey beans (oloyin) sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "iru locust beans p"
    ],
    "perUnit": "₦1,650",
    "freshnessDate": "Fresh stock",
    "origin": "Kwara State, Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-014",
    "name": "Iru (Locust Beans) Powder",
    "slug": "iru-locust-beans-powder",
    "category": "pantry",
    "price": 1650,
    "unit": "250g pouch",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality iru (locust beans) powder sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "derica tomato pure"
    ],
    "perUnit": "₦650",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-015",
    "name": "Derica Tomato Puree",
    "slug": "derica-tomato-puree",
    "category": "pantry",
    "price": 650,
    "unit": "400g tin",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality derica tomato puree sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "power oil vegetabl"
    ],
    "perUnit": "₦7,800",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-016",
    "name": "Power Oil Vegetable Oil",
    "slug": "power-oil-vegetable",
    "category": "pantry",
    "price": 7800,
    "unit": "5L keg",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality power oil vegetable oil sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "dangote spaghetti"
    ],
    "perUnit": "₦950 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-017",
    "name": "Dangote Spaghetti",
    "slug": "dangote-spaghetti",
    "category": "pantry",
    "price": 950,
    "unit": "500g pack",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality dangote spaghetti sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "knorr chicken cube"
    ],
    "perUnit": "₦950 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pa-018",
    "name": "Knorr Chicken Cubes",
    "slug": "knorr-chicken-cubes",
    "category": "pantry",
    "price": 950,
    "unit": "Pack of 50",
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    "description": "Quality knorr chicken cubes sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "lipton yellow labe"
    ],
    "perUnit": "₦1,250 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Kenya",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-be-019",
    "name": "Lipton Yellow Label Tea",
    "slug": "lipton-yellow-label-tea",
    "category": "beverages",
    "price": 1250,
    "unit": "100 tea bags",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    "description": "Quality lipton yellow label tea sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "milo energy drink"
    ],
    "perUnit": "₦3,200",
    "freshnessDate": "Fresh stock",
    "origin": "Singapore",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-be-020",
    "name": "Milo Energy Drink Powder",
    "slug": "milo-energy-drink",
    "category": "beverages",
    "price": 3200,
    "unit": "500g tin",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    "description": "Quality milo energy drink powder sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "chivita active lem"
    ],
    "perUnit": "₦1,450 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-be-021",
    "name": "Chivita Active Zesty Lemon",
    "slug": "chivita-active-lemon",
    "category": "beverages",
    "price": 1450,
    "unit": "1L pack",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    "description": "Quality chivita active zesty lemon sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "lucozade boost"
    ],
    "perUnit": "₦450",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-be-022",
    "name": "Lucozade Boost",
    "slug": "lucozade-boost",
    "category": "beverages",
    "price": 450,
    "unit": "330ml bottle",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    "description": "Quality lucozade boost sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "malta guinness can"
    ],
    "perUnit": "₦550",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-be-023",
    "name": "Malta Guinness Can",
    "slug": "malta-guinness-can",
    "category": "beverages",
    "price": 550,
    "unit": "330ml can",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    "description": "Quality malta guinness can sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "nestle pure life w"
    ],
    "perUnit": "₦950 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-be-024",
    "name": "Nestlé Pure Life Water",
    "slug": "nestle-pure-life-water",
    "category": "beverages",
    "price": 950,
    "unit": "Pack of 6 (1.5L)",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80",
    "description": "Quality nestlé pure life water sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "quaker oats quick"
    ],
    "perUnit": "₦1,950 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "UK",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-br-025",
    "name": "Quaker Oats Quick Cooking",
    "slug": "quaker-oats-quick",
    "category": "breakfast-dairy",
    "price": 1950,
    "unit": "500g pack",
    "image": "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality quaker oats quick cooking sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "nutzy peanut butte"
    ],
    "perUnit": "₦1,850",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-br-026",
    "name": "Nutzy Peanut Butter Crunchy",
    "slug": "nutzy-peanut-butter",
    "category": "breakfast-dairy",
    "price": 1850,
    "unit": "510g jar",
    "image": "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality nutzy peanut butter crunchy sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "greek yoghurt plai"
    ],
    "perUnit": "₦1,450",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-br-027",
    "name": "Greek Yoghurt Plain",
    "slug": "greek-yoghurt-plain",
    "category": "breakfast-dairy",
    "price": 1450,
    "unit": "500ml tub",
    "image": "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality greek yoghurt plain sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "premium forest hon"
    ],
    "perUnit": "₦3,200",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-br-028",
    "name": "Premium Forest Honey",
    "slug": "premium-forest-honey",
    "category": "breakfast-dairy",
    "price": 3200,
    "unit": "750g jar",
    "image": "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality premium forest honey sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "butterfield croiss"
    ],
    "perUnit": "₦1,650 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "France",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-br-029",
    "name": "Butterfield Croissants",
    "slug": "butterfield-croissants",
    "category": "breakfast-dairy",
    "price": 1650,
    "unit": "Pack of 6",
    "image": "https://images.unsplash.com/photo-1495197359483-d092478c170a?auto=format&fit=crop&w=800&q=80",
    "description": "Quality butterfield croissants sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "fun snax chin chin"
    ],
    "perUnit": "₦850",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-sn-030",
    "name": "Fun Snax Chin Chin",
    "slug": "fun-snax-chin-chin",
    "category": "snacks",
    "price": 850,
    "unit": "250g tub",
    "image": "https://images.unsplash.com/photo-1590080876353-dcff0870cc27?auto=format&fit=crop&w=800&q=80",
    "description": "Quality fun snax chin chin sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "beloxxi cream crac"
    ],
    "perUnit": "₦650 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-sn-031",
    "name": "Beloxxi Cream Crackers",
    "slug": "beloxxi-cream-crackers",
    "category": "snacks",
    "price": 650,
    "unit": "500g pack",
    "image": "https://images.unsplash.com/photo-1590080876353-dcff0870cc27?auto=format&fit=crop&w=800&q=80",
    "description": "Quality beloxxi cream crackers sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "nature valley crun"
    ],
    "perUnit": "₦1,950 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "USA",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-sn-032",
    "name": "Nature Valley Crunchy Bars",
    "slug": "nature-valley-crunchy",
    "category": "snacks",
    "price": 1950,
    "unit": "210g pack",
    "image": "https://images.unsplash.com/photo-1590080876353-dcff0870cc27?auto=format&fit=crop&w=800&q=80",
    "description": "Quality nature valley crunchy bars sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "cadbury dairy milk"
    ],
    "perUnit": "₦850",
    "freshnessDate": "Fresh stock",
    "origin": "UK",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-sn-033",
    "name": "Cadbury Dairy Milk",
    "slug": "cadbury-dairy-milk",
    "category": "snacks",
    "price": 850,
    "unit": "150g bar",
    "image": "https://images.unsplash.com/photo-1590080876353-dcff0870cc27?auto=format&fit=crop&w=800&q=80",
    "description": "Quality cadbury dairy milk sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "munch it sweet spi"
    ],
    "perUnit": "₦450 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-sn-034",
    "name": "Munch It Sweet & Spicy",
    "slug": "munch-it-sweet-spicy",
    "category": "snacks",
    "price": 450,
    "unit": "60g pack",
    "image": "https://images.unsplash.com/photo-1590080876353-dcff0870cc27?auto=format&fit=crop&w=800&q=80",
    "description": "Quality munch it sweet & spicy sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "harpic power plus"
    ],
    "perUnit": "₦1,250",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ho-035",
    "name": "Harpic Power Plus Toilet Cleaner",
    "slug": "harpic-power-plus",
    "category": "household",
    "price": 1250,
    "unit": "500ml bottle",
    "image": "https://images.unsplash.com/photo-1581579186989-613ea1b7db3c?auto=format&fit=crop&w=800&q=80",
    "description": "Quality harpic power plus toilet cleaner sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "royal tissues 3ply"
    ],
    "perUnit": "₦1,350 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ho-036",
    "name": "Royal Tissues (3-Ply)",
    "slug": "royal-tissues-3ply",
    "category": "household",
    "price": 1350,
    "unit": "Pack of 10",
    "image": "https://images.unsplash.com/photo-1581579186989-613ea1b7db3c?auto=format&fit=crop&w=800&q=80",
    "description": "Quality royal tissues (3-ply) sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "dettol disinfectan"
    ],
    "perUnit": "₦2,200",
    "freshnessDate": "Fresh stock",
    "origin": "UK",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ho-037",
    "name": "Dettol Disinfectant",
    "slug": "dettol-disinfectant",
    "category": "household",
    "price": 2200,
    "unit": "750ml bottle",
    "image": "https://images.unsplash.com/photo-1581579186989-613ea1b7db3c?auto=format&fit=crop&w=800&q=80",
    "description": "Quality dettol disinfectant sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "jik bleach regular"
    ],
    "perUnit": "₦1,050",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ho-038",
    "name": "JIK Bleach Regular",
    "slug": "jik-bleach-regular",
    "category": "household",
    "price": 1050,
    "unit": "1L bottle",
    "image": "https://images.unsplash.com/photo-1581579186989-613ea1b7db3c?auto=format&fit=crop&w=800&q=80",
    "description": "Quality jik bleach regular sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "oralb pro health t"
    ],
    "perUnit": "₦1,250",
    "freshnessDate": "Fresh stock",
    "origin": "Poland",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pe-039",
    "name": "Oral-B Pro-Health Toothpaste",
    "slug": "oralb-pro-health-toothpaste",
    "category": "personal-care",
    "price": 1250,
    "unit": "140g tube",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "description": "Quality oral-b pro-health toothpaste sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "nivea men deep cle"
    ],
    "perUnit": "₦3,150",
    "freshnessDate": "Fresh stock",
    "origin": "Germany",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pe-040",
    "name": "Nivea Men Deep Clean Body Wash",
    "slug": "nivea-men-deep-clean",
    "category": "personal-care",
    "price": 3150,
    "unit": "500ml bottle",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "description": "Quality nivea men deep clean body wash sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "fair white gold lo"
    ],
    "perUnit": "₦10,200",
    "freshnessDate": "Fresh stock",
    "origin": "France",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pe-041",
    "name": "Fair & White Gold Body Lotion",
    "slug": "fair-white-gold-lotion",
    "category": "personal-care",
    "price": 10200,
    "unit": "250ml bottle",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "description": "Quality fair & white gold body lotion sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "always ultra thin"
    ],
    "perUnit": "₦1,450 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-pe-042",
    "name": "Always Ultra Thin Pads",
    "slug": "always-ultra-thin",
    "category": "personal-care",
    "price": 1450,
    "unit": "Pack of 10",
    "image": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "description": "Quality always ultra thin pads sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Best Value"
    ],
    "tags": [
      "cussons baby oil"
    ],
    "perUnit": "₦1,450",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ba-043",
    "name": "Cussons Baby Oil Soft & Smooth",
    "slug": "cussons-baby-oil",
    "category": "babies",
    "price": 1450,
    "unit": "200ml bottle",
    "image": "https://images.unsplash.com/photo-1530023367847-a683933f417d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality cussons baby oil soft & smooth sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "tommee tippee feed"
    ],
    "perUnit": "₦4,750",
    "freshnessDate": "Fresh stock",
    "origin": "UK",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ba-044",
    "name": "Tommee Tippee Feeding Bottle",
    "slug": "tommee-tippee-feeding-bottle",
    "category": "babies",
    "price": 4750,
    "unit": "260ml bottle",
    "image": "https://images.unsplash.com/photo-1530023367847-a683933f417d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality tommee tippee feeding bottle sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "gerber rice cereal"
    ],
    "perUnit": "₦3,200 / pack",
    "freshnessDate": "Fresh stock",
    "origin": "USA",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-ba-045",
    "name": "Gerber Rice Cereal",
    "slug": "gerber-rice-cereal",
    "category": "babies",
    "price": 3200,
    "unit": "227g pack",
    "image": "https://images.unsplash.com/photo-1530023367847-a683933f417d?auto=format&fit=crop&w=800&q=80",
    "description": "Quality gerber rice cereal sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "breakfast delight "
    ],
    "perUnit": "₦9,800",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-de-046",
    "name": "Breakfast Delight Pack",
    "slug": "breakfast-delight-pack",
    "category": "deals",
    "price": 9800,
    "unit": "Bundle",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80&sat=20",
    "description": "Quality breakfast delight pack sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "healthy snacker cr"
    ],
    "perUnit": "₦14,500",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-de-047",
    "name": "Healthy Snacker Crate",
    "slug": "healthy-snacker-crate",
    "category": "deals",
    "price": 14500,
    "unit": "Bundle",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80&sat=20",
    "description": "Quality healthy snacker crate sourced with care for everyday Nigerian homes."
  },
  {
    "rating": 4.7,
    "reviews": 84,
    "inStock": true,
    "badges": [
      "Top Rated"
    ],
    "tags": [
      "family essentials "
    ],
    "perUnit": "₦21,500",
    "freshnessDate": "Fresh stock",
    "origin": "Nigeria",
    "storage": "Store in a cool dry place.",
    "allergens": "None",
    "nutrition": [],
    "id": "gen-de-048",
    "name": "Family Essentials Saver",
    "slug": "family-essentials-saver",
    "category": "deals",
    "price": 21500,
    "unit": "Bundle",
    "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80&sat=20",
    "description": "Quality family essentials saver sourced with care for everyday Nigerian homes."
  },
  {
    "id": "var-001",
    "name": "Organic Ugu Leaves (Pumpkin Leaves) - Value Pack",
    "slug": "organic-ugu-leaves-value-pack",
    "category": "fresh-produce",
    "price": 1710,
    "unit": "Bundle",
    "rating": 4.8,
    "reviews": 134,
    "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80",
    "description": "Freshly harvested ugu leaves, perfect for soups and stews. Washed and ready to cook. Bigger size for family savings.",
    "badges": [
      "Value Pack",
      "Farm Fresh",
      "Washed & Ready"
    ],
    "tags": [
      "vegetable",
      "ugu",
      "greens"
    ],
    "perUnit": "₦950 / bundle",
    "freshnessDate": "Harvested today",
    "origin": "Ogun State, Nigeria",
    "storage": "Keep refrigerated and consume within 3 days.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "45 kcal"
      },
      {
        "label": "Vitamin A",
        "value": "35% DV"
      },
      {
        "label": "Iron",
        "value": "15% DV"
      }
    ]
  },
  {
    "id": "var-002",
    "name": "Sweet Ripe Plantain Fingers - Value Pack",
    "slug": "sweet-ripe-plantain-value-pack",
    "category": "fresh-produce",
    "price": 3240,
    "unit": "Pack of 5",
    "rating": 4.7,
    "reviews": 98,
    "image": "https://images.unsplash.com/photo-1522184216315-dc4a88b26ec5?auto=format&fit=crop&w=800&q=80",
    "description": "Hand-selected ripe plantains with a creamy texture. Ideal for frying and grilling. Bigger size for family savings.",
    "badges": [
      "Customer Favourite",
      "Value Pack"
    ],
    "tags": [
      "plantain",
      "ripe"
    ],
    "perUnit": "₦360 / finger",
    "freshnessDate": "Checked this morning",
    "origin": "Oyo State, Nigeria",
    "storage": "Store at room temperature until ripe enough.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "218 kcal"
      },
      {
        "label": "Potassium",
        "value": "20% DV"
      },
      {
        "label": "Fiber",
        "value": "14% DV"
      }
    ]
  },
  {
    "id": "var-003",
    "name": "Crunchy Garden Carrots - Value Pack",
    "slug": "crunchy-garden-carrots-value-pack",
    "category": "fresh-produce",
    "price": 1980,
    "unit": "1kg pack",
    "rating": 4.6,
    "reviews": 72,
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80",
    "description": "Bright orange carrots, washed and trimmed for easy cooking and snacking. Bigger size for family savings.",
    "badges": [
      "High in Vitamin A",
      "Value Pack"
    ],
    "tags": [
      "carrots",
      "vegetables"
    ],
    "perUnit": "₦1,100 / kg",
    "freshnessDate": "Harvested within 24 hours",
    "origin": "Jos Plateau, Nigeria",
    "storage": "Keep refrigerated in perforated bag.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "41 kcal"
      },
      {
        "label": "Vitamin A",
        "value": "334% DV"
      },
      {
        "label": "Fiber",
        "value": "2.8g"
      }
    ]
  },
  {
    "id": "var-004",
    "name": "Fresh Catfish Steaks - Value Pack",
    "slug": "fresh-catfish-steaks-value-pack",
    "category": "meat-fish",
    "price": 8640,
    "unit": "1.2kg pack",
    "rating": 4.7,
    "reviews": 116,
    "image": "https://images.unsplash.com/photo-1604908177522-4023ac76e1f8?auto=format&fit=crop&w=800&q=80",
    "description": "Descaled and cleaned catfish steaks perfect for pepper soup or grilling. Bigger size for family savings.",
    "badges": [
      "Rich in Omega-3",
      "Value Pack"
    ],
    "tags": [
      "catfish",
      "seafood"
    ],
    "perUnit": "₦4,000 / kg",
    "freshnessDate": "Processed this morning",
    "origin": "Epe, Lagos",
    "storage": "Keep frozen and thaw before use.",
    "allergens": "Fish",
    "nutrition": [
      {
        "label": "Protein",
        "value": "18g"
      },
      {
        "label": "Fat",
        "value": "6g"
      },
      {
        "label": "Omega-3",
        "value": "1.2g"
      }
    ]
  },
  {
    "id": "var-005",
    "name": "Tender Chicken Drumsticks - Value Pack",
    "slug": "tender-chicken-drumsticks-value-pack",
    "category": "meat-fish",
    "price": 7560,
    "unit": "1.5kg pack",
    "rating": 4.8,
    "reviews": 205,
    "image": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    "description": "Well-trimmed chicken drumsticks, hormone-free and freshly packed. Bigger size for family savings.",
    "badges": [
      "Halal",
      "Value Pack"
    ],
    "tags": [
      "chicken"
    ],
    "perUnit": "₦2,800 / kg",
    "freshnessDate": "Processed today",
    "origin": "Ibadan, Nigeria",
    "storage": "Keep chilled at 4°C or below.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Protein",
        "value": "24g"
      },
      {
        "label": "Fat",
        "value": "9g"
      }
    ]
  },
  {
    "id": "var-006",
    "name": "Smoked Titus (Mackerel) - Value Pack",
    "slug": "smoked-titus-mackerel-value-pack",
    "category": "meat-fish",
    "price": 6480,
    "unit": "4 pieces",
    "rating": 4.5,
    "reviews": 93,
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "description": "Traditional smoked Titus fish with rich flavour and aroma. Bigger size for family savings.",
    "badges": [
      "Customer Favourite",
      "Value Pack"
    ],
    "tags": [
      "smoked fish",
      "titus"
    ],
    "perUnit": "₦900 / piece",
    "freshnessDate": "Smoked within 12 hours",
    "origin": "Ondo State, Nigeria",
    "storage": "Store in a cool, dry place.",
    "allergens": "Fish",
    "nutrition": [
      {
        "label": "Protein",
        "value": "21g"
      },
      {
        "label": "Omega-3",
        "value": "1.9g"
      }
    ]
  },
  {
    "id": "var-007",
    "name": "Golden Penny Semovita - Value Pack",
    "slug": "golden-penny-semovita-2kg-value-pack",
    "category": "pantry",
    "price": 3780,
    "unit": "2kg bag",
    "rating": 4.8,
    "reviews": 302,
    "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    "description": "Smooth, lump-free semovita for perfect swallow meals. Bigger size for family savings.",
    "badges": [
      "Best Seller",
      "Value Pack"
    ],
    "tags": [
      "semovita",
      "swallow"
    ],
    "perUnit": "₦1,050 / kg",
    "freshnessDate": "Milled last week",
    "origin": "Nigeria",
    "storage": "Store in a cool, dry place.",
    "allergens": "Gluten",
    "nutrition": [
      {
        "label": "Carbohydrates",
        "value": "74g"
      },
      {
        "label": "Protein",
        "value": "8g"
      }
    ]
  },
  {
    "id": "var-008",
    "name": "Indomie Instant Noodles Chicken Flavour - Value Pack",
    "slug": "indomie-chicken-flavour-70g-value-pack",
    "category": "pantry",
    "price": 5580,
    "unit": "Pack of 20 (70g)",
    "rating": 4.9,
    "reviews": 512,
    "image": "https://images.unsplash.com/photo-1589307000277-891dd4e85c9b?auto=format&fit=crop&w=800&q=80",
    "description": "Nigeria’s favourite instant noodles with rich chicken seasoning. Bigger size for family savings.",
    "badges": [
      "Bundle Deal",
      "Value Pack"
    ],
    "tags": [
      "indomie",
      "noodles",
      "chicken"
    ],
    "perUnit": "₦155 / pack",
    "freshnessDate": "Factory fresh",
    "origin": "Nigeria",
    "storage": "Store in a dry place.",
    "allergens": "Gluten, Soy",
    "nutrition": [
      {
        "label": "Calories",
        "value": "320 kcal"
      },
      {
        "label": "Protein",
        "value": "6g"
      }
    ]
  },
  {
    "id": "var-009",
    "name": "Dano Full Cream Milk Powder - Value Pack",
    "slug": "dano-full-cream-milk-value-pack",
    "category": "pantry",
    "price": 9360,
    "unit": "900g pouch",
    "rating": 4.8,
    "reviews": 268,
    "image": "https://images.unsplash.com/photo-1580915411954-282cb1c6b8c5?auto=format&fit=crop&w=800&q=80",
    "description": "Creamy and nutritious milk powder fortified with vitamins. Bigger size for family savings.",
    "badges": [
      "Rich in Calcium",
      "Value Pack"
    ],
    "tags": [
      "milk",
      "powder"
    ],
    "perUnit": "₦5,778 / kg",
    "freshnessDate": "Best before 2025",
    "origin": "Denmark",
    "storage": "Store in an airtight container after opening.",
    "allergens": "Milk",
    "nutrition": [
      {
        "label": "Protein",
        "value": "26g"
      },
      {
        "label": "Calcium",
        "value": "720mg"
      }
    ]
  },
  {
    "id": "var-010",
    "name": "Chi Exotic Pineapple & Coconut Juice - Value Pack",
    "slug": "chi-exotic-pineapple-coconut-value-pack",
    "category": "beverages",
    "price": 2430,
    "unit": "1L pack",
    "rating": 4.6,
    "reviews": 152,
    "image": "https://images.unsplash.com/photo-1571074921856-17e2d9c95c87?auto=format&fit=crop&w=800&q=80",
    "description": "Tropical blend of pineapple and coconut with refreshing taste. Bigger size for family savings.",
    "badges": [
      "No Preservatives",
      "Value Pack"
    ],
    "tags": [
      "juice",
      "pineapple"
    ],
    "perUnit": "₦1,350 / L",
    "freshnessDate": "Best before 2024",
    "origin": "Nigeria",
    "storage": "Chill before serving. Refrigerate after opening.",
    "allergens": "None",
    "nutrition": [
      {
        "label": "Calories",
        "value": "120 kcal"
      },
      {
        "label": "Vitamin C",
        "value": "35% DV"
      }
    ]
  }
];

