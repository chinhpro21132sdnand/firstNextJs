"use client";

import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import { database } from "@/config/firebase";
import { ref, remove, DatabaseReference } from "firebase/database";
import { useMemo } from "react";

type CrudItem = {
  icon: React.ReactNode;
  title: string;
  id: string; // Ensure there is an id field
};

type Message = {
  id: string;
};

type isOpenCrud = {
  isOpenCrud: boolean;
  dataCrud: CrudItem[];
  message: Message | null;
  idMessages: string;
  id: string;
  anchorEl: HTMLElement | null;
  handleClose: () => void;
};

const Menu2: React.FC<isOpenCrud> = ({
  dataCrud,
  isOpenCrud,
  handleClose,
  anchorEl,
  idMessages,
  id,
}) => {
  const dataRef = useMemo(() => {
    if (idMessages) {
      return ref(database, `chats/${id}/messages/${idMessages}`);
    }
    return null;
  }, [idMessages, id]);

  // Hàm xóa dữ liệu từ Firebase
  const deleteData = (ref: DatabaseReference) => {
    remove(ref)
      .then(() => {
        console.log("Data successfully deleted.");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // Hàm xử lý khi người dùng click vào item
  const handleItemClick = (itemId: string) => {
    if (itemId === "1" && dataRef) {
      deleteData(dataRef);
    }
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpenCrud}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            width: "100%",
            maxWidth: 200,
            bgcolor: "background.paper",
            outline: "none",
            zIndex: 10000,
          },
        },
      }}
    >
      <MenuList aria-label="main mailbox folders">
        {dataCrud.map((item) => (
          <MenuItem key={item.id} onClick={() => handleItemClick(item.id)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Menu2;
