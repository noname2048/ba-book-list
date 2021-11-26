import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const fetchMovieDetail = async (id) => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovieDetail(json.data.movie);
  };

  useEffect(() => {
    fetchMovieDetail(id);
  }, [id]);

  return (
    <div>
      <Link to="/" />
      <h1>Detail</h1>
      {!movieDetail ? (
        "Loading"
      ) : (
        <div>
          <h2>{movieDetail.title}</h2>
          <img src={movieDetail.medium_cover_image} alt="" />
          <p>{movieDetail.description_full}</p>
          <ul>
            {movieDetail.genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
