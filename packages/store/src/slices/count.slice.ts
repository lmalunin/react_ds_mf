import { createSlice } from "@reduxjs/toolkit";
import { de } from "@faker-js/faker";

const initialState = { count: 0 };

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
      return
    },
    decrement(state, action) {
      state.count = state.count - 1;
      return
    },
  }
})

export const { increment, decrement } = countSlice.actions;
export const countReducer = countSlice.reducer;
