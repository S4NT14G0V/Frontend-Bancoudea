# Banco UDEA - Frontend

Este es el frontend de una aplicación bancaria desarrollada en **ReactJS** y **Material UI (MUI)**. Permite la gestión de clientes y transacciones, incluyendo creación, edición, transferencia de saldo y visualización de historial.

## ▶️ Instrucciones para correr el proyecto

### 1. Instala las dependencias
```bash
npm install
```

### 2. Corre la aplicación
```bash
npm run dev
```

## 🛠️ Tecnologías utilizadas

- React
- React Router DOM
- Material UI
- Axios

## 📁 Estructura del proyecto
```
src/
├── components/
│   └── mui/             # Componentes reutilizables
├── layouts/             # Layouts base
├── pages/               # Vistas principales (Login, Transacciones, etc.)
├── service/             # Integración con backend via Axios
├── App.jsx              # Manejo de rutas
├── main.jsx
```

## 🔐 Funcionalidades
* Login (soporte de autenticación)

* Creación y edición de clientes

* Eliminar clientes

* Realizar transferencias

* Buscar y listar transacciones por número de cuenta

## 📡 Comunicación con backend
Este frontend se conecta con un backend desarrollado en Java Spring Boot a través de peticiones HTTP con Axios.
