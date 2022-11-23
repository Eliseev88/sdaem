import Input from 'shared/ui/input';
import Button from 'shared/ui/button';
import SwitchCheckbox from 'shared/ui/swith-checkbox';
import { ChangeEvent, FC, useState, useRef, useEffect, FormEvent } from 'react';
import { CgProfile as Login } from 'react-icons/cg';
import { AiFillLock as Pass } from 'react-icons/ai';
import cl from './styles.module.scss';
import { Link } from 'react-router-dom';

interface IAuthFormProps {
  isPopUpVisible: boolean
}

export const AuthForm: FC<IAuthFormProps> = ({ isPopUpVisible }) => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const input = useRef<HTMLInputElement>(null);

  const handleChangeRemember = (event: ChangeEvent<HTMLInputElement>): void => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {

  };

  useEffect(() => {
    input.current.focus();
  }, [isPopUpVisible]);

  return (
    <form className={cl.form} onSubmit={handleSubmit}>
      <Input ref={input} type='email' placeholder='Введите почту' required icon={<Login />} />
      <Input type='password' placeholder='Пароль' required icon={<Pass />} />
      <div className={cl.row}>
        <label className={cl.label}>
          <SwitchCheckbox ischecked={rememberMe.toString()} onChange={handleChangeRemember} />
          <span>Запомнить меня</span>
        </label>
        <Link to='/recovery' className={cl.recovery}>Забыли пароль?</Link>
      </div>
      <Button type='submit' color='#1E2123' background='#FFD54F'>Войти</Button>
    </form>
  );
};

export default AuthForm;
