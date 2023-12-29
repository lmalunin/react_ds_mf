import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const removeUserThunk = createAsyncThunk('users/remove', async (user: { id: number, name: string }) => {

  await axios.delete(`http://localhost:3010/users/${user.id}`);

  return user;
});

export { removeUserThunk };
