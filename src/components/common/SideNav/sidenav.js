import React from "react";
import "./sidenav.css";

const SideNav = () => {
  return (
    <div className="side-bar">
      <div className="logo">
        <li>LOGO</li>
      </div>

      <div className="navigation-links">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
          <li className="list">
            <span className="span">Dashboard</span>
          </li>

          <li className="list">
            <span className="span"> Add Driver</span>
          </li>

          <li className="list">
            <span className="span">Register Trip</span>
          </li>

          <li className="list">
            <span className="span">Buses</span>
          </li>

          <li className="list">
            <span className="span">Users</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
