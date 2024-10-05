import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SocialHeaderMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:768px)");
  // Detect if the screen size is mobile

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Static semi-transparent black
        width: "100%",
        height: isMobile ? "50px" : "30%", // Adjust height for mobile
      }}
    >
      <Toolbar
        style={{
          justifyContent: isMobile ? "space-between" : "flex-end",
          padding: isMobile ? "0 10px" : "0",
        }}
      >
        <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
          <WhatsAppIcon style={{ color: "black" }} />
        </IconButton>

        {/* Instagram Icon with redirect */}
        <a
          href="https://www.instagram.com/prazon_woodcraft/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }} // Inherit color to remove link default color
        >
          <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
            <InstagramIcon style={{ color: "black" }} />
          </IconButton>
        </a>

        <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
          <MailIcon style={{ color: "black" }} />
        </IconButton>

        <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
          <PhoneIcon style={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SocialHeaderMobile;
