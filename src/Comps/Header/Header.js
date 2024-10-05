import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  Badge,
} from "@mui/material";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../Context/CartContext";
import logo from "../../Assets/image.png";
import { ModalContext } from "../../Context/ModalContext";

const Header = () => {
  // Use a media query to check if the screen is less than 768px (mobile size)
  const isMobile = useMediaQuery("(max-width:768px)");

  // Use CartContext to get the total number of items in the cart

  const { showModal } = useContext(ModalContext);
  const { getTotalItems } = useContext(CartContext);

  return (
    <>
      {!isMobile && ( // Only display the buttons if it's not on mobile
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ padding: 20 }}>
                <Button
                  href="/"
                  color="inherit"
                  sx={{
                    marginRight: "20px",
                    fontWeight: "bold", // Bold text
                    fontSize: "18px", // Larger text
                    color: "white", // Custom text color
                    "&:hover": {
                      color: "lightgray", // Hover effect for text color
                    },
                  }}
                >
                  בית
                </Button>
              </div>
              <div style={{ padding: 20 }}>
                <Button
                  href="/products"
                  color="inherit"
                  sx={{
                    marginRight: "20px",
                    fontWeight: "bold", // Bold text
                    fontSize: "18px", // Larger text
                    color: "white", // Custom text color
                    "&:hover": {
                      color: "lightgray", // Hover effect for text color
                    },
                  }}
                >
                  מוצרים
                </Button>
              </div>
              <div style={{ padding: 20 }}>
                <Button
                  href="/about"
                  color="inherit"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white",
                    "&:hover": {
                      color: "lightgray",
                    },
                  }}
                >
                  עלינו
                </Button>
              </div>
            </Box>

            {/* Cart icon on the right side */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="cart"
              onClick={() => {
                showModal("cart");
              }}
            >
              <Badge badgeContent={getTotalItems()} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
