import { User } from 'firebase/auth';

export interface IError {
  code: number
  message: string
}

export interface IUserState {
  user: User
  isLoading: boolean
  error: string
  emailNotification: boolean
};

export enum typeVariant {
  signIn = 'signIn',
  signUp = 'signUp',
};
