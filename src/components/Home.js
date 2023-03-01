import React from "react";
import TrendingList from "./TrendingList";
import MovieList from "./MovieList";

const Home = () => {
  return (
    <div>
      <div>
        <p className="text-lg text-white">Trending</p>
        <div className="overflow-auto whitespace-nowrap">
          <TrendingList />
        </div>
      </div>
      <div>
        <p className="text-lg text-white pb-3">Recommended for you</p>
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
