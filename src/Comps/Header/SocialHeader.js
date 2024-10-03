import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const SocialHeader = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)", // Static semi-transparent black
        width: "100%",
        height: "30%",
      }}
    >
      <Toolbar style={{ justifyContent: "flex-end" }}>
        <IconButton color="inherit">
          <WhatsAppIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton color="inherit">
          <InstagramIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton color="inherit">
          <MailIcon style={{ color: "black" }} />
        </IconButton>
        <IconButton color="inherit">
          <PhoneIcon style={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SocialHeader;
