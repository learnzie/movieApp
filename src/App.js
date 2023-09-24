import React, { useEffect, useState } from "react";
import "./App.css";
import { MovieCard } from "./MovieCard";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=aa06da7e";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("SERIES");
  }, []);
  //   const movie1 = {
  //     Title: "Arthdal Chronicles",
  //     Year: "2019–2023",
  //     imdbID: "tt8750956",
  //     Type: "series",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BMDk0MDhmODMtMWIyYy00YWZiLTgzZWEtZTBhZjBhZTgyM2U5XkEyXkFqcGdeQXVyNjgyMTI1MDE@._V1_SX300.jpg",
  //   };

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
