import { FC, useState } from 'react';
import Filter from 'widgets/filter';
import cl from './styles.module.scss';

export const Intro: FC = () => {
  const [active, setActive] = useState<boolean[]>([true, false, false, false]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    <section className='container'>
      <div className={isFilterOpen ? [cl.intro, cl.filterOpen].join(' ') : cl.intro}>
        <h1 className={cl.title}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
        <menu className={cl.menu}>
          <ul className={cl.list}>
            {PROPERTY_TYPE.map((el, i) =>
              <li className={cl.element} key={i}>
                <button id={i.toString()} onClick={handleClick} className={active[i] ? cl.active : ''}>{el}</button>
              </li>
            )}
          </ul>
          <Filter isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />
        </menu>
      </div>
    </section>
  );
};

export default Intro;
