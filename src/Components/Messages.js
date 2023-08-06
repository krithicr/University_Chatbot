import { Box, Typography } from "@mui/material";
import React from "react";

function Messages({ messages }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {messages.map((message, index) => (
        <Typography
          key={index}
          sx={{
            fontSize: "14px",
            width: "fit-content",
            maxWidth: "300px",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            backgroundColor: message.user ? "#694D76" : "#f0f0f0",
            color: message.user ? "White" : "black",
            alignSelf: message.user ? "flex-end" : "flex-start",
            textAlign: message.user ? "right" : "left",
            wordWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
        >
          {message.text}
        </Typography>
      ))}
    </Box>
  );
}

export default Messages;
