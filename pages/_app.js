import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#d946ef" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
