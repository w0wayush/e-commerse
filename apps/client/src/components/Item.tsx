import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { GrayTopper } from "@repo/ui/grayTopper";
import UpdateCardTemplate from "@repo/ui/updateCardTemplate";
import { Product } from "@repo/ui/product";
import { isItemLoading, itemState } from "store";
import { useRouter } from "next/router";

export function Item() {
  const router = useRouter();
  //@ts-ignore
  const { itemId } = router.query();
  console.log(itemId);

  const setItem = useSetRecoilState(itemState);
  const itemLoading = useRecoilValue(isItemLoading);

  useEffect(() => {
    axios
      .get(`/api/product/${itemId}`, {
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
      <UpdateCardTemplate onClick={() => {}} />
      <Product />
    </div>
  );
}

export default Item;
