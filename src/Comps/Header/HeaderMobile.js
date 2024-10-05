import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import Shopping Cart icon
import logo from "../../Assets/image.png";
import CartContext from "../../Context/CartContext";
import { ModalContext } from "../../Context/ModalContext";

const HeaderMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use media query to check if it's a mobile screen
  const isMobile = useMediaQuery("(max-width:768px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "בית", href: "/" },
    { text: "מוצרים", href: "/products" },
    { text: "עלינו", href: "/about" },
  ];

  // Mock cart item count for demonstration purposes
  const { addItemToCart, removeItemFromCart, getTotalItems, cartState } =
    useContext(CartContext);
  const { showModal } = useContext(ModalContext);

  // Render the mobile header only if the screen size is less than 768px
  if (!isMobile) {
    return null;
  }

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Cart Icon */}
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

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component="a" href={item.href}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HeaderMobile;
