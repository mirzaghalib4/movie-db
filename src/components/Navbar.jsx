import React from "react";
import { useState } from "react";

import logo from "../images/Moviedb.png";

import { Dropdown } from "./Dropdown";
import { moviesLinks, peopleLinks, tvshowsLinks } from "../util/navigation";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container layout1">
        <div className="logo-container">
          <a href="/">
            <img src={logo} alt="website logo" width={158}></img>
          </a>
        </div>
        <div
          className="nav-links"
          style={{
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "medium",
            fontWeight: "600",
            cursor:'pointer'
          }}
        >
          <Dropdown head="Movies" links={moviesLinks} />
          <Dropdown head='TV Shows' links={tvshowsLinks} />
          {/* <Dropdown head='People' links={peopleLinks} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
