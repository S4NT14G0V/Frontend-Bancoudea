import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí va la lógica para autenticar
    console.log("User:", user, "Password:", password);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }} style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          mt: 10,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "100%",
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold">
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="User"
              variant="outlined"
              type="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              size="large"
              sx={{ mt: 1 }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
