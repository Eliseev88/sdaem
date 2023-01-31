import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'shared/API';
import { IFetchAllProperty, IProperty } from '../types';

export const citiesApi = createApi({
  reducerPath: 'citiesReducer',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Cities'],
  endpoints: (build) => ({
    fetchAllCities: build.query<IProperty[], string>({
      query: () => ({
        url: '/cities'
      }),
      providesTags: result => ['Cities']
    })
  })
});

export const roomsApi = createApi({
  reducerPath: 'roomsReducer',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Rooms'],
  endpoints: (build) => ({
    fetchAllCities: build.query<IProperty[], string>({
      query: () => ({
        url: '/rooms'
      }),
      providesTags: result => ['Rooms']
    })
  })
});

export const metroApi = createApi({
  reducerPath: 'metroReducer',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Metro'],
  endpoints: (build) => ({
    fetchAllCities: build.query<IProperty[], string>({
      query: () => ({
        url: '/metro'
      }),
      providesTags: result => ['Metro']
    })
  })
});

export const districtsApi = createApi({
  reducerPath: 'districtsReducer',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Districts'],
  endpoints: (build) => ({
    fetchAllCities: build.query<IProperty[], string>({
      query: () => ({
        url: '/districts'
      }),
      providesTags: result => ['Districts']
    })
  })
});

export const bedsApi = createApi({
  reducerPath: 'bedsReducer',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Beds'],
  endpoints: (build) => ({
    fetchAllCities: build.query<IProperty[], string>({
      query: () => ({
        url: '/beds'
      }),
      providesTags: result => ['Beds']
    })
  })
});

export const fetchAllPropertyTypes: IFetchAllProperty = () => {
  const { data: cities } = citiesApi.useFetchAllCitiesQuery('');
  const { data: rooms } = roomsApi.useFetchAllCitiesQuery('');
  const { data: metro } = metroApi.useFetchAllCitiesQuery('');
  const { data: districts } = districtsApi.useFetchAllCitiesQuery('');
  const { data: beds } = bedsApi.useFetchAllCitiesQuery('');

  return [cities, rooms, metro, districts, beds];
};
