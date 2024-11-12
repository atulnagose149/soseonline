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
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy success stories
const successStories = [
  {
    name: "John Doe",
    feedback:
      "My feedback helped improve the course structure, making it more user-friendly!",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "After suggesting additional tutorials, they added more resources to help with hands-on learning.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

// Feedback form initial state
const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const FeedbackPage = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to backend)
    alert("Thank you for your feedback!");
    setFormData(initialFormState); // Reset form after submission
  };

  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          We'd Love to Hear From You!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your feedback helps us improve. Share your thoughts, suggestions, or
          any issues you've encountered.
        </Typography>
      </Box>

      {/* Why Feedback Matters */}
      <Typography variant="h4" gutterBottom>
        Why Your Feedback Matters
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
        Your feedback helps us improve our platform, courses, and overall
        experience. By sharing your thoughts, you help us create better learning
        experiences for everyone. Whether it’s about new features or suggestions
        for improvement, we take your feedback seriously.
      </Typography>

      {/* Feedback Form */}
      <Typography variant="h4" gutterBottom>
        Share Your Feedback
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
                Submit Feedback
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>

      {/* Success Stories */}
      <Typography variant="h4" gutterBottom>
        Success Stories from Our Users
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {successStories.map((story, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      alt={story.name}
                      src={story.image}
                      sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6">{story.name}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      "{story.feedback}"
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Button variant="contained" color="primary" size="large">
          Send Us Your Thoughts
        </Button>
      </Box>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" gutterBottom>
          **How can I leave feedback?** Simply fill out the form above with your
          feedback and submit it. We review every piece of feedback carefully.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Will I hear back after submitting feedback?** While we may not
          respond to every piece of feedback directly, we use your insights to
          improve our platform.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Can I leave anonymous feedback?** Yes, but leaving your contact
          information helps us get back to you if we need further clarification.
        </Typography>
      </Box>
    </Container>
  );
};

export default FeedbackPage;
