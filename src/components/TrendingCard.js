import React from "react";
import Bookmark from "./Bookmark";

const TrendingCard = ({ poster, title, release_date }) => {
  //const [bookmark, setBookmark] = React.useState(false);

  // const toggleBookmark = () => {
  //   setBookmark(!bookmark);
  // };

  return (
    <div className="w-full h-44 rounded-md shadow-md pr-3">
      <div className="w-full h-full relative rounded-md">
        {/* card info & bookmark */}
        <div className="absolute w-full h-full px-3 py-7">
          {/* bookmark */}
          <Bookmark />
          {/* bookmark */}
          <div className="mt-20 text-white">
            <div className="flex">
              <p className="text-xs pr-2">{release_date}</p>
            </div>
            <h1 className="text-xs font-extrabold">{title}</h1>
          </div>
        </div>
        {/* card info & bookmark */}
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster}`}
          alt="canvas"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default TrendingCard;
