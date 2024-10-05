import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
};

export default function My_Modal() {
  const { state, showModal, hideModal } = useContext(ModalContext);
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
          <ModalRenderer content={content} />
        </Box>
      </Modal>
    </div>
  );
}
