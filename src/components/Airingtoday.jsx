import React from "react";
import { useSearchParams  } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import { Movietypes } from "./Movietypes";
import MovieData from "./MovieData";


export const Airingtoday = () => {
  const [Airingtoday, setAiringtoday] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchApi = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`,
      {
        params: {
          api_key: "40ba7941c447be055292d434b41ecaf1",
        },
      }
    );
    setAiringtoday(data.data.results);

    //console.log(data)
  };
  console.log("this api is working",Airingtoday);
  useEffect(() => {
    fetchApi();
  }, []);
  if (id) return <MovieData tv={true} />;

  return (
    <div className="dropdown">
      <Movietypes movie={Airingtoday} isTv={true}/>
    </div>
  );
};
