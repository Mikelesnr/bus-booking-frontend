import React from "react";
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import EditDriverForm from "./editDriverform";

const EditDriver = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <EditDriverForm />
        </Box>
      </Box>
    </>
  );
};

export default EditDriver;
