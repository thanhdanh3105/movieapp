import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bannerData: [],
  imageURL: "",
};
export const movieSplice = createSlice({
  name: "movieo",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBannerData, setImageURL } = movieSplice.actions;

export default movieSplice.reducer;
