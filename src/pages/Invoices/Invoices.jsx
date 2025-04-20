import React from "react";
import "./Invoices.css";
import { dataPerson } from "../../data/Data";

import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Header from "../../Header/Header";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 30,
  },
  {
    field: "name",
    headerName: "Name",
    headerAlign: "center",
    align: "center",
    width: 130,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    headerAlign: "center",
    align: "center",
    type: "number",
    width: 90,
  },
  {
    field: "email",
    headerName: "Email",
    headerAlign: "center",
    align: "center",
    type: "email",
    width: 130,
    flex: 1,
  },
  {
    field: "phone",
    headerName: "Phone",
    headerAlign: "center",
    align: "center",
    type: "number",
    width: 130,
  },
  {
    field: "adress",
    headerName: "Adress",
    headerAlign: "center",
    align: "center",
    width: 160,
    flex: 1,
  },
  {
    field: "access",
    headerName: "Access",
    headerAlign: "center",
    align: "center",
    width: 130,
    flex: 1,
  },
];

const rows = dataPerson;

const paginationModel = { page: 0, pageSize: 5 };

function Invoices() {
  return (
    <section className="invoices">
      <Header header="Invoices Balances" />
      <Paper sx={{ height: 750, width: "100%", margin: "15px auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: "1px solid #ddd" }}
        />
      </Paper>
    </section>
  );
}

export default Invoices;
