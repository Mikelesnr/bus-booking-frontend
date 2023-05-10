import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const login_url = "http://127.0.0.1:8000";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    const request = new Request(`${login_url}/api/auth/login/`, {
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const res = await fetch(request);
    const data = await res.json();

    if (res.ok) {
      // console.log(data);
      localStorage.setItem("user-info", JSON.stringify(data));
      // console.log("User fetched")
      navigate("/dashboard");
    } else {
      // console.log("Failed");
      alert("Invalid creditials");
    }
  };



  return (
    <>
      {/* <Header /> */}
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
            Sign In
          </Typography>
          <Grid container spacing={2}>
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
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={signin}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
