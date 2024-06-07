import { selector } from "recoil";
import { itemState } from "../atoms/item";

export const isItemLoading = selector({
  key: "isItemLoadingState",
  get: ({ get }) => {
    const state = get(itemState);

    return state.isLoading;
  },
});

export const itemDetails = selector({
  key: "itemDetailsState",
  get: ({ get }) => {
    const state = get(itemState);

    return state.item;
  },
});

export const itemTitle = selector({
  key: "itemTitleState",
  get: ({ get }) => {
    const state = get(itemState);
    if (state.item) {
      return state.item.product;
    }
    return "";
  },
});

export const itemDescription = selector({
  key: "itemDescriptionState",
  get: ({ get }) => {
    const state = get(itemState);
    if (state.item) {
      return state.item.description;
    }
    return "";
  },
});

export const itemPrice = selector({
  key: "itemPriceState",
  get: ({ get }) => {
    const state = get(itemState);
    if (state.item) {
      return state.item.price;
    }
    return "";
  },
});

export const itemImage = selector({
  key: "itemImageState",
  get: ({ get }) => {
    const state = get(itemState);
    if (state.item) {
      return state.item.imageLink;
    }
    return "";
  },
});
