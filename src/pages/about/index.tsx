import type { NextPage } from "next";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import Highlight from "react-highlight";
import { trpc } from "../../utils/trpc";
import PieChart from "../../components/ui/PieChart";
import computerAnimation from "../../../public/lottie/computer.json";
import loadingAnimation from "../../../public/lottie/loading.json";

const About: NextPage = () => {
  const { data: stats, isLoading } = trpc.useQuery(["wakatime.stats"]);
  console.log("stats", stats);
  // const statsData = {
  //   coding_all_time: stats?.coding_all_time,
  //   coding_daily_average: stats?.coding_daily_average,
  //   best_day: stats?.best_day,
  //   editors: stats?.editors,
  //   operating_systems: stats?.operating_systems,
  // };
  return (
    <section>
      <div className="flex flex-col lg:gap-4 justify-center min-h-screen">
        <div className="flex flex-col-reverse xl:(flex-row) gap-4 py-16">
          <div className="flex-grow-0">
            <h3 className="text-2xl sm:(text-3xl) md:(text-4xl) text-purple-300 underline underline-offset-12 py-6 xl:(py-16)">
              About Me
            </h3>
            <p className="text-sm sm:(text-md) md:(text-lg)">
              Hi Guys, My name is Fallah Andy Prakasa or you can call me{" "}
              <span className="text-purple-300">Avall / Falla, etc</span>. I
              live and grow up in{" "}
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
      </div>
      {/* <div className="flex flex-col lg:gap-4 justify-center min-h-screen">
        <h3 className="text-2xl sm:(text-3xl) md:(text-4xl) text-yellow-300 underline underline-offset-12 py-6 xl:(py-16)">
          My Coding Stats
        </h3>
        <div className="flex flex-col-reverse xl:(flex-row) justify-center gap-4 py-16">
          {isLoading ? (
            <Lottie animationData={loadingAnimation} />
          ) : (
            <>
              <div className="flex-grow-0 basis-1/2 flex items-center p-8 rounded-xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Highlight className="json">
                    {JSON.stringify(statsData, null, 4)}
                  </Highlight>
                </motion.div>
              </div>
              <div className="relative flex items-stretch flex-shrink-0 basis-1/2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-128 w-full"
                >
                  <PieChart data={stats?.langGraphs} />
                </motion.div>
              </div>
            </>
          )}
        </div>
      </div> */}
    </section>
  );
};

export default About;
