import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { propertyMiddlewares, propertyReducers } from 'entities/property';
import userReducer from 'entities/user/model/reducer/UserSlice';
import filterReducer from 'entities/filter/model/reducer/FilterSlice';
import { sidebarApi } from 'entities/sidebar/model';

const rootReducer = combineReducers({
  userReducer,
  filterReducer,
  [sidebarApi.reducerPath]: sidebarApi.reducer,
  ...propertyReducers
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(sidebarApi.middleware, ...propertyMiddlewares)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
