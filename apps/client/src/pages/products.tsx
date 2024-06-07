import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { GrayTopper } from "@repo/ui/grayTopper";
import { UpdateCardTemplate } from "@repo/ui/updateCardTemplate";
import { Product } from "@repo/ui/product";
import { isItemLoading, itemState } from "store";
import { useRouter } from "next/router";

function Course() {
  const router = useRouter();
  let { itemId } = router.query();
  const setItem = useSetRecoilState(itemState);
  const itemLoading = useRecoilValue(isItemLoading);

  useEffect(() => {
    axios
      .get(`/admin/course/${itemId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setItem({ isLoading: false, item: res.data.course });
      })
      .catch((e) => {
        setItem({ isLoading: false, item: null });
      });
  }, [itemId, setItem]);

  if (itemLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GrayTopper />
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCardTemplate
            onClick={async (
              title,
              description,
              imageLink,
              published,
              price
            ) => {
              await axios.put(
                `/admin/courses/${itemId}`,
                {
                  title,
                  description,
                  imageLink,
                  published,
                  price,
                },
                {
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              setItem((prev) => ({
                ...prev,
                course: {
                  ...prev.product,
                  title,
                  description,
                  imageLink,
                  price,
                },
              }));
            }}
          />
        </Grid>
        <Grid item lg={4} md={12} sm={12}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
}

/* import React from "react";
import { GrayTopper } from "@repo/ui/grayTopper";
import { Grid } from "@mui/material";
import { UpdateCardTemplate } from "@repo/ui/updateCardTemplate";
import axios from "axios";
import { itemState } from "store";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export default function Products() {
  const setItem = useSetRecoilState(itemState);
  const itemDetails = useRecoilState(itemState);

  return (
    <div>
      <GrayTopper />
      <Grid container>
        <Grid item lg={8} md={12} sm={12}>
          <UpdateCardTemplate
            onClick={async (
              title,
              description,
              imageLink,
              published,
              price
            ) => {
              const response = await axios.put(
                `/api/items/${itemDetails.item._id}`,
                {
                  title,
                  description,
                  imageLink,
                  published,
                  price,
                },
                {
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              let updatedProduct = {
                _id: itemDetails.item._id,
                title: title,
                description: description,
                imageLink: imageLink,
                price,
              };
              setItem({ item: updatedProduct, isLoading: false });
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
 */
