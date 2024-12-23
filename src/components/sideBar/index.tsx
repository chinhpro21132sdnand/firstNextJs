import { Avatar } from "@mui/material";
import type { NextPage } from "next";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
const SideBar: NextPage = () => {
  const SignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <div className="w-[300px] h-[100vh] p-1 border-1 border">
        <div className="w-[100%] flex items-center justify-between ">
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <div className="flex justify-between">
            <CommentIcon />
            <MoreVertIcon className="ml-4 mr-4" />
            <LogoutIcon onClick={SignOut} className="cusor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
