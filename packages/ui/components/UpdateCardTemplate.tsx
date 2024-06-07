import React from "react";
import { Grid } from "@mui/material";
import { UpdateCard } from "./UpdateCard";
import { Product } from "./Product";

export function UpdateCardTemplate(props) {
  return (
    <div>
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCard onClick={props.onClick} />
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
}
