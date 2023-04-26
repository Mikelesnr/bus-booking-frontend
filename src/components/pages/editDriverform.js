import React, { useEffect, useState } from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const baseURL = "http://127.0.0.1:8000";

function EditDriverForm() {
    const paperstyle = {
      margin: "30px auto",
      width: 300,
      padding: 20,
      height: "90vh",
    };

    const navigate = useNavigate()
    const {id} = useParams()
    // console.log(id)
  
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [busreg, setBusreg] = useState("");
  const [seats, setSeats] = useState("");
  const [bustype, setBustype] = useState("");
  const [route, setRoute] = useState("");

  const getDriver = async () => {
    const response = await fetch(`${baseURL}/driver/${id}`);

    const data = await response.json();

    if (response.ok) {
      // console.log(data);
      setData(data.id)
      setName(data.name)
      setSurname(data.surname);
      setBusreg(data.bus_reg);
      setSeats(data.no_of_seats);
      setBustype(data.bus_type);
      setRoute(data.route);
    } else {
      console.log("Failed fetch");
    }
  };
  useEffect(() => {
    getDriver();
  }, []);

  const Save = async (id) => {
    let item = {
      name: name,
      surname: surname,
      bus_reg: busreg,
      no_of_seats: seats,
      bus_type: bustype,
      route: route,
    };
    let resp = await fetch(`${baseURL}/driver/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (resp.ok){
        // console.log(item)
        console.log(resp.status, "Updated Driver")
        navigate("/drivers");
    }
    else{
        console.log("Failed to Update driver")
    }
  };

  return (
    <Grid>
      <Paper elevation={1} style={paperstyle}>
        <Grid align="center">
          <h2>EDIT DRIVER</h2>
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
          // onChange={(e) => setBusreg(e.target.value)}
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
        <Button variant="contained" fullWidth onClick={() => Save(id)}>
          SAVE
        </Button>
      </Paper>
    </Grid>
  );
}

export default EditDriverForm;