import { fetchAllPropertyTypes } from 'entities/property/model';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import CustomSelect from 'shared/ui/custom-select';
import Link from 'shared/ui/link';
import { SlEqualizer as Equalizer } from 'react-icons/sl';
import { FaMapMarkerAlt as Map } from 'react-icons/fa';
import { IoIosArrowForward as Shevron } from 'react-icons/io';
import cl from './styles.module.scss';
import { createCatalogRoute } from './lib';
import AdditionalFilter from './components/additionalFilter';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectFilters } from 'entities/filter/model/reducer/Selectors';
import { filterSlice } from 'entities/filter/model/reducer/FilterSlice';

export interface IFilter {
  isFilterOpen: boolean
  setIsFilterOpen: (value: boolean) => void
}

export const Filter: FC<IFilter> = ({ isFilterOpen, setIsFilterOpen }) => {
  const [cities, rooms, metro, districts, beds] = fetchAllPropertyTypes();

  const selectedFilters = useAppSelector(selectFilters);

  const dispatch = useAppDispatch();
  const { setFilter, clearAll } = filterSlice.actions;

  const [routePath, setRoutePath] = useState<string>('');

  const handleSelectCity = (value: string) => {
    dispatch(setFilter({ city: value }));
  };

  const handleSelectRoom = (value: string) => {
    dispatch(setFilter({ room: value }));
  };

  const handleMinPrice = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilter({ minPrice: event.target.value }));
  };

  const handleMaxPrice = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setFilter({ maxPrice: event.target.value }));
  };

  useEffect(() => {
    setRoutePath(createCatalogRoute(selectedFilters));
  }, [selectedFilters]);

  return (
    <div>
      <div className={isFilterOpen ? [cl.filter, cl.active].join(' ') : [cl.filter, cl.nonActive].join(' ')}>
        <div className={cl.column}>
          <div className={cl.title}>Город</div>
          <CustomSelect defaultValue={selectedFilters.main.city || 'Выберите'} options={cities} onChange={handleSelectCity} />
        </div>
        <div className={cl.column}>
          <div className={cl.title}>Комнаты</div>
          <CustomSelect defaultValue={selectedFilters.main.room || 'Выберите'} options={rooms} onChange={handleSelectRoom} />
        </div>
        <div className={cl.column}>
          <div className={cl.title}>Цена за сутки (BYN)</div>
          <div className={cl.price}>
            <input
              type='number'
              placeholder='От'
              value={selectedFilters.main.minPrice}
              className={cl.input}
              onInput={handleMinPrice} />
            <span>-</span>
            <input
              type='number'
              placeholder='До'
              value={selectedFilters.main.maxPrice}
              className={cl.input}
              onInput={handleMaxPrice} />
          </div>
        </div>
        <div className={[cl.column, 'flex'].join(' ')}>
          <button className={cl.more} onClick={() => setIsFilterOpen(!isFilterOpen)}>
            Больше опций <Equalizer className={cl.equalizer} />
          </button>
        </div>
        <div className={[cl.column, 'flex'].join(' ')}>
          <button className={cl.more}>На карте <Map className={cl.equalizer} /></button>
        </div>
        <div className={[cl.column, 'flex', 'center'].join(' ')}>
          <Link path={routePath} background='#FFD54F' color='#242424'>Показать <Shevron className={cl.shevron} /></Link>
        </div>
      </div>
      <AdditionalFilter isVisible={isFilterOpen} metro={metro} districts={districts} beds={beds} />
    </div>
  );
};

export default Filter;
