import { sidebarApi } from 'entities/sidebar/model';
import { FC, useState } from 'react';
import List from '../list';
import { IoIosArrowDown as Arrow } from 'react-icons/io';
import cl from './styles.module.scss';
import { Link } from 'react-router-dom';

export const Sidebar: FC = () => {
  const { data, isLoading } = sidebarApi.useFetchSidebarQuery('');
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <aside className={cl.sidebar}>
      <div className={cl.block}>
        <h4 className={cl.title}>Квартиры</h4>
        <List isLoading={isLoading} data={data?.flats} />
      </div>
      <div className={cl.block}>
        <h4 className={cl.title}>Коттеджи и усадьбы</h4>
        <List isLoading={isLoading} data={data?.mansion} />
      </div>
      {!showMore &&
        <button className={cl.btn} onClick={() => setShowMore(true)}>
          <span>Еще </span>
          <Arrow className={cl.arrow} />
        </button>
      }
      {showMore &&
        <div className={cl.block}>
          <h4 className={cl.title}>Автомобили</h4>
          <List isLoading={isLoading} data={data?.cars} />
        </div>
      }
      {showMore &&
        <div className={cl.block}>
          <h4 className={cl.title}>Бани и сауны</h4>
          <List isLoading={isLoading} data={data?.sauna} />
        </div>
      }
      <div className={cl.block}>
        <h4 className={cl.title}>Популярные направления</h4>
        <Link to='/mansion' className={cl.link}>Коттеджи и усадьбы на о. Брасласких</Link>
        <Link to='/mansion' className={cl.link}>Коттеджи и усадьбы (жилье) на Нарочи</Link>
        <Link to='/mansion' className={cl.link}>Коттеджи и усадьбы (жилье) у воды, на берегу, на озере</Link>
      </div>
    </aside>
  );
};

export default Sidebar;
