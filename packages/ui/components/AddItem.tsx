import React, { useState } from "react";
import axios from "axios";
import { Button, Card, TextField } from "@mui/material";

export function AddItem(props: {
  onClick: (
    product: string,
    description: string,
    image: string,
    price: string,
    published?: boolean
  ) => void;
}) {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant={"outlined"}
          style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}
        >
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setProduct(e.target.value);
            }}
            fullWidth={true}
            label="Product Name"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth={true}
            label="Product Description"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            fullWidth={true}
            label="Product Price"
            variant="outlined"
          />

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              props.onClick(product, description, image, price);
              alert("Added Product!");
            }}
          >
            {" "}
            Add Product
          </Button>
        </Card>
      </div>
    </div>
  );
}
