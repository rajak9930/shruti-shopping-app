import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
  },
});

export const { increment } = CounterSlice.actions;
export default CounterSlice.reducer;
