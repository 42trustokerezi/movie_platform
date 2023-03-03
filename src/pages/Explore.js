import React from "react";
import Menu from "../components/Menu";
import SearchBar from "../components/SearchBar";
import Home from "../components/Home";
import TvSeries from "../components/TvSeries";
import Movies from "../components/Movies";
import Search from "../components/Search";
import { Routes, Route, Link } from "react-router-dom";

const Explore = () => {
  const [query, setQuery] = React.useState("");

  return (
    <div className=" grid grid-cols-10 w-[100%] py-6 bg-[#0f141e]">
      <div className="col-span-1">
        <Menu />
      </div>

      <div className="content-wrapper col-span-9 w-[100%] h-full float-right">
        <div className="w-[95%] float-right">
          <Link to={"/search"}>
            <SearchBar setQuery={setQuery} />
          </Link>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search query={query} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Explore;
