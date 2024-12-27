"use client";
import { Avatar, Button, Input, Tooltip } from "@mui/material";
import type { NextPage } from "next";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import SearchIcon from "@mui/icons-material/Search";
import { useAuthState } from "react-firebase-hooks/auth";
import "@/assets/style/global.css";
import { useCollection } from "react-firebase-hooks/firestore";
import FormDialog from "../comon/popup";
import { collection, query, where } from "firebase/firestore";
import AvatarList from "../avatar";
import { useState } from "react";
const SideBar: NextPage = () => {
  const [loggedInUser] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const SignOut = () => {
    signOut(auth);
  };
  const handelClick = () => {
    setIsOpen(true);
  };
  const queryGetConversationsForCurrentUser = query(
    collection(db, "conversations"),
    where("users", "array-contains", loggedInUser?.email)
  );
  const [conversationsSnapshot] = useCollection(
    queryGetConversationsForCurrentUser
  );

  const handelClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-[25%] h-[100vh]  border-1 border">
      <div className="w-[100%] flex items-center justify-between pb-2 huong pt-5 pb-5 pl-2 pr-2">
        <Tooltip title={loggedInUser?.email as string} placement="right">
          <Avatar
            alt={loggedInUser?.email || "Default User"}
            src={loggedInUser?.photoURL || "/default-avatar.png"}
          />
        </Tooltip>
        <div className="flex justify-between">
          <CommentIcon />
          <MoreVertIcon className="ml-4 mr-4" />
          <LogoutIcon onClick={SignOut} className="cusor-pointer" />
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-between">
        <SearchIcon className="absolute" />
        <Input
          className="w-[100%] relative pl-[25px] pt-3 pb-3"
          placeholder="Search in conversations"
        ></Input>
      </div>
      <div className="w-[100%]  huong">
        <Button onClick={handelClick} className="w-[100%] pt-3 pb-3 ">
          START A NEW CONVERSATION
        </Button>
      </div>
      <div className="w-[100%] huong">
        {conversationsSnapshot?.docs.map((data, index) => (
          <AvatarList key={index} Data={data} />
        ))}
      </div>
      <FormDialog
        isOpen={isOpen}
        onClose={handelClose}
        loggedInUser={loggedInUser}
      />
    </div>
  );
};

export default SideBar;
