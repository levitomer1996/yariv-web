import React from "react";
import { Grid } from "@mui/material";

const PageTitle = ({ title, isMobile }) => {
  return (
    <Grid item>
      <p style={{ fontSize: isMobile ? "2rem" : "5rem" }}>{title}</p>
    </Grid>
  );
};

export default PageTitle;
