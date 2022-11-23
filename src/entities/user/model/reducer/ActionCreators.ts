import { AppDispatch } from '@/app/store';
import { userSlice } from './UserSlice';

interface IError {
  code: number
  message: string
}

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.userFetching());
    const response = { id: 1, name: 'Igor Eliseev', email: 'test@test.ru' };
    dispatch(userSlice.actions.userFetchingSuccess(response));
  } catch (error) {
    const e = error as IError;
    dispatch(userSlice.actions.userFetchingError(e.message));
  }
};
