import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { FC, useEffect, useState } from 'react';
import cl from './styles.module.scss';
import { getUserEmailNotification } from 'entities/user/model/reducer/Selectors';
import SuccessRegister from './components/success-register';
import PopUp from 'shared/ui/popup';
import { userSlice } from 'entities/user/model';
import { useLocation } from 'react-router-dom';
import RecoveryForm from 'features/recovery-form';
import Intro from './components/intro';

export const MainPage: FC = () => {
  const [recoveryPass, setRecoveryPass] = useState<boolean>(false);

  const userEmailNotification = useAppSelector(getUserEmailNotification);
  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/recovery') {
      setRecoveryPass(true);
    }
  }, [location.pathname]);

  const handleClick = () => {
    dispatch(userSlice.actions.userEmailNotification(false));
  };

  return (
    <main className={cl.test}>
      <Intro />
      {userEmailNotification && <PopUp visible={userEmailNotification} setVisible={handleClick}>
        <SuccessRegister handleClick={handleClick} />
      </PopUp>}
      {recoveryPass && <PopUp visible={recoveryPass} setVisible={setRecoveryPass}>
        <RecoveryForm setIsVisible={setRecoveryPass} />
      </PopUp>}
    </main>
  );
};

export default MainPage;
