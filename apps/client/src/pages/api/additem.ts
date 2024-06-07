import type { NextApiRequest, NextApiResponse } from "next";
import { Item } from "db";
import { ensureDbConnected } from "@/lib/dbConnect";

type ItemData = {
  itemId?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemData>
) {
  try {
    await ensureDbConnected();
    const { product, description, imageLink, price, published } = req.body;
    const itemObj = { product, description, imageLink, price, published };
    // console.log("Signup - ", obj);
    const item = new Item(itemObj);
    await item.save();

    // const item = new Item(req.body);
    // await item.save();
    res.json({ message: "Item created successfully", itemId: item._id });
  } catch (err) {
    //     console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
