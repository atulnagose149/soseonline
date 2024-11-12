import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import SideDrawer from "./SideDrawer"; // Import your SideDrawer component

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ backdropFilter: "blur(10px)", boxShadow: "none" }}
    >
      <Toolbar>
        <SideDrawer />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          E-School
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/courses">
            Courses
          </Button>
          <Button color="inherit" component={RouterLink} to="/consultants">
            Services
          </Button>
          <Button color="inherit" component={RouterLink} to="/feed">
            Feed
          </Button>
          <Button color="inherit" component={RouterLink} to="/admin">
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
