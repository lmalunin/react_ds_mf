import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type User = { id: number, name: string }

const removeUserThunk = createAsyncThunk('users/remove', async (user: User) => {
  await axios.delete(`http://localhost:3010/users/${user.id}`);

  return user;
});

export { removeUserThunk };
