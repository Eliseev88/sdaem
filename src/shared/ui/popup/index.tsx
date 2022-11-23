import { FC, ReactNode } from 'react';
import cl from './styles.module.scss';

interface PopUpProps {
  children: ReactNode
  maxWidth?: string
  visible: boolean
  setVisible: (val: boolean) => void
};

export const PopUp: FC<PopUpProps> = ({ children, maxWidth, visible, setVisible }) => {
  const rootClasses = [cl.myModal];
  const rootClassesContent = [cl.myModalContent];

  if (visible) {
    rootClasses.push(cl.active);
    rootClassesContent.push(cl.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()} style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
