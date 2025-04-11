import React from "react";
import { Button } from "@mui/material";

function simpleLayout({ children, variant="default" }) {

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/";
  };  

  return (
    <div
      style={{
        backgroundColor: "#fbfbfb",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2rem 6rem",
        gap: "2rem",
        alignItems: "center",
        position: "relative",
      }}
    >
      {children}
      {variant === "default" && <Button style={{position: "absolute", top:"10px", right: "10px", width: "75px" }} onClick={handleLogout}>Logout</Button>}
    </div>
  );
}

export default simpleLayout;
