import React, { useEffect, useState } from "react";
// import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
// import authFetch from "../Tokenget/Custom";
import authFetch from "../Tokenget/Interceptor";

function DisplayData() {
  const [data, setdata] = useState([]);

  // , {
  //   headers: {
  //     Authorization: `Bearer ${
  //       JSON.parse(localStorage.getItem("user")).jwtToken
  //     }`,
  //   },
  // }

  useEffect(() => {
    authFetch.get("accounts").then((y) => {
      console.log(y.data);
      setdata(y.data);
    });
  },[]);

  const columns = [
    { field: "title", headerName: "Title", width: 70 },
    { field: "created", headerName: "Created", width: 300 },
    { field: "firstName", headerName: "FirstName", width: 300 },
    { field: "lastName", headerName: "LastName", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        rows={data}
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

export default DisplayData;
