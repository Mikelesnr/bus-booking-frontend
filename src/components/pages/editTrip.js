import React from "react";
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import EditTripForm from "./EditTripform";

const EditTrip = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <EditTripForm />
        </Box>
      </Box>
    </>
  );
};

export default EditTrip;
