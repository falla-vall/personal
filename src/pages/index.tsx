import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/Layout";
import { trpc } from "../utils/trpc";
import { colors, hellos, socmeds } from "../mocks";

const Home: NextPage = () => {
  const quote = trpc.useQuery(["quotes.random"]).data;
  const [colorIndex, setColorIndex] = useState(0);

  const motionAttrs = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.5 },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev >= colors.length - 1 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <motion.div
        {...motionAttrs}
        className="flex flex-col lg:gap-4 justify-center min-h-screen font-quicksand"
      >
        <h1
          style={{ color: colors[colorIndex] }}
          className="text-5xl xs:(text-6xl) md:(text-7xl) lg:(text-8xl) xl:(text-9xl) font-black transition-colors duration-1000"
        >
          <Typewriter
            words={hellos}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <h2 className="text-2xl xs:(text-4xl) md:(text-5xl) lg:(text-6xl) xl:(text-7xl)">
          I&apos;m Fallah Andy Prakasa
        </h2>
        <h2 className="text-2xl xs:(text-4xl) md:(text-5xl) lg:(text-6xl) xl:(text-7xl)">
          Fullstack Developer
        </h2>
        <div className="flex flex-row flex-wrap gap-2 mt-24">
          {socmeds.map((socmed, index) => (
            <a
              key={index}
              href={socmed.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 hover:(w-42 px-4 bg-white text-black) flex justify-center gap-2 items-center border border-gray-700 rounded-full transition-all duration-300 ease"
            >
              <socmed.icon size={24} />
              <span className="hidden group-hover:(block)">{socmed.name}</span>
            </a>
          ))}
        </div>
      </motion.div>
      {quote && (
        <div className="flex flex-col justify-center min-h-screen">
          <motion.h3 {...motionAttrs}>Random Quote:</motion.h3>
          <motion.h1
            {...motionAttrs}
            className="py-6 text-3xl xs:(text-4xl) sm:(text-5xl) md:(py-8 text-7xl) italic font-bold text-white"
          >
            “ {quote.content} ”
          </motion.h1>
          <motion.p
            {...motionAttrs}
            className="text-lg xs:(text-xl) sm:(text-2xl) md:(text-4xl) text-white"
          >
            {quote.author}.
          </motion.p>
        </div>
      )}
    </Layout>
  );
};

export default Home;
