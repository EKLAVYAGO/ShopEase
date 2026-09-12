import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

export default function App() {
  return (
    // CartProvider wraps the whole app so any component can access the cart
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/"           element={<Home />}       />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<Product />}   />
            <Route path="/cart"       element={<Cart />}       />
            <Route path="/login"      element={<Login />}      />
            <Route path="/signup"     element={<Signup />}     />
            <Route path="/about"      element={<About />}      />
            <Route path="/contact"    element={<Contact />}    />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
