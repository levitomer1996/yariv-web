import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import img from "../../../../Assets/landpage/l13.jpeg";
import "./HomePhrase.css";

const HomePhrase = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  if (isMobile) {
    return <HomePhraseMobile />;
  } else {
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
                ועוד.. הראו לאהובים שלכם כמה אתם אוהבים אותם כי לפעמים, המילים
                לא מספיקות
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
  }
};
const HomePhraseMobile = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  // Only return this version if it’s mobile
  if (!isMobile) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative", // Container for relative positioning
        width: "100%",
        height: "400px", // Fixed height for the image container
      }}
    >
      {/* Image */}
      <img
        src={img}
        alt="Home Phrase"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures image covers the container
        }}
      />

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center text over the image
          color: "white", // White text for visibility
          textAlign: "center", // Center the text
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
          padding: "1rem", // Padding for the text box
          borderRadius: "8px", // Optional: Rounds the text box
        }}
      >
        <p style={{ fontSize: "1.3rem", margin: 0 }}>
          הזמינו עכשיו מהקולקציות שלנו זרי פרחים טריים, עציצים, כלי נוי ועוד..
          הראו לאהובים שלכם כמה אתם אוהבים אותם כי לפעמים, המילים לא מספיקות
        </p>
      </div>
    </div>
  );
};

export default HomePhrase;
