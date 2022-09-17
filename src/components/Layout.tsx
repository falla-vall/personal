import Head from "next/head";
import type { FC, PropsWithChildren } from "react";
import Navbar from "./ui/Navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>flla. - nothing here</title>
        <meta name="description" content="Nothing here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black text-white font-fira">
        <main className="container relative flex flex-col lg:flex-row justify-between gap-4 items-center mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center min-h-screen p-4">
            {children}
          </div>
          <Navbar />
        </main>
      </div>
    </>
  );
};

export default Layout;
