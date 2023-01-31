import { ChangeEvent, FC, HTMLAttributes } from 'react';
import cl from './styles.module.scss';

interface ISwitchCheckboxProps extends HTMLAttributes<HTMLInputElement> {
  defaultChecked: boolean
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
};

export const SwitchCheckbox: FC<ISwitchCheckboxProps> = ({ onChange, ...props }) => {
  return (
    <input className={cl.appleSwitch} type="checkbox" onChange={onChange} {...props}/>
  );
};

export default SwitchCheckbox;
