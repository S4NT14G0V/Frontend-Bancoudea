import React from 'react'
import Layout from '@/layouts/layout'
import TableComponent from '@/components/ui/table'
import {Button} from "@chakra-ui/react"
import DrawerComp from '@/components/ui/drawerTransfer'
import { Link } from 'react-router-dom';
import { getAllTransactions } from '@/service/transactionService';


export default function transactions() {

  const items = getAllTransactions()

  const transactionColumns = [
    { key: "senderAccountNumber", label: "Sender" },
    { key: "receiverAccountNumber", label: "Receiver" },
    { key: "amount", label: "Amount", render: (value) => `$${value}` },
    { key: "timestamp", label: "Date" },
  ];

  return (
    <Layout>
        <div style={{ width: "100%", display: "flex", gap: "1rem" }}>
            <Button as={Link} to="/" style={{ backgroundColor: "transparent", color: "black", border: "", borderBottom: "3px solid #198ae0", paddingInline: "2rem", borderRadius: "0" }}>
              Home
            </Button>
            <Button as={Link} to="/clients" style={{ backgroundColor: "transparent", color: "black", border: "", borderBottom: "3px solid #198ae0", paddingInline: "2rem", borderRadius: "0" }}>
              Clients
            </Button>
        </div>
        <TableComponent items={items} columns={transactionColumns}/>
        <div style={{ width: "100%", display: "flex", gap: "1rem", justifyContent: "start" }}>
            <DrawerComp/>
        </div>
    </Layout> 
  )
}
