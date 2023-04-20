import React from "react";

import SideNav from "components/common/SideNav/sidenav";
import "./home.css";
import Dashboard from "../Dashboard/dashboard";

const HomePage = () => {
  return (
    <div className="home">
      <SideNav />
      <div className="home-contain">
        <Dashboard />
      </div>
    </div>
  );
};
export default HomePage;
