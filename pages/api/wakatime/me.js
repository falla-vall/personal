import { WakaTimeApi } from "@nick22985/wakatime-api";

export default async function handler(_, res) {
  const client = new WakaTimeApi(process.env.WAKATIME_API);
  const data = await client.getMe();
  res.status(200).json(data);
}
