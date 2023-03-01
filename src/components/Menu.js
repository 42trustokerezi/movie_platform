import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import WindowIcon from "@mui/icons-material/Window";
import TheatersIcon from "@mui/icons-material/Theaters";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LiveTvIcon from "@mui/icons-material/LiveTv";

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
        <WindowIcon
          sx={{ display: "block", margin: "20px auto", color: "white" }}
          fontSize="small"
        />
        <TheatersIcon
          sx={{ display: "block", margin: "20px auto", color: "#566386" }}
          fontSize="small"
        />
        <LiveTvIcon
          sx={{ display: "block", margin: "20px auto", color: "#566386" }}
          fontSize="small"
        />
        <BookmarkIcon
          sx={{ display: "block", margin: "20px auto", color: "#566386" }}
          fontSize="small"
        />
      </div>
    </div>
  );
};

export default Menu;
