import React, { useEffect, useState } from "react";
import Layout from "@/layouts/layout";
import { getAllTransactions } from "@/service/transactionService";
import Drawer from "@/components/mui/drawerTransfer";
import Table from "@/components/mui/table";
import Navbar from "@/components/mui/navbar";

export default function Transactions() {
  const [items, setItems] = useState([]);

  const fetchTransactions = async () => {
    try {
      const data = await getAllTransactions();
      setItems(data);
    } catch (error) {
      console.error("Error al cargar transacciones:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const transactionColumns = [
    { key: "senderAccountNumber", label: "Sender" },
    { key: "receiverAccountNumber", label: "Receiver" },
    { key: "amount", label: "Amount", render: (value) => `$${value}` },
    { key: "timestamp", label: "Date" },
  ];

  return (
    <Layout>
      <Navbar variant="transactions" />
      <Table items={items} columns={transactionColumns} />
      <div style={{ width: "100%", display: "flex", gap: "1rem", justifyContent: "start"}} >
        <Drawer onTransferCreated={fetchTransactions} />
      </div>
    </Layout>
  );
}
