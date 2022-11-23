import React, { FC, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import { ImNotification as Sign } from 'react-icons/im';
import cl from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  error?: string
  ref?: LegacyRef<HTMLInputElement>
};

const Input: FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={cl.wrapper}>
      <input ref={ref} className={cl.input} {...props} style={{ border: props.error ? '1px solid #EB5757' : 'none' }} />
      <span className={cl.icon}>{props.icon}</span>
      {props.error && <Sign className={cl.sign}/>}
    </div>
  );
});

export default Input;
