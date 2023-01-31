import { citiesApi, metroApi, roomsApi, districtsApi, bedsApi } from './model';

export * as propertyModel from './model';

export const propertyReducers = {
  [citiesApi.reducerPath]: citiesApi.reducer,
  [metroApi.reducerPath]: metroApi.reducer,
  [roomsApi.reducerPath]: roomsApi.reducer,
  [districtsApi.reducerPath]: districtsApi.reducer,
  [bedsApi.reducerPath]: bedsApi.reducer
};

export const propertyMiddlewares = [
  citiesApi.middleware,
  metroApi.middleware,
  roomsApi.middleware,
  districtsApi.middleware,
  bedsApi.middleware
];
