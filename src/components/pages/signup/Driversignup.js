import React from "react";
import { useState } from "react";
import {
    Container,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
} from "@mui/material";
import Header from "components/common/header/header";
import Footer from "components/common/footer/footer";

const register_url = "http://127.0.0.1:8000/api";

function Driversignup() {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const signUp = async () => {
      const request = new Request(`${register_url}/register/driver/`, {
        body: JSON.stringify({
          first_name,
          last_name,
          username,
          password,
          password2,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const res = await fetch(request);
      const data = await res.json();

      if (res.ok) {
        console.log(data);
        console.log("User fetched");
        alert("Registered successfully");
        // navigate("/login");
      } else {
        console.log("Failed");
        alert("Check creditials");
      }
    };







    return (
      <>
        <Header/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Register account
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={first_name}
                  onChange={(e) => setfirst_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={last_name}
                  onChange={(e) => setlast_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signUp}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <br></br>
        <Footer/>
      </>
    );
}

export default Driversignup