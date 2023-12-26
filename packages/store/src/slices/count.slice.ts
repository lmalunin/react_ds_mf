import { createSlice } from "@reduxjs/toolkit";
import { de } from "@faker-js/faker";

const initialState = { data: 0 };

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state, action) {
      state.data = state.data + action.payload;
      return
    },
    decrement(state, action) {
      state.data = state.data - action.payload;
      return
    },
  }
})

export const { increment, decrement } = countSlice.actions;
export const countReducer = countSlice.reducer;
