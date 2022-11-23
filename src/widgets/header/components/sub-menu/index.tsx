import Button from 'shared/ui/button';
import { FC } from 'react';
import cl from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import logo from 'shared/images/logo.png';
import { FaMapMarkerAlt as Map } from 'react-icons/fa';
import { BsPlusLg as Plus } from 'react-icons/bs';

export const SubMenu: FC = () => {
  const checkActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${cl.link} ${cl.active}` : cl.link;
  };

  return (
    <div className={cl.sub}>
      <div className="container">
        <div className={cl.wrapper}>
          <NavLink to='/' className={cl.logo}>
            <img src={logo} alt="logo" className={cl.img} />
          </NavLink>
          <NavLink to='/flats' className={checkActiveLink}>
            <div className={cl.box}>
              <span>Квартиры на сутки</span>
              <Map className={cl.map} />
            </div>
          </NavLink>
          <NavLink to='/mansions' className={checkActiveLink}>Коттеджи и усадьбы</NavLink>
          <NavLink to='/saunas' className={checkActiveLink}>Бани и Сауны</NavLink>
          <NavLink to='/cars' className={checkActiveLink}>Авто напрокат</NavLink>
          <Button><Plus className={cl.plus}/>Разместить объявление</Button>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
