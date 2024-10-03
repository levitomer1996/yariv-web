import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/image.png";

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

  // Render the mobile header only if the screen size is less than 768px
  if (!isMobile) {
    return null;
  }

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
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
