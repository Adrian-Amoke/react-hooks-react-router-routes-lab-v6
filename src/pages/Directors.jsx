import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import directorsData from "../../db.json";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    setDirectors(directorsData.directors);
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
