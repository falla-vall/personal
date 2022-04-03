import { fetchStats } from "github-contribution-stats";

export default async function handler(_, res) {
  const data = await fetchStats("AkaruiAikara");
  res.status(200).json(data);
}
