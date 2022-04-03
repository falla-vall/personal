import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import Layout from "../providers/Layout";
import { ghIco, igIco, inIco, twIco } from "../assets/lottie";

export default function Home() {
  const router = useRouter();
  const ghRef = useRef(null);
  const igRef = useRef(null);
  const inRef = useRef(null);
  const twRef = useRef(null);

  const handleSocialClick = (url: string, ref: any) => {
    ref.current.setSpeed(3);
    ref.current.goToAndPlay(1, true);
    router.push(url);
  };
  return (
    <Layout>
      <div className="mt-12 md:mt-0 flex flex-col-reverse gap-12 md:flex-row items-center py-5 md:py-10 lg:py-20">
        <div className="basis-3/5 md:pr-12">
          <h6 className="text-md md:text-xl text-center md:text-left dark:text-white mb-2 md:mb-10">
            Hello, I&lsquo;m{" "}
            <span className="text-violet-600 dark:text-violet-300">
              Fallah Andy Prakasa
            </span>
          </h6>
          <h1 className="font-bold text-3xl md:text-6xl text-center md:text-left text-fuchsia-600 dark:text-fuchsia-300">
            <Typewriter
              options={{
                strings: [
                  "A Full-Stack Developer",
                  "A Front End Developer",
                  "A Back End Developer",
                  "A Mobile Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h1>
          <h2 className="mt-2 text-center md:text-left text-3xl font-bold dark:text-white">
            who loves to create beautiful and useful things.
          </h2>
          <div className="flex flex-row justify-center md:justify-start items-center gap-2 -ml-2.5 mt-2 mb-12">
            <Lottie
              lottieRef={ghRef}
              animationData={ghIco}
              className="transition ease-in-out h-12 dark:invert hover:scale-125 cursor-pointer"
              loop={false}
              autoplay={false}
              onClick={() =>
                handleSocialClick("https://github.com/AkaruiAikara/", ghRef)
              }
            />
            <Lottie
              lottieRef={igRef}
              animationData={igIco}
              className="transition ease-in-out h-12 dark:invert hover:scale-125 cursor-pointer"
              loop={false}
              autoplay={false}
              onClick={() =>
                handleSocialClick(
                  "https://www.instagram.com/falla.vall/",
                  igRef
                )
              }
            />
            <Lottie
              lottieRef={inRef}
              animationData={inIco}
              className="transition ease-in-out h-12 dark:invert hover:scale-125 cursor-pointer"
              loop={false}
              autoplay={false}
              onClick={() =>
                handleSocialClick(
                  "https://www.linkedin.com/in/fallah-andy-prakasa/",
                  inRef
                )
              }
            />
            <Lottie
              lottieRef={twRef}
              animationData={twIco}
              className="transition ease-in-out h-12 dark:invert hover:scale-125 cursor-pointer"
              loop={false}
              autoplay={false}
              onClick={() =>
                handleSocialClick("https://twitter.com/falla_vall/", twRef)
              }
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <Link href="https://kontena.vercel.app/CV.pdf/1iC6dOlIxiyS3xbTKi0OfYKaSU2pmZXsI/view">
              <a className="text-white dark:text-purple-900 bg-gradient-to-br from-violet-500 to-fuchsia-400 dark:from-violet-400 dark:to-fuchsia-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-violet-200 dark:focus:ring-violet-800 font-bold rounded text-sm px-5 py-2.5 text-center">
                Resume
              </a>
            </Link>
          </div>
        </div>
        <div className="basis-2/5 flex justify-end items-center">
          <div className="w-64 md:w-[78%]">
            <Image
              src="/profile.jpg"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              priority={true}
              alt="profile"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
