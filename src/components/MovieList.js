import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {/* NOTE this needs a wrapper to work */}
      {movies.map(movie => (
        <Movie name={movie.name} key={movie.id} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
