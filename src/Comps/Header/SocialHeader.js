import React from "react";
import { AppBar, Toolbar, IconButton, useMediaQuery } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTheme } from "@mui/material/styles";
import SocialHeaderMobile from "./SocialHeaderMobile";
import { ReactComponent as InstagramIC } from "../../Assets/Icons/instagramICON.svg"; // Import Instagram icon
import { ReactComponent as WhatsappIC } from "../../Assets/Icons/WhatsappICON.svg"; // Import WhatsApp icon

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
        height: "30%",
        justifyContent: "flex-start", // Adjust the height as needed
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="https://wa.me/972547203674?text=Hello, I would like to make a personal order."
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", marginRight: "20px" }}
        >
          <IconButton color="inherit">
            <WhatsappIC width="24" height="24" />{" "}
            {/* Using the custom WhatsApp SVG */}
          </IconButton>
        </a>
        {/* Instagram Icon with redirect */}
        <a
          href="https://www.instagram.com/prazon_woodcraft/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }} // Inherit color to remove link default color
        >
          <IconButton color="inherit">
            <InstagramIC width="24" height="24" />{" "}
            {/* Using the custom Instagram SVG */}
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
