import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import WindowIcon from "@mui/icons-material/Window";
import TheatersIcon from "@mui/icons-material/Theaters";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Link } from "react-router-dom";

import "../globalStyles.css";

const Menu = () => {
  return (
    <div className="w-full rounded-md h-screen bg-[#161d2e] ">
      <div className="w-4/5 mx-auto align-middle pt-5">
        <MovieIcon
          sx={{
            display: "block",
            margin: "auto",
            marginBottom: "40px",
            color: "#fe4746",
          }}
        />

        <Link to={"/"}>
          <div className="menu" data-tooltip="Home">
            <WindowIcon
              sx={{ display: "block", margin: "20px auto", color: "white" }}
              fontSize="small"
            />
          </div>
        </Link>

        <Link to={`/movies`}>
          <div className="menu" data-tooltip="Movies">
            <TheatersIcon
              sx={{ display: "block", margin: "20px auto", color: "#566386" }}
              fontSize="small"
            />
          </div>
        </Link>

        <Link to={"/tv"}>
          <div className="menu" data-tooltip="Tv series">
            <LiveTvIcon
              sx={{ display: "block", margin: "20px auto", color: "#566386" }}
              fontSize="small"
            />
          </div>
        </Link>

        <Link>
          <div className="menu" data-tooltip="Bookmarks">
            <BookmarkIcon
              sx={{ display: "block", margin: "20px auto", color: "#566386" }}
              fontSize="small"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
