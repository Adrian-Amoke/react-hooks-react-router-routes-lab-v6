import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import moviesData from "../../db.json";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = moviesData.movies.find(
      (movie) => movie.id === parseInt(id)
    );
    setMovie(foundMovie);
  }, [id]);

  if (!movie) {
    return (
      <>
        <NavBar />
        <h1>Movie not found</h1>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Time: {movie.time} minutes</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;
