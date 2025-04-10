import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { createTransaction } from "@/service/transactionService";

export default function DrawerTransfers({ onTransferCreated }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    senderAccountNumber: "",
    receiverAccountNumber: "",
    amount: 0,
  });

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await createTransaction(formData);
      console.log("Transacción creada:", response);
      if (onTransferCreated) {
        onTransferCreated();
      }

      setOpen(false);
      setFormData({
        senderAccountNumber: "",
        receiverAccountNumber: "",
        amount: 0,
      }); // Resetear el formulario
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 300, padding: "2rem" }} role="presentation">
      <Typography variant="h6" gutterBottom>
        Users Amount Transfer
      </Typography>
      <Typography variant="body2" gutterBottom>
        Please, provide the correct information to generate a new transfer between two accounts.
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
            id="senderAccountNumber"
            name="senderAccountNumber"
            label="Sender Account Number"
            value={formData.senderAccountNumber}
            onChange={handleChange}
            fullWidth
            slotProps={{ inputLabel: { shrink: true } }}
          />

          <TextField
            required
            id="receiverAccountNumber"
            name="receiverAccountNumber"
            label="Receiver Account Number"
            value={formData.receiverAccountNumber}
            onChange={handleChange}
            fullWidth
            slotProps={{ inputLabel: { shrink: true } }}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <OutlinedInput
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Amount"
              type="number"
            />
          </FormControl>

          {/* Botones lado a lado */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              type="button"
              onClick={toggleDrawer(false)}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} variant="contained">generate new transfer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
