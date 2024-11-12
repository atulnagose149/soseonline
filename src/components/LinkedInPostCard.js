import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LinkedInPostCard = ({ post }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (post.url) {
      window.open(post.url, "_blank"); // Open link in a new tab
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ marginBottom: "16px", width: "300px" }} // Fixed width for uniformity
    >
      <Card
        sx={{
          height: "400px", // Fixed height for uniformity
          overflow: "hidden",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={handleCardClick}
      >
        <CardMedia
          component="img"
          image={post.image}
          alt={post.title}
          sx={{ height: "60%", objectFit: "cover" }} // Adjusted height
        />
        <CardContent
          sx={{
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            padding: "16px", // Add padding for better spacing
          }}
        >
          <Typography variant="h6" component="div" noWrap>
            {post.title}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LinkedInPostCard;
