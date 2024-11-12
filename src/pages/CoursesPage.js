import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for courses
const courses = [
  {
    title: "Namaste Node.js",
    instructor: "Akshay Saini",
    rating: 5,
    progress: "50%",
    language: "English",
    isPremium: true,
    enrolled: "1500+",
    price: "$199",
  },
  {
    title: "Namaste Frontend System Design",
    instructor: "Akshay Saini",
    rating: 4.8,
    progress: "80%",
    language: "English",
    isPremium: true,
    enrolled: "1000+",
    price: "$299",
  },
  {
    title: "Namaste React",
    instructor: "Akshay Saini",
    rating: 5,
    progress: "0%",
    language: "English",
    isPremium: false,
    enrolled: "2000+",
    price: "Free",
  },
  {
    title: "Namaste JavaScript (FREE)",
    instructor: "Akshay Saini",
    rating: 4.9,
    progress: "0%",
    language: "English",
    isPremium: false,
    enrolled: "11000+",
    price: "Free",
  },
  {
    title: "Crack Frontend Interview",
    instructor: "Anonymous",
    rating: 4.5,
    progress: "0%",
    language: "English",
    isPremium: false,
    enrolled: "11000+",
    price: "Free",
  },
  {
    title: "Backend System Design",
    instructor: "Akshay Saini",
    rating: 5,
    progress: "0%",
    language: "English",
    isPremium: true,
    enrolled: "2000+",
    price: "$399",
  },
];

const CoursesPage = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Courses
      </Typography>

      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                sx={{
                  height: "100%", // Ensures the card takes full height available
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Ensures that content is spaced evenly
                  padding: 2, // Padding inside card
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Instructor: {course.instructor}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Enrolled: {course.enrolled}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Language: {course.language}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Rating value={course.rating} readOnly precision={0.1} />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {course.rating}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    Progress: {course.progress}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Chip
                      label={course.isPremium ? "Premium" : "Free"}
                      color={course.isPremium ? "warning" : "primary"}
                    />
                  </Box>
                </CardContent>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ marginTop: "auto" }} // Push the button to the bottom
                  >
                    {course.price === "Free"
                      ? "Enroll Now"
                      : `Enroll for ${course.price}`}
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesPage;
