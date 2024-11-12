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

// Dummy data for testimonials
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Becoming an affiliate helped me earn passive income while recommending a service I genuinely believe in.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "The commission rates are fantastic, and the support from the team has been amazing.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

// Steps on how the affiliate program works
const steps = [
  "Sign Up for the Affiliate Program",
  "Get Your Unique Referral Link",
  "Share the Link with Your Network",
  "Earn Commissions for Every Sale",
];

// Affiliate benefits
const benefits = [
  "High Commission Rates",
  "Reliable Monthly Payments",
  "Dedicated Affiliate Support",
  "Real-Time Tracking & Analytics",
  "Exclusive Affiliate Promotions",
];

// Commission structure
const commissionDetails = [
  "10% commission on all sales up to $1,000",
  "15% commission on sales above $1,000",
  "Monthly payouts directly to your bank or PayPal account",
];

const AffiliatePage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Join Our Affiliate Program
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Partner with us and earn commissions by promoting our products. It's
          simple, easy, and rewarding.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Sign Up Now
        </Button>
      </Box>

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

      {/* Affiliate Benefits */}
      <Typography variant="h4" gutterBottom>
        Affiliate Benefits
      </Typography>
      <Grid container spacing={2} sx={{ mb: 5 }}>
        {benefits.map((benefit, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="body1" align="center">
                {benefit}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Commission Structure */}
      <Typography variant="h4" gutterBottom>
        Commission Structure
      </Typography>
      <Card sx={{ p: 3, mb: 5 }}>
        <List>
          {commissionDetails.map((detail, index) => (
            <ListItem key={index}>
              <Typography variant="body1">{detail}</Typography>
            </ListItem>
          ))}
        </List>
      </Card>

      {/* Testimonials */}
      <Typography variant="h4" gutterBottom>
        What Our Affiliates Say
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
          Become an Affiliate Today
        </Button>
      </Box>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" gutterBottom>
          **How do I sign up?** Simply click the "Sign Up Now" button and fill
          out the affiliate registration form.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **How do I get paid?** We pay our affiliates monthly via PayPal or
          bank transfer, depending on your preference.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Can I track my referrals?** Yes! You’ll get access to a dashboard
          where you can track your performance and earnings in real-time.
        </Typography>
      </Box>
    </Container>
  );
};

export default AffiliatePage;
