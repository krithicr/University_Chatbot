import { Box } from "@mui/material";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function ResponseBox({ setCustomInput }) {
  const [likeButton, setLikeButton] = useState(false);
  const [dislikeButton, setDislikeButton] = useState(false);
  const handleLikeClick = (e) => {
    setLikeButton(true);
    setDislikeButton(false);
    e.stopPropagation();
    setCustomInput("👍");
  };

  const handleDislikeClick = (e) => {
    setDislikeButton(true);
    setLikeButton(false);
    e.stopPropagation();
    setCustomInput("👎");
  };

  return (
    <Box
      onClick={(e) => e.stopPropagation()}
      sx={{
        position: "absolute",
        top: "-32px",
        right: "0",
        backgroundColor: "white",
        height: "30px",
        width: "60px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <ThumbUpIcon
        sx={{
          fontSize: "20px",
          cursor: "pointer",
          color: likeButton ? "#694D76" : "grey",
          ":hover": { color: "#694D76" },
          //   ":focus": { color: "#694D76" },
        }}
        onClick={handleLikeClick}
      />
      <ThumbDownIcon
        sx={{
          fontSize: "20px",
          cursor: "pointer",
          color: dislikeButton ? "#694D76" : "grey",
          ":hover": { color: "#694D76" },
          //   ":focus": { color: "#694D76" },
        }}
        onClick={handleDislikeClick}
      />
    </Box>
  );
}

export default ResponseBox;
