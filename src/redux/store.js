import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice";

export default configureStore({
  reducer: {
    store: CounterSlice,
  },
});
