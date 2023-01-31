import { fetchAllPropertyTypes } from 'entities/property/model';
import { FC } from 'react';
import { TfiArrowCircleRight as CircleBtn } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import cl from './styles.module.scss';

export const GalleryCards: FC = () => {
  const [cities] = fetchAllPropertyTypes();

  return (
    <div className={cl.gallery}>
      <div className={cl.row}>
        <div className={cl.flat}>
          <div className={cl.suptitle}>Снять квартиру</div>
          <h3 className={cl.title}>Квартиры на сутки</h3>
          <div className={cl.box}>
            {cities?.map(city => {
              return (
                <Link
                  to={`/catalog?city=${city.name}`}
                  key={city.id}
                  className={cl.element}
                  title='Перейти'
                >
                  {city.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={cl.house}>
          <div className={cl.suptitle}>СНЯТЬ коттедж НА ПРАЗДНИК</div>
          <h3 className={cl.title}>Коттеджи и усадьбы</h3>
          <Link className={cl.link} to='/mansions' title='Перейти'>
            <CircleBtn className={cl.btn} />
          </Link>
        </div>
      </div>
      <div className={cl.row}>
        <div className={cl.sauna}>
          <div className={cl.suptitle}>ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ</div>
          <h3 className={cl.title}>Бани и сауны</h3>
          <Link className={cl.link} to='/sauna' title='Перейти'>
            <CircleBtn className={cl.btn} />
          </Link>
        </div>
        <div className={cl.auto}>
          <div className={cl.suptitle}>еСЛИ СРОЧНО НУЖНА МАШИНА</div>
          <h3 className={cl.title}>Авто на прокат</h3>
          <Link className={cl.link} to='/auto' title='Перейти'>
            <CircleBtn className={cl.btn} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryCards;
