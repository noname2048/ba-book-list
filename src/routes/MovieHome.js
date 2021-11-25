import { useEffect, useState } from "react";

import Movie from "../components/Movie";

function MovieHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=85&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((m) => (
            <Movie
              key={m.id}
              coverImg={m.medium_cover_image}
              title={m.title}
              summary={m.summary}
              genres={m.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieHome;
