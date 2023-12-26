import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//DEV ONLY!!!
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchUsersThunk = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3010/users');

  await sleep(1000)

  return response.data;
});

export { fetchUsersThunk };
