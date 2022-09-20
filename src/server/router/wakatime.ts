import { createRouter } from "./context";

type Language = {
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
};

const config = {
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.WAKATIME_API_KEY}:`
    ).toString("base64")}`,
  },
};

export const wakatimeRouter = createRouter().query("stats", {
  async resolve({ ctx }) {
    return await ctx
      .get(
        "https://wakatime.com/api/v1/users/AkaruiAikara/stats/all_time",
        config
      )
      .then((res) => {
        const langs = res.data.data.languages.slice(0, 10);
        const best_day = {
          date: res.data.data.best_day.date,
          time: res.data.data.best_day.text,
        };
        const editors = res.data.data.editors
          .slice(0, 3)
          .map((editor: { name: string }) => editor.name);
        const operating_systems = res.data.data.operating_systems
          .slice(0, 3)
          .map((os: { name: string }) => os.name);
        const coding_all_time =
          res.data.data.human_readable_total_including_other_language;
        const coding_daily_average =
          res.data.data.human_readable_daily_average_including_other_language;
        const langGraphs = langs.map((lang: Language) => {
          return {
            id: lang.name.toLowerCase().replaceAll(" ", "-"),
            label: lang.name,
            value: lang.total_seconds,
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          };
        });
        return {
          coding_all_time,
          coding_daily_average,
          best_day,
          editors,
          operating_systems,
          langGraphs,
        };
      });
  },
});
