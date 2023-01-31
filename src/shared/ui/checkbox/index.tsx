import { ChangeEvent, FC, HTMLAttributes } from 'react';
import cl from './styles.module.scss';

interface ICheckboxProps extends HTMLAttributes<HTMLInputElement> {
  defaultChecked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name?: string
};

export const Checkbox: FC<ICheckboxProps> = ({ onChange, ...props }) => {
  return (
    <input className={cl.checkbox} type="checkbox" onChange={onChange} {...props}/>
  );
};

export default Checkbox;
