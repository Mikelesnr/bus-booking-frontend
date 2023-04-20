import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const titlestyle = {
  headRow: {
    style: {
      fontWeight: "bold",
      background: "grey",
    },
  },
};

const baseURL = "http://127.0.0.1:8000"

function Drivertable() {
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.surname,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Bus Reg No.",
      selector: (row) => row.bus_reg,
    },

    {
      name: "Route",
      selector: (row) => row.route,
    },
    {
      name: "Action",
      cell: (row) => 
        <>
          <EditIcon/> | <DeleteIcon/>
        </>
    },
  ];
  useEffect(() => {
    fetch(`${baseURL}/driver`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp)
        setData(resp);
      });
  }, []);

  function handleSearch(e) {
    const newData = data.filter(row => {
      return row.name.includes(e.target.value)
    })
    setData(newData)
  }

  return (
    <div>
      <div className="text-center pb-3">
        <h2>All Drivers</h2>
      </div>
      <div className="text-end pb-1">
        <input type="text" placeholder="search by Last Name" onChange={handleSearch}/>
      </div>
      <DataTable
        customStyles={titlestyle}
        columns={columns}
        data={data}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15]}
        fixedHeader
        fixedHeaderScrollHeight="400px"
        selectableRows
      ></DataTable>
    </div>
  );
}

export default Drivertable;