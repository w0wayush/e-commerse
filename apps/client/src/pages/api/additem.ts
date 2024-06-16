import type { NextApiRequest, NextApiResponse } from "next";
import { Item } from "db";
import { ensureDbConnected } from "@/lib/dbConnect";
import { z } from "zod";

type CreateProductData = {
  message: string;
  productId?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateProductData>
) {
  try {
    await ensureDbConnected();

    // Assuming req.body contains the necessary data for creating a product
    const { product, description, price, imageLink, published } = req.body;

    // Create a new item (product) based on the request data
    const newItem = new Item({
      product,
      description,
      price,
      imageLink,
      published,
    });

    // Save the new item to the database
    await newItem.save();

    // Respond with a success message and the new product's ID
    res.status(201).json({
      message: "Product created successfully",
      productId: newItem.id,
    });
  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
