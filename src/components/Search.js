import React from "react";
import { useGetPopularMoviesQuery } from "../services/movies";
import MovieCard from "./MovieCard";

const Search = ({ query }) => {
  const { data, isLoading } = useGetPopularMoviesQuery();
  try {
    return (
      <div className="h-screen">
        {isLoading ? (
          <div></div>
        ) : data ? (
          data.results?.filter((movie) => {
            return movie.title.toLowerCase().includes(query.toLowerCase());
            return (
              <MovieCard
                poster={movie.poster_path}
                release_date={movie.release_date}
                title={movie.title}
                v_a={movie.vote_average}
              />
            );
          })
        ) : null}
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};

export default Search;
