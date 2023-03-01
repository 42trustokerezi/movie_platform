import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    selected: false,
  },
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleBookmark: (state) => {
      state.value.selected = !state.value.selected;
    },
  },
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
