import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import Modal from "@mui/material/Modal";
import { ModalContext } from "../../Context/ModalContext";
import ModalRenderer from "./ModalRenderer";
import Margin from "../Margin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", // 90% width for extra small screens (mobile)
    sm: "80%", // 80% width for small screens (tablets)
    md: "60%", // 60% width for medium and larger screens (desktops)
  },
  maxWidth: "1000px", // Set a maximum width for larger screens
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "90vh", // Max height of 90% of viewport height
  overflowY: "auto", // Enable scrolling if content overflows
};

export default function My_Modal() {
  const { state, hideModal } = useContext(ModalContext); // Destructure hideModal from context
  const { content, open } = state;

  return (
    <Modal
      open={open}
      onClose={hideModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* Close button in the top-right corner */}
        <IconButton
          onClick={hideModal}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Margin bottom={5} />
        {/* Modal Content */}
        <ModalRenderer content={content} />
      </Box>
    </Modal>
  );
}
