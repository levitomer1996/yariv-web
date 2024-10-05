import React, { useContext } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import Modal from "@mui/material/Modal";
import { ModalContext } from "../../Context/ModalContext";
import ModalRenderer from "./ModalRenderer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export default function My_Modal() {
  const { state, hideModal } = useContext(ModalContext); // Destructure hideModal from context
  const { content, open } = state;

  return (
    <div>
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

          {/* Modal Content */}
          <ModalRenderer content={content} />
        </Box>
      </Modal>
    </div>
  );
}
