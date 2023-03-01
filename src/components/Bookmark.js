import React from "react";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { useSelector, useDispatch } from "react-redux";
import { toggleBookmark } from "../features/bookmarkSlice";

const Bookmark = () => {
  const bookmark = useSelector((state) => state.bookmark.value.selected);
  const dispatch = useDispatch();

  return (
    <div className="bg-[#6c757d] w-5 h-5 rounded-full cursor-pointer float-right">
      {!bookmark ? (
        <TurnedInNotIcon
          sx={{
            fontSize: 10,
            marginLeft: "4.5px",
            marginBottom: "7px",
            color: "white",
          }}
          onClick={() => dispatch(toggleBookmark())}
        />
      ) : (
        <TurnedInIcon
          sx={{
            fontSize: 10,
            marginLeft: "4.5px",
            marginBottom: "7px",
            color: "white",
          }}
          onClick={() => dispatch(toggleBookmark())}
        />
      )}
    </div>
  );
};

export default Bookmark;
