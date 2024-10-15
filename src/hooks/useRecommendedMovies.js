import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useRecommendedMovies = () => {
  const dispatch = useDispatch();
  const { movieResults, movieNames } = useSelector((store) => store.movies);

  // 1. Fetch Data from Backend
  const getRecommendedMovies = async (name) => {
    const url = "http://localhost:5000/predict";
    const jsonData = JSON.stringify({ id: 1, title: name });

    
    
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error("Failed to fetch recommended movies");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in getRecommendedMovies:", error);
      return null;
    }
  };

  // 2. Search Movies by ID (fetch details from TMDB)
  const searchMovieById = async (movie) => {
     
    try {
      const response = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS);
      const data = await response.json();
      return data.results[0]; 
    } catch (error) {
      console.error("Error in searchMovieById:", error);
      return null;
    }
  };

  // 3. Movie Search and Dispatch Results to Store
  const MovieSearch = async (title = "Avatar") => {
    try {
      const movies = await getRecommendedMovies(title);

      if (movies && Array.isArray(movies.id) && Array.isArray(movies.title)) {
        const promiseArray = movies.title.map((movieTitle) => searchMovieById(movieTitle));
        const tmdbResults = await Promise.all(promiseArray);

        // Dispatch results to Redux store
        dispatch(
          addRecommendedMovies({
            movieName: movies.title,
            movieResult: tmdbResults,
          })
        );
      }
    } catch (error) {
      console.error("Error in MovieSearch:", error);
    }
  };

  // 4. useEffect Hook to Trigger Movie Search
  useEffect(() => {
    if (!movieResults && !movieNames) {
      MovieSearch();
    }
  }, []); // Empty dependency array runs effect once

  return { MovieSearch };
};

export default useRecommendedMovies;
