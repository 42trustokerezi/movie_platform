import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../services/movies";
import bookmarkReducer from "../features/bookmarkSlice";
import { TvSeriesApi } from "../services/Tv";

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(TvSeriesApi.middleware),
});
