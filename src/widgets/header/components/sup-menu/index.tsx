import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cl from './styles.module.scss';
import { FaMapMarkerAlt as Map } from 'react-icons/fa';
import { AiOutlineHeart as Heart } from 'react-icons/ai';

interface SubMenuProps {
  setAuthFormVisible: (val: boolean) => void
}

export const SupMenu: FC<SubMenuProps> = ({ setAuthFormVisible }) => {
  const checkActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${cl.link} ${cl.active}` : cl.link;
  };

  return (
    <div className={cl.sup}>
      <div className="container">
        <nav className={cl.wrapper}>
          <ul className={cl.list}>
            <NavLink to='/' className={checkActiveLink}>
              <li className={cl.element}>Главная</li>
            </NavLink>
            <NavLink to='/news' className={checkActiveLink}>
              <li className={cl.element}>Новости</li>
            </NavLink>
            <NavLink to='/tarifs' className={checkActiveLink}>
              <li className={cl.element}>Размещение и тарифы</li>
            </NavLink>
            <NavLink to='/announce' className={checkActiveLink}>
              <li className={[cl.element, cl.align].join(' ')}>
                <Map className={cl.map} />
                <span>Объявления на карте</span>
              </li>
            </NavLink>
            <NavLink to='/contacts' className={checkActiveLink}>
              <li className={cl.element}>Контакты</li>
            </NavLink>
          </ul>
          <div className={cl.user}>
            <NavLink to='/favorites' className={checkActiveLink}>
              <div className={cl.box}>
                <span>Закладки</span>
                <Heart className={cl.heart} />
              </div>
            </NavLink>
            <button className={cl.btn} onClick={() => setAuthFormVisible(true)}>
              Вход и регистрация
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SupMenu;
