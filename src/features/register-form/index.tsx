import Input from 'shared/ui/input';
import Button from 'shared/ui/button';
import { FC, useRef, useEffect } from 'react';
import { CgProfile as Login } from 'react-icons/cg';
import { AiFillLock as Pass } from 'react-icons/ai';
import ReCAPTCHA from 'react-google-recaptcha';
import cl from './styles.module.scss';

interface IRegisterFormProps {
  isPopUpVisible: boolean
}

export const RegisterForm: FC<IRegisterFormProps> = ({ isPopUpVisible }) => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current.focus();
  }, [isPopUpVisible]);

  return (
    <form className={cl.form}>
      <Input ref={input} type='text' placeholder='Логин' icon={<Login />} />
      <Input type='text' placeholder='Электронная почта' icon={<Login />} />
      <Input type='password' placeholder='Пароль' icon={<Pass />} />
      <Input type='password' placeholder='Повторите пароль' icon={<Pass />} />
      <ReCAPTCHA
        theme='light'
        sitekey='6LeJWyYjAAAAAB5xkjUAyWY64BD6P_NMJxADQsH2'
        className={cl.captcha}
      />
      <Button type='submit' color='#1E2123' background='#FFD54F'>Зарегистрироваться</Button>
    </form>
  );
};

export default RegisterForm;
