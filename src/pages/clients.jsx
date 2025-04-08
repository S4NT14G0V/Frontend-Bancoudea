import React from 'react'
import Layout from '@/layouts/layout'
import TableComponent from '@/components/ui/table'
import {Button} from "@chakra-ui/react"
import DrawerComp from '@/components/ui/drawer'
import { Link } from 'react-router-dom';

export default function clients() {

    const items = [
        { id: 1, accountNumber: 1, firstName: "Santiago", lastName: "Trespalacios", balance: 999.99 },
        { id: 2, accountNumber: 2, firstName: "Maria", lastName: "Gonzalez", balance: 1500.50 },
        { id: 3, accountNumber: 3, firstName: "Carlos", lastName: "Ramirez", balance: 200.00 },
        { id: 4, accountNumber: 4, firstName: "Ana", lastName: "Martinez", balance: 3000.75 },
        { id: 5, accountNumber: 5, firstName: "Luis", lastName: "Fernandez", balance: 500.25 }
    ]
    
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
