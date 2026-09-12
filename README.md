# ShopEase — React E-Commerce Website

A modern, fully functional e-commerce website built with React. Designed to demonstrate core React concepts clearly enough to explain in a junior developer interview.

## Project Overview

ShopEase is a fictional fashion and lifestyle store with 20 products across 4 categories. It has a professional, clean design and covers everything you'd expect from a real e-commerce site — browsing, filtering, a working cart with localStorage persistence, and auth forms.

## Features

- 🏠 **Home Page** — Hero banner, category grid, featured products, promo countdown, newsletter
- 🛍️ **Collection Page** — Search, category filter, price sort, product grid
- 📄 **Product Detail Page** — Image, description, quantity selector, related products
- 🛒 **Shopping Cart** — Add/remove/update quantities, order summary, free shipping threshold
- 🔐 **Login & Signup** — Controlled forms with client-side validation
- ℹ️ **About & Contact** — Company info, contact form
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop

## Technologies

| Tool | Purpose |
|------|---------|
| React 19 | UI components |
| Vite | Build tool & dev server |
| React Router v7 | Client-side routing |
| Context API | Cart state management |
| Plain CSS | All styling |
| localStorage | Cart persistence |

## React Concepts Used

| Concept | Where |
|---------|-------|
| `useState` | Cart state, forms, UI toggles |
| `useEffect` | localStorage sync, countdown timer |
| `useContext` | Accessing cart from any component |
| `useParams` | Reading `:id` on the product page |
| `useSearchParams` | Syncing filters with URL |
| React Router | All page navigation |
| Controlled inputs | All forms (login, signup, contact, newsletter) |
| Conditional rendering | Empty cart, error states, success messages |
| `map()` | Rendering product lists |
| `filter()` | Search and category filtering |
| Props | Passing data to ProductCard, ProductGrid, SearchBar |
| Context API | CartProvider wrapping the whole app |
| `localStorage` | Cart data survives page refresh |

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx         ← Sticky nav with cart badge, search, mobile menu
│   ├── Footer.jsx         ← Links, brand, socials
│   ├── ProductCard.jsx    ← Reusable card component
│   ├── ProductGrid.jsx    ← Grid layout wrapper
│   ├── SearchBar.jsx      ← Reusable search input
│   └── Newsletter.jsx     ← Email signup section
│
├── pages/
│   ├── Home.jsx           ← Landing page with hero, featured products, promo
│   ├── Collection.jsx     ← All products with search/filter/sort
│   ├── Product.jsx        ← Single product detail (/product/:id)
│   ├── Cart.jsx           ← Shopping cart
│   ├── Login.jsx          ← Login form
│   ├── Signup.jsx         ← Signup form
│   ├── About.jsx          ← Company info
│   └── Contact.jsx        ← Contact form
│
├── context/
│   └── CartContext.jsx    ← Global cart state + localStorage
│
├── data/
│   └── products.js        ← 20 local products (no API needed)
│
├── App.jsx                ← Routes + CartProvider
├── main.jsx               ← React DOM entry point
└── index.css              ← All styles (CSS variables + responsive)
```

## How to Run the Project

```bash
# 1. Navigate to the project
cd Ecommerce

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
# → http://localhost:5173
```

## How Cart Functionality Works

The cart is managed by `CartContext.jsx`. It exposes these functions to any component:

```
addToCart(product)       → adds 1 item (or bumps qty if already in cart)
removeFromCart(id)       → removes item completely
increaseQuantity(id)     → +1 to quantity
decreaseQuantity(id)     → -1 to quantity (removes if reaches 0)
getCartTotal()           → returns total price as a number
cartCount                → total number of items (for the badge)
```

Any component that needs the cart just does:

```jsx
const { addToCart, cartItems } = useCart();
```

## How Context API Is Used

Instead of passing cart data through many components using props, Context API makes it globally accessible.

```jsx
// CartContext.jsx creates and exports the context
const CartContext = createContext();

// Any component can read it with:
export function useCart() {
  return useContext(CartContext);
}

// In App.jsx, the whole app is wrapped:
<CartProvider>
  <Navbar />   {/* can access cart */}
  <Product />  {/* can access cart */}
  <Cart />     {/* can access cart */}
