import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import { CircularProgressBar } from "./CircularProgressBar";
import MovieData from "./MovieData";

export const Movietypes = ({ movie, isTv }) => {
  console.log("value of tv in movietypes");

  const API_key = "40ba7941c447be055292d434b41ecaf1";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  return (
    <div className="pop-container">
      {Array.isArray(movie)
        ? movie.map((element) => {
            const AboutMovie = async () => {
              navigate(`/${isTv ? "tv" : "movie"}?id=${element.id}`);
            };

            const searchMovies = (e) => {
              e.preventDefault();
              AboutMovie();
            };
            return (
              <div className="pop-card" key={element.id}>
                {element.poster_path ? (
                  <img
                    className="movie"
                    src={`${img_url}${element?.poster_path}`}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={(e) => searchMovies(e)}
                  />
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
                    percent={Math.floor((element?.vote_average / 10) * 100)}
                  />
                </div>
                <div className="content" style={{ marginTop: "20px" }}>
                  <h5
                    className="title"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => searchMovies(e)}
                  >
                    {element?.title || element?.name}
                  </h5>
                  <p className="date">
                    {element?.release_date || element?.first_air_date}
                  </p>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
