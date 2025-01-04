"use client";
import * as React from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import { database } from "@/config/firebase";
import { ref, remove } from "firebase/database";

type CrudItem = {
  icon: React.ReactNode;
  title: string;
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
  message,
  handleClose,
  anchorEl,
  idMessages,
  id,
}) => {
  if (!isOpenCrud || !message || message.id !== idMessages) {
    return null;
  }

  // Sử dụng useMemo để tối ưu hóa tham chiếu
  const dataRef = React.useMemo(() => {
    return idMessages
      ? ref(database, `chats/${id}/messages/${idMessages}`)
      : null;
  }, [idMessages]);

  // Xử lý sự kiện xóa dữ liệu
  const handelClick = React.useCallback(
    (itemId) => {
      if (itemId === 1) {
        remove(dataRef)
          .then((res) => {
            console.log("Dữ liệu đã được xóa thành công.");
          })
          .catch((error) => {
            console.error("Lỗi khi xóa dữ liệu:", error);
          });
      }
    },
    [dataRef]
  );

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
        {dataCrud.map((item, index) => (
          <MenuItem key={index} onClick={() => handelClick(item?.id)}>
            <ListItemIcon>{item?.icon}</ListItemIcon>
            <ListItemText primary={item?.title} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Menu2;
