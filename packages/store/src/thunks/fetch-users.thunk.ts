import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsersThunk = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3010/users');
  return response.data;
});

export { fetchUsersThunk };
