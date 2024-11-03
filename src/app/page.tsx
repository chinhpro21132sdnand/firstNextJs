import Header from "../components/header";
import Main from "../components/main";
import Data from "../components/data";
import New from "../components/news";
import PhonePackage from "@/components/phonePackage";
import NewPaper from "@/components/newPaper";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <Header />
        <main className="flex-grow mt-[7.5rem] md:mt-36"></main>
        <Main />
        <Data />
        <PhonePackage />
        <New />
        <NewPaper />
        <Footer />
      </body>
    </html>
  );
}
