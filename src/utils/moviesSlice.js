import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    UpcomingMovies:null,
    TopRatedMovies:null,
    HorrorMovies:null,
    movieResult: null,
    movieName: null,

  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.HorrorMovies = action.payload;
    },
    addRecommendedMovies: (state, action) => {
      
      const { movieName, movieResult } = action.payload;
      state.movieName = movieName;
      state.movieResult = movieResult;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies,
  addUpcomingMovies, addHorrorMovies, addRecommendedMovies } =
  moviesSlice.actions;

export default moviesSlice.reducer;
