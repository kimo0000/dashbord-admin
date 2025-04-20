// import "./Contact.css";
import { dataPerson } from "../../data/Data";

import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Header from "../../Header/Header";

const columns = [
  {field: 'id', headerName: 'ID', headerAlign: "center", align: "center",  width: 10},
  {field: 'name', headerName: 'Name', headerAlign: "center", align: "center", width: 130, flex: 1},
  {field: 'email', headerName: 'Email', headerAlign: "center", align: "center", width: 130, flex: 1 },
  {field: 'age', headerName: 'Age', headerAlign: "center", align: "center", type: 'number', width: 100},
  {field: 'phone', headerName: 'Phone', headerAlign: "center", align: "center", type: 'number', width: 90, flex: 1},
  {field: 'adress', headerName: 'Adress', headerAlign: "center", align: "center", width: 160, flex: 1},
];

const rows = dataPerson;

const paginationModel = { page: 0, pageSize: 5 };


function Contact() {

  return (
    <section className="contact">
     <Header header="Contact Information" /> 
     <Paper sx={{ height: 750, width: '100%', margin: " 15px auto" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: "1px solid #ddd" }}
      />
    </Paper>
    </section>
  )
}

export default Contact;