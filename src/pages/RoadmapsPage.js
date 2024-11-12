import React, { useState } from "react";
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
} from "@mui/material";
import { motion } from "framer-motion";

// Dummy data for roadmaps
const roadmaps = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Learn HTML, CSS, JavaScript, React, and more to become a frontend developer.",
    image: "https://via.placeholder.com/150",
    steps: [
      "Learn HTML & CSS",
      "Understand JavaScript",
      "Dive into React",
      "Build Projects",
      "Master frontend tools like Webpack and Babel",
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Master Node.js, Databases, APIs, and more to become a backend developer.",
    image: "https://via.placeholder.com/150",
    steps: [
      "Learn Node.js basics",
      "Understand RESTful APIs",
      "Work with Databases (SQL, NoSQL)",
      "Authentication and Authorization",
      "Scalability and Deployment",
    ],
  },
  {
    id: 3,
    title: "Fullstack Developer",
    description:
      "Combine frontend and backend skills to become a fullstack developer.",
    image: "https://via.placeholder.com/150",
    steps: [
      "Learn frontend and backend basics",
      "Integrate frontend with backend",
      "Work with databases and APIs",
      "Build fullstack applications",
      "Deploy and manage applications",
    ],
  },
];

const RoadmapsPage = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const handleRoadmapClick = (roadmap) => {
    setSelectedRoadmap(roadmap);
  };

  const handleBackClick = () => {
    setSelectedRoadmap(null); // Go back to the list of roadmaps
  };

  return (
    <Container sx={{ mt: 5 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Explore Our Roadmaps
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Follow clear learning paths to achieve your goals in web development,
          data science, and more.
        </Typography>
      </Box>

      {/* Conditional Rendering for Roadmap Details or Main Roadmaps List */}
      {selectedRoadmap ? (
        <Box>
          {/* Detailed Roadmap View */}
          <Typography variant="h4" gutterBottom>
            {selectedRoadmap.title} Roadmap
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            {selectedRoadmap.description}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Steps to Follow:
          </Typography>
          <Grid container spacing={2}>
            {selectedRoadmap.steps.map((step, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{`Step ${index + 1}`}</Typography>
                    <Typography variant="body2">{step}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Button variant="contained" onClick={handleBackClick}>
              Back to Roadmaps
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          {/* Main Roadmaps List */}
          <Typography variant="h4" gutterBottom>
            Choose Your Roadmap
          </Typography>
          <Grid container spacing={4} sx={{ mb: 5 }}>
            {roadmaps.map((roadmap) => (
              <Grid item key={roadmap.id} xs={12} sm={6} md={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    onClick={() => handleRoadmapClick(roadmap)}
                    sx={{ cursor: "pointer" }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Avatar
                          alt={roadmap.title}
                          src={roadmap.image}
                          sx={{ width: 100, height: 100, mb: 2 }}
                        />
                        <Typography variant="h6">{roadmap.title}</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 1, mb: 1 }}
                        >
                          {roadmap.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          color="primary"
                          sx={{ mt: 2 }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Call to Action */}
      {!selectedRoadmap && (
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Button variant="contained" color="primary" size="large">
            Start Your Journey Now
          </Button>
        </Box>
      )}

      {/* FAQ Section */}
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Box sx={{ mb: 5 }}>
        <Typography variant="body1" gutterBottom>
          **What is a roadmap?** A roadmap is a step-by-step guide that helps
          you master a specific topic or career path.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **How long does it take to complete a roadmap?** The time to complete
          depends on the complexity of the topic. It can range from a few weeks
          to several months.
        </Typography>
        <Typography variant="body1" gutterBottom>
          **Can I work on multiple roadmaps at the same time?** Yes, you can
          start multiple roadmaps and work on them at your own pace.
        </Typography>
      </Box>
    </Container>
  );
};

export default RoadmapsPage;
