import type { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import jwt from "jsonwebtoken";
import { ensureDbConnected } from "@/lib/dbConnect";
import bcrypt from "bcrypt";
import { signInput } from "common";

type SignUpData = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignUpData>
) {
  try {
    await ensureDbConnected();
    // console.log("db connected");

    let parsedInput = signInput.safeParse(req.body);
    if (!parsedInput.success) {
      return res.status(403).json({
        message: parsedInput.error,
      });
    }
    const username = parsedInput.data.username;
    const password = parsedInput.data.password;

    // const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Please fill all the details" });
    }

    // console.log("In side signup");
    const admin = await Admin.findOne({ username });

    if (admin) {
      res.status(403).json({ message: "Admin already exists" });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      res.status(500).json({
        message: "Error in hashing password",
      });
    }

    // console.log("Password hashed");

    const obj = { username: username, password: hashedPassword };
    // console.log("Signup - ", obj);
    const newAdmin = new Admin(obj);
    newAdmin.save();

    const SECRET = process.env.JWT_SECRET;
    if (!SECRET) {
      throw new Error("Please add your JWT SECRET to .env.local");
    }

    /*  const token = jwt.sign({ username, role: "admin" }, SECRET, {
      expiresIn: "1h",
    }); */
    // console.log("admin created");

    res.status(200).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
