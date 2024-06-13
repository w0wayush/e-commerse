import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { itemState } from "../../store/src/atoms/item";
import { Button, Card, TextField, Typography } from "@mui/material";

export function UpdateCard(props: any) {
  const itemDetails = useRecoilValue(itemState);
  const [product, setProduct] = useState(itemDetails?.item?.product || "");
  const [description, setDescription] = useState(
    itemDetails?.item?.description || ""
  );
  const [image, setImage] = useState(itemDetails?.item?.imageLink || "");
  const [price, setPrice] = useState(itemDetails?.item?.price || "");

  const handleUpdate = () => {
    props.onClick(product, description, image, true, price);
  };

  if (!itemDetails?.item) {
    return <div>No item details available.</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card variant={"outlined"} style={{ maxWidth: 600, marginTop: 200 }}>
        <div style={{ padding: 20 }}>
          <Typography style={{ marginBottom: 10 }}>
            Update course details
          </Typography>
          <TextField
            value={product}
            style={{ marginBottom: 10 }}
            onChange={(e) => setProduct(e.target.value)}
            fullWidth={true}
            label="Product"
            variant="outlined"
          />
          <TextField
            value={description}
            style={{ marginBottom: 10 }}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />
          <TextField
            value={image}
            style={{ marginBottom: 10 }}
            onChange={(e) => setImage(e.target.value)}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />
          <TextField
            value={price}
            style={{ marginBottom: 10 }}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />
          <Button variant="contained" onClick={handleUpdate}>
            Update course
          </Button>
        </div>
      </Card>
    </div>
  );
}
