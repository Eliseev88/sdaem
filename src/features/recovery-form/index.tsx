import { ChangeEvent, FC, FormEvent, useState } from 'react';
import Input from 'shared/ui/input';
import cl from './styles.module.scss';
import { FiMail as Mail } from 'react-icons/fi';
import Button from 'shared/ui/button';
import { resetPass } from 'entities/user/model/firebase';
import Link from 'shared/ui/link';

interface IRecoveryForm {
  setIsVisible: (val: boolean) => void
}

export const RecoveryForm: FC<IRecoveryForm> = ({ setIsVisible }) => {
  const [email, setEmail] = useState<string>('');
  const [success, setSuccess] = useState(false);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    void resetPass(email);
    setSuccess(true);
  };

  return (
    <form className={cl.form} onSubmit={handleSubmit}>
      <h1 className={cl.title}>Сброс пароля</h1>
      <p className={cl.content}>{success
        ? 'Инструкция по сбросу пароля отправлена на указанный вами почтовый адрес'
        : 'Укажите адрес электронной почты от вашей учетной записи'
      }
      </p>
      {!success && <Input
        placeholder='Введите почту'
        type='email'
        required
        value={email}
        onChange={handleChangeEmail}
        icon={<Mail />}
      />}
      {success
        ? <Link path='/'>Понятно</Link>
        : <Button type='submit' color='#1E2123' background='#FFD54F'>Отправить</Button>
      }
    </form>
  );
};

export default RecoveryForm;
