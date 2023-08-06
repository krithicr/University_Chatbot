import { Box, Typography } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";

function Messages({ messages }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: message.user ? "row-reverse" : "row",
            // alignItems: "center",
            gap: "3px",
            marginBottom: "10px",
          }}
        >
          {message.user ? null : <FaceIcon sx={{ color: "#694D76" }} />}
          <Typography
            sx={{
              fontSize: "14px",
              width: "fit-content",
              maxWidth: "300px",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: message.user ? "#f0f0f0" : "#694D76",
              color: message.user ? "black" : "White",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {message.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Messages;
