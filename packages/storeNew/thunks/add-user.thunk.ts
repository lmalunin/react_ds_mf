import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUserThunk = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3010/users', {
    name: faker.name.fullName(),
    id: faker.number.int(),
  })

  return response.data;
});

export { addUserThunk };
