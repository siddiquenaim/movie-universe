import React, { useEffect, useState } from "react";
import ShowCard from "../ShowCard/ShowCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="container py-5">
      <h3 className="text-center fs-1 mb-5">Watch Your Favorite Shows</h3>
      <div className="my-4">
        <div className="row container justify-content-around gap-4  mx-auto">
          {movies.map((movie) => (
            <ShowCard key={movie.show.id} movie={movie}></ShowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
