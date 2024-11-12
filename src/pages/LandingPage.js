import React, { useEffect, useRef } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import LinkedInPostCard from "../components/LinkedInPostCard";
import ContactForm from "../components/ContactForm";

// Dummy data for courses
const courses = [
  { title: "Namaste Node.js", description: "Start Learning Node.js" },
  { title: "Frontend System Design", description: "Become a frontend expert" },
  { title: "Namaste React", description: "Master React.js concepts" },
];

// Dummy data for social media statistics
const communityStats = [
  { platform: "YouTube", count: "1.7M+" },
  { platform: "LinkedIn", count: "600K+" },
  { platform: "Discord", count: "55K+" },
];

// Dummy data for topics
const topics = [
  "JavaScript",
  "Node.js",
  "React",
  "System Design",
  "Python",
  "HTML",
  "CSS",
  "Databases",
  "Web Development",
  "API Design",
];

// Dummy data for testimonials
const testimonials = [
  { name: "John Doe", feedback: "Great courses and community!" },
  { name: "Jane Smith", feedback: "Learned so much about React." },
  { name: "Mike Johnson", feedback: "System design tips are a lifesaver." },
];

const LandingPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        color: "black",
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
      </video>

      {/* Main Container */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ pt: 12, pb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              gutterBottom
              sx={{ color: "black" }}
            >
              Welcome to our Dev
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              align="center"
              gutterBottom
              sx={{ color: "black" }}
            >
              Empower Your Skills with Expert-Led Courses
            </Typography>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </motion.div>
        </Box>

        {/* Our Best Courses */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 8, mb: 4, color: "black" }}
        >
          Our Best Courses
        </Typography>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: "black" }}
                    >
                      {course.title}
                    </Typography>
                    <Typography sx={{ color: "black" }}>
                      {course.description}
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* 300+ Topics Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 8, mb: 4, color: "black" }}
        >
          300+ Topics Taught
        </Typography>
        <Grid container spacing={1} justifyContent="center">
          {topics.map((topic, index) => (
            <Grid item key={index}>
              <Chip
                label={topic}
                variant="outlined"
                color="primary"
                sx={{ color: "black" }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Our Community Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 8, mb: 4, color: "black" }}
        >
          Our Community
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {communityStats.map((stat, index) => (
            <Grid item key={index}>
              <Typography variant="h6" align="center" sx={{ color: "black" }}>
                {stat.count}
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ color: "black" }}
              >
                {stat.platform}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Student Testimonials */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 8, mb: 4, color: "black" }}
        >
          Student Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography sx={{ color: "black" }}>
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Meet Your Mentor */}
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 8, mb: 4, color: "black" }}
        >
          Meet Your Mentor
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <Avatar
              alt="Mentor Image"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h6" align="center" sx={{ color: "black" }}>
              Akshay Saini
            </Typography>
            <Typography variant="body2" align="center" sx={{ color: "black" }}>
              Fullstack Developer & Educator
            </Typography>
          </Grid>
        </Grid>

        {/* Contact Form */}
        <ContactForm />
      </Container>
    </Box>
  );
};

export default LandingPage;
