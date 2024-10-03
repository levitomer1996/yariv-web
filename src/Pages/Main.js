import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Mainpages/Home/Home";
import Products from "./Mainpages/Products/Products";

const About = () => <div>About</div>;
const Contact = () => <div>Contact</div>;

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default Main;
