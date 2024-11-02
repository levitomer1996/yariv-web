import React, { useContext } from "react";
import "./ProductCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartContext from "../../../../Context/CartContext"; // Assuming the CartContext is set up

export const ProductCard = ({ id, title, price, image, isInCart }) => {
  const { addItemToCart } = useContext(CartContext); // Get the function to add items to the cart

  const handleAddToCart = () => {
    const product = { id, title, price, image }; // Create the product object to be added to the cart
    addItemToCart(product); // Add the product to the cart
  };

  return (
    <Card style={{ width: "18rem", height: "500px" }} className="cont">
      <div className="image-container" style={{ height: "200px" }}>
        {/* Fixed height for the image */}
        <Card.Img
          variant="top"
          src={image}
          className="zoom-image"
          style={{ height: "100%", objectFit: "cover" }} // Ensure the image covers the container
        />
      </div>
      <Card.Body>
        <Card.Title
          style={{
            height: "40px", // Fixed height for title
            fontSize: "20px",
          }}
        >
          {title}
        </Card.Title>

        {/* Price and Cart Status Container */}
        <div
          style={{
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Card.Text style={{ margin: "0" }}>
            {price != null ? "מחיר " + price + "₪" : null}
          </Card.Text>
          <p style={{ color: "blue", margin: "0" }}>
            {isInCart ? "מוצר בעגלה" : null}
          </p>
        </div>

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
