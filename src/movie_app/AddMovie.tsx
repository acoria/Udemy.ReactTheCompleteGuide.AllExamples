import { useState } from "react";
import { Card } from "../ui/Card";
import styles from "./AddMovie.module.css";

export const AddMovie: React.FC = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");

  const addMovieHandler = async (movie: any) => {
    const response = await fetch(
      //movies.json creates a node in the dynamic database
      "https://udemy-react-the-complete-ff634-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <Card className={styles.addMovie}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addMovieHandler({
            title: movieTitle,
            description: movieDescription,
            releaseDate: movieReleaseDate,
          });
        }}
      >
        <section>
          <label htmlFor="movieTitle">Movie title</label>
          <input
            id="movieTitle"
            type="text"
            onChange={(event) => setMovieTitle(event.currentTarget.value)}
          />
        </section>
        <section>
          <label htmlFor="movieDescription">Movie description</label>
          <input
            id="movieDescription"
            type="text"
            onChange={(event) => setMovieDescription(event.currentTarget.value)}
          />
        </section>
        <section>
          <label htmlFor="movieReleaseDate">Movie release year</label>
          <input
            id="movieReleaseDate"
            type="text"
            onChange={(event) => setMovieReleaseDate(event.currentTarget.value)}
          />
        </section>
        <button type="submit">Add movie</button>
      </form>
    </Card>
  );
};
