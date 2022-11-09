import { Card } from "../ui/Card";
import { Movie } from "./Movie";
import styles from "./MovieList.module.css";

export const MovieList: React.FC<{ movies: Movie[] }> = (props) => {
  return (
    <div className={styles.movieList}>
      {props.movies.map((movie) => (
        <Card className={styles.movie} key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <h3>{movie.releaseDate}</h3>
        </Card>
      ))}
    </div>
  );
};
