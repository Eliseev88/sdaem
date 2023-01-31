import { filterSlice } from 'entities/filter/model/reducer/FilterSlice';
import { selectFilters } from 'entities/filter/model/reducer/Selectors';
import { IProperty } from 'entities/property/model/types';
import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import Checkbox from 'shared/ui/checkbox';
import CustomSelect from 'shared/ui/custom-select';
import cl from './styles.module.scss';

interface IAdditionalFilter {
  isVisible: boolean
  districts: IProperty[]
  beds: IProperty[]
  metro: IProperty[]
}

export const AdditionalFilter: FC<IAdditionalFilter> = ({ isVisible, districts, beds, metro }) => {
  const CHECKBOX_OPTIONS = [
    'Газовая плита', 'Холодильник', 'Стиральная машина', 'Балкон', 'Посуда', 'Посудомоечная машина',
    'Духовка', 'Кофеварка', 'Компьютер', 'Чайник', 'Интернет', 'Телевидение', 'Ванная', 'Свет', 'Утюг',
    'Кот', 'Собака', 'Служанка', 'Окно', 'Дверь', 'Мяч', 'Тапочки', 'Швабра', 'Уют', 'Мебель', 'Игры',
    'Дети', 'Животные', 'Стремянка', 'Огород'
  ];

  const { setFilter, setCheckBox, removeCheckBox } = filterSlice.actions;
  const selectedFilters = useAppSelector(selectFilters);

  const dispatch = useAppDispatch();

  const handleSelectBed = (value: string) => {
    dispatch(setFilter({ beds: value }));
  };

  const handleSelectDistrict = (value: string) => {
    dispatch(setFilter({ district: value }));
  };

  const handleSelectMetro = (value: string) => {
    dispatch(setFilter({ metro: value }));
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.name;

    if (event.target.checked) {
      dispatch(setCheckBox(value));
    } else {
      dispatch(removeCheckBox(value));
    }
  };

  return (
    <div className={isVisible ? [cl.filter, cl.active].join(' ') : cl.filter}>
      <div className={cl.intro}>
        <div className={isVisible ? [cl.col, cl.active].join(' ') : cl.col}>
          <div className={cl.title}>Спальные места</div>
          <CustomSelect
            defaultValue={selectedFilters.main.beds || 'Выберите'}
            options={beds} onChange={handleSelectBed}
            width='200'
          />
        </div>
        <div className={isVisible ? [cl.col, cl.active].join(' ') : cl.col}>
          <div className={cl.title}>Район</div>
          <CustomSelect
            defaultValue={selectedFilters.main.district || 'Выберите'}
            options={districts} onChange={handleSelectDistrict}
            width='20rem'
          />
        </div>
        <div className={isVisible ? [cl.col, cl.active].join(' ') : cl.col}>
          <div className={cl.title}>Метро</div>
          <CustomSelect
            defaultValue={selectedFilters.main.metro || 'Выберите'}
            options={metro} onChange={handleSelectMetro}
            width='20rem'
          />
        </div>
      </div>
      <div className={cl.checkboxes}>
        {CHECKBOX_OPTIONS.map((el, i) => {
          const checked = selectedFilters.checkboxes.includes(el);
          return (
            <label key={i} className={cl.element}>
              <Checkbox defaultChecked={checked} onChange={handleCheckbox} name={el} />
              <span>{el}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default AdditionalFilter;
