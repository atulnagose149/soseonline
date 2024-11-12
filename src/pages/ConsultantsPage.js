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
  Rating,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for consultants
const consultants = [
  {
    name: "John Doe",
    expertise: "Strategy & Operations",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    description:
      "Expert in scaling businesses, with 15+ years of experience in operations management and growth strategies.",
  },
  {
    name: "Jane Smith",
    expertise: "Financial Advisory",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    description:
      "Specializes in financial restructuring, wealth management, and investment strategies for businesses.",
  },
  {
    name: "Michael Johnson",
    expertise: "Technology Consulting",
    rating: 4.9,
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    description:
      "Experienced in digital transformation, AI integration, and IT infrastructure development for enterprises.",
  },
];

// Dummy data for services
const services = [
  "Business Strategy",
  "Financial Advisory",
  "Technology Consulting",
  "Marketing & Branding",
  "HR Consulting",
  "Operations Optimization",
];

// Dummy data for industries
const industries = [
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Technology",
  "Manufacturing",
];

// Dummy testimonials
const testimonials = [
  {
    name: "Sarah Brown",
    feedback:
      "Their business strategy insights were a game-changer for our company!",
  },
  {
    name: "Tom Lee",
    feedback:
      "Thanks to their financial advice, we managed to grow our revenue by 20% last year.",
  },
  {
    name: "Emily Davis",
    feedback:
      "The technology integration they implemented has streamlined our operations massively.",
  },
];

const ConsultantsPage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Consulting Services
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Empowering businesses with expert consulting in various domains.
        </Typography>
      </Box>

      {/* Our Services */}
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" align="center">
                {service}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Consultant Profiles */}
      <Typography variant="h4" gutterBottom>
        Meet Our Top Consultants
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {consultants.map((consultant, index) => (
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
                      alt={consultant.name}
                      src={consultant.image}
                      sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6">{consultant.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {consultant.expertise}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <Rating value={consultant.rating} readOnly />
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      {consultant.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Industries Served */}
      <Typography variant="h4" gutterBottom>
        Industries We Serve
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {industries.map((industry, index) => (
          <Grid item key={index}>
            <Chip label={industry} color="primary" variant="outlined" />
          </Grid>
        ))}
      </Grid>

      {/* Client Testimonials */}
      <Typography variant="h4" gutterBottom>
        Client Testimonials
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  "{testimonial.feedback}"
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  - {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* How It Works Section */}
      <Typography variant="h4" gutterBottom>
        How It Works
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1">
          1. **Initial Consultation**: Contact us to schedule a consultation
          call.
        </Typography>
        <Typography variant="body1">
          2. **Customized Plan**: We create a tailored consulting plan to meet
          your business needs.
        </Typography>
        <Typography variant="body1">
          3. **Execution**: Our consultants will work closely with your team to
          execute the plan.
        </Typography>
        <Typography variant="body1">
          4. **Follow-up**: We offer continuous support to ensure sustained
          results.
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Button variant="contained" color="primary" size="large">
          Contact Us Today
        </Button>
      </Box>
    </Container>
  );
};

export default ConsultantsPage;
