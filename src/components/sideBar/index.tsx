"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Tooltip from "@mui/material/Tooltip";
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
import { collection, query, where } from "firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { debounce } from "lodash";

// Components
const FormDialog = dynamic(() => import("../comon/popup"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
const AvatarList = dynamic(() => import("../avatar"), { ssr: false });

const SideBar: NextPage = () => {
  const [loggedInUser] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInput] = useState("");

  const SignOut = useCallback(() => {
    signOut(auth);
  }, []);

  const conversationsRef = collection(db, "conversations");
  const queryGetConversationsForCurrentUser = query(
    conversationsRef,
    where("users", "array-contains", loggedInUser?.email)
  );

  const [conversationsSnapshot] = useCollection(
    queryGetConversationsForCurrentUser
  );

  const handleChange = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
    }, 300),
    []
  );

  useEffect(() => {
    return () => handleChange.cancel();
  }, [handleChange]);

  const filteredConversations = useMemo(() => {
    return (
      conversationsSnapshot?.docs
        .map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        .filter(
          (use) => use.data.users && use.data.users[1]?.includes(inputValue)
        ) || []
    );
  }, [inputValue, conversationsSnapshot]);

  const handelClick = useCallback(() => setIsOpen(true), []);
  const handelClose = useCallback(() => setIsOpen(false), []);

  return (
    <div className="w-[25%] border-1 border">
      <div className="w-[100%] flex items-center justify-between pb-2 huong pt-5 pb-5 pl-2 pr-2">
        <Tooltip title={loggedInUser?.email || ""} placement="right">
          <Avatar
            alt={loggedInUser?.email || "Default User"}
            src={loggedInUser?.photoURL || "/default-avatar.png"}
          />
        </Tooltip>
        <div className="flex justify-between">
          <CommentIcon />
          <MoreVertIcon className="ml-4 mr-4" />
          <LogoutIcon onClick={SignOut} className="cursor-pointer" />
        </div>
      </div>
      <div className="w-[100%] flex items-center justify-between">
        <SearchIcon className="absolute" />
        <Input
          className="w-[100%] relative pl-[25px] pt-3 pb-3"
          placeholder="Search in conversations"
          onChange={handleChange}
        />
      </div>
      <div className="w-[100%] huong">
        <Button onClick={handelClick} className="w-[100%] pt-3 pb-3">
          START A NEW CONVERSATION
        </Button>
      </div>
      <div className="w-[100%] huong overflow-y-auto h-[65%]">
        {filteredConversations.map((data) => (
          <AvatarList key={data.id} Data={data} />
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
