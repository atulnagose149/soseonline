import React from "react";
import { TextField, Button, Typography, Box, Link } from "@mui/material";

function LoginForm({
  forgotPassword,
  setForgotPassword,
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
}) {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "auto",
        padding: 3,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>

      {forgotPassword && (
        <Box textAlign="center" mt={2}>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default LoginForm;
