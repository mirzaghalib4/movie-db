import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
const img_url = "https://image.tmdb.org/t/p/w400";
const img_url2 = "https://image.tmdb.org/t/p/w500/";

export const LatestCard = ({ CardApi }) => {
  const background = CardApi?.[1]?.backdrop_path;
  console.log(background);

  const [hoveredPoster, setHoveredPoster] = useState(img_url2 + background);
  const [id, setid] = useState("");
  const [vidkey, setvidkey] = useState("");
  const [videos, setvideos] = useState();
  
  const handleMouseEnter = (path, id) => {
    setHoveredPoster(img_url2 + path);
    setid(id);

    // console.log('this is posterpath', hoveredPoster);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGJhNzk0MWM0NDdiZTA1NTI5MmQ0MzRiNDFlY2FmMSIsInN1YiI6IjYzZDkyOTMyM2RjMzEzMDA4NjRjNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vv12lyEZlEngxxIoFCuJHRCEppjDWibYa3wXxW18abs",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setvideos(response?.data);
  
      })
      .catch(function (error) {
        console.error(error);
      });
      
  }, [id]);

  
  useEffect(() => {
    let foundTrailer = false;
    for (let i = 0; i < videos?.results?.length; i++) {
      if (videos?.results[i].type === "Trailer") {
        console.log("Found a trailer:", videos?.results[i]);
        setvidkey(videos?.results[i].key);
        foundTrailer = true;
        break; // Exit the loop once the trailer is found
      }
    }
  
    if (!foundTrailer) {
      console.log("No trailer found");
      // Optionally set a default key or handle the case when no trailer is found
    }
  }, [videos]);
//   useEffect(() => {
//     let foundKey = false;
//     for (let i = 0; i < videos?.results?.length  && !foundKey; i++) {
//         if (videos?.results[i].type === "Trailer")
//             console.log("trailer", videos?.results[i]);
//           setkey(videos?.results[i].key);
//           foundKey = true
//       }
//   }, [videos])
  
  console.log("this is id", id);
  console.log("TRAILERS", videos);
console.log("key", vidkey);
  const handleMouseLeave = () => {};
//Youtube modal
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (vidkey) => {
    if (vidkey!== '') {
        setIsModalOpen(true);
      }
};
const closeModal = (e) => {
  e.stopPropagation();
  setIsModalOpen(false);
};

 
  //const trailerUrl = `https://www.youtube.com/embed/${key}`;
  return (
    <div
      className="LetestCardCont"
      style={{
        width: "100%",
        position: "relative",
        backgroundImage: `url(${hoveredPoster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease",
      }}
    >
      <div className="contt">
        {Array.isArray(CardApi) && CardApi.length > 0 ? (
          CardApi.map((element) => (
            <div
              key={element.id}
              className="LetestCard"
              style={{ marginTop: "90px", marginLeft: "40px" }}
              onMouseEnter={() =>
                handleMouseEnter(element.backdrop_path, element.id)
              }
              onMouseLeave={handleMouseLeave}
              onClick={openModal}
            >
                 {vidkey && ( <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="YouTube Video"
                style={{
                  App: { filter: "grayscale(100%)" },
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0,0.5)",
                    position: "absolute",
                    zIndex: "10",
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
                    position: "fixed",
                    zIndex: "11",
                  },
                }}
              >
                {/* <div style={{ position: 'relative', paddingTop: '56.25%' }}> */}
                <iframe
                  title="YouTube Video"
                  src={`https://www.youtube.com/embed/${vidkey}`}
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
              </Modal>)}
                <div className="card" style={{width:'300px', height:'170px',display:'flex', justifyContent:'center'}}   >
                
              <img
                className="cardImage"
                style={{
                  height: "170px",
                  width: '300px',
                  borderRadius: "8px",
                  transition: 'transform 0.3s ease'
                }}
                src={`${img_url}${element.backdrop_path}`}
                alt={element.title}
             
              />
              <button className="play-button" style={{width:'max-content',height:'max-content', top:'35%', 
              transition: 'transform 0.3s ease'}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 50 50"
                  
               
                >
                  
                  <polygon
                    className="playyIcon"
                    points="33,25 20,17 20,33"
                    fill="white"
                    border-radius='39px'
                  />
                </svg>
              </button>
       
              </div>
              <h4
                style={{
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "12px",
                }}
              >
                {element.title}
              </h4>
              {/* <p style={{ margin: '0', marginBottom: '10px', padding: '5px', fontSize: "small" }}>{element.character}</p> */}
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};
