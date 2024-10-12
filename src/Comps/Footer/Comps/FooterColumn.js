import { Grid } from "@mui/material";
import React from "react";

const FooterColumn = ({ title, list }) => {
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <p style={{ color: "white", fontSize: "30px" }}>{title}</p>
      </Grid>
      {list.map((i) => {
        return (
          <Grid item>
            <p style={{ color: "white", fontSize: "19px" }}>{i}</p>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FooterColumn;
