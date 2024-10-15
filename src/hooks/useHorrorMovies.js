import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const HorrorMovies = useSelector((store) => store.movies.HorrorMovies);

  const getHorrorMovies = async () => {
    
    const data = await fetch('https://api.themoviedb.org/3/search/collection?query=horror&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    !HorrorMovies && getHorrorMovies();
  }, []);
};

export default useHorrorMovies;
