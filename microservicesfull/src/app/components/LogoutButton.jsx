// LogoutButton.js

import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(clearToken());
    // Redirect to login page after logout
    navigate("/login");
  };

  return isAuthenticated ? (
    <Button variant="contained" onClick={handleLogout}>
      Logout
    </Button>
  ) : null;
};

export default LogoutButton;
