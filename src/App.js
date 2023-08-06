import React from "react";
import { Container } from "@mui/material";

import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        minWidth: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Chatbot />
    </Container>
  );
}

export default App;
