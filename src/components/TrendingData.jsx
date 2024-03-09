import React from "react";

import { CircularProgressBar } from "./CircularProgressBar";
import { useNavigate } from "react-router-dom";
const img_url = "https://image.tmdb.org/t/p/w200";

export const TrendingData = ({ Apidata, isTv }) => {
  console.log(Apidata);
  const navigate = useNavigate();
  return (
    <div>
      {Array.isArray(Apidata) ? (
        <div  style={{ marginTop: "0px", display:"flex", gap:"20px",width:"100%" }}>
          {Apidata.map((element) => {
             const AboutMovie = async () => {
              navigate(`/${isTv ? "tv" : "movie"}?id=${element.id}`);
            };
            const searchMovies = (e) => {
              e.preventDefault();
              AboutMovie();
            };
            return (
              <div key={element.id} className="">
                <img
                  style={{
                    height: "225px",
                    width: "150px",
                    borderRadius: "8px",
                    cursor: "pointer"
                  }}
                  alt="movie poster"
                  src={`${img_url}${element.poster_path}`}
                  onClick={(e) => searchMovies(e)}
                />
                <div
                  style={{
                    marginTop: "-30px",
                    position: "relative",
                    zIndex: "11",
                  
                    color: "white",
                    fontSize: "11px",
                    marginBottom:"0px"
                  }}
                >
                  <CircularProgressBar
                    percent={Math.floor((element.vote_average / 10) * 100)}
                    width={"35px"}
                    height={"35px"}
                  />
                </div>
                <h4
                  style={{
                    margin: "0px",
                    padding: "7px",
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    marginTop:"0px",
                    cursor: "pointer"
                  }}  onClick={(e) => searchMovies(e)}
                >
                  {element.title || element.name}
               
                </h4>
                <p
                  style={{
                    margin: "0",
                    marginBottom: "0px",
                    padding: "5px",
                    fontSize: "small",
                  }}
                >
                  {new Date(
                      element?.release_date || element?.first_air_date
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                </p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
