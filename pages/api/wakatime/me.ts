import type { NextApiRequest, NextApiResponse } from "next";
import { WakaTimeApi } from "@nick22985/wakatime-api";

declare const process: {
  env: {
    WAKATIME_API: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new WakaTimeApi(process.env.WAKATIME_API);
  const data = await client.getMe();
  res.status(200).json(data);
}
