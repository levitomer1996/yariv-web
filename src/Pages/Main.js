import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Mainpages/Home/Home";
import Products from "./Mainpages/Products/Products";
import PersonalOrder from "./Mainpages/PersonalOrder/PersonalOrder";
import CartContext from "../Context/CartContext";

const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

const Main = () => {
  const { setCart } = useContext(CartContext);
  function initLocalStorage() {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", []);
    } else {
      setCart(localStorage.getItem("cart"));
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/personalorder" element={<PersonalOrder />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default Main;
