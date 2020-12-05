import { createContext } from "react";

export const appContext = createContext({
  tweets: [],
  showSpinner: false,
  handleOnAddTweet: () => {},
});
