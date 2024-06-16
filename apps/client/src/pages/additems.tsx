import React from "react";
import { AddItem } from "@repo/ui/additem";
import axios from "axios";

export default function AddItems() {
  const handleAddItem = async (
    product: string,
    description: string,
    image: string,
    price: string
  ) => {
    try {
      const response = await axios.post(
        "/api/additem",
        {
          product,
          description,
          image,
          price,
          published: true,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <AddItem onClick={handleAddItem} />
    </div>
  );
}
