import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import * as preloaderAnimationData from "../public/333-loader-4-edited.json";
import Typewriter from "typewriter-effect";
import Icon from "react-icons-kit";
import { github } from "react-icons-kit/feather/github";
import { linkedin } from "react-icons-kit/feather/linkedin";
import { twitter } from "react-icons-kit/feather/twitter";
import { instagram } from "react-icons-kit/feather/instagram";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: preloaderAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [loading, setLoading] = useState(true);
  // fetch github profile picture
  const [profilePicture, setProfilePicture] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/AkaruiAikara")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfilePicture(data.avatar_url);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return loading ? (
    <div className="flex items-center justify-center bg-green-100 h-screen w-screen">
      <div className="w-48">
        <Lottie options={defaultOptions} height={400} weight={200} />
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="px-12 pt-48 py-12 lg:pl-60 lg:pr-36 lg:py-24 w-full h-full">
        <div className="w-full h-full rounded-2xl bg-white group opacity-75 backdrop-blur-md backdrop-saturate-200">
          <div className="pt-48 lg:pt-12 lg:ml-48 p-12">
            <h3 className="text-4xl text-teal-900">Hello I'm</h3>
            <h1 className="text-6xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-emerald-700 to-lime-400 font-bold">
              Fallah Andy Prakasa
            </h1>
            <div className="text-2xl text-teal-900">
              <Typewriter
                options={{
                  strings: [
                    "A Fullstack Developer",
                    "A Frontend Developer",
                    "A Backend Developer",
                    "A Web Developer",
                    "A Mobile Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </div>
            <div className="absolute inline-flex flex-row gap-2 bottom-12">
              <Link href="https://github.com/AkaruiAikara" passHref>
                <Icon
                  icon={github}
                  className="cursor-pointer text-cyan-800 text-center my-auto hover:animate-spin hover:bg-cyan-800 hover:transition-colors
                  duration-300 hover:text-white w-[24px] h-[24px] rounded-full"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/fallah-andy-prakasa/"
                passHref
              >
                <Icon
                  icon={linkedin}
                  className="cursor-pointer text-cyan-800 text-center my-auto hover:animate-spin hover:bg-cyan-800 hover:transition-colors
                  duration-300 hover:text-white w-[24px] h-[24px] rounded-full"
                />
              </Link>
              <Link href="https://twitter.com/falla_vall" passHref>
                <Icon
                  icon={twitter}
                  className="cursor-pointer text-cyan-800 text-center my-auto hover:animate-spin hover:bg-cyan-800 hover:transition-colors
                  duration-300 hover:text-white w-[24px] h-[24px] rounded-full"
                />
              </Link>
              <Link href="https://instagram.com/falla.vall" passHref>
                <Icon
                  icon={instagram}
                  className="cursor-pointer text-cyan-800 text-center my-auto hover:animate-spin hover:bg-cyan-800 hover:transition-colors
                  duration-300 hover:text-white w-[24px] h-[24px] rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {profilePicture && (
        <div className="absolute top-2 lg:top-auto lg:left-20">
          <Image
            src={profilePicture}
            width={360}
            height={360}
            className="object-cover rounded-full"
          ></Image>
        </div>
      )}
    </div>
  );
}
