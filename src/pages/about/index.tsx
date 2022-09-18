import type { NextPage } from "next";
import Lottie from "lottie-react";
import computerAnimation from "../../../public/lottie/computer.json";

const About: NextPage = () => {
  return (
    <section className="flex flex-col lg:gap-4 justify-center min-h-screen">
      <div className="flex flex-col-reverse xl:(flex-row) gap-4 py-16">
        <div className="flex-grow-0">
          <h3 className="text-2xl sm:(text-3xl) md:(text-4xl) text-purple-300 underline underline-offset-12 py-6 xl:(py-16)">
            About Me
          </h3>
          <p className="text-sm sm:(text-md) md:(text-lg)">
            Hi Guys, My name is Fallah Andy Prakasa or you can call me{" "}
            <span className="text-purple-300">Avall / Falla, etc</span>. I live
            and grow up in{" "}
            <span className="text-purple-300">Sidoarjo, Indonesia</span>.
            Currently I&apos;m work as a{" "}
            <span className="text-purple-300">Fullstack Developer</span> on a
            company in Jakarta. Well I&apos;m not a{" "}
            <span className="text-purple-300">good writer</span>, so I&apos;m
            just gonna tell you about my life.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Lottie animationData={computerAnimation} width={200} />
        </div>
      </div>
    </section>
  );
};

export default About;
