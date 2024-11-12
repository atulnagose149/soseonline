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
  Chip,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for popular courses
const popularCourses = [
  {
    title: "Mastering JavaScript",
    rating: 5,
    description:
      "Learn JavaScript from scratch to advanced topics with this comprehensive course.",
    price: "$149",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "React for Beginners",
    rating: 4.8,
    description:
      "An introduction to the React framework with real-world project examples.",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Advanced Node.js",
    rating: 4.9,
    description:
      "Dive deeper into Node.js with this advanced course covering topics like clustering and performance.",
    price: "$249",
    image: "https://via.placeholder.com/150",
  },
];

// Dummy testimonials
const testimonials = [
  {
    name: "John Doe",
    feedback:
      "I gifted the React course to a friend, and it transformed their career!",
  },
  {
    name: "Jane Smith",
    feedback:
      "Such an easy process to gift a course. My sister loved learning JavaScript.",
  },
  {
    name: "Tom Lee",
    feedback:
      "Gifting the Node.js course helped my colleague improve their backend skills.",
  },
];

const GiftCoursePage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Gift the Power of Learning
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Give the gift of knowledge to someone special. Choose from our wide
          selection of top-tier courses.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
          Gift a Course Now
        </Button>
      </Box>

      {/* Why Gift a Course? */}
      <Typography variant="h4" gutterBottom>
        Why Gift a Course?
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" align="center">
              Help Others Grow
            </Typography>
            <Typography variant="body2" align="center">
              Gifting a course helps others advance in their career or explore
              new areas of interest.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" align="center">
              Unique & Thoughtful Gift
            </Typography>
            <Typography variant="body2" align="center">
              It’s more than a gift, it’s an investment in someone’s future and
              personal growth.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" align="center">
              Easy & Convenient
            </Typography>
            <Typography variant="body2" align="center">
              The process of gifting a course is simple and straightforward. You
              can even schedule it!
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* How It Works */}
      <Typography variant="h4" gutterBottom>
        How It Works
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1">
          1. **Choose a Course**: Browse through our catalog and select the
          perfect course to gift.
        </Typography>
        <Typography variant="body1">
          2. **Personalize the Gift**: Add a personalized message and the
          recipient’s email address.
        </Typography>
        <Typography variant="body1">
          3. **Schedule the Delivery**: You can send it instantly or schedule it
          for a future date.
        </Typography>
        <Typography variant="body1">
          4. **Recipient Receives the Course**: The recipient will receive an
          email with all the details to start learning!
        </Typography>
      </Box>

      {/* Popular Courses */}
      <Typography variant="h4" gutterBottom>
        Popular Courses to Gift
      </Typography>
      <Grid container spacing={4} sx={{ mb: 5 }}>
        {popularCourses.map((course, index) => (
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
                      alt={course.title}
                      src={course.image}
                      sx={{ width: 100, height: 100, mb: 2 }}
                    />
                    <Typography variant="h6">{course.title}</Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1, mb: 1 }}
                    >
                      {course.description}
                    </Typography>
                    <Rating value={course.rating} readOnly />
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ mt: 2 }}
                    >
                      {course.price}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials */}
      <Typography variant="h4" gutterBottom>
        Testimonials from Givers & Receivers
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

      {/* Call to Action */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Button variant="contained" color="primary" size="large">
          Gift a Course Today
        </Button>
      </Box>

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" gutterBottom>
          **Can I gift more than one course?** Yes, you can gift multiple
          courses at the same time.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **How will the recipient receive the course?** They will receive an
          email with all the instructions to access the course.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Can I schedule the gift?** Absolutely! You can choose to send it
          immediately or schedule it for a future date.
        </Typography>
      </Box>
    </Container>
  );
};

export default GiftCoursePage;
