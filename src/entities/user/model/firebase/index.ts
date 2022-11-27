import firebase from 'shared/firebase';
import {
  sendPasswordResetEmail,
  getAuth
} from 'firebase/auth';

export const auth = getAuth(firebase);

export const resetPass = async (email: string) => {
  await sendPasswordResetEmail(auth, email);
};
