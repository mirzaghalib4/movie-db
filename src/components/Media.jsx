import React, { useState, useEffect} from "react";
import axios from "axios";
import Modal from "react-modal";
const img_url = "https://image.tmdb.org/t/p/w500";
const img_url2 = "https://image.tmdb.org/t/p/w300";
export const Media = ({ video, searchItem, imagesapi}) => {
  const [popular, setpopular] = useState(true);
  const [videos, setvideos] = useState(false);
  const [backdrops, setbackdrops] = useState(false);
  const [posters, setposters] = useState(false);
  const [vidborder, setvidborder] = useState(false);
  const [backdropborder, setbackdropborder] = useState(false);
  const [posterborder, setposterborder] = useState(false);
  const [popborder, setpopborder] = useState("2px solid");
  const [mediaVideos, setmediavideos] = useState("");
  //function to toggle
  const toggleContainer = (containerNumber) => {
    if (containerNumber === 1) {
      setpopular(true);
      setvideos(false);
      setbackdrops(false);
      setposters(false);
      setpopborder("2px solid");
      setbackdropborder(false);
      setposterborder(false);
      setvidborder(false);
    } else if (containerNumber === 2) {
      setpopular(false);
      setvideos(true);
      setbackdrops(false);
      setposters(false);
      setvidborder("2px solid");
      setbackdropborder(false);
      setposterborder(false);
      setpopborder(false);
    } else if (containerNumber === 3) {
      setpopular(false);
      setvideos(false);
      setbackdrops(true);
      setposters(false);
      setbackdropborder("2px solid");
      setvidborder(false);
      setposterborder(false);
      setpopborder(false);
    } else if (containerNumber === 4) {
      setpopular(false);
      setvideos(false);
      setbackdrops(false);
      setposters(true);
      setposterborder("2px solid");
      setvidborder(false);
      setbackdropborder(false);
      setpopborder(false);
    }
  };

  const backdropImages = imagesapi?.backdrops;
  const posterImages = imagesapi?.posters;

  const [trailerKey, settrailerkey] = useState("");
  useEffect(() => {
    //Media videos
    setmediavideos(video?.results);
    //    console.log("media videos", mediaVideos);
    //trailer

    for (let i = 0; i < video?.results?.length; i++) {
      if (video?.results[i].type === "Trailer")
        //  console.log("trailer", video?.results[i]);
        settrailerkey(video?.results[i].key);
    }
  }, [video]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };
  const trailerApi = `https://www.youtube.com/embed/${trailerKey}`;

  return (
    <div className="mediaContainer" style={{ display: "flex" }}>
      <h3 style={{ fontSize: "23px" }}>Media</h3>
      <div className="toggleMedia">
        <h3
          onClick={() => toggleContainer(1)}
          style={{ borderBottom: popborder, cursor: "pointer" }}
        >
          Most Popular
        </h3>
        {popular && (
          <div className="toggleContent" style={{ display: "flex" }}>
            <div
              style={{
                height: "405px",
                width: "600px",
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={openModal}
            >
              <Modal
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
                  src={trailerApi}
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
              <img
                style={{
                  height: "420px",
                  width: "600px",
                  marginTop: "-32px",
                  zIndex: "1",
                }}
                src={`https://i.ytimg.com/vi/${trailerKey}/hqdefault.jpg`}
              ></img>
              <button className="play-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <circle cx="25" cy="25" r="23" fill="black" opacity={"0.7"} />
                  <polygon
                    className="playIcon"
                    points="33,25 20,17 20,33"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  height: "-webkit-fill-available",
                }}
                src={`${img_url}${searchItem?.backdrop_path}`}
                alt=""
              />
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{ margin: "0px" }}
                src={`${img_url2}${searchItem?.poster_path}`}
                alt=""
              />
            </div>
          </div>
        )}

        <h3
          onClick={() => toggleContainer(2)}
          style={{ borderBottom: vidborder, cursor: "pointer" }}
        >
          Videos <i style={{ color: "grey" }}> {mediaVideos?.length}</i>
        </h3>

        {videos && (
          <div className="toggleContent" style={{ display: "flex" }}>
            {mediaVideos.map((element) => {
              return (
                <div
                  key={element.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={openModal}
                >
                  <Modal
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
                      src={`https://www.youtube.com/embed/${element.key}`}
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
                  <img
                    style={{
                      height: "444px",
                      width: "600px",
                      marginTop: "-50px",
                      zIndex: "1",
                    }}
                    src={`https://i.ytimg.com/vi/${element.key}/hqdefault.jpg`}
                  ></img>

                  <button
                    className="play-button"
                    style={{
                      display: "flex",
                      position: "absolute",
                      zIndex: "3",

                      margin: "0",
                      height: "fit-content",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="23"
                        fill="black"
                        opacity={"0.7"}
                      />
                      <polygon
                        className="playIcon"
                        points="33,25 20,17 20,33"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <h3
          onClick={() => toggleContainer(3)}
          style={{ borderBottom: backdropborder, cursor: "pointer" }}
        >
          Backdrops <i style={{ color: "grey" }}>{backdropImages?.length} </i>
        </h3>
        {backdrops && (
          <div className="toggleContent" style={{ display: "flex" }}>
            {backdropImages.map((element) => {
              return (
                <div key={element.id} style={{ display: "flex" }}>
                  <img
                    style={{
                      height: "444px",
                      width: "600px",
                      marginTop: "-50px",
                      zIndex: "1",
                    }}
                    src={`${img_url}${element.file_path}`}
                  ></img>
                </div>
              );
            })}
          </div>
        )}

        <h3
          onClick={() => toggleContainer(4)}
          style={{ borderBottom: posterborder, cursor: "pointer" }}
        >
          Posters <i style={{ color: "grey" }}>{posterImages?.length}</i>
        </h3>
        {posters && (
          <div className="toggleContent" style={{ display: "flex" }}>
            {posterImages.map((element) => {
              return (
                <div key={element.id} style={{ display: "flex" }}>
                  <img src={`${img_url2}${element.file_path}`} alt="" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
