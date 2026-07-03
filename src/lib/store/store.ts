import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pages/pagesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      pages: pagesReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
