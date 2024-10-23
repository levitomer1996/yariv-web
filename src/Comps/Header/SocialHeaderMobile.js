import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { useMediaQuery } from "@mui/material";
import { ReactComponent as InstagramIC } from "../../Assets/Icons/instagramICON.svg"; // Import Instagram SVG
import { ReactComponent as WhatsappIC } from "../../Assets/Icons/WhatsappICON.svg"; // Import WhatsApp SVG

const SocialHeaderMobile = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

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
        <a
          href="https://wa.me/972547203674?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", marginRight: "20px" }}
        >
          <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
            <WhatsappIC width="24" height="24" />{" "}
            {/* Use custom WhatsApp SVG */}
          </IconButton>
        </a>
        {/* Instagram Icon with redirect */}
        <a
          href="https://www.instagram.com/prazon_woodcraft/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }} // Inherit color to remove link default color
        >
          <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
            <InstagramIC width="24" height="24" />{" "}
            {/* Use custom Instagram SVG */}
          </IconButton>
        </a>

        {/* Mail Icon with mailto link */}
        <a href="mailto:yariv23mj@gmail.com" style={{ color: "inherit" }}>
          <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
            <MailIcon style={{ color: "black" }} />
          </IconButton>
        </a>

        {/* Phone Icon with tel link */}
        <a href="tel:+972547203674" style={{ color: "inherit" }}>
          <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
            <PhoneIcon style={{ color: "black" }} />
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default SocialHeaderMobile;
