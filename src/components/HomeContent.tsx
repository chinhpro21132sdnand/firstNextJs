import Main from "../components/main";
import Data from "../components/data";
import New from "../components/news";
import PhonePackage from "@/components/phonePackage";
import NewPaper from "@/components/newPaper";
export default function HomeContent() {
  return (
    <div>
      <Main />
      <Data />
      <PhonePackage />
      <New />
      <NewPaper />
    </div>
  );
}
