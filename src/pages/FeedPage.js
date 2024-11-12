import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CardMedia,
  CircularProgress,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // You can use axios or fetch API

function FeedPage() {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: "http://localhost:5000", // Match this with your server's port
  });

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await api.get("/api/feed/"); // API call to get the feeds
        setFeeds(response.data); // Set the fetched data
      } catch (err) {
        setError("Failed to load feeds");
      } finally {
        setLoading(false); // Set loading to false once the data is fetched or in case of error
      }
    };

    fetchFeeds(); // Call the async function to fetch data on component mount
  }, []);

  const handleCardClick = (feed) => {
    navigate(`/feed/${feed.id}`, { state: { feed } });
  };

  const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  if (loading) {
    return (
      <Container
        maxWidth="md"
        style={{ textAlign: "center", paddingTop: "50px" }}
      >
        <CircularProgress />{" "}
        {/* Show loading spinner while data is being fetched */}
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        maxWidth="md"
        style={{ textAlign: "center", paddingTop: "50px" }}
      >
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" style={{ padding: "24px 0" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "40px 0",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Discover the Latest Insights
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary">
          Stay updated with the latest trends, tips, and expert advice across
          industries.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginTop: "24px" }}
        >
          Explore All Feeds
        </Button>
      </Box>

      {/* Featured Feeds Section */}
      <Typography variant="h4" align="center" sx={{ marginBottom: "24px" }}>
        Featured Feeds
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: "40px" }}>
        {feeds.slice(0, 3).map((feed, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              onClick={() => handleCardClick(feed)}
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={feed.imageUrl || "https://via.placeholder.com/300"} // Fallback image if not available
                alt={feed.title}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {feed.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {truncateDescription(feed.description, 10)}{" "}
                  {/* Limit to 10 words */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Categories Section */}
      <Typography variant="h4" align="center" sx={{ marginBottom: "24px" }}>
        Browse by Category
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {[
          "Technology",
          "Finance",
          "Marketing",
          "Health",
          "Education",
          "Business",
        ].map((category) => (
          <Chip
            key={category}
            label={category}
            variant="outlined"
            color="primary"
            sx={{ margin: "8px" }}
            onClick={() => console.log(`Navigate to ${category} category`)}
          />
        ))}
      </Box>

      {/* Latest Feeds Section */}
      <Typography variant="h4" align="center" sx={{ marginBottom: "24px" }}>
        Latest Feeds
      </Typography>
      {feeds.length > 0 ? (
        <Grid container spacing={4}>
          {feeds.map((feed, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                onClick={() => handleCardClick(feed)}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 20px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feed.imageUrl || "https://via.placeholder.com/300"} // Fallback image if not available
                  alt={feed.title}
                  style={{ objectFit: "cover" }}
                />
                <CardContent style={{ padding: "16px" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    style={{ fontWeight: "bold", color: "#333" }}
                  >
                    {feed.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ flexGrow: 1 }}
                  >
                    {truncateDescription(feed.description, 10)}{" "}
                    {/* Limit to 10 words */}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" align="center">
          No feeds available.
        </Typography>
      )}

      {/* Call to Action Section */}
      <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom>
          Want to Stay Updated?
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Sign up for our newsletter to receive the latest feeds straight to
          your inbox!
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Subscribe Now
        </Button>
      </Box>
    </Container>
  );
}

export default FeedPage;
