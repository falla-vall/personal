import { GetStaticProps } from "next";

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
  gh: {
    viewer: {
      followers: {
        totalCount: number;
      };
      following: {
        totalCount: number;
      };
      repositories: {
        totalCount: number;
      };
      contributionsCollection: {
        totalCommitContributions: number;
        totalRepositoryContributions: number;
        totalPullRequestContributions: number;
      };
    };
  };
}

export default function dashboard({ waka, gh }: PROPS) {
  return (
    <>
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
                Last Year
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
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Best Day
                  </h4>
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
                    Total Repos
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {gh.viewer.repositories.totalCount}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Followers
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {gh.viewer.followers.totalCount}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Following
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {gh.viewer.following.totalCount}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Total Commit Contributions
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {gh.viewer.contributionsCollection.totalCommitContributions}
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Total Repo Contributions
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {
                      gh.viewer.contributionsCollection
                        .totalRepositoryContributions
                    }
                  </h3>
                </div>
              </div>
              <div className="border-2 border-gray-300 dark:border-gray-700 rounded p-4">
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-xl dark:text-gray-300">
                    Total Pull Request Contributions
                  </h4>
                  <h3 className="text-xl md:text-2xl font-black dark:text-gray-200">
                    {
                      gh.viewer.contributionsCollection
                        .totalPullRequestContributions
                    }
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resWaka = await fetch(
    `https://wakatime.com/api/v1/users/AkaruiAikara/stats/last_year?api_key=${process.env.WAKATIME_API}`
  );
  const waka = await resWaka.json();
  const resGh = await fetch(process.env.PUBLIC_URL + "/api/github/stats");
  const gh = await resGh.json();
  return {
    props: { waka, gh },
    revalidate: 43200,
  };
};
