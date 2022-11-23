import { FC, PropsWithChildren, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cl from './styles.module.scss';

interface ButtonProps extends PropsWithChildren {
  background?: string
  color?: string
}

export const Button: FC<ButtonProps &
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement>> = ({ children, background, color, ...props }) => {
  return (
    <button {...props} className={cl.btn} style={{ color, background }}>
      {children}
    </button>
  );
};

export default Button;
