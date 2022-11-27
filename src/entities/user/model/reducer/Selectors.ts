import { RootState } from '@/app/store';
import { User } from 'firebase/auth';

export const getUserError = (state: RootState): string => state.userReducer.error;
export const getIsUserLoading = (state: RootState): boolean => state.userReducer.isLoading;
export const getUser = (state: RootState): User => state.userReducer.user;
export const getUserEmailNotification = (state: RootState): boolean => state.userReducer.emailNotification;
