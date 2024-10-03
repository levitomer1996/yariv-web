import React from "react";
import { Box } from "@mui/material";

// Margin component that accepts margin props
const Margin = ({ top = 0, right = 0, bottom = 0, left = 0, children }) => {
  return (
    <Box sx={{ mt: top, mr: right, mb: bottom, ml: left }}>{children}</Box>
  );
};

export default Margin;
