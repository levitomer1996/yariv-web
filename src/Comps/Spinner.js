import React from "react";
import { CircularProgress } from "@mui/material";

const Spinner = ({ color = "primary", size = 40 }) => {
  return <CircularProgress style={{ color }} size={size} />;
};

export default Spinner;
