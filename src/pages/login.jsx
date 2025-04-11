import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Alert,
} from "@mui/material";
import Layout from "@/layouts/layout";
import axios from "axios";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        {
          username: user,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // opcional si usás cookies en el futuro
        }
      );

      if (response.data.includes("Login exitoso")) {
        localStorage.setItem("isAuthenticated", "true");
        setMensaje({ type: "success", text: response.data });
        // Redirigir a otra página, por ejemplo /clients
        window.location.href = "/clients";
      } else {
        setMensaje({ type: "error", text: response.data });
      }
    } catch (error) {
      setMensaje({
        type: "error",
        text: "Credenciales inválidas o error en el servidor",
      });
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Layout variant="login">
      <Container
        maxWidth="sm"
        sx={{ mt: 10 }}
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
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

          {mensaje && (
            <Alert severity={mensaje.type} sx={{ mb: 2 }}>
              {mensaje.text}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="User"
                variant="outlined"
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
    </Layout>
  );
}
