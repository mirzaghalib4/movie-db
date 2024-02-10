import React, { useState, useEffect } from "react";
import axios from "axios";
import { LatestCard } from "./LatestCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export const LatestTrailers = () => {
  const [popular, setPopular] = useState(true);
  const [streaming, setStreaming] = useState(false);
  const [ontv, setOntv] = useState(false);
  const [rent, setRent] = useState(false);
  const [theater, setTheater] = useState(false);
  const [api, setapi] = useState("");
  const [api2, setapi2] = useState("");
  const [api3, setapi3] = useState("");
  const [api4, setapi4] = useState("");
  const [api5, setapi5] = useState("");
  const [selectedOption, setSelectedOption] = useState("Popular");
  const [visibility, setVisibility] = useState({
    Popular: false,
    "Streaming": true,
    "On TV": true,
    "For Rent": true,
    "In Theaters": true,
  });
  //function to togggle container

  const toggleContainer = (containerNumber, option) => {
    if (containerNumber === 1) {
      setPopular(true);
      setStreaming(false);
      setOntv(false);
      setRent(false);
      setTheater(false);
    } else if (containerNumber === 2) {
      setPopular(false);
      setStreaming(true);
      setOntv(false);
      setRent(false);
      setTheater(false);
    } else if (containerNumber === 3) {
      setPopular(false);
      setStreaming(false);
      setOntv(true);
      setRent(false);
      setTheater(false);
    } else if (containerNumber === 4) {
      setPopular(false);
      setStreaming(false);
      setOntv(false);
      setRent(true);
      setTheater(false);
    } else if (containerNumber === 5) {
      setPopular(false);
      setStreaming(false);
      setOntv(false);
      setRent(false);
      setTheater(true);
    }
    setSelectedOption(option);
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [option]: !prevVisibility[option],
    }));
    if (option !== selectedOption) {
      setVisibility((prevVisibility) => ({
        ...prevVisibility,
        [selectedOption]: true,
      }));
    }
  };
  ////////////////////////////////////////////////////
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc ",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log("this is latest api console", response.data);
        setapi(response?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=rent&year=2023",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    axios
      .request(options)
      .then(function (response2) {
        console.log("this is rent console", response2?.data);
        setapi2(response2?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=free&year=2020",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    axios
      .request(options)
      .then(function (response3) {
        console.log("this is streaming console", response3?.data);
        setapi3(response3?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=ads&year=2022",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    axios
      .request(options)
      .then(function (response4) {
        console.log("this is console", response4?.data);
        setapi4(response4?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_watch_monetization_types=ads&year=2021",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    axios
      .request(options)
      .then(function (response5) {
        console.log("this is console", response5?.data);
        setapi5(response5?.data?.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log("streaming api ", api5);
  const currentDate = new Date();
  const fourteenDaysAgo = new Date(currentDate);
  fourteenDaysAgo.setDate(currentDate.getDate() - 14);
  // console.log("14 days ago date", fourteenDaysAgo)
  //console.log(Streamingdisplay)

  return (
    <div className="latestTrailers">
      <div className="container-header">
        <p
          style={{
            display: "flex",
            fontSize: "1.5em",
            fontWeight: "500",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          Latest Trailers
        </p>
        <div
          className="btns"
          style={{
            border: "1px solid #1ED5A9",
            width: "fit-content",
            background: "transparent",
            borderRadius: "30px",
            height: "fit-content",
          }}
        >
          <div class="nav-list" id="navList">
            {" "}
            <button
              className={`fbuttons ${popular ? "popular" : undefined}`}
              onClick={() => toggleContainer(1)}
            >
              Popular
            </button>{" "}
            <button
              className={`fbuttons ${streaming ? "streaming" : undefined}`}
              onClick={() => toggleContainer(2)}
            >
              Streaming
            </button>{" "}
            <button
              className={`fbuttons ${ontv ? "ontv" : undefined}`}
              onClick={() => toggleContainer(3)}
            >
              On TV
            </button>{" "}
            <button
              className={`fbuttons ${rent ? "rent" : undefined}`}
              onClick={() => toggleContainer(4)}
            >
              For Rent
            </button>{" "}
            <button
              className={`fbuttons ${theater ? "theater" : undefined}`}
              onClick={() => toggleContainer(5)}
            >
              In Theaters
            </button>
          </div>
        </div>
        <div class="small-dropdown">
          <button class="dropbtn" onClick={() => toggleContainer(1, "Popular")}>
            {" "}
            {selectedOption} <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div class="dropdown-content">
          <a
              href="#"
              onClick={() => toggleContainer(1, "Popular")}
              style={{ display: visibility["Popular"] ? "block" : "none" }}
            >
              Popular
              </a>
            <a
              href="#"
              onClick={() => toggleContainer(2, "Streaming")}
              style={{ display: visibility["Streaming"] ? "block" : "none" }}
            >
              Streaming
            </a>
            <a
              href="#"
              onClick={() => toggleContainer(3, "On TV")}
              style={{ display: visibility["On TV"] ? "block" : "none" }}
            >
              On TV
            </a>
            <a
              href="#"
              onClick={() => toggleContainer(4, "For Rent")}
              style={{ display: visibility["For Rent"] ? "block" : "none" }}
            >
              For Rent
            </a>
            <a
              href="#"
              onClick={() => toggleContainer(4, "In Theaters")}
              style={{ display: visibility["In Theaters"] ? "block" : "none" }}
            >
              In Theaters
            </a>
          </div>
        </div>
      </div>
      <div className="fcontent">
        {popular && (
          <div className="ftoggle" style={{ height: "200px" }}>
            {" "}
            <LatestCard CardApi={api} />
          </div>
        )}
        {streaming && (
          <div className="ftoggle" style={{ height: "200px" }}>
            <LatestCard CardApi={api3} />
          </div>
        )}
        {ontv && (
          <div className="ftoggle" style={{ height: "200px" }}>
            <LatestCard CardApi={api4} />
          </div>
        )}
        {rent && (
          <div className="ftoggle" style={{ height: "200px" }}>
            {/* <LatestCard cardApi={api2} /> */}
            <LatestCard CardApi={api2} />
          </div>
        )}
        {theater && (
          <div className="ftoggle" style={{ height: "200px" }}>
            <LatestCard CardApi={api5} />
          </div>
        )}
      </div>
    </div>
  );
};
