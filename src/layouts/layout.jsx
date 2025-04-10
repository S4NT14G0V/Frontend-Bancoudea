import React from "react";

function simpleLayout({ children }) {
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
      }}
    >
      {children}
    </div>
  );
}

export default simpleLayout;
