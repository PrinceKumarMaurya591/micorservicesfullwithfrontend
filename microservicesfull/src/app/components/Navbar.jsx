// Navbar.js

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome To Microservice Project
            </Typography>
            <LogoutButton />
          </Toolbar>
        </AppBar>
      );
    };

export default Navbar;
