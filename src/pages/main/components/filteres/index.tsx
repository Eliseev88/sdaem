import { FC, useState } from 'react';
import CustomSelect from 'shared/ui/custom-select';
import cl from './styles.module.scss';

export const Filteres: FC = () => {
  const FRUITS = ['apple', 'banana', 'melon'];
  const [active, setActive] = useState<boolean[]>([true, false, false, false]);

  const PROPERTY_TYPE = ['Квартиры на сутки', 'Коттеджи и усадьбы', 'Бани и сауны', 'Авто напрокат'];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setActive(active.map((el, i) => {
      if (i === +button.id) {
        return true;
      }
      return false;
    }));
  };

  return (
    <menu className={cl.menu}>
      <ul className={cl.list}>
        {PROPERTY_TYPE.map((el, i) =>
          <li className={cl.element} key={i}>
            <button id={i.toString()} onClick={handleClick} className={active[i] && cl.active}>{el}</button>
          </li>
        )}
      </ul>
      <div className={cl.filter}>
        <div className={cl.column}>
          <div className={cl.title}>Город</div>
          <CustomSelect defaultValue='Выберите' options={FRUITS} />
        </div>
        <div className={cl.column}></div>
        <div className={cl.column}></div>
        <div className={cl.column}></div>
        <div className={cl.column}></div>
      </div>
    </menu>
  );
};

export default Filteres;
