import Head from "next/head";
import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>flla. - nothing here</title>
        <meta name="description" content="Nothing here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black">
        <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
