import React from "react";
import TopNav from "components/common/Appbar/appbar";
import TravellerTripsTable from "./Tables/TripsTable";

const TravellerHome = () => {
  return (
    <>
    <TopNav/>
    <TravellerTripsTable/>
    </>
  );
};

export default TravellerHome;
