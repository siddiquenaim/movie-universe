import { getBookedShows } from "../../utilities/localStorage";

const bookedMoviesLoader = async () => {
  const loadedMovies = await fetch("https://api.tvmaze.com/search/shows?q=all");
  const movies = await loadedMovies.json();
  const savedMovies = [];

  const storedMovies = getBookedShows();
  for (const id in storedMovies) {
    const bookedMovie = movies.find((movie) => movie.show.id == id);
    if (bookedMovie) {
      savedMovies.push(bookedMovie);
    }
  }

  return savedMovies;
};

export default bookedMoviesLoader;
