import React, { useState } from "react";
import { Paper, Button, Typography, Box, Input } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import axios from "axios";
import Messages from "./Messages";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, user: true },
      ]);
      setInputText("");

      // Send user input to the backend

      axios
        .post("https://university-bot-server-2.onrender.com", {
          inputText: inputText,
        })
        .then((response) => {
          console.log("Response from backend:", response.data);
          const botResponse = {
            text: response.data,
            user: false,
          };
          setMessages((prevMessages) => [...prevMessages, botResponse]);
        });
    }
  };

  return (
    <Paper
      sx={{
        width: "450px",
        minHeight: "500px",
        padding: 0,
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "linear-gradient(to right, #694D76, #8C3F67)",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          padding: "10px",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "0",
        }}
        gutterBottom
      >
        <SupportAgentIcon sx={{ fontSize: "30px" }} /> Kyro Chat Support
      </Typography>
      <Box
        sx={{
          minHeight: "340px",
          maxHeight: "340px",
          overflowY: "auto",
          backgroundColor: "white",
          padding: "16px",
          display: "flex",
          flexDirection: "column",

          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#8C3F67",
            borderRadius: 2,
          },
        }}
      >
        <Messages messages={messages} />
      </Box>
      <form onSubmit={handleSendMessage}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            bottom: 10,
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Input
            disableUnderline
            sx={{
              flex: "0.8",
              marginRight: "8px",
              backgroundColor: "White",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              height: "50px",
              padding: "10px",
              "&:hover": {
                borderBottom: "none",
              },
              "&:focus": {
                borderBottom: "none",
                outline: "none",
              },
            }}
            name={inputText}
            variant="outlined"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <Button
            sx={{
              backgroundColor: "#8C3F67",
              color: "#fff",
              fontSize: "16px",
            }}
            type="submit"
          >
            Send
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Chatbot;
