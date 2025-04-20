import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import moviesData from "../../db.json";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData.movies);
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        ))}
      </main>
    </>
  );
}

export default Home;
