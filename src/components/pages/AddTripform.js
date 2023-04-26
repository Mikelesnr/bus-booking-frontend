import React, { useState,useEffect } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const baseURL = "http://127.0.0.1:8000";

export default function AddTripForm() {
  const paperstyle = {
    margin: "30px auto",
    width: 300,
    padding: 20,
    height: "80vh",
  };

  const navigate = useNavigate();
  const { id } = useParams();

  const [busreg, setBusreg] = useState("");
  const [date, setDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");

  const getDriver = async () => {
    const response = await fetch(`${baseURL}/driver/${id}`);

    const data = await response.json();

    if (response.ok) {
      console.log(data.id);
      setBusreg(data.bus_reg);
    } else {
      console.log("Failed fetch");
    }
  };
  useEffect(() => {
    getDriver();
  }, []);

  async function Add(refresh) {
    refresh.preventDefault();
    let item = {
      bus_reg: busreg,
      trip_time: time,
      trip_date: date,
      trip_depature: departure,
      trip_destination: destination,
    };
    // eslint-disable-next-line no-unused-vars
    let result = await fetch("http://127.0.0.1:8000/booking/tripsavailable", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (result.ok) {
      console.log(item);
    } else {
      console.log("Failed to add trip");
    }
    setBusreg("");
    setDate("");
    setDeparture("");
    setDestination("");
    setTime("");
    navigate("/trips-available");
    
  }

  return (
    <Grid>
      <Paper elevation={1} style={paperstyle}>
        <Grid align="center">
          <h2>ADD TRIP</h2>
        </Grid>
        <TextField
          sx={{ mb: 1 }}
          label="Bus Reg Number"
          variant="outlined"
          fullWidth
          required
          value={busreg}
          onChange={(e) => setBusreg(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Departure"
          variant="outlined"
          fullWidth
          required
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Destination"
          variant="outlined"
          fullWidth
          required
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Date"
          variant="outlined"
          fullWidth
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Departure time"
          variant="outlined"
          fullWidth
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={Add}>
          ADD TRIP
        </Button>
      </Paper>
    </Grid>
  );
}
