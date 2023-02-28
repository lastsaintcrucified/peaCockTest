import { configureStore } from "@reduxjs/toolkit";
import stdReducer from "./slices/stdSlice";

export const store = configureStore({
  reducer: {
    std: stdReducer,
  },
});
