import React from "react";
import { useGetLatestTvSeriesQuery } from "../services/Tv";

const TvSeries = () => {
  const { data, error, isLoading } = useGetLatestTvSeriesQuery();
  console.log(data);
  try {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-screen overflow-y-scroll">
        Hello
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default TvSeries;
