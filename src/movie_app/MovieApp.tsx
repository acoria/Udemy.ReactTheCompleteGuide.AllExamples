import { useCallback, useEffect, useState } from "react";
import { AddMovie } from "./AddMovie";
import { IMovie } from "./IMovie";
import styles from "./MovieApp.module.css";
import { MovieList } from "./MovieList";

export const MovieApp: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLoadMoviesHandler = () => {
    setIsLoading(true);
    setError(null);
    fetch("https://udemy-react-the-complete-ff634-default-rtdb.europe-west1.firebasedatabase.app/movies.json")
    // fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((jsonData) => {
        // const transformedMovies = jsonData.results.map((movieData: any) => {
        //   return {
        //     id: movieData.episode_id,
        //     title: movieData.title,
        //     description: movieData.opening_crawl,
        //     releaseDate: movieData.release_date,
        //   };
        // });
        const transformedMovies: IMovie[] = [];
        for (const key in jsonData) {
          transformedMovies.push({
            id: key,
            title: jsonData[key].title,
            description: jsonData[key].description,
            releaseDate: jsonData[key].releaseDate,
          });
        }
        setMovies(transformedMovies);
        setIsLoading(false);
      });
  };

  async function alternativeAwaitLoadMoviesHandler() {
    setIsLoading(true);
    setError(null);
    const response = await fetch("https://swapi.dev/api/fils");
    try {
      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`Error code: ${response.status}`);
      }
      const jsonData = await response.json();
      const transformedMovies = jsonData.results.map((movieData: any) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          description: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  }

  const ensureSomethingLoadsAtStartup = useCallback(async () => {
    setIsLoading(true);
    setError(null);
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
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    ensureSomethingLoadsAtStartup();
  }, [ensureSomethingLoadsAtStartup]);

  let content = <p>No movies found</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className={styles.movieApp}>
      <AddMovie />
      <button onClick={onLoadMoviesHandler}>Load movies</button>
      <button onClick={alternativeAwaitLoadMoviesHandler}>
        Load movies with async
      </button>
      {content}
    </div>
  );
};
