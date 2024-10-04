import React, { createContext, useReducer, useEffect } from "react";

// Create a CartContext
export const CartContext = createContext();

// Action types for the reducer
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";
const LOAD_CART = "LOAD_CART";

// Reducer function to handle cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case LOAD_CART:
      return action.payload;
    case ADD_ITEM:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

// Load the cart from localStorage
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

// Save the cart to localStorage
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save cart items as a string
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  // Load the cart from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = loadCartFromLocalStorage();
    dispatch({ type: LOAD_CART, payload: storedCartItems }); // Initialize cart from localStorage
  }, []);

  // Save the cart to localStorage whenever cartItems changes
  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  // Add item to cart
  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    dispatch({ type: REMOVE_ITEM, payload: itemId });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
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
