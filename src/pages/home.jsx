import React from "react";
import { LatestTrailers } from "../components/LatestTrailers";
import Search from "../components/Search";
import { Trending } from "../components/Trending";
import { JoinToday } from "../components/JoinToday";
import { Footer } from "../components/Footer";
export const Homepage = () => {
  return (
    <>
      <Search />
      <Trending />
      <LatestTrailers />
      <JoinToday />
      <Footer />
      
    </>
  );
};
