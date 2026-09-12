// Local product data — used as the primary data source so the app
// always works without relying on a third-party API being available.

const products = [
  {
    id: 1,
    title: "Classic White Sneakers",
    price: 59.99,
    category: "footwear",
    description:
      "Crisp, clean, and versatile — these white sneakers pair effortlessly with any outfit. Featuring a cushioned sole and breathable canvas upper, they're built for all-day comfort.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    rating: { rate: 4.5, count: 312 },
  },
  {
    id: 2,
    title: "Minimalist Leather Watch",
    price: 129.99,
    category: "accessories",
    description:
      "Slim profile, genuine leather strap, and a sapphire-coated dial. This watch is designed for the person who values simplicity without sacrificing quality.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    rating: { rate: 4.7, count: 189 },
  },
  {
    id: 3,
    title: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    category: "electronics",
    description:
      "40-hour battery life, active noise cancellation, and premium 40mm drivers deliver an immersive audio experience whether you're commuting or creating.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    rating: { rate: 4.8, count: 541 },
  },
  {
    id: 4,
    title: "Cozy Knit Sweater",
    price: 74.99,
    category: "clothing",
    description:
      "Soft merino wool blend, relaxed fit, and ribbed cuffs make this the ultimate cold-weather companion. Available in warm earth tones.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    rating: { rate: 4.3, count: 98 },
  },
  {
    id: 5,
    title: "Portable Bluetooth Speaker",
    price: 89.99,
    category: "electronics",
    description:
      "360° room-filling sound in a compact, waterproof design. 12-hour playtime and a rugged build make it perfect for outdoor adventures.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    rating: { rate: 4.4, count: 267 },
  },
  {
    id: 6,
    title: "Slim Fit Chino Pants",
    price: 54.99,
    category: "clothing",
    description:
      "Tapered fit chinos crafted from lightweight stretch cotton. Smart enough for the office, casual enough for the weekend.",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    rating: { rate: 4.1, count: 155 },
  },
  {
    id: 7,
    title: "Structured Canvas Tote Bag",
    price: 44.99,
    category: "accessories",
    description:
      "Durable heavyweight canvas with reinforced stitching and interior zip pockets. Roomy enough for daily essentials and your laptop.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    rating: { rate: 4.6, count: 203 },
  },
  {
    id: 8,
    title: "Ergonomic Wireless Mouse",
    price: 49.99,
    category: "electronics",
    description:
      "Sculpted for long work sessions, this wireless mouse features adjustable DPI, silent clicks, and a 90-day battery life.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    rating: { rate: 4.5, count: 432 },
  },
  {
    id: 9,
    title: "Leather Chelsea Boots",
    price: 149.99,
    category: "footwear",
    description:
      "Full-grain leather uppers, elastic side panels, and a stacked heel. These Chelsea boots transition effortlessly from casual to formal.",
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80",
    rating: { rate: 4.6, count: 174 },
  },
  {
    id: 10,
    title: "Mechanical Gaming Keyboard",
    price: 119.99,
    category: "electronics",
    description:
      "RGB backlit, tactile switches, and a compact tenkeyless layout for serious gamers who need precision without the bulk.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
    rating: { rate: 4.7, count: 389 },
  },
  {
    id: 11,
    title: "Linen Button-Down Shirt",
    price: 64.99,
    category: "clothing",
    description:
      "Lightweight 100% linen construction with a relaxed cut. Breathable and stylish — ideal for summer days or warm evenings.",
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&q=80",
    rating: { rate: 4.2, count: 121 },
  },
  {
    id: 12,
    title: "Polarized Sunglasses",
    price: 79.99,
    category: "accessories",
    description:
      "UV400 polarized lenses in a lightweight titanium frame. Stylish protection for everyday wear or outdoor activities.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    rating: { rate: 4.4, count: 256 },
  },
  {
    id: 13,
    title: "Trail Running Shoes",
    price: 109.99,
    category: "footwear",
    description:
      "Aggressive lugged outsole, breathable mesh upper, and responsive foam cushioning for tackling technical trails with confidence.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
    rating: { rate: 4.5, count: 298 },
  },
  {
    id: 14,
    title: "Smart Fitness Tracker",
    price: 89.99,
    category: "electronics",
    description:
      "24/7 heart rate monitoring, sleep tracking, step counting, and 7-day battery life in a sleek, water-resistant band.",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd6b0?w=600&q=80",
    rating: { rate: 4.3, count: 511 },
  },
  {
    id: 15,
    title: "Classic Denim Jacket",
    price: 94.99,
    category: "clothing",
    description:
      "A wardrobe staple. Medium-weight denim, chest pockets, and a slightly oversized fit for that perfectly effortless look.",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=600&q=80",
    rating: { rate: 4.5, count: 347 },
  },
  {
    id: 16,
    title: "Genuine Leather Wallet",
    price: 39.99,
    category: "accessories",
    description:
      "Slim bifold design with 6 card slots and an easy-access cash compartment. Full-grain leather that develops a beautiful patina over time.",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    rating: { rate: 4.6, count: 412 },
  },
  {
    id: 17,
    title: "USB-C Hub (7-in-1)",
    price: 59.99,
    category: "electronics",
    description:
      "Expand your laptop's connectivity with HDMI 4K output, 3 USB-A ports, SD card reader, and 100W pass-through charging — all in one compact hub.",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=600&q=80",
    rating: { rate: 4.4, count: 623 },
  },
  {
    id: 18,
    title: "Slip-On Loafers",
    price: 79.99,
    category: "footwear",
    description:
      "Supple suede upper, cushioned footbed, and a flexible rubber sole. Elegant enough for a dinner out, comfortable enough for all day.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80",
    rating: { rate: 4.3, count: 187 },
  },
  {
    id: 19,
    title: "Oversized Graphic Hoodie",
    price: 69.99,
    category: "clothing",
    description:
      "Heavyweight 400gsm fleece, dropped shoulders, and a chest graphic print. Warm, cozy, and unapologetically streetwear.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
    rating: { rate: 4.4, count: 234 },
  },
  {
    id: 20,
    title: "Crossbody Camera Bag",
    price: 54.99,
    category: "accessories",
    description:
      "Compact nylon crossbody with adjustable strap, multiple zip compartments, and just enough room for your camera, wallet, and phone.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    rating: { rate: 4.5, count: 298 },
  },
];

export default products;
