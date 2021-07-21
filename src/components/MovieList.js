import React from "react";
import MovieCard from "./MovieCard";

const getMovies = (movies) => {
  return (
    <div className="card-deck">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MovieList = (props) => {
  return <div>{getMovies(props.movies)}</div>;
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
