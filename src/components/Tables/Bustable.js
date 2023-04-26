import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const titlestyle = {
  headRow: {
    style: {
      fontWeight: "bold",
      background: "grey",
    },
  },
};

const baseURL = "http://127.0.0.1:8000";

function Bustable() {

  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Bus Reg Number",
      selector: (row) => row.bus_reg,
    },
    {
      name: "Capacity",
      selector: (row) => row.no_of_seats,
    },
    {
      name: "Bus type",
      selector: (row) => row.bus_type,
      sortable: true,
    },

    {
      name: "Route",
      selector: (row) => row.route,
    },
  ];
  useEffect(() => {
    fetch(`${baseURL}/booking/buses`)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      });
  }, []);

  function handleSearch(e) {
    const newData = data.filter((row) => {
      return row.bus_reg.includes(e.target.value);
    });
    setData(newData);
  }

  return (
    <div>
      <div className="text-center pb-3">
        <h2>All Buses</h2>
      </div>
      <div className="text-end pb-1 me-3">
        <input
          type="text"
          placeholder="search by bus reg no."
          onChange={handleSearch}
        />
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

export default Bustable;
