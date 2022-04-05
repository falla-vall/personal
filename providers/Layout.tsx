import Head from "next/head";
import ReduxProvider from "./Redux";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout(props: any) {
  const { children } = props;
  return (
    <ReduxProvider>
      <Head>
        <title>FLLA</title>
        <meta name="description" content="My Portfolio" />
      </Head>
      <NextNProgress color="#d946ef" />
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
      <Toaster />
    </ReduxProvider>
  );
}
