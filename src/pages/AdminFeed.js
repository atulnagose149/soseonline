import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import axios from "axios"; // Use axios for API requests

function AdminFeed({ addFeed, updateFeed, editingFeed }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fill form fields if editing a feed
    if (editingFeed) {
      setTitle(editingFeed.title);
      setContent(editingFeed.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingFeed]);
  const api = axios.create({
    baseURL: "http://localhost:5000", // Match this with your server's port
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && content) {
      try {
        if (editingFeed) {
          // Update existing feed via PUT request
          const updatedFeed = {
            ...editingFeed,
            title,
            content,
            description: content.substring(0, 100), // Short description
          };

          await api.put(`/api/feed/${editingFeed.id}`, updatedFeed); // PUT request to update feed
          updateFeed(updatedFeed); // Update local state
        } else {
          // Add new feed via POST request
          const newFeed = {
            id: Date.now(), // Generate ID
            title,
            content,
            description: content.substring(0, 100), // Short description
            imageUrl:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s", // Replace with an actual image URL
          };

          await api.post("/api/feed", newFeed); // POST request to create new feed
          addFeed(newFeed); // Add to local state
        }

        // Clear the form after submission
        setTitle("");
        setContent("");
      } catch (error) {
        console.error("Error saving feed:", error);
      }
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
        {editingFeed ? "Edit Feed" : "Create New Feed"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Content"
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            multiline
            rows={4}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            {editingFeed ? "Update Feed" : "Post Feed"}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default AdminFeed;
