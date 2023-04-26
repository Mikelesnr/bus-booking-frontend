import React from 'react';
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import AddTripForm from './AddTripform';

const Addtrip = () => {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <AddTripForm/>
          </Box>
        </Box>
      </>
    );
}

export default Addtrip;
