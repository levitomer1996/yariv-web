import React, { useEffect, useContext, useState } from "react";
import {
  Paper,
  Typography,
  Grid,
  Box,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import the Close icon
import CartContext from "../../../Context/CartContext";
import Margin from "../../Margin";

const ModalCart = () => {
  const { cartState, removeItemFromCart, getTotalPrice } =
    useContext(CartContext);
  const { cartItems } = cartState;

  // Correct way to use useState
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutText, setCheckOutText] = useState(null);

  const isMobile = useMediaQuery("(max-width:768px)"); // Detect if screen is mobile

  useEffect(() => {
    setTotalPrice(getTotalPrice());
    makeCheckoutText();
  }, [cartItems]);

  //Make the checkout text for whatsapp checkout
  function makeCheckoutText() {
    let tempStr = `היי, אשמח לבצע את ההזמנה הכוללת את המצורים הבאים: \n`;
    for (let i = 0; i < cartItems.length; i++) {
      tempStr = `${tempStr} \n  -*${cartItems[i].title}* \n `;
    }
    setCheckOutText(tempStr);
  }

  return (
    <div
      style={{
        padding: isMobile ? "1rem" : "2rem",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center">
          העגלה ריקה.
        </Typography>
      ) : (
        <>
          {/* Cart Items Section */}
          <div
            style={{
              maxHeight: "400px", // Set a maximum height for the cart items
              overflowY: "auto", // Enable vertical scroll when content exceeds the height
              marginBottom: "1rem",
            }}
          >
            {cartItems.map(({ title, price, image, id, quantity }) => {
              return (
                <Grid
                  item
                  container
                  display={"flex"}
                  flexDirection={isMobile ? "column" : "row"} // Adjust direction for mobile
                  spacing={3}
                  key={id} // Add key for unique identification
                  sx={{ marginBottom: isMobile ? "1rem" : "2rem" }} // Margin adjustment for mobile
                >
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    display="flex"
                    justifyContent="center"
                  >
                    <Box sx={{ borderColor: "gray" }}>
                      <img
                        src={image}
                        style={{
                          width: isMobile ? "100px" : "120px", // Adjust image size for mobile
                          height: isMobile ? "100px" : "120px",
                          objectFit: "cover",
                        }}
                        alt={title}
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems={isMobile ? "center" : "flex-start"} // Center text on mobile
                  >
                    <Typography
                      variant={isMobile ? "body1" : "h6"}
                      sx={{
                        fontWeight: "bold",
                        textAlign: isMobile ? "center" : "left",
                      }} // Text alignment for mobile
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={4}
                    display="flex"
                    justifyContent={isMobile ? "center" : "flex-end"} // Price aligned to center on mobile
                    alignItems="center"
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      ₪{price}
                    </Typography>

                    <IconButton
                      color="secondary"
                      onClick={() => removeItemFromCart(id)}
                      sx={{ marginLeft: isMobile ? "0" : "1rem" }} // Adjust margin for mobile
                    >
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })}
          </div>

          {/* Checkout Button Section */}
          <Grid
            container
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
            sx={{
              position: "fixed", // Fix the position at the bottom
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "white", // Add background to avoid overlap
              padding: "1rem",
              zIndex: 1000, // Ensure the button is on top of other content
            }}
          >
            <Grid item>
              <p style={{ fontSize: "1.5rem" }}>מחיר כולל: ₪{totalPrice}</p>
            </Grid>
            <Grid item>
              <a
                href={`https://wa.me/972547203674?text=${checkoutText}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", marginRight: "20px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    maxWidth: isMobile ? "100%" : "1000px", // Full width on mobile
                    margin: "0 auto",
                  }}
                >
                  Checkout
                </Button>{" "}
              </a>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default ModalCart;
