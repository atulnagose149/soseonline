import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useLocation } from "react-router-dom";

function FeedDetailPage() {
  const location = useLocation();
  const { feed } = location.state;

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        paddingTop: 6,
        paddingBottom: 6,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)", // Slight zoom on hover
            },
          }}
        >
          {/* Full-width Image (Hero Section) */}
          <CardMedia
            component="img"
            image={feed.imageUrl || "https://via.placeholder.com/1200"}
            alt={feed.title}
            sx={{
              width: "100%",
              height: { xs: "250px", md: "400px" }, // Responsive height
              objectFit: "cover",
              filter: "brightness(0.8)",
            }}
          />

          {/* Card content */}
          <CardContent
            sx={{
              padding: 4,
              backgroundColor: "#fff",
              position: "relative",
              top: "-60px", // Slight overlay of content over image
              borderRadius: "16px 16px 0 0",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: 3,
                textAlign: "center",
              }}
            >
              {feed.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "#555",
                textAlign: "justify",
                paddingX: { xs: 2, md: 4 },
                fontSize: "1.1rem",
                marginBottom: 2,
              }}
            >
              {feed.content}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default FeedDetailPage;
