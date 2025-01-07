"use client";

import { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import FilterData from "@/validate/filterData";
import Link from "next/link";

type DataType = {
  id: string;
  name: string; // Thêm các trường khác nếu cần
};

type Props = {
  Data: DataType[];
  InputValue: string;
};
const AvatarList: FC<Props> = ({ Data }) => {
  const user = FilterData(Data);
  return (
    <Link href={`/chatMain/${Data?.id}`}>
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
