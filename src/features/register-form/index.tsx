import Input from 'shared/ui/input';
import Button from 'shared/ui/button';
import { FC, useRef, useEffect, useState } from 'react';
import { CgProfile as Login } from 'react-icons/cg';
import { AiFillLock as Pass } from 'react-icons/ai';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import cl from './styles.module.scss';
import { validateEmail } from './lib';
import { ImNotification as Sign } from 'react-icons/im';
import { fetchUser } from 'entities/user/model/reducer/ActionCreators';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { typeVariant } from 'entities/user/model/types';
import { getIsUserLoading, getUser, getUserError } from 'entities/user/model/reducer/Selectors';
import Loader from 'shared/ui/loader';

interface IRegisterFormProps {
  isPopUpVisible: boolean
}

interface FormValues {
  login: string
  email: string
  password: string
  password_repeat: string
}

export const RegisterForm: FC<IRegisterFormProps> = ({ isPopUpVisible }) => {
  const [isEmailBusy, setIsEmailBusy] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const error = useAppSelector(getUserError);
  const isLoading = useAppSelector(getIsUserLoading);

  const password = useRef({});
  const form = useRef();
  const captchaRef = useRef(null);

  const { register, handleSubmit, watch, setFocus, formState: { errors } } = useForm<FormValues>({});

  password.current = watch('password', '');

  const onSubmit = (data: FormValues): void => {
    const token = captchaRef.current.getValue();
    if (token) {
      dispatch(fetchUser(data.email, data.password, typeVariant.signUp));
    }
    captchaRef.current.reset();
  };

  useEffect(() => {
    setFocus('login');
  }, [isPopUpVisible]);

  useEffect(() => {
    error === 'Firebase: Error (auth/email-already-in-use).'
      ? setIsEmailBusy(true)
      : setIsEmailBusy(false);
  }, [error]);

  return (
    <form className={cl.form} ref={form} onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      {errors.login && <span className='error'>Укажите логин</span>}
      <Input
        autoFocus
        name='login'
        type='text'
        placeholder='Логин'
        {...register('login', { required: true })}
        icon={<Login />}
        error={errors.login && 'true'}
      />
      {errors.email && <span className='error'>{errors.email.message || 'Укажите почту'}</span>}
      {isEmailBusy && <span className='error'>Данный почтовый адрес уже зарегистрирован</span>}
      <Input
        name='email'
        type='text'
        placeholder='Электронная почта'
        {...register('email', {
          required: true,
          validate: validateEmail
        })}
        onFocus={() => setIsEmailBusy(false)}
        icon={<Login />}
        error={errors.email && 'true'}
      />
      {errors.password && <span className='error'>{errors.password.message}</span>}
      <Input
        name='password'
        type='password'
        placeholder='Пароль'
        {...register('password', {
          required: 'Укажите пароль',
          minLength: {
            value: 8,
            message: 'Пароль должен содержать не менее 8 символов'
          }
        })}
        icon={<Pass />}
        error={errors.password && 'true'}
      />
      {errors.password_repeat && <span className='error'>{errors.password_repeat.message}</span>}
      <Input
        type='password'
        name='password_repeat'
        placeholder='Повторите пароль'
        {...register('password_repeat', {
          validate: value =>
            value === password.current || 'Пароли не совпадают'
        })}
        icon={<Pass />}
        error={errors.password_repeat && 'true'}
      />
      <ReCAPTCHA
        theme='light'
        sitekey='6LeJWyYjAAAAAB5xkjUAyWY64BD6P_NMJxADQsH2'
        ref={captchaRef}
        className={cl.captcha}
      />
      <Button
        type='submit'
        color={Object.keys(errors).length === 0 ? '#1E2123' : 'white'}
        background={Object.keys(errors).length === 0 ? '#FFD54F' : '#EB5757'}
        disabled={Object.keys(errors).length !== 0}
      >
        {Object.keys(errors).length === 0
          ? 'Зарегистрироваться'
          : <div className={cl.alert}><span>Ошибка ввода</span><Sign className={cl.sign}/></div>
        }
      </Button>
    </form>
  );
};

export default RegisterForm;
