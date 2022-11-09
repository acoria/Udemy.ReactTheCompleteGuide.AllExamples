import { useState } from "react";
import styles from "./MovieApp.module.css";
import { MovieList } from "./MovieList";

export const MovieApp: React.FC = () => {
  const [movies, setMovies] = useState([]);

  const onLoadMoviesHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((jsonData) => {
        const transformedMovies = jsonData.results.map((movieData: any) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            description: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  };

  return (
    <div className={styles.movieApp}>
      <button onClick={onLoadMoviesHandler}>Load movies</button>
      <MovieList movies={movies} />
    </div>
  );
};
