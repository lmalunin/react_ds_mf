import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../thunks/fetch-users.thunk";

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    isLoading: false,
    error: {}
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsersThunk.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchUsersThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
})

export const usersReducer = usersSlice.reducer;
