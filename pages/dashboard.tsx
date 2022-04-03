import { GetServerSideProps } from "next";
import absoluteUrl from "next-absolute-url";
import moment from "moment";
import Layout from "../providers/Layout";

interface PROPS {
  waka: {
    data: {
      human_readable_total: string;
      best_day: {
        date: string;
        text: string;
      };
      human_readable_daily_average: string;
      editors: Array<{
        name: string;
      }>;
      languages: Array<{
        name: string;
      }>;
      machines: Array<{
        name: string;
      }>;
    };
  };
  Gh: {
    public_repos: string;
    followers: number;
    following: number;
  };
  GhStats: {
    currentStreak: {
      days: number;
    };
    longestStreak: {
      days: number;
    };
    summary: {
      total: number;
    };
  };
}

export default function dashboard(props: PROPS) {
  const { waka, Gh, GhStats } = props;
  return (
    <Layout>
      <div className="my-8 container">
        <h1 className="text-4xl md:text-6xl dark:text-gray-200 font-thin my-2">
          Dashboard
        </h1>
        <p className="md:text-lg text-gray-600 dark:text-gray-400">
          This is my personal dashboard, built with Next.js API routes deployed
          as serverless functions.
        </p>
        <div className="my-12 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl md:text-4xl dark:text-gray-200">
                Wakatime
              </h3>
              <span className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                Last 7 Days
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Coding Time
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {waka.data.human_readable_total}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg md:text-xl dark:text-gray-300">
                      Best Day
                    </h4>
                    <span className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400">
                      {moment(waka.data.best_day.date, "YYYY-MM-DD").format(
                        "dddd"
                      )}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {waka.data.best_day.text}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Daily Average
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {waka.data.human_readable_daily_average}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Most IDE Used
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {waka.data.editors[0].name}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Most Language Used
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {waka.data.languages[0].name}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Most Device Used
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {waka.data.machines[0].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl md:text-4xl dark:text-gray-200">
                Github
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Public Repos
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {Gh.public_repos}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Followers
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {Gh.followers}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Following
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {Gh.following}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Current Streak
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {GhStats.currentStreak.days} days
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Longest Streak
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {GhStats.longestStreak.days} days
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Total Contributions
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {GhStats.summary.total}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);
  const resWaka = await fetch(origin + "/api/wakatime/stats");
  const waka = await resWaka.json();
  const resGh = await fetch("https://api.github.com/users/AkaruiAikara");
  const Gh = await resGh.json();
  const resGhStats = await fetch(origin + "/api/github/stats");
  const GhStats = await resGhStats.json();
  return {
    props: { waka, Gh, GhStats },
  };
};
