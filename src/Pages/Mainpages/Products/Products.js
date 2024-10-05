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
        <Grid item style={{ width: "70%" }}>
          {" "}
          <p style={{ fontSize: isMobile ? "0.76rem" : "1.2rem" }}>
            אנו מזמינים אתכם לקחת חלק בתהליך היצירה ולהפוך את החלומות שלכם
            למציאות! אצלנו תוכלו להזמין כל מוצר בהתאמה אישית, כולל אפשרות לבחור
            את סוג העץ שתרצו, את צבע האפוקסי שיתאים לסגנון שלכם, ואף להוסיף
            חריטה מיוחדת שתרגש אתכם ואת אהוביכם. כמו כן, אנו פתוחים לרעיונות
            חדשים ויוצרים בשמחה מוצרים ייחודיים שיתאימו בדיוק לצרכים שלכם. ביחד
            נבנה מוצר שאין שני לו, שמעביר את האישיות שלכם בכל פרט ופרט. נשמח
            ללוות אתכם בכל שלב של התהליך ולהפוך כל רעיון למציאות!
          </p>
        </Grid>
        <Margin top={4} />
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
