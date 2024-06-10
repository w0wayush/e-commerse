// src/selectors/userSelectors.ts
import { selector } from "recoil";
import { userState } from "../atoms/user";

export const isUserLoading = selector<boolean>({
  key: "userLoadingState",
  get: ({ get }) => {
    const state = get(userState);
    return state.isLoading;
  },
});

export const userEmailState = selector<string | null>({
  key: "userEmailState",
  get: ({ get }) => {
    const state = get(userState);
    return state.userEmail;
  },
});
