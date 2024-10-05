import React, { useEffect, useContext } from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import the Close icon
import CartContext from "../../../Context/CartContext";

const ModalCart = () => {
  const { cartState, removeItemFromCart } = useContext(CartContext);
  const { cartItems } = cartState;

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div style={{ padding: "1rem" }}>
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          {cartItems.map(({ title, price, image, id, quantity }) => (
            <Paper key={id} sx={{ padding: 2, marginBottom: 2 }}>
              <Grid container spacing={2} alignItems="center">
                {/* Image Section */}
                <Grid item xs={3}>
                  <Box
                    component="img"
                    src={image}
                    alt={title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxHeight: 100, // Set a max height for the image
                      objectFit: "cover",
                      borderRadius: 1, // Slightly rounded corners for a polished look
                    }}
                  />
                </Grid>

                {/* Title, Quantity and Price Section */}
                <Grid item xs={6}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {quantity}
                  </Typography>
                </Grid>

                {/* Price Section */}
                <Grid item xs={2}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    ₪{price}
                  </Typography>
                </Grid>

                {/* Remove (X) Button */}
                <Grid item xs={1}>
                  <IconButton color="secondary" onClick={() => {}}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
            </Paper>
          ))}

          {/* Checkout Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={() => {
              // Implement the logic for checkout
              console.log("Proceed to checkout");
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default ModalCart;
