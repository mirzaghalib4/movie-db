import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
// import { CircularProgressBar } from './CircularProgressBar';

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();
  const fetchedItem = async () => {
    console.log("fetcheddddddd search", searchKey);
    navigate(`/search?query=${searchKey}`);
  };

  //background image code
  const API_URL = "https://api.themoviedb.org/3/trending/movie/day?";
  const img_url = "https://image.tmdb.org/t/p/w1280";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/`, {
      params: {
        api_key: "40ba7941c447be055292d434b41ecaf1",
      },
    });
    setData(results);
  };
  function getRandomItem(num) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * num);
    return randomIndex;
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchedItem();
  };

  return (
    <div>
      <div className="cover">
        <div
          style={{
            overflow: "hidden",
            height: "300px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          {data.length > 0 && (
            <img
              className="movie-cover"
              src={`${img_url}${
                data[getRandomItem(data.length)].backdrop_path
              }`}
              alt=""
            />
          )}
          {/* <h5 className='title'>{data?.[0]?.title}</h5> */}
          <div className="text layout1">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search layout1">
            <form onSubmit={searchMovies} style={{ width: "100%" }}>
              <input
                className="inputfield"
                type="text"
                id="searchdata"
                placeholder="Search for a movie,tv shows, person..... "
                onChange={(e) => setSearchKey(e.target.value)}
                value={searchKey}
              />
            </form>
            <button
              className="submit-button"
              type={"submit"}
            >
              Search
            </button>
            
            {/* <CircularProgressBar percent={10}  /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
