import React from "react";
import { AddItem } from "@repo/ui/additem";
import axios from "axios";

export default function AddItems() {
  const handleAddItem = async () => {
    async (
      product: string,
      description: string,
      image: string,
      price: string,
      published: boolean
    ) => {
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
    };
  };
  return (
    <div>
      <AddItem onClick={handleAddItem} />
    </div>
  );
}
