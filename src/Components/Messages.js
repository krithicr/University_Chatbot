import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import FaceIcon from "@mui/icons-material/Face";
import ResponseBox from "./ResponseBox";

function Messages({ messages, setCustomInput }) {
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredMessageIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredMessageIndex(index);
  };

  const handleClick = (index) => {
    if (hoveredMessageIndex === index) {
      setHoveredMessageIndex((prev) => !prev);
    } else {
      setHoveredMessageIndex(index);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: message.user ? "row-reverse" : "row",
            gap: "3px",
            marginBottom: "20px",
            position: "relative", // Add position relative to this container
          }}
        >
          {message.user ? null : <FaceIcon sx={{ color: "#694D76" }} />}

          <Typography
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleClick(index)}
            sx={{
              fontSize: "12px",
              width: "fit-content",
              maxWidth: "260px",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: message.user ? "#f0f0f0" : "#694D76",
              color: message.user ? "black" : "White",
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
              cursor: message.user ? "null" : "pointer",
              display: "flex",
              alignItems: "center", // Center the text and the ResponseBox vertically
              position: "relative",
            }}
          >
            {message.text}
            {message.user
              ? null
              : hoveredMessageIndex === index && (
                  <ResponseBox
                    setCustomInput={setCustomInput}
                    hoveredMessageIndex={hoveredMessageIndex}
                    setHoveredMessageIndex={setHoveredMessageIndex}
                  />
                )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Messages;
