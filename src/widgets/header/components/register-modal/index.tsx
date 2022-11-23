import PopUp from 'shared/ui/popup';
import { FC } from 'react';
import cl from './styles.module.scss';
import { Link } from 'react-router-dom';
import RegisterForm from 'features/register-form';

interface IRegisterModal {
  isPopUpVisible: boolean
  setIsPopUpVisible: (val: boolean) => void
}

export const RegisterModal: FC<IRegisterModal> = ({ isPopUpVisible, setIsPopUpVisible }) => {
  return (
    <PopUp maxWidth='84.4rem' visible={isPopUpVisible} setVisible={setIsPopUpVisible}>
      <h1 className={cl.title}>Регистрация</h1>
      <div className={cl.auth}>
        <div className={cl.column}>
          <RegisterForm isPopUpVisible={isPopUpVisible} />
        </div>
        <div className={cl.column}>
          <ul className={cl.rule}>
            <span>Пользователь обязуется:</span>
            <li>предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
            <li>добавлять фотографии объектов соответствующие действительности.
              Администрация сайта sdaem.by оставляет за собой право удалять любую информацию,
              размещенную пользователем, если сочтет, что информация не соответствует действительности,
              носит оскорбительный характер,
              нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
          </ul>
          <div className={cl.box}>
            <span>Уже есть аккаунт?</span>
            <Link to='/signin' className={cl.change}>Войдите</Link>
          </div>
        </div>
      </div>
    </PopUp>
  );
};

export default RegisterModal;
