import { FC } from 'react';
import cl from './styles.module.scss';

interface ILoader {
  size?: string
}

export const Loader: FC<ILoader> = ({ size }) => {
  return (
    <svg className={cl.spinner} viewBox='0 0 50 50' style={size ? { width: size, height: size } : {}}>
      <circle className={cl.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
    </svg>
  );
};

export default Loader;
