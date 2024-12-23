import { Button } from "@mui/material";
import Image from "next/image";
import Whatapss from "@/img/pngtree-whatsapp-icon-png-image_3584845.WebP";
import { auth, provider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
const Home = () => {
  const signInWithGoogle = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async () => {
    signInWithGoogle();
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center ">
      <div className="rounded-lg border-2 w-[400px] h-[400px] flex justify-center flex-col items-center	gap-2">
        <Image src={Whatapss} width={200} height={200} alt="Whatsapp Logo" />
        <Button variant="outlined" color="success" onClick={signIn}>
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};
export default Home;
