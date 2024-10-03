import React, { createContext, useState, useEffect } from "react";

// Create a CartContext
export const CartContext = createContext();

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    return JSON.parse(savedCart); // Convert saved cart from string to object/array
  } else {
    const initialCart = [];
    localStorage.setItem("cartItems", JSON.stringify(initialCart)); // Create an empty cart in localStorage
    return initialCart; // Return the empty cart
  }
};

// Save cart to localStorage
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save cart items as a string
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = loadCartFromLocalStorage();
    setCartItems(storedCartItems); // Initialize cart from localStorage
  }, []);

  // Save the cart to localStorage whenever cartItems changes
  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  // Add item to cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // If item exists, update quantity
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get total items in cart
  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Get total price of items in cart
  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
