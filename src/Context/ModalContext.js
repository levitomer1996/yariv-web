import React, { createContext, useReducer } from "react";

// Create the ModalContext
export const ModalContext = createContext();

// Define action types
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";

// Reducer function to manage modal state
const modalReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        open: true,
        content: action.payload,
      };
    case HIDE_MODAL:
      return {
        open: false,
        content: null,
      };
    default:
      return state;
  }
};

// ModalProvider component that wraps around children components to provide modal state
export const ModalProvider = ({ children }) => {
  const initialState = { open: false, content: null };

  // Use reducer to manage modal state
  const [state, dispatch] = useReducer(modalReducer, initialState);

  // Function to show the modal with specific content
  const showModal = (modalContent) => {
    dispatch({ type: SHOW_MODAL, payload: modalContent });
  };

  // Function to hide the modal
  const hideModal = () => {
    dispatch({ type: HIDE_MODAL });
  };

  return (
    <ModalContext.Provider value={{ state, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};
