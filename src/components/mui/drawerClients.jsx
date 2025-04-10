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
import { createClient } from "@/service/clienteService";

export default function DrawerClients({ onClientCreated }) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    balance: 0,
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
      const response = await createClient(formData);
      console.log("Cliente creado:", response);
      if (onClientCreated) {
        onClientCreated();
      }

      setOpen(false);
      setFormData({
        firstName: "",
        lastName: "",
        balance: 0,
      }); // Resetear el formulario
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 300, padding: "2rem" }} role="presentation">
      <Typography variant="h6" gutterBottom>
        User Creation
      </Typography>
      <Typography variant="body2" gutterBottom>
        Please, provide the correct information to create a new user.
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
      <Button onClick={toggleDrawer(true)} variant="contained">Add new clients</Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
