import { configureStore } from "@reduxjs/toolkit";
import movieReduce from "./movieSplice";
export const store = configureStore({
  reducer: {
    movie: movieReduce,
  },
});
