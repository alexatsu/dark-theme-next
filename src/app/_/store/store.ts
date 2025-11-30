import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "@/app/_/store/slices/counter/counter";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
