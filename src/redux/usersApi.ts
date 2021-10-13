import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type UserRequest = {
  title: string
  body: string
  userId: number
}

type UserResponse = {
  id: number
  title: string
  body: string
  userId: number
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    // TODO заменить на нужный тип
    getPosts: builder.query<UserResponse[], string>({
      query: () => 'posts/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users' as const, id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getPostsById: builder.query<number, string>({
      query: (id) => `posts/${id}`,
    }),
    creatingResource: builder.mutation<UserResponse, UserRequest>({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      // говорим о том, что у нас изменился пролуктов, надо выполнить обновление данных в 26 строчке
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    deleteResource: builder.mutation<any, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      // если мы удалим, что-то из этого списка, то обновим список сразу
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostsByIdQuery,
  useCreatingResourceMutation,
  useDeleteResourceMutation,
} = usersApi
