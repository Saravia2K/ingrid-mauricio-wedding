import * as React from "react";
import Paper from "@mui/material/Paper";
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TableGuestsListItem } from "../client";
import { Guest } from "@/types/guest";

interface Column {
  id: "name" | "companions" | "cellphone" | "relation" | "fiance" | "confirmed";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Nombre", minWidth: 100 },
  {
    id: "companions",
    label: "Acompañantes",
    minWidth: 170,
    format: (guests: Guest[]) => guests.map((g) => g.name).join(", "),
  },
  {
    id: "cellphone",
    label: "Teléfono",
    minWidth: 100,
    align: "right",
  },
  {
    id: "relation",
    label: "Relación",
    minWidth: 100,
    align: "right",
  },
  {
    id: "fiance",
    label: "Invitado de",
    minWidth: 100,
    align: "right",
  },
  {
    id: "confirmed",
    label: "Confirmado",
    minWidth: 100,
    align: "right",
    format: (value: boolean | undefined) => {
      if (value == undefined) return "Sin confirmar";
      if (value == false) return "No asistirá";

      return "Asistirá";
    },
  },
];

export default function Table({ guests }: TableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <MUITable stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {guests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = row[column.id] as any;
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </MUITable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={guests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

type TableProps = {
  guests: TableGuestsListItem[];
};
