import React, { useState } from "react";
import { Box, Button, Container, Slide, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Chatbot from "./Components/Chatbot";

function App() {
  const [isBotActivated, setBotActivation] = useState(false);
  const toggleChatbot = () => {
    setBotActivation((prev) => !prev);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#8C3F67",
          fontWeight: "600",
          fontSize: { xs: "28px", sm: "32px", lg: "46px" },
        }}
      >
        Welcome to the Chatbot App!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginBottom: "20px",
          width: { sm: "80%", lg: "50%" },
          fontWeight: "normal",
          fontSize: { xs: "16px", sm: "20px", lg: "20px" },
        }}
      >
        The chatbot leverages Google's Dialogflow API for natural language
        processing to handle user queries and generate responses.
      </Typography>
      <Slide
        direction={isBotActivated ? "up" : "down"}
        in={isBotActivated}
        mountOnEnter
        unmountOnExit
        {...(isBotActivated ? { timeout: 1000 } : {})}
      >
        <Box
          sx={{
            position: "absolute",
            right: "25px",
            bottom: { lg: "85px" },
          }}
        >
          {isBotActivated && <Chatbot />}
        </Box>
      </Slide>

      <Button
        variant="contained"
        onClick={toggleChatbot}
        sx={{
          height: "60px",
          width: "30px",
          borderRadius: "30px",
          position: "fixed",
          bottom: { xs: "10px", lg: "16px" },
          right: "16px",
          backgroundColor: "#694D76",
          ":hover": {
            backgroundColor: "#8C3F67",
          },
        }}
      >
        {isBotActivated ? <CloseIcon /> : <AddIcon />}
      </Button>
    </Container>
  );
}

export default App;
