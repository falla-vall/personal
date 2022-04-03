import type { NextApiRequest, NextApiResponse } from "next";
import { fetchStats } from "github-contribution-stats";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await fetchStats("AkaruiAikara");
  res.status(200).json(data);
}
