import { ISidebarElement } from 'entities/sidebar/model';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'shared/ui/loader';
import cl from './styles.module.scss';

interface IList {
  isLoading: boolean
  data: ISidebarElement[]
}

export const List: FC<IList> = ({ isLoading, data }) => {
  return (
    <ul className={cl.list}>
      {isLoading && <Loader size='50px' />}
      {data?.map(el => {
        return (
          <li key={el.id} className={cl.element}>
            <Link to={`${el.path}?city=${el.city}`} className={cl.link}>
              {el.value}
            </Link>
            <span className={cl.amount}>{el.amount}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
