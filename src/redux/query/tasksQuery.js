import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7655",
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    fetchTasks: builder.query({
      query: () => "/tasks",
      providesTags: ['Task'],
    }),
    addTask: builder.mutation({
      query: (text) => ({
        url: "/tasks",
        method: "POST",
        body: {
          text,
          completed: false,
        },
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTaskById: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Task'],
    }),
    toggleTaskByTask: builder.mutation({
      query: (task) => ({
        url: `/tasks/${task.id}`,
        method: "PATCH",
        body: {
          completed: !task.completed,
        },
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useFetchTasksQuery,
  useDeleteTaskByIdMutation,
  useToggleTaskByTaskMutation,
  useAddTaskMutation,
} = tasksApi;
