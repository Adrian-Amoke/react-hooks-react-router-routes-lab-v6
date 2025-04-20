import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import actorsData from "../../db.json";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    setActors(actorsData.actors);
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;
