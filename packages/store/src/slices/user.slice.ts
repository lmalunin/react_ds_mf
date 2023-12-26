import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../thunks/fetch-users.thunk";
import { addUserThunk } from "../thunks/add-user.thunk";

// interface UserState {
//   data: { id: number, name: string }[]
//   isLoading: boolean
//   error: any
// }

const initialState = {
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
      //state.data.push(action.payload);
    });

    builder.addCase(addUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
})

export const usersReducer = usersSlice.reducer;
