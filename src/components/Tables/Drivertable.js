import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      name: "Add Trip",
      cell: (row) => (
        <>
          <AddCircleIcon
            sx={{ cursor: "pointer" }}
            color="outline"
            onClick={() => {
              EditDriver(row.id);
              setData(data);
              navigate("/add-trip/" + row.id);
            }}
          />
        </>
      ),
    },
    {
      name: "Edit / Delete",
      cell: (row) => (
        <>
          <EditIcon
            sx={{ cursor: "pointer" }}
            color="primary"
            onClick={() => {
              EditDriver(row.id);
              setData(data);
              navigate("/edit-driver/" + row.id);
            }}
          />{" "}
          |{" "}
          <DeleteIcon
            sx={{ cursor: "pointer" }}
            color="error"
            onClick={() => DeleteDriver(row.id)}
          />
        </>
      ),
    },
  ];

  const getDrivers = async () => {
    const response = await fetch(`${baseURL}/driver`);

    const data = await response.json();

    if (response.ok) {
      // console.log(data);
      setData(data);
    } else {
      console.log("Failed fetch");
    }
  };

  useEffect(() => {
    getDrivers();
  }, []);


  const EditDriver = async (id) => {
    const resp = await fetch(`${baseURL}/driver/${id}`, {
      // method: "PUT",
    });
    if (resp.ok) {
      console.log("Fetched driver");
    } else {
      console.log("Failed fetch driver");
    }
    // getDrivers();
  };

  const DeleteDriver = async (id) => {
    const resp = await fetch(`${baseURL}/driver/${id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      console.log(resp.status, "Deleted");
    } else {
      console.log("Failed delete driver");
    }

    getDrivers();
  };
  

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
      <div className="d-flex justify-content-between pb-1">
        <div>
          <Button
            variant="contained"
            endIcon={<AddCircleOutlineIcon />}
            sx={{ paddingBottom: 1 }}
            onClick={() => {
              navigate("/add-driver");
            }}
          >
            ADD DRIVER
          </Button>
        </div>
        <div className="text-end pb-1">
          <input
            type="text"
            placeholder="search by Last Name"
            onChange={handleSearch}
          />
        </div>
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