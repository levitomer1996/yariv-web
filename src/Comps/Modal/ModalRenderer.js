import React from "react";
import ModalCart from "./Content/ModalCart";

const ModalRenderer = ({ content }) => {
  switch (content) {
    case "cart":
      return <ModalCart />;
    default:
      return;
  }
};

export default ModalRenderer;
