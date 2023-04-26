import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import PeopleIcon from "@mui/icons-material/People";
import CommuteIcon from "@mui/icons-material/Commute";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNav() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SpaceDashboardIcon
                onClick={() => {
                  navigate("/");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </ListItemButton>

          {/* ---------------------------------------------------------------- */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PeopleIcon
                onClick={() => {
                  navigate("/drivers");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Drivers"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/drivers");
              }}
            />
          </ListItemButton>

          {/* ---------------------------------------------------------------- */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <DirectionsBusFilledIcon
                onClick={() => {
                  navigate("/buses");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Buses"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/buses");
              }}
            />
          </ListItemButton>

          {/* ---------------------------------------------------------------- */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <CommuteIcon
                onClick={() => {
                  navigate("/trips-available");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Trips"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/trips-available");
              }}
            />
          </ListItemButton>

          {/* ---------------------------------------------------------------- */}
          {/* <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AddCircleIcon
                onClick={() => {
                  navigate("/add-trip");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Register Trip"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/add-trip");
              }}
            />
          </ListItemButton> */}

          {/* ---------------------------------------------------------------- */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AdminPanelSettingsIcon
                onClick={() => {
                  navigate("/nasa");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Users"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/users");
              }}
            />
          </ListItemButton>
        </List>
        <Divider />
        <List>
          {/* ---------------------------------------------------------------- */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LogoutIcon
                onClick={() => {
                  navigate("/logout");
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{ opacity: open ? 1 : 0 }}
              onClick={() => {
                navigate("/logout");
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
