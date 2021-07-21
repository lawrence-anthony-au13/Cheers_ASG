import React from "react";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

function MovieCard(props) {
  return (
    <div className="movie-card">
      <div className="card">
        <img className="card-img-top" src={props.movie.Poster} alt="" />
        <div className="card-body">
          <h4 className="card-title">{props.movie.Title}</h4>
        </div>
        <div className="card-footer">
          <StarRating />
        </div>
      </div>
    </div>
  );
}

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
