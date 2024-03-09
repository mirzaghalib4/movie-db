import React from "react";
//import { redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Movietypes } from "./Movietypes";

export const Toprated = () => {
  const [Topratedapi, settopratedapi] = useState("");

  const fetchApi = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      {
        params: {
          api_key: "40ba7941c447be055292d434b41ecaf1",
        },
      }
    );
    settopratedapi(data.data.results);

    //console.log(data)
  };
  console.log("this api is working", Topratedapi);
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="dropdown">
      <Movietypes movie={Topratedapi} />
    </div>
  );
};
