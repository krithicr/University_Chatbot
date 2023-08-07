import React, { useEffect, useRef, useState } from "react";
import { Paper, Button, Typography, Box, Input } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import axios from "axios";
import Messages from "./Messages";
import SendIcon from "@mui/icons-material/Send";
import MessageSkeleton from "./MessageSkeleton";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: `Say "Hi"`,
      user: false,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [customInput, setCustomInput] = useState("");
  const messagesBoxRef = useRef(null);
  const [isLoading, setIsloading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    const customSendMessage = () => {
      if (customInput.trim() !== "") {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: customInput, user: true },
        ]);
        setCustomInput("");

        // Send user input to the backend
        setIsloading(true);

        setTimeout(() => {
          axios
            .post("https://university-bot-server-2.onrender.com", {
              inputText: customInput,
            })
            .then((response) => {
              console.log("Response from backend:", response.data);
              const botResponse = {
                text: response.data,
                user: false,
              };
              setMessages((prevMessages) => [...prevMessages, botResponse]);
            });
          setTimeout(() => {
            setIsloading(false);
          }, 700);
        }, 1000);
      }
    };
    customSendMessage();
  }, [customInput]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, user: true },
      ]);
      setInputText("");

      // Send user input to the backend
      setIsloading(true);

      setTimeout(() => {
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
        setTimeout(() => {
          setIsloading(false);
        }, 700);
      }, 1000);
    }
  };

  useEffect(() => {
    if (messagesBoxRef.current) {
      messagesBoxRef.current.scrollTop = messagesBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Paper
      elevation={12}
      sx={{
        width: { xs: "87vw", lg: "450px" },
        minHeight: "500px",
        padding: 0,
        borderRadius: "10px",
        background: "linear-gradient(to right, #694D76, #8C3F67)",
        position: "relative",
        outline: "none",
        border: "none",
      }}
    >
      <Typography
        variant="h6"
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
        ref={messagesBoxRef}
        sx={{
          minHeight: "344px",
          maxHeight: "344px",
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
            borderRadius: 0,
          },
        }}
      >
        <Messages messages={messages} setCustomInput={setCustomInput} />
        {isLoading && <MessageSkeleton />} {/* Show skeleton if loading */}
      </Box>

      <form
        style={{ display: "flex", alignItems: "center" }}
        onSubmit={handleSendMessage}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            paddingBottom: "10px",
            paddingTop: "10px",
            bottom: 0,
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
              fontSize: "14px",
              color: "black",
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
              background: "transparent",
              color: "#fff",
              fontSize: "16px",
              display: "flex",
              gap: "10px",
            }}
            type="submit"
          >
            Send <SendIcon />
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Chatbot;
