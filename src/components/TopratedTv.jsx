import React from 'react'
import {  useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movietypes } from "./Movietypes";
import MovieData from "./MovieData";
export const TopratedTv = () => {
    const [toprated, settoprated] = useState("");
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
  const fetchApi = async () => {

    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`,
      {
        params: {
          api_key: "40ba7941c447be055292d434b41ecaf1",
        },
      }
    );
    settoprated(data.data.results);

    //console.log(data)
  };
  console.log("this api is working", settoprated);
  useEffect(() => {
    fetchApi();
  }, []);
  if (id) return <MovieData tv={true} />;

  return (
    <div className="dropdown">
    <Movietypes movie={toprated} isTv={true} />
  </div>
  )
}

