import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for certificates
const certificates = [
  {
    title: "Frontend Development Certificate",
    description:
      "Prove your skills in HTML, CSS, JavaScript, and React by earning this certificate.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Backend Development Certificate",
    description:
      "Demonstrate your expertise in Node.js, databases, and backend architecture.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Fullstack Developer Certificate",
    description:
      "Earn this certificate by mastering both frontend and backend development.",
    image: "https://via.placeholder.com/150",
  },
];

// Dummy testimonials
const testimonials = [
  {
    name: "Alice Brown",
    feedback:
      "Earning my Fullstack Development Certificate helped me land my dream job!",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Michael Johnson",
    feedback:
      "The certification gave me the credibility I needed to advance my career in tech.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
];

// Steps on how to earn a certificate
const steps = [
  "Choose a Course",
  "Complete All Course Assignments",
  "Pass the Final Exam",
  "Earn Your Certificate",
];

const CertificatesPage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Earn Your Certificate of Excellence
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Validate your skills and advance your career with our
          industry-recognized certificates.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Start Learning Now
        </Button>
      </Box>

      {/* Why Earn a Certificate? */}
      <Typography variant="h4" gutterBottom>
        Why Earn a Certificate?
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" align="center">
              Career Advancement
            </Typography>
            <Typography variant="body2" align="center">
              Earning a certificate can help you stand out in a competitive job
              market and show potential employers that you’re dedicated to
              improving your skills.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" align="center">
              Industry Recognition
            </Typography>
            <Typography variant="body2" align="center">
              Our certificates are recognized by leading companies, helping you
              showcase your credibility and expertise in your field.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" align="center">
              Personal Growth
            </Typography>
            <Typography variant="body2" align="center">
              Beyond career benefits, earning a certificate helps you gain
              deeper knowledge and personal satisfaction in your learning
              journey.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* How It Works */}
      <Typography variant="h4" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {steps.map((step, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" align="center">{`Step ${
                  index + 1
                }`}</Typography>
                <Typography variant="body2" align="center">
                  {step}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Available Certificates */}
      <Typography variant="h4" gutterBottom>
        Available Certificates
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {certificates.map((certificate, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
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
                      alt={certificate.title}
                      src={certificate.image}
                      sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6">{certificate.title}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      {certificate.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Success Stories */}
      <Typography variant="h4" gutterBottom>
        Success Stories
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {testimonials.map((testimonial, index) => (
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
                      alt={testimonial.name}
                      src={testimonial.image}
                      sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      "{testimonial.feedback}"
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
          Start Your Certification Journey Today
        </Button>
      </Box>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" gutterBottom>
          **How do I earn a certificate?** To earn a certificate, you must
          complete all course assignments, pass the final exam, and demonstrate
          your understanding of the course materials.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **How long does it take to earn a certificate?** The time it takes to
          earn a certificate varies by course. Most can be completed in a few
          weeks with consistent effort.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Are certificates recognized by employers?** Yes! Our certificates
          are recognized by top companies in the industry, and they serve as
          proof of your skills and knowledge.
        </Typography>
      </Box>
    </Container>
  );
};

export default CertificatesPage;
