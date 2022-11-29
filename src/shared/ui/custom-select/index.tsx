import { FC, useState } from 'react';
import cl from './styles.module.scss';
import Button from '../button';
import { IoIosArrowDown as Arrow } from 'react-icons/io';

interface ICustomSelect {
  defaultValue: string
  options: string[]
}

export const CustomSelect: FC<ICustomSelect> = ({ defaultValue, options }) => {
  const [selected, setSelected] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setSelected(button.name);
    setVisible(false);
  };

  return (
    <div className={cl.wrapper}>
      <button className={cl.btn} onClick={() => setVisible(!visible)}>
        <span className={cl.btnText}>{selected || defaultValue}</span>
        <Arrow className={cl.arrow} />
      </button>
      <div className={visible ? [cl.select, cl.active].join(' ') : cl.select}>
        {options.map((el, i) =>
          <button
            name={el}
            className={cl.option}
            key={i}
            onClick={buttonHandler}
          >
            {el}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
