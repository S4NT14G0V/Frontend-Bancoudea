/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Layout from "@/layouts/layout";
import { getAllClients } from "@/service/clienteService";
import Drawer from "@/components/mui/drawerClients";
import Navbar from "@/components/mui/navbar";
import Table from "@/components/mui/table";
import ModalEdit from "@/components/mui/modalUpdateClients";
import ModalDelete from "@/components/mui/modalDeleteClients";

export default function clients() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});

  const fetchClients = async () => {
    try {
      const data = await getAllClients();
      setItems(data);
    } catch (error) {
      console.error("Error al cargar clientes:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const accountColumns = [
    { key: "accountNumber", label: "Account Number" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    {
      key: "balance",
      label: "Balance",
      render: (value) => `$${value.toFixed(2)}`,
    },
  ];

  return (
    <Layout>
      <Navbar variant="clients" />
      <Table items={items} columns={accountColumns} type="clients" handleOpen={handleOpen} handleOpenDelete={handleOpenDelete} editData={setEditData} deleteData={setDeleteData} />
      <div style={{ width: "100%", display: "flex", gap: "1rem", justifyContent: "start",}}>
        <Drawer onClientCreated={fetchClients} />
        <ModalEdit data={editData} open={open} handleClose={handleClose} onClientCreated={fetchClients}/>
        <ModalDelete data={deleteData} open={openDelete} handleClose={handleCloseDelete} onClientCreated={fetchClients}/>
      </div>
    </Layout>
  );
}
