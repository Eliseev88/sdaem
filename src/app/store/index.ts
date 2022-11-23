import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userModel } from 'entities/user';
import userReducer from 'entities/user/model/reducer/UserSlice';

const rootReducer = combineReducers({
  userReducer
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
