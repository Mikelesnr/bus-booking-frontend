import React from "react";
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import Bustable from "../Tables/Bustable";

const Buses = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Bustable />
        </Box>
      </Box>
    </>
  );
};

export default Buses;
