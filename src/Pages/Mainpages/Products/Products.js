import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import products from "./Comps/products";
import { ProductCard } from "./Comps/ProductCard";
import Margin from "../../../Comps/Margin";
const Products = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="product_container">
      <Margin top={10} />
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item>
          <p style={{ fontSize: isMobile ? "2rem" : "5rem" }}>המוצרים שלנו</p>
        </Grid>
        <Grid item>
          {" "}
          <p style={{ fontSize: isMobile ? "1.2rem" : "2rem" }}>
            בנוסף למוצרים אפשר להזמין הזמנה אישית
          </p>
        </Grid>
        <Margin top={10} />
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
          spacing={3}
        >
          {products.map(({ title, price, img }) => {
            return (
              <Grid item>
                {" "}
                <ProductCard title={title} price={price} image={img} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
