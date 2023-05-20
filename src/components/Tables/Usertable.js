import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const titlestyle = {
  headRow: {
    style: {
      fontWeight: "bold",
      background: "grey",
    },
  },
};

const baseURL = "http://127.0.0.1:8000";

function UsersTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.first_name,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
    },
    {
        name: "Username",
        selector: (row) => row.username,
      },
    {
      name: "User Type",
      selector: (row) => {
        if (String(row.is_driver) === "true"){
            return "Driver"
        }
        if (String(row.is_admin) === "true"){
            return "Admin"
        }
        if (String(row.is_traveller) === "true"){
            return "Traveller"
        }
      },
    },
    {
      name: "Delete user",
      cell: (row) => (
        <>
          <DeleteIcon
            sx={{ cursor: "pointer" }}
            color="error"
            onClick={() => DeleteUser(row.id)}
          />
        </>
      ),
    },
  ];

  const getUsers = async () => {
    const response = await fetch(`${baseURL}/api/users`);

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      setData(data);
    } else {
      console.log("Failed fetch");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  const DeleteUser = async (id) => {
    const resp = await fetch(`${baseURL}/api/users/${id}`, {
      method: "DELETE",
    });

    if (resp.ok) {
      toast.success("User deleted",{
        position: toast.POSITION.TOP_CENTER,
      })
    } else {
      toast.error("Delete User failed",{
        position: toast.POSITION.TOP_CENTER,
      })
    }

    getUsers();
  };

  return (
    <div>
      <div className="text-center pb-3">
        <h2>All Users</h2>
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

export default UsersTable;
