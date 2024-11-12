import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy FAQ data
const faqs = [
  {
    question: "How can I reset my password?",
    answer:
      "Go to the login page, click on 'Forgot Password', and follow the instructions to reset your password.",
  },
  {
    question: "How can I update my account details?",
    answer:
      "You can update your account information by going to the 'Account Settings' page and modifying the relevant fields.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach out to our support team through the contact form below, or via email at support@example.com.",
  },
];

// Dummy common issues data
const commonIssues = [
  {
    issue: "Payment issues",
    solution:
      "Ensure your payment method is up to date or try a different method. Contact support if the issue persists.",
  },
  {
    issue: "Unable to access course material",
    solution:
      "Try clearing your browser's cache or using a different browser. If the problem persists, contact support.",
  },
  {
    issue: "Course not marked as completed",
    solution:
      "Make sure you've completed all sections of the course. If the issue continues, refresh the page or contact support.",
  },
];

const HelpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent. We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          How Can We Help You?
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Find answers to common questions, troubleshoot issues, or get in touch
          with our support team.
        </Typography>
      </Box>

      {/* Common Issues & Solutions */}
      <Typography variant="h4" gutterBottom>
        Common Issues & Solutions
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {commonIssues.map((issue, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{issue.issue}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {issue.solution}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {faqs.map((faq, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{faq.question}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Contact Support */}
      <Typography variant="h4" gutterBottom>
        Contact Support
      </Typography>
      <Card sx={{ p: 4, mb: 5 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Submit Request
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>

      {/* Guides & Tutorials */}
      <Typography variant="h4" gutterBottom>
        Guides & Tutorials
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">How to Use Our Platform</Typography>
                <Typography variant="body2" color="text.secondary">
                  A detailed guide on how to navigate and use our platform
                  effectively.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  View Guide
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card>
              <CardContent>
                <Typography variant="h6">
                  Troubleshooting Common Issues
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A comprehensive tutorial on how to troubleshoot and resolve
                  common technical issues.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  View Tutorial
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Button variant="contained" color="primary" size="large">
          Still Need Help? Contact Us
        </Button>
      </Box>
    </Container>
  );
};

export default HelpPage;
