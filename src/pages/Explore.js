import React from "react";
import Menu from "../components/Menu";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import TrendingList from "../components/TrendingList";
import Home from "../components/Home";

const Explore = () => {
  return (
    <div className=" grid grid-cols-10 w-[100%] py-6 bg-[#0f141e]">
      <div className="col-span-1">
        <Menu />
      </div>

      <div className="content-wrapper col-span-9 w-[100%] h-full float-right">
        <div className="w-[95%] float-right">
          <Search />

          <Home />
        </div>
      </div>
    </div>
  );
};

export default Explore;
