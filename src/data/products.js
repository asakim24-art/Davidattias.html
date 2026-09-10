// Product & category catalog. Replace `emoji`/`color` with real photos later:
// just add an `image: "/products/xxx.jpg"` field and ProductCard/ProductGallery
// will use it automatically instead of the placeholder tile.

export const categories = [
  { slug: "electronics", name: "אלקטרוניקה", emoji: "📱", color: "from-blue-500 to-cyan-400" },
  { slug: "women-fashion", name: "אופנת נשים", emoji: "👗", color: "from-pink-500 to-rose-400" },
  { slug: "men-fashion", name: "אופנת גברים", emoji: "👔", color: "from-slate-700 to-slate-500" },
  { slug: "home", name: "בית וגינה", emoji: "🏠", color: "from-amber-500 to-orange-400" },
  { slug: "beauty", name: "יופי וטיפוח", emoji: "💄", color: "from-fuchsia-500 to-pink-400" },
  { slug: "toys", name: "צעצועים וילדים", emoji: "🧸", color: "from-yellow-500 to-amber-400" },
  { slug: "sports", name: "ספורט וחוץ", emoji: "⚽", color: "from-emerald-500 to-green-400" },
  { slug: "jewelry", name: "תכשיטים ואביזרים", emoji: "💍", color: "from-violet-500 to-purple-400" },
];

function p(data) {
  return { rating: 4.5, sold: 100, discount: 0, ...data };
}

