/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Button,
  Divider,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  Stack,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { deleteClient } from "@/service/clienteService";

function modalDeleteClients({ data, open, handleClose, onClientCreated }) {
  const [formData, setFormData] = useState({ ...data });
  const [confirmed, setConfirmed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = async () => {
    try {
      await deleteClient(formData);
      setShowSuccess(true);
      onClientCreated();
      handleClose();
      setFormData({
        firstName: "",
        lastName: "",
        balance: 0,
      });
      setConfirmed(false);
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setFormData({ ...data });
      setConfirmed(false); // Reiniciar el checkbox cuando se abre
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
            Delete User
          </Typography>
          <Typography variant="body2" gutterBottom>
            Please, confirm the changes before updating the user.
          </Typography>
          <Divider sx={{ my: 2 }} />
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
                fullWidth
                slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "inherit",
                    },
                  }}
              />

              <TextField
                required
                label="Last Name"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                fullWidth
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
                sx={{
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "inherit",
                  },
                }}
              />
              <FormControl fullWidth>
                <InputLabel htmlFor="balance">Balance</InputLabel>
                <OutlinedInput
                  id="balance"
                  name="balance"
                  value={formData.balance}
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Balance"
                  type="number"
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                  sx={{
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "inherit",
                    },
                  }}
                />
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                  />
                }
                label="I'm sure I want to delete this user"
              />

              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  disabled={!confirmed}
                >
                  Delete
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
          Cliente borrado correctamente.
        </Alert>
      </Snackbar>
    </>
  );
}

export default modalDeleteClients;
