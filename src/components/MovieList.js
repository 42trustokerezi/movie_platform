import React from "react";
import MovieCard from "./MovieCard";
import { useGetPopularMoviesQuery } from "../services/movies";

const MovieList = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  console.log(data);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-screen overflow-y-scroll">
      {data?.results.map((movie, index) => (
        <MovieCard
          key={index}
          poster={movie.poster_path}
          release_date={movie.release_date}
          title={movie.title}
          v_a={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
