import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from '../types';

const initialState: IFilterState = {
  main: {
    city: '',
    room: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    district: '',
    metro: ''
  },
  checkboxes: []
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter (state, action: PayloadAction<object>) {
      state.main = { ...state.main, ...action.payload };
    },
    setCheckBox (state, action: PayloadAction<string>) {
      state.checkboxes = [...state.checkboxes, action.payload];
    },
    removeCheckBox (state, action: PayloadAction<string>) {
      state.checkboxes = state.checkboxes.filter(el => el !== action.payload);
    },
    clearAll (state) {
      state.main = initialState.main;
      state.checkboxes = [];
    }
  }
});

export default filterSlice.reducer;
