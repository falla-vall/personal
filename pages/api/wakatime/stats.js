import { WakaTimeApi, RANGE } from "@nick22985/wakatime-api";

export default async function handler(_, res) {
  const client = new WakaTimeApi("9886206a-ff5c-4e34-8b60-817700f1fbf1");
  const data = await client.getMyStats(RANGE.LAST_7_DAYS);
  res.status(200).json(data);
}
