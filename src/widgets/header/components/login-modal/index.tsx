import { FC } from 'react';
import PopUp from 'shared/ui/popup';
import AuthForm from 'features/auth-form';
import cl from './styles.module.scss';
import { Link } from 'react-router-dom';

interface ILoginModal {
  isPopUpVisible: boolean
  setIsPopUpVisible: (val: boolean) => void
}

export const LoginModal: FC<ILoginModal> = ({ isPopUpVisible, setIsPopUpVisible }) => {
  return (
    <PopUp maxWidth='40.6rem' visible={isPopUpVisible} setVisible={setIsPopUpVisible}>
      <div className={cl.auth}>
        <h1 className={cl.title}>Авторизация</h1>
        <p className={cl.text}>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
        <AuthForm isPopUpVisible={isPopUpVisible} setIsPopUpVisible={setIsPopUpVisible} />
        <div className={cl.box}>
          <span>Еще нет аккаунта? </span>
          <Link to='/signup' className={cl.change}>Создайте аккаунт</Link>
        </div>
      </div>
    </PopUp>
  );
};

export default LoginModal;
