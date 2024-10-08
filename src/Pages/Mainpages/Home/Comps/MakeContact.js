import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../../../../Comps/Spinner";

const MakeContact = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [spinner, setSpinner] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSpinner(true);
    emailjs
      .send(
        "tomer", // Replace with your EmailJS service ID
        "template_5eqz7nl", // Replace with your EmailJS template ID
        formData, // Form data to send in the email
        "ApPquBhYTeG-UBpAv" // Replace with your EmailJS user ID (found in account)
      )
      .then(
        (result) => {
          alert("תודה שפניתם אלינו נחזור אליכם במייל");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setSpinner(false);
        },
        (error) => {
          alert("ההודעה לא נשלחה, נסו שוב.");
          setSpinner(false);
        }
      );
  };

  return (
    <Container>
      <Grid
        container
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <p
            style={{
              fontSize: isMobile ? "2rem" : "5rem",
              textAlign: "center",
            }}
          >
            צרו קשר להזמנה אישית
          </p>
        </Grid>

        {/* Contact Icons Section */}
        <Grid
          item
          container
          display="flex"
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Grid item>
            <a
              href="https://wa.me/972547203674?text=Hello, I would like to make a personal order."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", marginRight: "20px" }}
            >
              <IconButton color="inherit" style={{ fontSize: "3rem" }}>
                <WhatsAppIcon style={{ color: "green", fontSize: "3rem" }} />
              </IconButton>
            </a>
          </Grid>

          <Grid item>
            <a
              href="tel:+972547203674"
              style={{ color: "inherit", marginRight: "20px" }}
            >
              <IconButton color="inherit" style={{ fontSize: "3rem" }}>
                <PhoneIcon style={{ color: "black", fontSize: "3rem" }} />
              </IconButton>
            </a>
          </Grid>

          <Grid item>
            <a href="mailto:yariv23mj@gmail.com" style={{ color: "inherit" }}>
              <IconButton color="inherit" style={{ fontSize: "3rem" }}>
                <MailIcon style={{ color: "black", fontSize: "3rem" }} />
              </IconButton>
            </a>
          </Grid>
        </Grid>

        {/* EmailJS Form in Hebrew with react-bootstrap */}
        <Grid item style={{ marginTop: "20px", width: "100%" }}>
          <Form
            onSubmit={sendEmail}
            style={{
              maxWidth: isMobile ? "90%" : "400px", // Max width for form container
              margin: "0 auto", // Center the form
              padding: "1rem", // Add some padding
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)", // Add a light box shadow
              borderRadius: "8px", // Rounded corners
              textAlign: "right",
            }}
          >
            <Form.Group controlId="name">
              <Form.Label style={{ float: "right" }}> שם</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{ textAlign: "right" }}
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label style={{ float: "right" }}>כתובת מייל</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ textAlign: "right" }}
              />
            </Form.Group>

            <Form.Group controlId="message" className="mt-3">
              <Form.Label style={{ float: "right" }}>הודעה</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{ textAlign: "right" }}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-4">
              שלח הודעה
            </Button>
          </Form>
        </Grid>
        {spinner ? (
          <Grid item>
            <Spinner />
          </Grid>
        ) : null}
      </Grid>
    </Container>
  );
};

export default MakeContact;
