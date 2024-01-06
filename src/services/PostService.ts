import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../models/IPost";

export const postsApi = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: " http://localhost:3001" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllposts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ["Post"],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: () => ["Post"],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: () => ["Post"],
    }),
    deletePost: build.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => ["Post"],
    }),
  }),
});
