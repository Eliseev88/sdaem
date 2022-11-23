import { FC, useEffect, useState } from 'react';
import SubMenu from './components/sub-menu';
import SupMenu from './components/sup-menu';
import { useLocation } from 'react-router-dom';
import RegisterModal from './components/register-modal';
import LoginModal from './components/login-modal';

export const Header: FC = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState<string>(location.pathname);

  useEffect(() => {
    isPopUpVisible ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
  }, [isPopUpVisible]);

  useEffect(() => {
    setCurrentRoute(location.pathname);
    location.pathname === '/signin' || location.pathname === '/signup'
      ? setIsPopUpVisible(true)
      : setIsPopUpVisible(false);
  }, [location.pathname]);

  return (
    <header>
      <SupMenu setAuthFormVisible={setIsPopUpVisible} />
      <SubMenu />
      {currentRoute === '/signup'
        ? <RegisterModal isPopUpVisible={isPopUpVisible} setIsPopUpVisible={setIsPopUpVisible} />
        : <LoginModal isPopUpVisible={isPopUpVisible} setIsPopUpVisible={setIsPopUpVisible} />
      }
    </header >
  );
};

export default Header;
