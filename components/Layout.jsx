import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FLLA</title>
        <meta name="description" content="My Portfolio" />
      </Head>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
