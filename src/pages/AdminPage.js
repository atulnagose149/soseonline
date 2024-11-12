import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import AdminHome from "./AdminHome.js";
import soseImage from "../styles/assest/image/sose.jpg";
import axios from "axios";

function AdminPage() {
  const [tab, setTab] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false); // For loader during login/register
  const [error, setError] = useState(null); // Error state for handling errors
  const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar for feedback messages

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Create an Axios instance with base URL
  const api = axios.create({
    baseURL: "http://localhost:5000", // Match this with your server's port
  });

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setOpenSnackbar(true);
      return;
    }
    setLoading(true);
    try {
      await api.post("/api/auth/register", { username, password });
      setLoading(false);
      alert("Registration successful");
      setTab("login");
    } catch (error) {
      setLoading(false);
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
      setError("Registration failed");
      setOpenSnackbar(true);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await api.post("/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      setLoading(false);
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      setError("Invalid username or password");
      setOpenSnackbar(true);
    }
  };

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  if (isLoggedIn) {
    return <AdminHome />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        {/* Left column content */}
        <img
          src={soseImage}
          alt="logo"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt: 20 }}>
        <Paper sx={{ padding: 3, textAlign: "center" }}>
          <Tabs value={tab} onChange={handleChange} aria-label="auth tabs">
            <Tab label="Login" value="login" />
            <Tab label="Register" value="register" />
          </Tabs>
          {tab === "login" && (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
            </Box>
          )}
          {tab === "register" && (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                onClick={handleRegister}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Register"}
              </Button>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Version: {process.env.REACT_APP_VERSION}
            </Typography>
            <Typography variant="body2">
              Powered By:&nbsp;
              <a href="https://www/" target="_blank" rel="noreferrer">
                <span> Vivek </span>
              </a>
            </Typography>
          </Box>
        </Paper>
        {/* Snackbar for error messages */}
        <Snackbar
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          message={error}
          autoHideDuration={3000}
        />
      </Grid>
    </Grid>
  );
}

export default AdminPage;
