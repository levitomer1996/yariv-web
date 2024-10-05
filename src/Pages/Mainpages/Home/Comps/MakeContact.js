import React from "react";
import { Grid, IconButton, useMediaQuery } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const MakeContact = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Grid
      container
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <p
          style={{ fontSize: isMobile ? "2rem" : "5rem", textAlign: "center" }}
        >
          צרו קשר להזמנה אישית
        </p>
      </Grid>
      <Grid
        item
        container
        display="flex"
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
      >
        <Grid item>
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/972547203674?text=Hello, I would like to make a personal order."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", marginRight: "20px" }}
          >
            <IconButton color="inherit" style={{ fontSize: "3rem" }}>
              <WhatsAppIcon style={{ color: "green", fontSize: "3rem" }} />
            </IconButton>
          </a>
        </Grid>

        {/* Phone Icon */}
        <Grid item>
          <a
            href="tel:+972547203674"
            style={{ color: "inherit", marginRight: "20px" }}
          >
            <IconButton color="inherit" style={{ fontSize: "3rem" }}>
              <PhoneIcon style={{ color: "black", fontSize: "3rem" }} />
            </IconButton>
          </a>
        </Grid>

        {/* Mail Icon */}
        <Grid item>
          <a href="mailto:yariv23mj@gmail.com" style={{ color: "inherit" }}>
            <IconButton color="inherit" style={{ fontSize: "3rem" }}>
              <MailIcon style={{ color: "black", fontSize: "3rem" }} />
            </IconButton>
          </a>{" "}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MakeContact;
