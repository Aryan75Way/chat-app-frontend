import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";

const baseUrl = import.meta.env.VITE_API_URL


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Access the state from Redux
      const token = (getState() as RootState).auth.accessToken;      

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    me: builder.query<ApiResponse<Omit<User, 'password'>>, void>({
      query: () => `users/me`,
    }),
    login: builder.mutation<ApiResponse<Omit<User, 'password'> & Tokens>, { email: string, password: string }>({
      query: (body) => {
        return { url: `users/login`, method: 'POST', body }
      },
    }),
    register: builder.mutation<ApiResponse<User>, { email: string, password: string }>({
      query: (body) => {                
        return { url: `users/signup`, method: 'POST', body }
      },
    }),
    updateUser: builder.mutation<ApiResponse<User>, User>({
      query: (body) => {
        return { url: `users/${body.id}`, method: 'PUT', body }
      },
    }),
    createGroup: builder.mutation<ApiResponse<Group>, { name: string, adminId: string, isPrivate: boolean }>({
      query: (body) => {
        return { url: `groups/create`, method: 'POST', body }
      },
    }),
  }),
});

export const { useMeQuery, useLoginMutation, useRegisterMutation, useUpdateUserMutation, useCreateGroupMutation } = api;
