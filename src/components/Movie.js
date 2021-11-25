import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt="" />
      <h2>
        <Link to="detail">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g, idx) => (
          <li key={idx}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
