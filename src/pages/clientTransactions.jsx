import React, { useState } from "react";
import Layout from "@/layouts/layout";
import { getTransactionsByAccountNumber } from "@/service/transactionService";
import Table from "@/components/mui/table";
import { Button, TextField, Stack, Typography, Box } from "@mui/material";
import Navbar from "@/components/mui/navbar";

export default function ClientTransactions() {
  const [items, setItems] = useState([]);
  const [accountNumber, setAccountNumber] = useState("");

  const fetchClientTransactions = async () => {
    try {
      if (!accountNumber) {
        return;
      }
      const data = await getTransactionsByAccountNumber(accountNumber);
      setItems(data);
    } catch (err) {
      console.error("Error al cargar transacciones:", err);
    }
  };

  const transactionColumns = [
    { key: "senderAccountNumber", label: "Sender" },
    { key: "receiverAccountNumber", label: "Receiver" },
    { key: "amount", label: "Amount", render: (value) => `$${value}` },
    { key: "timestamp", label: "Date" },
  ];

  return (
    <Layout>
      <Navbar variant="clienttransactions" />
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "start", height: "100%", gap: "1rem" }} >
        <Box mb={4} alignItems={"start"} gap={"1rem"} justifyContent={"center"} display={"flex"} flexDirection={"column"}>
          <Typography variant="body1" gutterBottom>
            Search transactions by account number
          </Typography>
          <Stack direction="row" spacing={2} width={"100%"}>
            <TextField label="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} variant="outlined" fullWidth/>
            <Button variant="contained" onClick={fetchClientTransactions} size="large">
              Search
            </Button>
          </Stack>
        </Box>
        <Table items={items} columns={transactionColumns} />
      </div>
    </Layout>
  );
}
