/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { updateClient } from "@/service/clienteService";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function modalUpdateClients({ data, open, handleClose, onClientCreated }) {
  const [formData, setFormData] = useState({ ...data });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await updateClient(formData);
      if (onClientCreated) {
        onClientCreated();
      }
      setShowSuccess(true);
      handleClose();
      setFormData({
        firstName: "",
        lastName: "",
        balance: 0,
      }); // Resetear el formulario
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setFormData({ ...data });
    }
  }, [data]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
          role="presentation"
        >
          <Typography variant="h6" gutterBottom>
            Update User
          </Typography>
          <Typography variant="body2" gutterBottom>
            Please, provide the correct information to update the user.
          </Typography>
          <Divider sx={{ marginBlock: "2rem" }} />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
          >
            <Stack spacing={2}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                slotProps={{ inputLabel: { shrink: true } }}
              />

              <TextField
                required
                label="Last Name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                slotProps={{ inputLabel: { shrink: true } }}
              />
              <FormControl fullWidth>
                <InputLabel htmlFor="balance">Balance</InputLabel>
                <OutlinedInput
                  id="balance"
                  name="balance"
                  value={formData.balance}
                  onChange={handleChange}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Balance"
                  type="number"
                />
              </FormControl>

              {/* Botones lado a lado */}
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" type="button" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Modal>

      <Snackbar
        open={showSuccess}
        autoHideDuration={4000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Cliente actualizado correctamente.
        </Alert>
      </Snackbar>
    </>
  );
}

export default modalUpdateClients;
