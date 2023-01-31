import { FC, useState } from 'react';
import cl from './styles.module.scss';
import { IoIosArrowDown as Arrow } from 'react-icons/io';

interface IOptions {
  id: number
  name: string
}

interface ICustomSelect {
  defaultValue: string
  options: IOptions[]
  width?: string
  onChange: (value: string) => void
}

export const CustomSelect: FC<ICustomSelect> = ({ defaultValue, options, width, onChange }) => {
  const [selected, setSelected] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setSelected(button.name);
    onChange(button.name);
    setVisible(false);
  };

  return (
    <div className={cl.wrapper}>
      <button className={cl.btn} onClick={() => setVisible(!visible)} style={{ width }}>
        <span className={cl.btnText}>{selected || defaultValue}</span>
        <Arrow className={cl.arrow} />
      </button>
      <div className={visible ? [cl.select, cl.active].join(' ') : cl.select}>
        {options?.map((el, i) =>
          <button
            name={el.name}
            className={cl.option}
            key={el.id}
            onClick={buttonHandler}
          >
            {el.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
