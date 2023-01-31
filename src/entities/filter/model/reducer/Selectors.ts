import { RootState } from 'app/store';
import { IFilterState } from '../types';

export const selectFilters = (state: RootState): IFilterState => state.filterReducer;
