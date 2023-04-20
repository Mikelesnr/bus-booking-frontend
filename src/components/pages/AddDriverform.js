import React, {useState} from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";

export default function AddDriverForm() {
    
  const paperstyle = {
    margin: "30px auto",
    width: 300,
    padding: 20,
    height: "90vh",
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [busreg, setBusreg] = useState("");
  const [seats, setSeats] = useState("");
  const [bustype, setBustype] = useState("");
  const [route, setRoute] = useState("");

  async function Add(refresh) {
    refresh.preventDefault();
    let item = {
      name: name,
      surname: surname,
      bus_reg: busreg,
      no_of_seats: seats,
      bus_type: bustype,
      route: route,
    };
    // eslint-disable-next-line no-unused-vars
    let result = await fetch("http://127.0.0.1:8000/driver/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (result.ok){
        console.log(item)
    }
    else{
        console.log("Failed to add driver")
    }
    setName('');setSurname("");setBusreg("");setSeats("");setBustype("");setRoute("");
  }

  return (
    <Grid>
      <Paper elevation={1} style={paperstyle}>
        <Grid align="center">
          <h2>ADD DRIVER</h2>
        </Grid>
        <TextField
          sx={{ mb: 1 }}
          label="First Name"
          variant="outlined"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Last Name"
          variant="outlined"
          fullWidth
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

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
          label="Capacity"
          variant="outlined"
          fullWidth
          required
          value={seats}
          onChange={(e) => setSeats(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Bus type"
          variant="outlined"
          fullWidth
          required
          value={bustype}
          onChange={(e) => setBustype(e.target.value)}
        />

        <TextField
          sx={{ mb: 1 }}
          label="Route"
          variant="outlined"
          fullWidth
          required
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={Add}>
          ADD DRIVER
        </Button>
      </Paper>
    </Grid>
  );
}
