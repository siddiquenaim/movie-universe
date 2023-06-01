import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="container my-5">
      <h3 className="text-center">Watch Your Favorite Movies</h3>
      <div className="my-4">
        <div className="row container justify-content-around gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.show.id} movie={movie}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
