import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () =>
        "movie/popular?api_key=accd1c46308e8b605b44a93e970b96cb&language=en-US",
    }),
    getTrendingMovies: builder.query({
      query: () =>
        "trending/movie/week?api_key=accd1c46308e8b605b44a93e970b96cb",
    }),
  }),
});

export const { useGetPopularMoviesQuery, useGetTrendingMoviesQuery } =
  moviesApi;
