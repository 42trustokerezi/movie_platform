import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    query: "",
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
});