export const products = [
  // Electronics
  p({ id: "e1", category: "electronics", name: "אוזניות אלחוטיות בלוטות' עם ביטול רעשים", price: 79.9, originalPrice: 249.9, emoji: "🎧", color: "from-blue-500 to-cyan-400", rating: 4.7, sold: 3241, deal: true, featured: true, description: "אוזניות אלחוטיות איכותיות עם ביטול רעשים אקטיבי, עד 30 שעות נגינה וחיבור Bluetooth 5.3 יציב." }),
  p({ id: "e2", category: "electronics", name: "שעון חכם ספורטיבי עמיד למים", price: 129.9, originalPrice: 349.9, emoji: "⌚", color: "from-slate-600 to-slate-400", rating: 4.6, sold: 1893, deal: true, featured: true, description: "שעון חכם עם מד דופק, GPS, מעקב שינה ועמידות למים עד 50 מטר. תואם iOS ואנדרואיד." }),
  p({ id: "e3", category: "electronics", name: "רמקול בלוטות' נייד עמיד למים", price: 59.9, originalPrice: 149.9, emoji: "🔊", color: "from-purple-500 to-indigo-400", rating: 4.4, sold: 2765, deal: true, description: "רמקול בס עוצמתי עם סוללה ל-12 שעות, מתאים לבריכה ולים בזכות אטימות IPX7." }),
  p({ id: "e4", category: "electronics", name: "מטען אלחוטי מהיר 15W", price: 34.9, originalPrice: 79.9, emoji: "🔌", color: "from-cyan-500 to-blue-400", rating: 4.5, sold: 4120, featured: true, description: "מטען אלחוטי מהיר תואם לכל הטלפונים התומכים ב-Qi, כולל הגנה מפני חימום יתר." }),
  p({ id: "e5", category: "electronics", name: "מצלמת אבטחה חכמה לבית 360°", price: 99.9, originalPrice: 219.9, emoji: "📷", color: "from-slate-700 to-gray-500", rating: 4.3, sold: 876, deal: true, description: "מצלמת Wi-Fi עם ראיית לילה, זיהוי תנועה והתראות ישירות לנייד." }),
  p({ id: "e6", category: "electronics", name: "מקלדת גיימינג מכנית עם תאורת RGB", price: 89.9, originalPrice: 189.9, emoji: "⌨️", color: "from-red-500 to-orange-400", rating: 4.6, sold: 654, description: "מקלדת מכנית לגיימרים עם מתגים כחולים ותאורת RGB הניתנת להתאמה אישית." }),
  p({ id: "e7", category: "electronics", name: "עכבר גיימינג אלחוטי דיוק גבוה", price: 45.9, originalPrice: 99.9, emoji: "🖱️", color: "from-indigo-500 to-blue-400", rating: 4.5, sold: 1204, description: "עכבר אלחוטי עם חיישן 16000DPI וסוללה ל-70 שעות שימוש." }),
  p({ id: "e8", category: "electronics", name: "רחפן מיני עם מצלמת HD", price: 149.9, originalPrice: 299.9, emoji: "🚁", color: "from-sky-500 to-cyan-400", rating: 4.2, sold: 342, deal: true, description: "רחפן קליל ומתקפל עם מצלמת 1080p, מושלם למתחילים." }),

  // Women fashion
  p({ id: "w1", category: "women-fashion", name: "שמלת קיץ פרחונית מחמיאה", price: 49.9, originalPrice: 119.9, emoji: "👗", color: "from-pink-500 to-rose-400", rating: 4.6, sold: 2109, deal: true, featured: true, description: "שמלת קיץ קלילה ונעימה מבד נושם, מגיעה במגוון מידות וצבעים." }),
  p({ id: "w2", category: "women-fashion", name: "תיק צד אלגנטי לנשים", price: 39.9, originalPrice: 89.9, emoji: "👜", color: "from-rose-500 to-pink-400", rating: 4.5, sold: 1567, featured: true, description: "תיק צד קומפקטי ואיכותי, מושלם לשימוש יומיומי." }),
  p({ id: "w3", category: "women-fashion", name: "מעיל חורף חם ומעוצב", price: 89.9, originalPrice: 219.9, emoji: "🧥", color: "from-stone-600 to-stone-400", rating: 4.4, sold: 743, deal: true, description: "מעיל חורף מרופד ומחמם עם עיצוב עדכני, מתאים לימי גשם וקור." }),
  p({ id: "w4", category: "women-fashion", name: "נעלי ספורט נשים סניקרס לבנות", price: 59.9, originalPrice: 139.9, emoji: "👟", color: "from-slate-400 to-slate-300", rating: 4.7, sold: 3021, featured: true, description: "נעלי סניקרס נוחות במיוחד, מתאימות להליכה ולריצה יומיומית." }),
  p({ id: "w5", category: "women-fashion", name: "משקפי שמש נשים סטייל רטרו", price: 24.9, originalPrice: 59.9, emoji: "🕶️", color: "from-amber-500 to-yellow-400", rating: 4.3, sold: 1890, description: "משקפי שמש בעיצוב רטרו עם הגנת UV400 מלאה." }),

  // Men fashion
  p({ id: "m1", category: "men-fashion", name: "חולצת פולו גברים איכותית", price: 29.9, originalPrice: 69.9, emoji: "👕", color: "from-slate-700 to-slate-500", rating: 4.5, sold: 2456, deal: true, description: "חולצת פולו מכותנה איכותית בגזרה נוחה, זמינה במגוון צבעים." }),
  p({ id: "m2", category: "men-fashion", name: "מכנסי ג'ינס גברים סלים פיט", price: 54.9, originalPrice: 129.9, emoji: "👖", color: "from-blue-800 to-blue-600", rating: 4.4, sold: 1345, featured: true, description: "ג'ינס איכותי בגזרה מחמיאה עם אריג אלסטי לנוחות מרבית." }),
  p({ id: "m3", category: "men-fashion", name: "נעלי עור גברים אלגנטיות", price: 79.9, originalPrice: 179.9, emoji: "👞", color: "from-amber-800 to-amber-600", rating: 4.6, sold: 567, deal: true, description: "נעלי עור אלגנטיות לאירועים ולעבודה, נוחות לנעילה ממושכת." }),
  p({ id: "m4", category: "men-fashion", name: "שעון יד גברים קלאסי", price: 69.9, originalPrice: 169.9, emoji: "⌚", color: "from-yellow-700 to-yellow-500", rating: 4.5, sold: 892, featured: true, description: "שעון יד קלאסי ואלגנטי עם רצועת עור אמיתית ותנועה קוורץ מדויקת." }),

  // Home
  p({ id: "h1", category: "home", name: "סט סכו\"ם נירוסטה 24 חלקים", price: 44.9, originalPrice: 99.9, emoji: "🍴", color: "from-amber-500 to-orange-400", rating: 4.6, sold: 1230, featured: true, description: "סט סכו\"ם מנירוסטה איכותית, עמיד לשטיפה במדיח כלים." }),
  p({ id: "h2", category: "home", name: "מנורת לילה LED בעיצוב ירח", price: 19.9, originalPrice: 49.9, emoji: "🌙", color: "from-indigo-500 to-purple-400", rating: 4.7, sold: 3450, deal: true, featured: true, description: "מנורת לילה מעוצבת עם תאורת LED חמה, נטענת ב-USB." }),
  p({ id: "h3", category: "home", name: "סט מצעים זוגי 100% כותנה", price: 64.9, originalPrice: 149.9, emoji: "🛏️", color: "from-sky-400 to-blue-300", rating: 4.5, sold: 987, deal: true, description: "סט מצעים רך ואיכותי מכותנה מצרית, כולל ציפיות כרים וסדין מתאים." }),
  p({ id: "h4", category: "home", name: "מארגן מטבח מסתובב 360°", price: 27.9, originalPrice: 64.9, emoji: "🥫", color: "from-orange-500 to-amber-400", rating: 4.4, sold: 1567, description: "מארגן מסתובב לניצול מקסימלי של שטח הארונות במטבח." }),
  p({ id: "h5", category: "home", name: "עציץ מלאכותי דקורטיבי לסלון", price: 32.9, originalPrice: 74.9, emoji: "🪴", color: "from-green-600 to-emerald-400", rating: 4.3, sold: 645, description: "עציץ מעוצב שנראה טבעי לחלוטין, ללא צורך בהשקיה או תחזוקה." }),

  // Beauty
  p({ id: "b1", category: "beauty", name: "סט מברשות איפור מקצועי 12 חלקים", price: 34.9, originalPrice: 89.9, emoji: "💄", color: "from-fuchsia-500 to-pink-400", rating: 4.6, sold: 2341, deal: true, featured: true, description: "סט מברשות איפור מקצועיות ורכות עם נרתיק נשיאה נוח." }),
  p({ id: "b2", category: "beauty", name: "מכשיר טיפול פנים בגלי אור LED", price: 89.9, originalPrice: 219.9, emoji: "✨", color: "from-purple-500 to-fuchsia-400", rating: 4.4, sold: 456, deal: true, description: "מכשיר טיפולי פנים ביתי המשלב פוטותרפיה לעור זוהר ובריא." }),
  p({ id: "b3", category: "beauty", name: "מגהץ שיער קרמי מקצועי", price: 49.9, originalPrice: 119.9, emoji: "💇‍♀️", color: "from-rose-500 to-red-400", rating: 4.5, sold: 1789, featured: true, description: "מגהץ שיער עם ציפוי קרמי המונע נזק לשיער ומעניק החלקה מושלמת." }),

  // Toys
  p({ id: "t1", category: "toys", name: "קוביית קסמים מהירה לתחרויות", price: 14.9, originalPrice: 34.9, emoji: "🧩", color: "from-yellow-500 to-amber-400", rating: 4.7, sold: 4532, deal: true, description: "קוביית קסמים חלקה ומהירה, אהובה על חובבי ספידקיובינג." }),
  p({ id: "t2", category: "toys", name: "סט בניה יצירתי לילדים 500 חלקים", price: 39.9, originalPrice: 89.9, emoji: "🧱", color: "from-red-500 to-orange-400", rating: 4.6, sold: 1023, featured: true, description: "סט קוביות בנייה תואם לרוב המערכות המובילות, מפתח יצירתיות וחשיבה מרחבית." }),
  p({ id: "t3", category: "toys", name: "דובי פרוותי רך וענק לילדים", price: 29.9, originalPrice: 64.9, emoji: "🧸", color: "from-amber-600 to-yellow-500", rating: 4.8, sold: 2109, deal: true, description: "דובי פרווה רך במיוחד בגובה 60 ס\"מ, מתנה מושלמת לילדים." }),

  // Sports
  p({ id: "s1", category: "sports", name: "מזרן יוגה אנטי-החלקה", price: 29.9, originalPrice: 69.9, emoji: "🧘‍♀️", color: "from-emerald-500 to-teal-400", rating: 4.6, sold: 1876, featured: true, description: "מזרן יוגה עבה ואיכותי עם משטח אנטי-החלקה, כולל רצועת נשיאה." }),
  p({ id: "s2", category: "sports", name: "סט גומיות התנגדות לאימון כוח", price: 24.9, originalPrice: 54.9, emoji: "💪", color: "from-lime-500 to-green-400", rating: 4.5, sold: 987, deal: true, description: "סט גומיות בעצימויות שונות לאימון כוח מלא בבית." }),
  p({ id: "s3", category: "sports", name: "בקבוק מים ספורטיבי טרמי", price: 19.9, originalPrice: 44.9, emoji: "🚰", color: "from-blue-500 to-cyan-400", rating: 4.4, sold: 3241, description: "בקבוק שומר טמפרטורה עד 24 שעות, מיוצר מנירוסטה איכותית." }),

  // Jewelry
  p({ id: "j1", category: "jewelry", name: "שרשרת כסף 925 מעוצבת", price: 34.9, originalPrice: 79.9, emoji: "📿", color: "from-violet-500 to-purple-400", rating: 4.6, sold: 1456, deal: true, featured: true, description: "שרשרת מכסף סטרלינג 925 באיכות גבוהה, עיצוב מינימליסטי ואלגנטי." }),
  p({ id: "j2", category: "jewelry", name: "סט עגילים ותכשיטים לאירועים", price: 27.9, originalPrice: 64.9, emoji: "💎", color: "from-cyan-500 to-blue-400", rating: 4.5, sold: 678, description: "סט תכשיטים נוצץ ומרשים לאירועים מיוחדים וחתונות." }),
];

export const deals = products.filter((p) => p.deal);
export const featured = products.filter((p) => p.featured);

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function formatPrice(value) {
  return `₪${value.toFixed(2)}`;
}

export function discountPercent(product) {
  if (!product.originalPrice) return 0;
  return Math.round(100 - (product.price / product.originalPrice) * 100);
}
