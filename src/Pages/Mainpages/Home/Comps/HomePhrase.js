import React from "react";
import { Grid, Typography } from "@mui/material";
import img from "../../../../Assets/landpage/l13.jpeg";
import "./HomePhrase.css";

const HomePhrase = () => {
  return (
    <div className="">
      <Grid
        container
        spacing={0}
        style={{
          width: "90%",
          height: "auto", // Removed fixed height to adjust based on image height
          backgroundColor: "black", // Static semi-transparent black
          color: "white",
          fontFamily: `"Fredoka", sans-serif;`,
          borderRadius: 50,
        }}
      >
        <Grid
          item
          xs={7}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "100%", // This ensures the div takes the full height of the grid item
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "2.5rem" }}>
              הזמינו עכשיו מהקולקציות שלנו זרי פרחים טריים, עציצים, כלי נוי
              ועוד.. הראו לאהובים שלכם כמה אתם אוהבים אותם כי לפעמים, המילים לא
              מספיקות
            </p>
          </div>
        </Grid>

        <Grid
          item
          xs={5}
          style={{
            display: "flex",
          }}
        >
          <img
            src={img}
            alt="Home Phrase"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePhrase;
