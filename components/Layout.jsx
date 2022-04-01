import Head from "next/head";
import Navbar from "./ui/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>FLLA</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
