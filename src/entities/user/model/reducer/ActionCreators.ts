import { AppDispatch } from '@/app/store';
import { userSlice } from './UserSlice';
import firebase from 'shared/firebase';
import { IError, typeVariant } from '../types';
import {
  signOut,
  getAuth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  sendEmailVerification
} from 'firebase/auth';

export const auth = getAuth(firebase);

export const fetchUser = (
  email: string,
  pass: string,
  type: typeVariant,
  rememberMe?: boolean
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    let response: UserCredential | null = null;
    if (type === typeVariant.signUp) {
      response = await createUserWithEmailAndPassword(auth, email, pass);
      await sendEmailVerification(response.user);
      dispatch(userSlice.actions.userEmailNotification(true));
    } else {
      if (rememberMe) {
        response = await signInWithEmailAndPassword(auth, email, pass);
      } else {
        await setPersistence(auth, browserSessionPersistence).then(async () => {
          response = await signInWithEmailAndPassword(auth, email, pass);
        });
      }
    }
    dispatch(userSlice.actions.userFetchingSuccess(response.user));
  } catch (error) {
    const e = error as IError;
    dispatch(userSlice.actions.userFetchingError(e.message));
  }
};

export const logOut = () => async (dispatch: AppDispatch) => {
  await signOut(auth);
  dispatch(userSlice.actions.userLogOut());
};
