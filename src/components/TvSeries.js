import React from "react";
import { useGetLatestTvSeriesQuery } from "../services/Tv";
import MovieCard from "./MovieCard";

const TvSeries = () => {
  const { data, error, isLoading } = useGetLatestTvSeriesQuery();
  console.log(data?.results);
  try {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-screen overflow-y-scroll">
        {error ? (
          <div></div>
        ) : isLoading ? (
          <div></div>
        ) : data ? (
          data.results?.map((tv, i) => (
            <MovieCard
              title={tv.name}
              poster={tv.poster_path}
              v_a={tv.vote_average}
              release_date={tv.first_air_date}
            />
          ))
        ) : null}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default TvSeries;
