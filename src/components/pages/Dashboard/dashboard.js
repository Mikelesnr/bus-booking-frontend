import React from "react";
import "./dashboard.css";
// import Drivertable from "../Drivertable";
import Bustable from "../Bustable";
const Dashboard = () => {
  return (
    <div className="content">
      <div className="col">
        <div className="container">
          <div className="nav">
            <li>PAGE</li>
          </div>
          <div className="row py-5">
            <div className="col-md-4">
              <div className="card text-center">
                <li href="">
                  <div className="card-body">
                    <h6 className="card-title">
                      <li href="#">Total Buses</li>
                    </h6>
                    <p className="card-text p-4">Dummy</p>
                  </div>
                </li>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <li href="">
                  <div className="card-body">
                    <h6 className="card-title">
                      <li href="#">Users</li>
                    </h6>
                    <p className="card-text p-4">Dummy</p>
                  </div>
                </li>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <li href="">
                  <div className="card-body">
                    <h6 className="card-title">
                      <li href="#">Total Drivers</li>
                    </h6>
                    <p className="card-text p-4">Dummy</p>
                  </div>
                </li>
              </div>
            </div>
            <div className="col-md-12 m-2 p-5">
              {/* <Drivertable /> */}
              <Bustable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
