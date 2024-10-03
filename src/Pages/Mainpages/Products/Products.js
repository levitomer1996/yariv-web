import React from "react";
import { Grid, Typography } from "@mui/material";
import products from "./Comps/products";
import { ProductCard } from "./Comps/ProductCard";
import Margin from "../../../Comps/Margin";
const Products = () => {
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
          <p style={{ fontSize: "5rem" }}>המוצרים שלנו</p>
        </Grid>
        <Grid item>
          {" "}
          <p style={{ fontSize: "2rem" }}>
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
          {products.map((c) => {
            return (
              <Grid item>
                {" "}
                <ProductCard title="תומר" price={1000} image={c} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
