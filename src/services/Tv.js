import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const TvSeriesApi = createApi({
  reducerPath: "TvSeriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    getLatestTvSeries: builder.query({
      query: () =>
        "tv/popular?api_key=accd1c46308e8b605b44a93e970b96cb&language=en-US",
    }),
  }),
});

export const { useGetLatestTvSeriesQuery } = TvSeriesApi;
