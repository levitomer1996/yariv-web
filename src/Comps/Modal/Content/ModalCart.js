import React, { useEffect, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Paper, Typography, Grid, Box } from "@mui/material";

const ModalCart = () => {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div>
      {cartItems.map(({ title, price, image, id }) => (
        <Paper key={id} sx={{ padding: 1, marginBottom: 2 }}>
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            {/* Image Section */}
            <Grid item xs={6}>
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 80, // Set a max height for the image
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* Title and Price Section */}

            <Grid item xs={3}>
              <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item xs={3}>
              {" "}
              <Typography variant="body1">{`₪${price}`}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default ModalCart;
