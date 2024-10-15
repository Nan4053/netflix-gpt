import MovieCard from "./MovieCard";
import { useState } from "react";
import useRecommendedMovies from "../hooks/useRecommendedMovies";

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const { MovieSearch } = useRecommendedMovies();

  const handleCardClick = async (movieTitle) => {
    setSelectedMovie(movieTitle); // Store the selected movie title in state
    await MovieSearch(movieTitle); // Pass the movie title to the function in another file
  };
  return (
    <div className="px-6 mt-4 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        
        {movies?.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleCardClick(movie.title)}
              className="cursor-pointer"            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieList;
