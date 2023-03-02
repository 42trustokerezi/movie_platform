import React from "react";
import Bookmark from "./Bookmark";

const MovieCard = ({ title, v_a, poster, release_date }) => {
  return (
    <div className="w-full h-44 grid grid-rows-6">
      <div className="row-span-4 relative">
        <div className="absolute w-[95%] top-2 mx-auto">
          <Bookmark />
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster}`}
          alt="movie-img"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="row-span-2 text-white">
        <div className="flex text-xs text-gray-400 mt-2">
          <p className="pr-2">{release_date}</p>
          <p className="pr-2">Movie</p>
          <p className="pr-2"> {v_a}V.A</p>
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MovieCard;
