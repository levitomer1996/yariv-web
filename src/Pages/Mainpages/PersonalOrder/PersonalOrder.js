import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import MakeContact from "../../../Comps/MakeContact/MakeContact";
import PageTitle from "../../../Comps/PageTitle";

const PersonalOrder = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Grid item>
        {" "}
        <PageTitle title="הזמנה אישית" isMobile={isMobile} />
      </Grid>
      <Grid item style={{ width: "70%" }}>
        <p style={{ fontSize: isMobile ? "0.76rem" : "1.2rem" }}>
          אנו מזמינים אתכם לקחת חלק בתהליך היצירה ולהפוך את החלומות שלכם
          למציאות! אצלנו תוכלו להזמין כל מוצר בהתאמה אישית, כולל אפשרות לבחור את
          סוג העץ שתרצו, את צבע האפוקסי שיתאים לסגנון שלכם, ואף להוסיף חריטה
          מיוחדת שתרגש אתכם ואת אהוביכם. כמו כן, אנו פתוחים לרעיונות חדשים
          ויוצרים בשמחה מוצרים ייחודיים שיתאימו בדיוק לצרכים שלכם. ביחד נבנה
          מוצר שאין שני לו, שמעביר את האישיות שלכם בכל פרט ופרט. נשמח ללוות אתכם
          בכל שלב של התהליך ולהפוך כל רעיון למציאות!
        </p>
      </Grid>
      <Grid item>
        <MakeContact />
      </Grid>
    </Grid>
  );
};

export default PersonalOrder;
