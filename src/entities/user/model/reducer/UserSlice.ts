import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';
import { IUserState } from '../types';

const initialState: IUserState = {
  user: {} as User,
  isLoading: false,
  error: '',
  emailNotification: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching (state) {
      state.isLoading = true;
    },
    userFetchingSuccess (state, action: PayloadAction<User>) {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    userFetchingError (state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    userLogOut (state) {
      state.user = {} as User;
      state.emailNotification = false;
    },
    userEmailNotification (state, action: PayloadAction<boolean>) {
      state.emailNotification = action.payload;
    }
  }
});

export default userSlice.reducer;
