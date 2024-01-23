import React from "react";
import { redirect, useNavigate } from "react-router-dom";

import { CircularProgressBar } from "./CircularProgressBar";

const PopularCard = ({ movie }) => {
  const API_key = "40ba7941c447be055292d434b41ecaf1";
  const img_url = "https://image.tmdb.org/t/p/w500";

  console.log(movie);

  const navigate = useNavigate();
  const AboutMovie = async () => {
    navigate(`/movie?id=${movie.id}`);
  };
  const searchMovies = (e) => {
    e.preventDefault();
    AboutMovie();
  };

  return (
    <div className="pop-card">
      {movie.poster_path ? (
        <img className="movie" src={`${img_url}${movie?.poster_path}`} alt="" style={{cursor:"pointer"}} onClick={(e) => searchMovies(e) }/>
      ) : null}

      <div
        style={{
          marginTop: "-30px",
          position: "absolute",
          zIndex: "11",
          marginBottom: "10px",
          color: "white",
          fontSize: "12px",
          fontWeight: "400",
        }}
      >
        <CircularProgressBar
          percent={Math.floor((movie.vote_average / 10) * 100)}
        />
      </div>
      <div className="content" style={{ marginTop: "20px" }}>
        <h5 className="title" style={{cursor:"pointer"}} onClick={(e) => searchMovies(e)}>
          {movie.title}
        </h5>
        <p className="date">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default PopularCard;
