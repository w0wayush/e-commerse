// src/selectors/itemSelectors.ts
import { selector } from "recoil";
import { itemState } from "../atoms/item";
import { Item } from "../types";

export const isItemLoading = selector<boolean>({
  key: "isItemLoadingState",
  get: ({ get }) => {
    const state = get(itemState);
    return state.isLoading;
  },
});

export const itemDetails = selector<Item | null>({
  key: "itemDetailsState",
  get: ({ get }) => {
    const state = get(itemState);
    return state.item;
  },
});

export const itemTitle = selector<string>({
  key: "itemTitleState",
  get: ({ get }) => {
    const state = get(itemState);
    return state.item?.product || "";
  },
});

export const itemDescription = selector<string>({
  key: "itemDescriptionState",
  get: ({ get }) => {
    const state = get(itemState);
    return state.item?.description || "";
  },
});

export const itemPrice = selector<number>({
  key: "itemPriceState",
  get: ({ get }) => {
    const state = get(itemState);
    return state.item?.price || 0;
  },
});

export const itemImage = selector<string>({
  key: "itemImageState",
  get: ({ get }) => {
    const state = get(itemState);
    return state.item?.imageLink || "";
  },
});