</CartProvider>
```

## How Data Fetching Works

Products come from a local `src/data/products.js` file — no API required. This keeps the app reliable and fast, which is important for demos and interviews.

If you wanted to fetch from an API instead, the pattern is straightforward:

```jsx
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch(() => {
      setError("Something went wrong.");
      setLoading(false);
    });
}, []); // empty array = run once on mount
```

## How localStorage Works

When the app loads, cart data is read from localStorage:

```jsx
const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem("shopease-cart");
  return saved ? JSON.parse(saved) : [];
});
```

Whenever `cartItems` changes, it's saved back:

```jsx
useEffect(() => {
  localStorage.setItem("shopease-cart", JSON.stringify(cartItems));
}, [cartItems]);
```

This means the cart survives page refreshes.

---

## React Interview Questions

These are based on the actual code in this project.

---

### 1. Why did you use Context API instead of props?

If I used props, I'd have to pass `cartItems` and `addToCart` from `App` → `Navbar` → child components, and also down to `Product` and `Cart`. That gets messy fast. With Context, I wrap everything in `CartProvider` once, and any component can just call `useCart()` to get the cart — no prop drilling needed.

---

### 2. Why did you use `useState`?

`useState` lets me store data that changes over time — like cart items, form values, or whether the mobile menu is open. When I call `setState(newValue)`, React automatically re-renders the component with the new data.

---

### 3. Why did you use `useEffect`?

`useEffect` runs code *after* the component renders. I use it in two places:
- To save the cart to `localStorage` whenever `cartItems` changes.
- To run the countdown timer interval on the Home page.

The key thing about `useEffect` is the dependency array — React only re-runs the effect when those values change.

---

### 4. What is the dependency array in `useEffect`?

It tells React *when* to re-run the effect.
- `[]` → run once when the component first mounts
- `[cartItems]` → re-run every time `cartItems` changes
- No array → re-run after every render (usually not what you want)

---

### 5. Why do we need `key` when rendering a list?

React uses the `key` to identify which items changed, were added, or removed. Without it, React can't tell two `<ProductCard>` elements apart and might update the wrong one. I use `product.id` as the key because it's unique.

---

### 6. How does React Router work in this project?

I wrap the whole app in `<BrowserRouter>`, then define `<Routes>` with a `<Route>` for each page. React Router listens to the URL and renders the matching component — no page reload happens because it's all client-side navigation.

---

### 7. What does `useParams` do?

It extracts dynamic URL segments. On `/product/3`, `useParams()` returns `{ id: "3" }`. I convert it to a number and use it to find the right product in the array.

---

### 8. How does data flow between components?

Data flows *down* via props. For example, `ProductGrid` receives an array of products as a prop, and passes each product down to `ProductCard`. The cart state flows through Context, not props. Events (like button clicks) flow *up* by calling functions passed as props.

---

### 9. Why shouldn't we directly modify state?

React's state is immutable — you must use the setter function. If I did `cartItems.push(product)`, React wouldn't know the state changed and wouldn't re-render. Always use `setState` or the pattern `setItems(prev => [...prev, newItem])`.

---

### 10. How does localStorage work in this project?

On the first render, I initialize state by reading from `localStorage`. Then I use `useEffect` with `[cartItems]` as the dependency so every time the cart changes, it's written back to `localStorage`. This means the cart persists even if you close the tab.

---

### 11. What happens when the cart state changes?

1. A function like `addToCart()` calls `setCartItems()` with the updated array.
2. React re-renders every component that uses the cart context.
3. The `useEffect` that watches `cartItems` runs and saves to `localStorage`.
4. The cart badge in the Navbar updates automatically because `cartCount` is derived from `cartItems`.

---

### 12. Why did you create `ProductCard` as a reusable component?

Because the same card appears in multiple places — the Home page, the Collection page, the product's related section. Instead of repeating the same JSX, I define it once and pass different products as props. This is a core React principle: break UI into reusable pieces.

---

### 13. How does search work?

It's simple JavaScript. I have a `searchTerm` state. When the user types, I update `searchTerm`. Then I use `filter()` on the products array:

```js
products.filter(p =>
  p.title.toLowerCase().includes(searchTerm.toLowerCase())
)
```

The filtered array is passed to `ProductGrid`. React re-renders automatically.

---

### 14. How does category filtering work?

Same pattern — I have a `selectedCategory` state. When it's "all", no filtering happens. Otherwise:

```js
products.filter(p => p.category === selectedCategory)
```

I can combine it with the search filter because `filter()` can be chained. Both filters run on every render whenever the state changes.

---

### 15. How would you improve this application?

- Add real authentication with a backend (JWT tokens)
- Add a checkout flow with actual payment (Stripe)
- Store products in a database and fetch them via an API
- Add product image gallery on the detail page
- Add user reviews and ratings
- Add a wishlist feature
- Improve accessibility (ARIA labels, keyboard navigation)

---

### 16. How would you add real authentication?

I'd build a backend API with `/login` and `/signup` endpoints that return a JWT token. On the frontend, I'd store the token in `localStorage`, and create an `AuthContext` similar to the `CartContext` that holds the current user. Protected routes would check if the token exists before rendering.

---

### 17. How would you connect this to a backend?

I'd replace the local `products.js` file with API calls inside `useEffect`:

```jsx
useEffect(() => {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);
```

For the cart, instead of localStorage I'd send API requests (POST/DELETE/PATCH) to persist the cart server-side, tied to the user's account.

---

### 18. What happens when the API request fails?

I'd set an `error` state in the `.catch()` block and render an error message conditionally. In this project, I use local data so there's no API failure risk, but the pattern I'd use is:

```jsx
.catch(() => {
  setError("Something went wrong. Please try again.");
  setLoading(false);
});
```

Then in the JSX: `{error && <p>{error}</p>}`.

---

### 19. What causes a React component to re-render?

Three things:
1. Its own state changes (via `setState`)
2. Its props change (parent re-renders with new values)
3. The context it subscribes to changes

React re-renders automatically — you don't have to manually update the DOM.

---

### 20. What is the difference between props and state?

**Props** are data passed *from a parent to a child*. They're read-only inside the child — you can't modify them. **State** is data that a component owns and can change itself using `setState`. When state changes, the component re-renders. When you want a child to update the parent's state, the parent passes down a function as a prop.

---

*Built with ❤️ using React + Vite*
