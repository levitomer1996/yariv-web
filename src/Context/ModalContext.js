import React, { createContext, useState } from "react";

// Create the ModalContext
export const ModalContext = createContext();

// ModalProvider component that wraps around children components to provide modal state
export const ModalProvider = ({ children }) => {
  const [open, setIsOpen] = useState(false); // Controls whether the modal is visible or not
  const [content, setContent] = useState(null); // Holds the content to be displayed in the modal

  // Function to show the modal with specific content
  const showModal = (modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  // Function to hide the modal
  const hideModal = () => {
    setContent(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, content, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};
