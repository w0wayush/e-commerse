import type { NextApiRequest, NextApiResponse } from "next";
import { ensureDbConnected } from "@/lib/dbConnect";
import { getUser } from "@/lib/middleware";

type MeData = {
  user?: string;
  message?: string;
};

/* Authenticate JWT */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MeData>
) {
  try {
    await ensureDbConnected();

    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      getUser(token, (user: any) => {
        if (!user) {
          return res.status(403).json({});
        }
        return res.json({ user: user });
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
