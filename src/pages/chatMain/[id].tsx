"use client";
import { Avatar, Box, List, ListItem, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import "@/assets/style/global.css";
import ImageIcon from "@mui/icons-material/Image";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useRouter } from "next/router";
import { db } from "@/config/firebase";

import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useChat } from "@/context/chatContext";
import { useAuth } from "@/context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatMain: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const { id } = router.query;
  const [loggedInUser] = useAuthState(auth);
  const { currentChat, sendMessage, messages } = useChat();
  const { currentUser } = useAuth();
  console.log(messages, "messages");
  const handleSend = async () => {
    if (value.trim() && currentChat?.id) {
      const result = await sendMessage(currentChat.id, currentUser.uid, value);
      console.log(result, "result");
      setValue("");
    }
  };
  const getData = async () => {
    try {
      const result = collection(db, "conversations");
      const snapshot = await getDocs(result);
      const conversationsList = snapshot.docs
        .find((doc) => doc.id == id)
        ?.data();
      setData(conversationsList?.users[1]);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
    }
  };
  useEffect(() => {
    getData();
  }, [id]);

  const handleClick = (message: string) => {
    setValue(message);
  };
  return (
    <div className="relative w-[75%] bg-[antiquewhite]">
      <div className="w-[100%] flex items-center pb-2 huong pt-5 pb-5 pl-2 pr-2 sticky  bg-[white]">
        <Avatar />
        <div className="pl-2">
          <p className="text-xs">{data}</p>
          <p className="text-sm">20/12/2024</p>
        </div>
      </div>
      <Paper
        elevation={3}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
          <List sx={{ height: "100%", overflow: "auto" }}>
            {messages.map((message) => (
              <ListItem key={message.id}>
                <Paper elevation={2} sx={{ p: 2, maxWidth: "70%" }}>
                  <Typography>{message.text}</Typography>
                </Paper>
              </ListItem>
            ))}
          </List>
        </Box>
      </Paper>
      <div className="absolute  bottom-0 left-0 right-0 pt-2 pb-2 bg-[white]">
        <div className="flex items-center justify-evenly w-[100%]">
          <CameraAltIcon />
          <ImageIcon />
          <KeyboardVoiceIcon />
          <ThumbUpAltIcon className="order-2" />

          <div className="order-1 w-[85%] relative  bg-slate-200 rounded-lg overflow-hidden flex items-center	">
            <input
              className="w-[100%] h-[100%] pl-3 pr-2 pb-4 pt-4 bg-transparent outline-none	 "
              type="text"
              value={value}
              onChange={(e) => handleClick(e.target.value)}
            />
            <EmojiEmotionsIcon
              className=" absolute  right-[15px]"
              onClick={handleSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
