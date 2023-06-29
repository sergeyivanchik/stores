import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITask } from '@/types';
import { EIds, ETagTypes } from '@/stores/redux/rtk-query/enums';

const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  tagTypes: [ETagTypes.tasks],
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], null>({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: ETagTypes.tasks as const,
                id,
              })),
              { type: ETagTypes.tasks, id: EIds.list },
            ]
          : [{ type: ETagTypes.tasks, id: EIds.list }],
    }),
    deleteTask: builder.mutation({
      query: (id: ITask['id']) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: ETagTypes.tasks, id: EIds.list }],
    }),
    changeTask: builder.mutation({
      query: (task: ITask) => ({
        url: `todos/${task.id}`,
        method: 'PUT',
        body: task,
      }),
      invalidatesTags: [{ type: ETagTypes.tasks, id: EIds.list }],
    }),
    createTask: builder.mutation({
      query: (title: string) => ({
        url: 'todos',
        method: 'POST',
        body: { title, completed: false },
      }),
      invalidatesTags: [{ type: ETagTypes.tasks, id: EIds.list }],
    }),
  }),
});

const {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useChangeTaskMutation,
  useCreateTaskMutation,
  reducer,
  reducerPath,
  middleware,
} = tasksApi;

export {
  useGetTasksQuery,
  reducer,
  reducerPath,
  middleware,
  useDeleteTaskMutation,
  useChangeTaskMutation,
  useCreateTaskMutation,
};
