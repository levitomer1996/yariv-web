import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import photosList from "../Products/Comps/products"; // Importing the photos array
import "./Home.css";
import PhotosGrid from "./Comps/PhotosGrid";
import BusinessIcons from "./Comps/BusinessIcons";
import HomeCard from "./Comps/HomeCard";
import Margin from "../../../Comps/Margin";
import c1 from "../../../Assets/cardsphotos/c1.png";
import c2 from "../../../Assets/cardsphotos/c2.png";
import HomePhrase from "./Comps/HomePhrase";
import Swiper from "../../../Comps/Swiper/Swiper";
import products from "../Products/Comps/products";
const Home = () => {
  let cards = [
    { src: c1, content: "Handmade Epoxy & Wood Creations" },
    { src: c2, content: "Crafted with Passion and Precision" },
  ];
  return (
    <div className="container">
      <Margin bottom={7} />
      <HomePhrase />
      <Margin bottom={7} />
      <Swiper type="image" list={products} title={"המוצרים שלנו"} />
    </div>
  );
};

export default Home;
