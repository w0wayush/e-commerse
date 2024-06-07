import React from "react";
import { useRecoilValue } from "recoil";
import {
  itemDescription,
  itemImage,
  itemPrice,
  itemTitle,
} from "../../store/src/selectors/item";
import { Card, Typography } from "@mui/material";

export function Product() {
  const title = useRecoilValue(itemTitle);
  const imageLink = useRecoilValue(itemImage);
  const price = useRecoilValue(itemPrice);
  const description = useRecoilValue(itemDescription);

  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Card
        style={{
          margin: 10,
          width: 350,
          minHeight: 200,
          borderRadius: 20,
          marginRight: 50,
          paddingBottom: 15,
          zIndex: 2,
        }}
      >
        <img src={imageLink} style={{ width: 350 }}></img>
        <div style={{ marginLeft: 10 }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
          <Typography variant="subtitle2" style={{ color: "gray" }}>
            Price
          </Typography>
          <Typography variant="subtitle1">
            <b>Rs {price} </b>
          </Typography>
        </div>
      </Card>
    </div>
  );
}
