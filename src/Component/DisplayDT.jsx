import React from "react";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridApi, GridCellValue } from "@mui/x-data-grid";

function DisplayDT(data) {
  const columns = [
    { field: "Id", headerName: "ID", width: 70 },
    { field: "AppointmentDate", headerName: "AppointmentDate", width: 300 },
    { field: "PatientName", headerName: "Patient Name", width: 130 },
    { field: "City", headerName: "City", width: 130 },
    { field: "State", headerName: "State", width: 130 },
    { field: "Zipcode", headerName: "Zipcode", width: 130 },
    { field: "MobileNumber", headerName: "Mobile Number", width: 130 },
    {
      field: "Edit",
      headerName: "Edit",
      renderCell: (params) => {
        

        return (
          <Button
            variant="text"
            sx={{ color: "white", backgroundColor: "blue" }}
            onClick={() => {data.setaddData(params.row.id)}}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "Delete",
      headerName: "Delete",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          console.log(params);
          let dummy = [...data.rows].filter((y) => y.id != e);
          // console.log(dummy)
          // dummy.splice((params.id)-1,1)

          data.setmore(dummy);
        };

        return (
          <Button
            sx={{ color: "white", backgroundColor: "red" }}
            onClick={() => {
              onClick(params.row.id);
            }}
          >
            Delete
          </Button>
        );
      },
    },
    //   {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    //   },
    //   {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //   },
  ];

  return (
    <div style={{ height: '100vh', width: "100%" }}>
      <DataGrid
        rows={data.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        hideFooterPagination
        hideFooterSelectedRowCount
        // checkboxSelection
      />
    </div>
  );
}

export default DisplayDT;
