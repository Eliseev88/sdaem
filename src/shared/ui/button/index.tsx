import { FC, PropsWithChildren, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cl from './styles.module.scss';

interface IButtonProps extends PropsWithChildren {
  background?: string
  color?: string
}

export const Button: FC<IButtonProps &
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement>> = ({ children, background, color, ...props }) => {
  return (
    <button {...props} className={cl.btn} style={{ color, background }}>
      {children}
    </button>
  );
};

export default Button;
