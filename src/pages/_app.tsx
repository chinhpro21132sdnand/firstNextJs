// pages/_app.tsx (Page Router) hoặc app/layout.tsx (App Router)
import "@/assets/style/global.css"; // Import CSS toàn cục
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { AppProps } from "next/app"; // Nếu dùng Page Router
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Mô tả trang web của bạn ở đây" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="custom-scrollbar">
        <Header />
        <main className="flex-grow mt-[7.5rem] md:mt-36 scroolll-x">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
