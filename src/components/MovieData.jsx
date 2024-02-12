import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressBar } from "./CircularProgressBar";
import { Cast } from "./Cast";
import { Media } from "./Media";
import { Footer } from "./Footer";
import axios from "axios";
const img_url = "https://image.tmdb.org/t/p/w1280";
const img_url2 = "https://image.tmdb.org/t/p/w300";

const MovieData = ({ tv }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [imagesapi, setimagesapi] = useState("");

  const id = searchParams.get("id");
  // const APIURL = `https://api.themoviedb.org/3/movie/${id}`;
  //const creditsApi = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const [credits, setcredits] = useState();
  const [searchItem, setsearchItem] = useState();
  const [video, setVideo] = useState();
  const [key, setKey] = useState("");
  const [director, setdirector] = useState("");
  const [writer, setwriter] = useState("");
  const [producer, setproducer] = useState("");
  const [screenplay, setscreenplay] = useState("");
  const [APIURL, setApiurl] = useState("");
  const path = tv
    ? `https://api.themoviedb.org/3/tv/${id}`
    : `https://api.themoviedb.org/3/movie/${id}`;
    const creditsApi= tv ? `https://api.themoviedb.org/3/tv/${id}/credits` : `https://api.themoviedb.org/3/movie/${id}/credits`
  // const id = searchParams.get('id');
  const getData = async () => {
    const { data } = await axios.get(path, {
      params: {
        api_key: "40ba7941c447be055292d434b41ecaf1",
      },
    });
    setsearchItem(data);
    console.log("this is searchedItem details",data);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    //video API
    if (tv){
      await fetch(
        `https://api.themoviedb.org/3/tv/${id}/?language=en-US`,
        options
      )
      .then((response) => response.json())
      .then((response) => {
        setVideo(response);
      })

      .catch((err) => console.error(err));
    console.log("videoAPi", video);

    } else if(!tv){
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options)
      .then((response) => response.json())
      .then((response) => {
        setVideo(response);
      })

      .catch((err) => console.error(err));
    console.log("videoAPi", video);
  };
  const options2 =  {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
    },
  } 

  
  if (tv){
    await fetch(
      `https://api.themoviedb.org/3/tv/${id}/images`,
      options2
    )
    .then((response) => response.json())
    .then((response) => {
      setimagesapi(response);
    })

    .catch((err) => console.error(err));
  console.log("imagesapi", imagesapi);

  } else if(!tv){
  await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images`,
    options)
    .then((response) => response.json())
    .then((response) => {
      setimagesapi(response);
    })

    .catch((err) => console.error(err));
  console.log("images api", imagesapi);
};
    }
      
  useEffect(() => {
    getData();
    console.log("Item", searchItem);
  }, []);
  useEffect(() => {
    //Backdrops
    
    


  }, []);
  useEffect(() => {
    if (typeof video != "undefined") {
      const vidlength = video.results?.length;

      for (let i = 0; i <= vidlength; i++) {
        if (video.results?.[i]?.type === "Trailer") {
          setKey(video.results?.[i]?.key);
        }
      }
    }
  }, [video]);

  useEffect(() => {
    async function fetchCredits() {
      try {
        const response = await axios.get(creditsApi, {
          params: {
            api_key: "40ba7941c447be055292d434b41ecaf1",
          },
        });
        setcredits(response.data);
        // console.log('these are credits', credits);
      } catch (error) {
        console.log(error.toJSON());
      }
    }
    fetchCredits();
  }, []);

  console.log("outside fetch", credits);
  const cast = credits?.cast;
  console.log(cast);
  // useEffect(() => {
  //   console.log("we are inside console");
  //   if (credits && credits.crew) {
  //     const creditsLength = credits.crew.length;
  //     console.log("credits length", creditsLength);
  //     for (let i = 0; i <creditsLength; i++) {
  //       //        const crew = credits?.crew;
  //       if (credits?.crew[i]?.job === "Director") {
  //         console.log("Director job", credits.crew?.[i]);
  //         setdirector(credits?.crew?.[i]?.name);
  //         console.log("director name", director);
  //       } else if (credits?.crew?.[i]?.job === "Writer") {
  //         setwriter(credits?.crew?.[i]?.name);
  //       } else if (credits?.crew?.[i]?.job === "Producer") {
  //         setproducer(credits?.crew?.[i]?.name);
  //       } else if (credits?.crew?.[i]?.job === "Screenplay") {
  //         setscreenplay(credits?.crew?.[i]?.name);
  //       }
  //     }
  //   }
  // }, [credits]);
  useEffect(() => {
    console.log("we are inside console");
    if (credits && credits.crew) {
      const creditsLength = credits.crew.length;
      console.log("credits length", creditsLength);

      for (let i = 0; i < creditsLength; i++) {
        const job = credits.crew[i]?.job;
        if (job === "Director") {
          console.log("Director job", credits.crew[i]);
          setdirector(credits.crew[i]?.name);
          console.log("director name", director);
        } else if (job === "Writer") {
          setwriter(credits.crew[i]?.name);
        } else if (job === "Producer") {
          setproducer(credits.crew[i]?.name);
        } else if (job === "Screenplay") {
          setscreenplay(credits.crew[i]?.name);
        }
      }
    }
  }, [credits]);

  const videoAPI = `https://www.youtube.com/embed/${key}`;
  const [showVideo, setShowVideo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  /////////////HEART AND SAVE BUTTONS//////////////////////////////////////////
  const [clicked, setClicked] = useState(true);
  const [clickedSave, setSaveClicked] = useState(true);
  const [heartColor, setHeartColor] = useState(); // Initial color
  const [saveColor, setSaveColor] = useState();

  const [isHovered, setIsHovered] = useState(false); //to hover heart

  const handleHeartClick = () => {
    // Toggle the 'clicked' state and change the color accordingly
    setClicked(!clicked);
    setHeartColor(clicked ? "#EF47B6" : "white"); // Change the color as per your requirements
  };

  const handleSaveClick = () => {
    setSaveClicked(!clickedSave);
    setSaveColor(clickedSave ? "#CF3131" : "white"); // Change the color as per your requirements
  };

  return (
    <div className="aboutMovie">
      <div className="info-container">
        {searchItem ? (
          <img
            className="movie-backdrop"
            src={`${img_url}${searchItem.backdrop_path}`}
            alt=""
          />
        ) : null}

        <div className="data-poster">
          {searchItem ? (
            <img
              className="postersizing"
              src={`${img_url2}${searchItem.poster_path}`}
              alt=""
            />
          ) : null}
        </div>
        <div className="about-movie">
          {searchItem ? (
            <h1 className="title-poster">
              {searchItem.title || searchItem.name} ({searchItem.release_date?.slice(0, 4) || searchItem.first_air_date?.slice(0,4)})
            </h1>
          ) : null}

          <div className="bottom-line">
            {searchItem ? <span> {new Date(
                      searchItem?.release_date || searchItem?.first_air_date
                    ).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}</span> : null}
            <ul>
              <li>
                {searchItem ? (
                  <span>
                    {searchItem.genres[0]?.name}, {searchItem.genres[1]?.name},{" "}
                    {searchItem.genres[2]?.name}
                  </span>
                ) : null}
              </li>
              
                
                {searchItem && !tv ? (
                  <li>
                  <span>
                    {" "}
                    {Math.floor(searchItem.runtime / 60)}h{" "}
                    {searchItem.runtime % 60}m
                  </span>
                  </li>
                ) : null}
              
            </ul>
          </div>
          <div className="thirdLine">
            <div className="ratingBar">
              <CircularProgressBar
                width="62px"
                height="62px"
                percent={
                  searchItem
                    ? Math.floor((searchItem.vote_average / 10) * 100)
                    : null
                }
              />
            </div>
            <div className="userscore">
              <h4>User Score</h4>
            </div>
            <div
              className="heart"
              style={{ color: heartColor }}
              onClick={handleHeartClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FontAwesomeIcon style={{ marginTop: "16px" }} icon={faHeart} />
              {isHovered && (
                <div className="message-box">Mark as favourite</div>
              )}
            </div>
            <div
              className="save"
              style={{ color: saveColor }}
              onClick={handleSaveClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FontAwesomeIcon
                style={{ marginTop: "16px" }}
                icon={faBookmark}
              />
              {isHovered && (
                <div className="message-box">Add to your watchlist</div>
              )}
            </div>
            <div className="trailer-link">
              <p className="hover-effect" onClick={openModal}>
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{ marginRight: "10px" }}
                />
                Play Trailer
              </p>

              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="YouTube Video"
                style={{
                  App: { filter: "grayscale(100%)" },
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0,0.5)",
                  },
                  content: {
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxHeight: "100%",
                    maxWidth: "100%",
                    height: "500px",
                    width: "980px",
                    margin: "0",
                    border: "none",
                    padding: 0,
                  },
                }}
              >
                {/* <div style={{ position: 'relative', paddingTop: '56.25%' }}> */}
                <iframe
                  title="YouTube Video"
                  src={videoAPI}
                  border="none"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                ></iframe>
                {/* </div> */}
                <button
                  onClick={closeModal}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "30px",
                    color: "white",
                  }}
                >
                  &times;{" "}
                  {/* This is the "times" symbol (×) for a close button */}
                </button>
              </Modal>
            </div>
          </div>
          <div className="tagline">
            {searchItem ? (
              <p>
                <i>{searchItem.tagline}</i>
              </p>
            ) : null}
          </div>
        </div>
        <div className="movie-overview">
          <h3>Overview</h3>
          {searchItem ? <p>{searchItem.overview}</p> : null}
          <div
            className="one"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              marginTop: "27px",
            }}
          >
            <div>
              {director ? (
                <>
                  <b className="hover-effect">{director}</b>
                  <p style={{ marginTop: "5px", fontSize: "small" }}>
                    Director
                  </p>
                </>
              ) : null}
            </div>
            <div>
              {writer ? (
                <>
                  <b className="hover-effect">{writer}</b>
                  <p style={{ marginTop: "5px", fontSize: "small" }}>Writer</p>
                </>
              ) : null}
            </div>
            {/* </div> */}
            {/* <div className='two'style={{display:"flex", color:'black'}}> */}
            <div>
              {producer ? (
                <>
                  <b className="hover-effect">{producer}</b>
                  <p style={{ marginTop: "5px", fontSize: "small" }}>
                    Producer
                  </p>
                </>
              ) : null}
            </div>
            <div>
              {screenplay ? (
                <>
                  <b className="hover-effect">{screenplay}</b>
                  <p style={{ marginTop: "5px", fontSize: "small" }}>
                    Screenplay
                  </p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="cast">
        <Cast cast={cast} />
        <div className="media" >
          <Media video={video} searchItem={searchItem} imagesapi={imagesapi} />
          
        </div>
        <div style={{position:"absolute", top: '163%', width:"100%"}}>
      <Footer/>
      </div>

      </div>
      
    </div>
  );
};

export default MovieData;
