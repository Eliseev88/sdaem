import Input from 'shared/ui/input';
import Button from 'shared/ui/button';
import SwitchCheckbox from 'shared/ui/swith-checkbox';
import { ChangeEvent, FC, useState, useRef, useEffect, FormEvent } from 'react';
import { CgProfile as Login } from 'react-icons/cg';
import { AiFillLock as Pass } from 'react-icons/ai';
import cl from './styles.module.scss';
import { Link } from 'react-router-dom';
import { fetchUser } from 'entities/user/model/reducer/ActionCreators';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { getIsUserLoading, getUser, getUserError } from 'entities/user/model/reducer/Selectors';
import { typeVariant } from 'entities/user/model/types';
import Loader from 'shared/ui/loader';

interface IAuthFormProps {
  isPopUpVisible: boolean
  setIsPopUpVisible: (val: boolean) => void
}

export const AuthForm: FC<IAuthFormProps> = ({ isPopUpVisible, setIsPopUpVisible }) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [errorAuth, setErrorAuth] = useState<boolean>(false);

  const input = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const error = useAppSelector(getUserError);
  const isLoading = useAppSelector(getIsUserLoading);
  const user = useAppSelector(getUser);

  const handleChangeRemember = (event: ChangeEvent<HTMLInputElement>): void => {
    setRememberMe(event.target.checked);
  };

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value);
  };

  const handleChangePass = (event: ChangeEvent<HTMLInputElement>): void => {
    setPass(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(fetchUser(login, pass, typeVariant.signIn, rememberMe));
  };

  useEffect(() => {
    input.current.focus();
  }, [isPopUpVisible]);

  useEffect(() => {
    error ? setErrorAuth(true) : setErrorAuth(false);
  }, [error]);

  useEffect(() => {
    Object.keys(user).length > 0 && setIsPopUpVisible(false);
  }, [user]);

  return (
    <form className={cl.form} onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      {errorAuth && <span className='error'>Неверная почта или пароль</span>}
      <Input
        ref={input}
        type='email'
        placeholder='Введите почту'
        required
        icon={<Login />}
        value={login}
        onChange={handleChangeLogin}
        onFocus={() => setErrorAuth(false)}
      />
      <Input
        type='password'
        placeholder='Пароль'
        required
        icon={<Pass />}
        value={pass}
        onChange={handleChangePass}
        onFocus={() => setErrorAuth(false)}
      />
      <div className={cl.row}>
        <label className={cl.label}>
          <SwitchCheckbox defaultChecked={rememberMe} onChange={handleChangeRemember} />
          <span>Запомнить меня</span>
        </label>
        <Link to='/recovery' className={cl.recovery}>Забыли пароль?</Link>
      </div>
      <Button type='submit' color='#1E2123' background='#FFD54F'>Войти</Button>
    </form>
  );
};

export default AuthForm;
