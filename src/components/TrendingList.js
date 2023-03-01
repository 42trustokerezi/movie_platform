import React from "react";
import { useGetTrendingMoviesQuery } from "../services/movies";
import MovieCard from "./TrendingCard";

const TrendingList = () => {
  const { data, error, isLoading } = useGetTrendingMoviesQuery();

  try {
    return (
      <div className=" pt-3 pb-10 w-[900%] overflow-auto">
        <div className="flex justify-between ">
          {error ? (
            <div className="">404</div>
          ) : isLoading ? (
            <div className="">loading...</div>
          ) : data ? (
            data.results.map((trending, index) => (
              <MovieCard key={index} poster={trending.poster_path} />
            ))
          ) : null}
        </div>
      </div>
    );
  } catch (error) {
    <pre>{error}</pre>;
  }
};

export default TrendingList;
