import React, { useContext } from "react";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../../../Context/CartContext"; // Assuming the CartContext is set up

export const ProductCard = ({ id, title, price, image }) => {
  const { addItemToCart } = useContext(CartContext); // Get the function to add items to the cart

  const handleAddToCart = () => {
    const product = { id, title, price, image }; // Create the product object to be added to the cart
    addItemToCart(product); // Add the product to the cart
  };

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
        {/* Button to add product to the cart */}
        <Button
          variant="primary"
          onClick={handleAddToCart}
          style={{ backgroundColor: "black" }}
        >
          הוסף לעגלה
        </Button>
      </Card.Body>
    </Card>
  );
};
