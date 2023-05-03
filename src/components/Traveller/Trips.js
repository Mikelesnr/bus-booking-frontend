import React from "react";
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import TripsTable from "../Tables/TripsTable";

const Alltrips = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TripsTable/>
        </Box>
      </Box>
    </>
  );
};

export default Alltrips;
