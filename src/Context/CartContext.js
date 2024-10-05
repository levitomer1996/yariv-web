import React, { useReducer } from "react";

const CartContext = React.createContext();
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: [...state.cartItems, action.payload] }; // Add new item to cart
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload), // Remove item by id
      };
    default:
      return state; // Return the unchanged state by default
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, {
    cartItems: [], // Initial state
  });

  // Function to add an item to the cart
  const addItemToCart = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };

  // Function to get total number of items in the cart
  const getTotalItems = () => {
    return cartState.cartItems.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart, // Provide the removeItemFromCart function in the context
        getTotalItems,
        cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
