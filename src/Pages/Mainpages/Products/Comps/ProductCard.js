import React, { useContext } from "react";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../../../Context/CartContext"; // Assuming the CartContext is set up

export const ProductCard = ({ id, title, price, image }) => {
  const { addItemToCart } = useContext(CartContext); // Get the function to add items to the cart

  const handleAddToCart = () => {
    const product = { id, title, price, image }; // Create the product object to be added to the cart
    addItemToCart(product); // Add the product to the cart
  };

  return (
    <Card
      style={{ width: "18rem", height: "450px", overflow: "hidden" }}
      className="cont"
    >
      <div className="image-container" style={{ height: "200px" }}>
        {" "}
        {/* Fixed height for the image */}
        <Card.Img
          variant="top"
          src={image}
          className="zoom-image"
          style={{ height: "100%", objectFit: "cover" }} // Ensure the image covers the container
        />
      </div>
      <Card.Body>
        {/* Title with fixed height and multiple lines */}
        <Card.Title
          style={{
            height: "50px", // Allow the title to wrap for two lines
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2, // Limit the title to 2 lines
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            whiteSpace: "normal", // Allow normal wrapping
          }}
        >
          {title}
        </Card.Title>

        {/* Price with fixed height */}
        <Card.Text style={{ height: "30px", overflow: "hidden" }}>
          מחיר: {price}₪
        </Card.Text>

        {/* Button to add product to the cart */}
        <Button
          variant="primary"
          onClick={handleAddToCart}
          style={{ backgroundColor: "black", width: "100%" }} // Ensure button takes full width
        >
          הוסף לעגלה
        </Button>
      </Card.Body>
    </Card>
  );
};
