"use client";
import type { GetServerSideProps, NextPage } from "next";
import "@/assets/style/global.css";
import ImageIcon from "@mui/icons-material/Image";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { useRouter } from "next/router";
import { auth, db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useChat } from "@/context/chatContext";
import { useAuth } from "@/context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import DateFormat from "@/validate/dateFormat";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";

const ChatMain: NextPage = () => {
  const Menu2 = dynamic(() => import("@/components/comon/menu"));
  const EmojiPicker = dynamic(() => import("@/components/emojiIcons"));
  const router = useRouter();
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [idMessages, setIdMessages] = useState("");
  const inputRef = useRef(null);
  const { id } = router.query;
  const [isOpenCrud, setisOpenCrud] = useState(false);
  const [loggedInUser] = useAuthState(auth);
  const { currentChat, sendMessage, messages } = useChat();
  const { currentUser } = useAuth();
  const dataCrud = [
    {
      id: 1,
      icon: <DeleteIcon />,
      title: "Thu hồi",
    },
    {
      id: 2,
      icon: <UpdateIcon />,
      title: "Cập nhật ",
    },
  ];

  const handleSend = async () => {
    if (value.trim() && currentChat?.id) {
      const result = await sendMessage(currentChat.id, currentUser.uid, value);
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
  const textIcon = (icon2) => {
    const input = inputRef.current;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const text = value.substring(0, start) + icon2 + value.substring(end);
    setTimeout(() => {
      input.setSelectionRange(start + icon.length, start + icon.length);
      input.focus();
    }, 0);
    setValue(text);
  };
  const handleEmojiSelect = (emoji) => {
    setIcon(emoji.native);
    textIcon(icon);
  };
  const handleCRUD = (id, event) => {
    setAnchorEl(event.target);
    setIdMessages(id);
    setisOpenCrud(true);
  };
  const handleClose = () => {
    setisOpenCrud(false);
  };
  return (
    <div className="relative w-[75%] bg-[antiquewhite] h-[100vh]">
      <div className=" w-[100%] pb-2 huong pt-5 pb-5 pl-2 pr-2 sticky  bg-[white] flex justify-between">
        <div className="flex items-center ">
          <Avatar />
          <div className="pl-2">
            <p className="text-xs">{data}</p>
            <p className="text-sm">20/12/2024</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="border-hover">
            <CallIcon />
          </p>
          <p className="border-hover">
            <VideoCallIcon />
          </p>
        </div>
      </div>

      <Paper
        className="name"
        elevation={3}
        sx={{
          height: "84%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "antiquewhite",
          overflowY: "scroll",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <List className="h-[auto]">
            {messages.map((message, index) => (
              <ListItem
                key={message.id || index}
                sx={{
                  display: "flex",
                  justifyContent:
                    message.senderId === loggedInUser?.uid
                      ? "flex-end"
                      : "flex-start",
                  alignItems: "flex-start",
                  mb: 1,
                }}
              >
                <Menu2
                  dataCrud={dataCrud}
                  isOpenCrud={isOpenCrud}
                  message={message}
                  id={id}
                  idMessages={idMessages}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                />

                <Paper
                  onClick={() => handleCRUD(message.id, event)}
                  elevation={2}
                  sx={{
                    p: 1,
                    maxWidth: "70%",
                    bgcolor:
                      message.senderId === loggedInUser?.uid
                        ? "primary.light"
                        : "grey.200",
                    color:
                      message.senderId === loggedInUser?.uid
                        ? "white"
                        : "black",
                    borderRadius:
                      message.senderId === loggedInUser?.uid
                        ? "15px 15px 0px 15px"
                        : "15px 15px 15px 0px",
                  }}
                >
                  <Tooltip
                    title={DateFormat(message?.timestamp)}
                    placement="right"
                  >
                    <Typography>{message.text}</Typography>
                  </Tooltip>
                </Paper>
              </ListItem>
            ))}
          </List>
        </Box>
        <EmojiPicker isOpen={isOpen} onEmojiSelect={handleEmojiSelect} />
      </Paper>
      <div className="h-[auto]  bottom-0 left-0 right-0 pt-2 pb-2 bg-[white]">
        <div className="flex items-center justify-evenly w-[100%]">
          <p className="border-hover">
            <CameraAltIcon />
          </p>
          <p className="border-hover">
            <label htmlFor="fileInput" className="cursor-pointer">
              <ImageIcon />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*,application/pdf"
              multiple
              className="hidden"
              onChange={(e) => handleFileChange(e)}
            />
          </p>
          <p className="border-hover">
            <KeyboardVoiceIcon />
          </p>
          {value !== "" ? (
            <p className="border-hover order-2">
              <SendIcon onClick={handleSend} />
            </p>
          ) : (
            <p className="border-hover order-2">
              <ThumbUpAltIcon />
            </p>
          )}
          <div className="order-1 w-[85%] relative  bg-slate-200 rounded-lg  flex items-center	">
            <input
              ref={inputRef}
              className="w-[100%] h-[100%] pl-3 pr-2 pb-4 pt-4 bg-transparent outline-none"
              type="text"
              value={value}
              onChange={(e) => handleClick(e.target.value)}
            />
            <EmojiEmotionsIcon
              className=" absolute  right-[15px]"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
