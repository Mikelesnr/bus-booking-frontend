import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import React from "react";
import Drivertable from "../Tables/Drivertable";

const Drivers = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Drivertable />
        </Box>
      </Box>
    </>
  );
};

export default Drivers 
;
