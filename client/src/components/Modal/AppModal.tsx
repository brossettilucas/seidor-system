import { Modal, Box } from "@mui/material";
import type { AppModalProps } from "../../types/props";

export default function AppModal({ open, onClose, children }: AppModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          minWidth: 400,
          boxShadow: 24,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
}
