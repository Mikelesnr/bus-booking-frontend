import React from "react";
import { Box } from "@mui/material";
import SideNav from "components/common/SideNav/SideNav";
import UsersTable from "components/Tables/Usertable";

const Users = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <UsersTable />
        </Box>
      </Box>
    </>
  );
};

export default Users;
