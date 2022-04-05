import { NextApiRequest, NextApiResponse } from "next";
import { OAuth2Client } from "google-auth-library";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const token = req.headers.authorization as string;
      const ticket = await client.verifyIdToken({
        idToken: token.split(" ")[1],
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload) {
        res.status(401).json({ message: "Invalid token" });
      } else {
        const { sub, email, name, picture } = payload;
        res.status(200).json({
          id: sub,
          email,
          name,
          picture,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
}
