import { AppDispatch, RootState } from '@/app/store';
import { Dispatch } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch = (): Dispatch<any> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
