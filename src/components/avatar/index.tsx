"use client";

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import FilterData from "@/validate/filterData";
import Link from "next/link";

type data = {
  Data: [];
  InputValue: string;
};
const AvatarList: React.FC<data> = ({ Data }) => {
  console.log(Data);
  const user = FilterData(Data);

  return (
    <Link href={`/chatMain/${Data.id}`}>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        className="hover:bg-[antiquewhite] cursor-pointer"
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user} />
        </ListItem>
      </List>
    </Link>
  );
};
export default AvatarList;
