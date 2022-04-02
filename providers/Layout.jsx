import Head from "next/head";
import ReduxProvider from "./Redux";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <ReduxProvider>
      <Head>
        <title>FLLA</title>
        <meta name="description" content="My Portfolio" />
      </Head>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
      <Toaster />
    </ReduxProvider>
  );
}
