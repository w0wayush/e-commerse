import type { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

type SignInData = {
  token?: string;
  message?: string;
  status?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignInData>
) {
  try {
    await ensureDbConnected();
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Please fill all the details" });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(500).json({
        message: "Please signup first",
      });
    }

    const SECRET = process.env.JWT_SECRET;
    if (!SECRET) {
      throw new Error("Please add your JWT SECRET to .env.local");
    }

    /* if (admin) {
      const token = jwt.sign({ username, role: "admin" }, SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Logged in successfully", token });
    } else {
      res.status(403).json({ message: "Invalid username or password" });
    } */

    if (await bcrypt.compare(password, admin.password)) {
      if (admin) {
        const token = jwt.sign({ username, role: "admin" }, SECRET, {
          expiresIn: "1h",
        });

        // console.log("Signin - ", token);

        res.json({ message: "Logged in successfully", token });
      } else {
        res.status(403).json({ message: "Invalid username or password" });
      }
    } else {
      return res.status(400).json({
        message: "Please enter correct password",
      });
    }
  } catch (err) {
    //     console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
