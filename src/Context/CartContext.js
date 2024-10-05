import React, { useReducer, useEffect } from "react";

const CartContext = React.createContext();

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: [...state.cartItems, action.payload] }; // Add new item to cart
    case "SET_CART":
      return { ...state, cartItems: action.payload }; // Set cart with items from payload
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload), // Remove item by id
      };
    default:
      return state; // Return the unchanged state by default
  }
};

// Function to initialize cart in localStorage if it doesn't exist
function initLocalStorage(setCart) {
  try {
    const savedCart = localStorage.getItem("cart");

    // Check if 'cart' exists and if it's valid JSON, otherwise initialize it
    if (savedCart && savedCart !== "undefined" && savedCart !== "null") {
      const parsedCart = JSON.parse(savedCart); // Try to parse the cart
      setCart(parsedCart); // Set cart state if parsing succeeds
    } else {
      // If no valid cart exists, initialize as an empty array
      localStorage.setItem("cart", JSON.stringify([]));
    }
  } catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
    // In case of an error, initialize an empty cart in localStorage
    localStorage.setItem("cart", JSON.stringify([]));
  }
}

// Function to add an item to localStorage
function addItemToLocalStorage(item) {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage
  cart.push(item); // Add new item to cart
  localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart back to localStorage
}

// Function to remove an item from localStorage
function removeItemFromLocalStorage(itemId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage
  const updatedCart = cart.filter((i) => i.id !== itemId); // Filter out the item by id
  localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart back to localStorage
}

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, {
    cartItems: [], // Initial state
  });

  // Function to add an item to the cart
  const addItemToCart = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
    addItemToLocalStorage(payload); // Also update localStorage
  };

  // Function to set the cart
  const setCart = (payload) => {
    dispatch({ type: "SET_CART", payload });
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
    removeItemFromLocalStorage(itemId); // Also update localStorage
  };

  // Function to get total number of items in the cart
  const getTotalItems = () => {
    return cartState.cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
  };

  // Initialize cart from localStorage when component mounts
  useEffect(() => {
    initLocalStorage(setCart);
  }, []); // Run only once on component mount

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart, // Provide the removeItemFromCart function in the context
        getTotalItems,
        setCart,
        cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
