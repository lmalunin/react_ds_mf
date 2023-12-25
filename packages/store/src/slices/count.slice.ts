import { createSlice } from "@reduxjs/toolkit";
import { de } from "@faker-js/faker";

const initialState = { count: 0 };

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state, action) {
      debugger
      state.count = state.count + 1;
      return
    },
    decrement(state, action) {
      debugger
      state.count = state.count - 1;
      return
    },
  }
})

export const { increment, decrement } = countSlice.actions;
export const countReducer = countSlice.reducer;
