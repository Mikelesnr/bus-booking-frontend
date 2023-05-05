import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";

const baseURL = "http://127.0.0.1:8000"

const Bookingform = () => {
  const paperstyle = {
    margin: "30px auto",
    width: 500,
    padding: 20,
    maxWidth: "100%",
  };

  const [name, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [busreg, setBusreg] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id } = useParams();

  const getTrip = async () => {
    const response = await fetch(`${baseURL}/booking/trips/${id}`);

    const data = await response.json();

    if (response.ok) {
    //   console.log(data);
      setBusreg(data.bus_reg);
      setDate(data.trip_date);
      setDeparture(data.trip_depature);
      setDestination(data.trip_destination);
      setTime(data.trip_time);

    } else {
      console.log("Failed fetch");
    }
  };

  useEffect(() => {
    getTrip();
  }, []);

  async function Booktrip() {
    let booking = {
      client_name: name,
      client_surname: lastname,
      bus_reg: busreg,
      trip_depature: departure,
      trip_destination: destination,
      trip_date: date,
      trip_time: time,
    };

    let result = await fetch(`${baseURL}/booking/`, {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (result.ok) {
      // console.log("booked trip");
      alert("booked trip successfully");
      setFirstname("");setLastname("");setBusreg("");setDeparture("");setDestination("");setDate("");setTime("");
    } else {
      // console.log("Failed to book trip");
      alert("Failed to book trip");
    }
  }

  return (
    <Grid>
      <Paper elevation={5} style={paperstyle}>
        <Grid align="center">
          <h2>BOOK TRIP</h2>
        </Grid>

        <TextField
          sx={{ mb: 1 }}
          label="First Name"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={name}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Last Name"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Bus Reg Number"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={busreg}
          onChange={(e) => setBusreg(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Departure"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Destination"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Date"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Departure time"
          variant="outlined"
          size="small"
          fullWidth
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={Booktrip}>
          BOOK TRIP
        </Button>
      </Paper>
    </Grid>
  );
};

export default Bookingform;
