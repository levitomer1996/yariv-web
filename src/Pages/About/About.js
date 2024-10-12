import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import PageTitle from "../../Comps/PageTitle";

const About = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid itme>
        {" "}
        <PageTitle title="עלינו" isMobile={isMobile} />
      </Grid>
      <Grid item style={{ width: isMobile ? "80%" : "60%" }}>
        <p style={{ fontSize: isMobile ? "17px" : "25px" }}>
          בזמן מלחמת חרבות ברזל רבות החלטתי שהגיע הזמן להגשים חלום אישי – ליצור
          מוצרים ייחודיים ואיכותיים בעבודת יד לבית, מתוך תשוקה לנגרות, לאומנות
          ועבודה עם חומרים טבעיים. אנו מתמחים ביצירת פריטים איכותיים מעץ מלא
          ושילוב אפוקסי, המשלבים בין אמנות לשימושיות. כל מוצר מיוצר בקפידה מעץ
          איכותי ושרף אפוקסי, וכולל עיצוב ייחודי שמוסיף חום וסטייל לכל חלל.
          המחויבות שלי לאיכות מבטיחה שכל פריט מיוצר בסטנדרט הגבוה ביותר, ונועד
          להחזיק לאורך שנים ולהיות מוערך לאורך זמן.
        </p>
      </Grid>
    </Grid>
  );
};

export default About;
