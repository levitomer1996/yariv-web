import React from "react";
import { Grid, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const BusinessIcons = () => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      className="icons-container"
    >
      <Grid item xs={12} sm={3} textAlign="center">
        <WhatsAppIcon style={{ fontSize: 50 }} />
        <Typography variant="h6">WhatsApp</Typography>
      </Grid>
      <Grid item xs={12} sm={3} textAlign="center">
        <InstagramIcon style={{ fontSize: 50 }} />
        <Typography variant="h6">Instagram</Typography>
      </Grid>
      <Grid item xs={12} sm={3} textAlign="center">
        <MailIcon style={{ fontSize: 50 }} />
        <Typography variant="h6">Email</Typography>
      </Grid>
      <Grid item xs={12} sm={3} textAlign="center">
        <PhoneIcon style={{ fontSize: 50 }} />
        <Typography variant="h6">Phone</Typography>
      </Grid>
    </Grid>
  );
};

export default BusinessIcons;
