import React from "react";
import TopNav from "components/common/Appbar/appbar";
// import TravellerTripsTable from "./Tables/TripsTable";
import ViewTrips from "./ViewTrips";

const TravellerHome = () => {
  return (
    <>
    <TopNav/>
    {/* <TravellerTripsTable/> */}
    <ViewTrips/>
    </>
  );
};

export default TravellerHome;
