import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";

export default function TableComponent({
  items,
  columns,
  rowKey = "id",
  type = "default",
  handleOpen,
  handleOpenDelete,
  editData,
  deleteData,
}) {
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedItems = items.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const showActions = type === "clients";

  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell key={col.key} sx={{ fontWeight: "bold" }}>
                  {col.label}
                </TableCell>
              ))}
              {showActions && <TableCell align="right">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedItems.map((item, index) => (
              <TableRow
                key={item[rowKey]}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                }}
              >
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.render
                      ? col.render(item[col.key], item)
                      : item[col.key]}
                  </TableCell>
                ))}
                {showActions && (
                  <TableCell align="right">
                    <IconButton
                      aria-label="edit"
                      size="small"
                      onClick={() => {
                        handleOpen();
                        editData(item);
                      }}
                    >
                      <RiEdit2Line />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      onClick={() => {
                        handleOpenDelete();
                        deleteData(item);
                      }}
                    >
                      <RiDeleteBin2Line />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={items.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]}
      />
    </>
  );
}
