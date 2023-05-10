import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "../Dashboard/dashboard.css"
import SideNav from "components/common/SideNav/SideNav";
import Bustable from "components/Tables/Bustable";

const baseURL = "http://127.0.0.1:8000";

function AdminDashboard() {
    const [bustotal, setbustotal] = useState([]);
    const [usertotal, setusertotal] = useState([]);
    const [drivertotal, setdrivertotal] = useState([]);
  
    useEffect(() => {
      fetch(`${baseURL}/booking/buses`)
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log(resp.length);
          setbustotal(resp);
        });
    }, []);
  
    useEffect(() => {
      fetch(`${baseURL}/api/users`)
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log(resp.length);
          setusertotal(resp);
        });
    }, []);
  
    useEffect(() => {
      fetch(`${baseURL}/driver`)
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log(resp.length);
          setdrivertotal(resp);
        });
    }, []);
  
  
    return (
      <>
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="row py-5">
              <div className="col-md-4">
                <div className="card text-center">
                  <li href="/buses">
                    <div className="card-body">
                      <h5 className="card-title">
                        <li href="/buses">Total Buses</li>
                      </h5>
                      <p className="card-text p-4">{bustotal.length}</p>
                    </div>
                  </li>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <li href="">
                    <div className="card-body">
                      <h5 className="card-title">
                        <li href="#">Total Users</li>
                      </h5>
                      <p className="card-text p-4">{usertotal.length}</p>
                    </div>
                  </li>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <li href="">
                    <div className="card-body">
                      <h5 className="card-title">
                        <li href="#">Total Drivers</li>
                      </h5>
                      <p className="card-text p-4">{drivertotal.length}</p>
                    </div>
                  </li>
                </div>
              </div>
              <div className="col-md-12 m-2 p-5">
                <Bustable />
              </div>
            </div>
          </Box>
        </Box>
      </>
    );
}

export default AdminDashboard