import React from "react";
import { AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";
import SocialHeaderMobile from "./SocialHeaderMobile";

const SocialHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect if it's mobile

  // Return the SocialHeader only if it's mobile
  if (isMobile) {
    return <SocialHeaderMobile />;
  }

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Static semi-transparent black
        width: "100%",
        height: "30%", // Adjust the height as needed
      }}
    >
      <Toolbar style={{ justifyContent: "flex-end" }}>
        <IconButton color="inherit">
          <WhatsAppIcon style={{ color: "black" }} />
        </IconButton>

        {/* Instagram Icon with redirect */}
        <a
          href="https://www.instagram.com/prazon_woodcraft/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }} // Inherit color to remove link default color
        >
          <IconButton color="inherit">
            <InstagramIcon style={{ color: "black" }} />
          </IconButton>
        </a>

        {/* Mail Icon with mailto link */}
        <a
          href="mailto:yariv23mj@gmail.com"
          style={{ color: "inherit" }} // Remove default link styling
        >
          <IconButton color="inherit">
            <MailIcon style={{ color: "black" }} />
          </IconButton>
        </a>

        {/* Phone Icon with tel link */}
        <a href="tel:+972547203674" style={{ color: "inherit" }}>
          <IconButton color="inherit">
            <PhoneIcon style={{ color: "black" }} />
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default SocialHeader;
