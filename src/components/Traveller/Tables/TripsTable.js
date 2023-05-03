import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const titlestyle = {
  headRow: {
    style: {
      fontWeight: "bold",
      background: "#bee0ec",
      fontSize:"15px"
    },
  },
};

const baseURL = "http://127.0.0.1:8000";

function TravellerTripsTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const columns = [
    {
      name: "Bus Reg Num",
      selector: (row) => row.bus_reg,
    },
    {
      name: "Departure",
      selector: (row) => row.trip_depature,
    },
    {
      name: "Destination",
      selector: (row) => row.trip_destination,
    },

    {
      name: "Date",
      selector: (row) => row.trip_date,
    },
    {
      name: "Time",
      selector: (row) => row.trip_time,
    },
    {
      name: "Available seats",
      selector: (row) => row.seats_available,
    },
    {
      name: "Book",
      cell: (row) => (
        <>
          <Button
            onClick={() => {
              navigate("/book-trip");
            }}
            variant="contained"
            sx={{
              width: { xs: 100, sm: 80 },
            }}
          >
            Book
          </Button>
        </>
      ),
    },
  ];

  const getTrips = async () => {
    const response = await fetch(`${baseURL}/booking/tripsavailable`);

    const data = await response.json();

    if (response.ok) {
      // console.log(data);
      setData(data);
    } else {
      console.log("Failed fetch");
    }
  };

  useEffect(() => {
    getTrips();
  }, []);


  // const EditTrip = async (id) => {
  //   const resp = await fetch(`${baseURL}/booking/trips/${id}`, {
  //     // method: "PUT",
  //   });
  //   if (resp.ok) {
  //     console.log("Fetched Trip");
  //   } else {
  //     console.log("Failed fetch Trip");
  //   }
  //   // getDrivers();
  // };

  // const DeleteTrip = async (id) => {
  //   const resp = await fetch(`${baseURL}/booking/trips/${id}`, {
  //     method: "DELETE",
  //   });

  //   if (resp.ok) {
  //     console.log(resp.status, "Deleted");
  //   } else {
  //     console.log("Failed delete driver");
  //   }

  //   getTrips();
  // };

  return (
    <div>
      <div className="text-center pb-3 pt-3">
        <h2>Available Trips</h2>
      </div>
      <DataTable
        customStyles={titlestyle}
        columns={columns}
        data={data}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15]}
        fixedHeader
        fixedHeaderScrollHeight="400px"
        // selectableRows
      ></DataTable>
    </div>
  );
}

export default TravellerTripsTable;
