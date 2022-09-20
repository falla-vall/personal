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
          <div className="absolute lg:(hidden) top-0 left-0 px-4 py-12 rounded-full bg-black">
            <h1 className="text-4xl font-bold">flla.</h1>
          </div>
          <div className="overflow-auto flex flex-col min-h-screen p-4 w-full">
            {children}
          </div>
          <Navbar />
        </main>
      </div>
    </>
  );
};

export default Layout;
