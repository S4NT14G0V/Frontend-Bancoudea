import React, { useEffect, useState } from "react";
import Layout from '@/layouts/layout'
import TableComponent from '@/components/ui/table'
import {Button} from "@chakra-ui/react"
import DrawerComp from '@/components/ui/drawer'
import { Link } from 'react-router-dom';
import { getAllClients } from '@/service/clienteService';

export default function clients() {

    const [items, setItems] = useState([]);
    
      useEffect(() => {
        const fetchTransactions = async () => {
          try {
            const data = await getAllClients();
            setItems(data);
          } catch (error) {
            console.error("Error al cargar clientes:", error);
          }
        };
    
        fetchTransactions();
      }, []);
    
    const accountColumns = [
        { key: "accountNumber", label: "Account Number" },
        { key: "firstName", label: "First Name" },
        { key: "lastName", label: "Last Name" },
        { key: "balance", label: "Balance", render: (value) => `$${value.toFixed(2)}` },
      ];

return (
    <Layout>
        <div style={{ width: "100%", display: "flex", gap: "1rem" }}>
            <Button as={Link} to="/" style={{ backgroundColor: "transparent", color: "black", border: "", borderBottom: "3px solid #198ae0", paddingInline: "2rem", borderRadius: "0" }}>
                Home
            </Button>
            <Button as={Link} to="/transactions" style={{ backgroundColor: "transparent", color: "black", border: "", borderBottom: "3px solid #198ae0", paddingInline: "2rem", borderRadius: "0" }}>
                Transactions
            </Button>
        </div>
        <TableComponent items={items} columns={accountColumns} />
        <div style={{ width: "100%", display: "flex", gap: "1rem", justifyContent: "start" }}>
            <DrawerComp />
        </div>
    </Layout>
);
}
