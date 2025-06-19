// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Login from "./components/Login/Login";

// ✅ Import route pages
import KidsWear from "./components/KidsWear/KidsWear";
import TopRated from "./components/TopRated/TopRated";
import MensWear from "./components/MensWear/MensWear";
import WomanWear from "./components/WomanWear/WomanWear";

const AppWrapper = () => {
  const location = useLocation();

  const [orderPopup, setOrderPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const showNavbar = location.pathname !== "/login";

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {showNavbar && (
        <Navbar
          handleOrderPopup={handleOrderPopup}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          cartItems={cartItems}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Testimonials />
                <Footer />
                <Popup
                  orderPopup={orderPopup}
                  setOrderPopup={setOrderPopup}
                  addToCart={addToCart}
                />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* ✅ Category Pages with cart functionality */}
        <Route path="/kids-wear" element={<KidsWear onAddToCart={addToCart} />} />
        <Route path="/top-rated" element={<TopRated onAddToCart={addToCart} />} />
        <Route path="/mens-wear" element={<MensWear onAddToCart={addToCart} />} />
        <Route path="/woman-wear" element={<WomanWear onAddToCart={addToCart} />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;




