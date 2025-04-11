import { Navigate } from "react-router-dom";

// isAuthenticated podría venir de Context, Redux, localStorage, etc.
export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/" />;
}
