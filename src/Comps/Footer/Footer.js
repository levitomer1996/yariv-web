import React from "react";
import FooterColumn from "./Comps/FooterColumn";

const Footer = () => {
  const contactList = ["yariv23mj@gmail.com", "054-720-3674"];
  return (
    <footer style={{ width: "100%", backgroundColor: "black" }}>
      <FooterColumn title={"דרכים לתקשורת"} type="CONTACT" list={contactList} />
    </footer>
  );
};

export default Footer;
