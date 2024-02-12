import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingData } from "./TrendingData";

export const Trending = () => {
  const [isTodaySelected, setIsTodaySelected] = useState(true);
  const [changeColor, setChangeColor] = useState(true);
  const [day, setday] = useState("");
  const [week, setweek] = useState("");

  const handleToggle = () => {
    setIsTodaySelected(!isTodaySelected);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setday(response?.data?.results);
        console.log(day);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const options2 = {
      method: "GET",
      url: "https://api.themoviedb.org/3/trending/all/week?language=en-US",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        setweek(response?.data?.results);
        console.log(week);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const buttonStyles = {
    background: isTodaySelected
      ? "linear-gradient(to right,#c0fecf 0,#1ed5a9 100%)"
      : undefined,
    backgroundClip: isTodaySelected ? "text" : undefined,
    WebkitBackgroundClip: isTodaySelected ? "text" : undefined,
    color: isTodaySelected ? "transparent" : undefined,
  };
  const buttonStylesB = {
    background: !isTodaySelected
      ? "linear-gradient(to right,#c0fecf 0,#1ed5a9 100%)"
      : undefined,
    backgroundClip: !isTodaySelected ? "text" : undefined,
    WebkitBackgroundClip: !isTodaySelected ? "text" : undefined,
    color: !isTodaySelected ? "transparent" : undefined,
  };
  return (
    <div className="trending-container">
      <div className="trending-background">
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}
        >
          <p
            style={{
              marginRight: "20px",
              display: "inline",
              fontSize: "1.5em",
              fontWeight: "600",
            }}
          >
            Trending
          </p>
          <div
            style={{
              border: "1px solid",
              width: "200px",
              height: "30px",
              display: "flex",
              borderRadius: "25px",
            }}
          >
            <button
              style={{ width: "80px", fontSize: "0.9em", color: "" }}
              className={`toggle-button ${
                isTodaySelected ? "today" : "this-week"
              }`}
              onClick={handleToggle}
            >
              <b style={buttonStyles}>Today</b>
            </button>
            <button
              style={{ width: "120px", fontSize: "0.9em", color: "" }}
              className={`toggle-button ${
                isTodaySelected ? "this-week" : "today"
              }`}
              onClick={handleToggle}
            >
              <b style={buttonStylesB}>This Week</b>
            </button>
          </div>
        </div>
        <div className="toggle-container">
          <div className="TrendingContent">
            {isTodaySelected ? (
              <div>
                <TrendingData Apidata={day} isTv={false}  />
              </div>
            ) : (
              <div>
                <TrendingData Apidata={week} isTv={false} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
