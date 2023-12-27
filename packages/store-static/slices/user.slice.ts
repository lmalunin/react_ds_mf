import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../thunks/fetch-users.thunk";
import { addUserThunk } from "../thunks/add-user.thunk";
import { removeUserThunk } from "../thunks/remove-user.thunk";

interface UserState {
  data: { id: number, name: string }[]
  isLoading: boolean
  error: any
}

const initialState: UserState = {
  data: [],
  isLoading: false,
  error: {}
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
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

    //
    builder.addCase(addUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(addUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(removeUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
})

export const usersReducer = usersSlice.reducer;
