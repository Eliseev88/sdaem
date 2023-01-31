import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseUrl } from 'shared/API';
import { ISidebar } from '../types';

export const sidebarApi = createApi({
  reducerPath: 'sidebarReducer',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Sidebar'],
  endpoints: (build) => ({
    fetchSidebar: build.query<ISidebar, string>({
      query: () => ({
        url: '/sidebar'
      }),
      providesTags: result => ['Sidebar']
    })
  })
});
