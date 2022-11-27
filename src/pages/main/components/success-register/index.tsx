import { FC } from 'react';
import Button from 'shared/ui/button';
import cl from './styles.module.scss';

interface ISuccessRegister {
  handleClick: () => void
}

export const SuccessRegister: FC<ISuccessRegister> = ({ handleClick }) => {
  return (
    <div className={cl.wrapper}>
      <h1 className={cl.title}>Подтвердите регистрацию</h1>
      <p className={cl.content}>Письмо для подтверждения аккаунта отправлено почту.
        Перейдите по ссылке, указанной в письме. Если письма нет, то проверьте спам.</p>
      <Button background='#FFD54F' color='#1E2123' onClick={handleClick}>Понятно</Button>
    </div>
  );
};

export default SuccessRegister;
