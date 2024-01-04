import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    fetchAllposts: build.query({
      query: () => ({
        url: "/posts",
      }),
    }),
  }),
});
