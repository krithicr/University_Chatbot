import { Box, Typography } from "@mui/material";
import React from "react";
import FaceIcon from "@mui/icons-material/Face";

const MessageSkeleton = () => {
  return (
    <Box
      sx={{
        fontSize: "14px",
        width: "150px",
        // maxWidth: "300px",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
        // backgroundColor: "#694D76",
        alignSelf: "flex-start",
        textAlign: "left",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        color: "white",
        display: "flex",
      }}
    >
      <FaceIcon sx={{ color: "#694D76" }} />
      <Typography
        sx={{
          fontSize: "12px",
          width: "150px",
          //   maxWidth: "300px",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#694D76",
          color: "White",
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        Typing...
      </Typography>
    </Box>
  );
};

export default MessageSkeleton;
