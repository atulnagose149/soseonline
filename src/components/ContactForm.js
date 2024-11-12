import React, { useState } from "react";
import { Grid, TextField, Button, Box, Typography, Link } from "@mui/material";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // For feedback

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Input validation can be done here if needed

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        phone,
        message,
      });

      if (response.status === 201) {
        setStatusMessage("Message sent successfully!");
        // Clear form fields after successful submission
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatusMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Error sending message. Please try again later.");
    }
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid
          item
          xs={12}
          md={4}
          style={{
            backgroundColor: "#2D033B",
            color: "white",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body2">
            Fill up the form and our team will get back to you within 24 hours
          </Typography>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="body1">
              <Link href="tel:+233543201893" color="inherit" underline="none">
                📞 +91-9561471054
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <Link
                href="mailto:atulnagose1499@gmail.com"
                color="inherit"
                underline="none"
              >
                ✉️ atulnagose1499@gmail.com
              </Link>
            </Typography>
          </Box>
          <Box sx={{ marginTop: 4 }}>
            <Link href="#" color="inherit">
              <i className="fab fa-facebook" style={{ marginRight: 10 }} />
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-instagram" style={{ marginRight: 10 }} />
            </Link>
            <Link href="#" color="inherit">
              <i className="fab fa-linkedin" />
            </Link>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "2rem",
            backgroundColor: "#F8F9FA",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5" gutterBottom color="black">
            Any Question or remarks? Just write us a message
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
            <TextField
              label="Phone"
              fullWidth
              margin="normal"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              label="Message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
              placeholder="Write your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "1rem", width: "100%" }}
            >
              Send Message
            </Button>
          </form>
          {statusMessage && (
            <Typography variant="body2" color="error" sx={{ mt: 2 }}>
              {statusMessage}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
