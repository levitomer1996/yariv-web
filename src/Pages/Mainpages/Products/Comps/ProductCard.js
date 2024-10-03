import React from "react";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ProductCard = ({ id, title, price, image }) => {
  return (
    <Card style={{ width: "18rem", overflow: "hidden" }} className="cont">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={image}
          className="zoom-image" // Updated to use img tag with this class
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>מחיר: {price}₪</Card.Text>
      </Card.Body>
    </Card>
  );
};
