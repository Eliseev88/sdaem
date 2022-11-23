import { userModel } from 'entities/user';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { FC, useEffect } from 'react';
import cl from './styles.module.scss';
import { fetchUser } from 'entities/user/model/reducer/ActionCreators';

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userReducer.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className={cl.test}>{user.name}</div>
  );
};

export default MainPage;
