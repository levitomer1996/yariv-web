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
              <p style={{ fontSize: "1.4rem" }}>
                ברוכים הבאים ל-PRAZON WOODCRAFT, בו האיכות והיצירתיות נפגשים!
                אנו מתמחים בבניית מוצרי בית, נוי וריהוט בעבודת יד מעץ מלא
                ואיכותי, בשילוב של אפוקסי וחומרים חדשניים, המעניקים לכל פריט
                ייחודיות שאין כדוגמתה. כל מוצר שלנו מיוצר בקפידה, תוך דגש על
                פרטים מדויקים ושימוש בחומרים הטובים ביותר, כדי להבטיח עמידות
                ואסתטיקה ברמה גבוהה. בנוסף, אנו מציעים ללקוחותינו את האפשרות
                לעצב פריטים בהתאמה אישית, כך שתוכלו ליצור ריהוט שמתאים בדיוק
                לצרכים ולסגנון שלכם. הצטרפו אלינו למסע של יצירה מותאמת אישית,
                שבו כל פריט מספר סיפור ייחודי ותתמכו בעבודה ישראלית
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
        overflow: "hidden", // Ensure the content does not overflow the container
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
          position: "absolute", // Position text over the image
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          transform: "translate(-50%, -50%)", // Adjust position for centering
          color: "white", // White text for visibility
          textAlign: "center", // Center the text
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
          padding: "1rem", // Padding for the text box
          borderRadius: "8px", // Optional: Rounds the text box
          width: "90%", // Ensure text doesn't go beyond image edges
          maxHeight: "90%", // Ensure text fits within the container
          overflow: "hidden", // Hide overflow text
        }}
      >
        <p style={{ fontSize: "1rem", margin: 0 }}>
          ברוכים הבאים ל-PRAZON WOODCRAFT, בו האיכות והיצירתיות נפגשים! אנו
          מתמחים בבניית מוצרי בית, נוי וריהוט בעבודת יד מעץ מלא ואיכותי, בשילוב
          של אפוקסי וחומרים חדשניים, המעניקים לכל פריט ייחודיות שאין כדוגמתה. כל
          מוצר שלנו מיוצר בקפידה, תוך דגש על פרטים מדויקים ושימוש בחומרים הטובים
          ביותר, כדי להבטיח עמידות ואסתטיקה ברמה גבוהה. בנוסף, אנו מציעים
          ללקוחותינו את האפשרות לעצב פריטים בהתאמה אישית, כך שתוכלו ליצור ריהוט
          שמתאים בדיוק לצרכים ולסגנון שלכם. הצטרפו אלינו למסע של יצירה מותאמת
          אישית, שבו כל פריט מספר סיפור ייחודי ותתמכו בעבודה ישראלית
        </p>
      </div>
    </div>
  );
};

export default HomePhrase;
