import { atom } from "recoil";
import { Item } from "../types";

interface ItemState {
  isLoading: boolean;
  item: Item | null;
}

export const itemState = atom<ItemState>({
  key: "itemState",
  default: {
    isLoading: true,
    item: null,
  },
});
