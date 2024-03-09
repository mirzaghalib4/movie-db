import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";

import { Movietypes } from "./Movietypes";

export const Upcoming = () => {
  const [upcomingApi, setupcomingapi] = useState("");

  const fetchApi = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,{
        params:{
            api_key:'40ba7941c447be055292d434b41ecaf1'
        }
    })
    setupcomingapi(data.data.results)

    //console.log(data)
  }
  console.log("this api is working", upcomingApi)
useEffect(() => {
  fetchApi();
}, [])
  return (
    <div className="dropdown">  
    <Movietypes movie={upcomingApi}/>
  </div>
  )
}

