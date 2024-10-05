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
import { ModalContext } from "../../Context/ModalContext";

const Header = () => {
  // Use a media query to check if the screen is less than 768px (mobile size)
  const isMobile = useMediaQuery("(max-width:768px)");

  // Use CartContext to get the total number of items in the cart
  const { showModal } = useContext(ModalContext);
  const { getTotalItems } = useContext(CartContext);

  // Array of button titles and their respective links
  const navItems = [
    { title: "בית", href: "/" },
    { title: "מוצרים", href: "/products" },
    { title: "עלינו", href: "/about" },
    { title: "הזמנה אישית", href: "/personalorder" },
  ];

  return (
    <>
      {!isMobile && ( // Only display the buttons if it's not on mobile
        <AppBar position="static" style={{ backgroundColor: "black" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              {navItems.map((item, index) => (
                <div style={{ padding: 20 }} key={index}>
                  <Button
                    href={item.href}
                    color="inherit"
                    sx={{
                      marginRight: "20px",
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "white",
                      position: "relative",
                      "&:hover::after": {
                        width: "100%",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "0",
                        height: "2px",
                        bottom: 0,
                        left: 0,
                        backgroundColor: "lightgray",
                        transition: "width 0.3s ease-in-out",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </div>
              ))}
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
