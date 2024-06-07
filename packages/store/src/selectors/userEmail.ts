import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userEmailState = selector({
  key: "userEmailState",
  get: ({ get }) => {
    const state = get(userState);
    // console.group("User email state - ", state);
    return state.userEmail;
  },
});
