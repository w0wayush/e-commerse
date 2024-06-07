import { atom } from "recoil";

export const itemState = atom({
  key: "itemState",
  default: {
    isLoading: true,
    item: null,
  },
});
