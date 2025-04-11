import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function navbar({ variant }) {
  return (
    <>
      {variant === "clients" && (
        <div style={{ width: "100%", display: "flex", gap: "1rem" }}>
          <Button
            component={Link}
            to="/"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Home
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Clients
          </Button>
          <Button
            component={Link}
            to="/transactions"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Transactions
          </Button>
          <Button
            component={Link}
            to="/clienttransactions"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Client Transactions
          </Button>
        </div>
      )}
      {variant === "transactions" && (
        <div style={{ width: "100%", display: "flex", gap: "1rem" }}>
          <Button
            component={Link}
            to="/"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/clients"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Clients
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Transactions
          </Button>
          <Button
            component={Link}
            to="/clienttransactions"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Client Transactions
          </Button>
        </div>
      )}
      {variant === "clienttransactions" && (
        <div style={{ width: "100%", display: "flex", gap: "1rem" }}>
          <Button
            component={Link}
            to="/"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/clients"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Clients
          </Button>
          <Button
            component={Link}
            to="/transactions"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Transactions
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "",
              borderBottom: "3px solid #198ae0",
              paddingInline: "2rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#198ae0")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            Client Transactions
          </Button>
        </div>
      )}
    </>
  );
}
