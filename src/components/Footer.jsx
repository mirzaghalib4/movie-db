import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col-1">
          <img
            className="footer-logo"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="tmdb logo"
          />
          <button className="footer-button"></button>
        </div>
        <div className="cols">
          <h3>THE BASICS</h3>
          <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div className="cols">
          <h3>GET INVOLVED</h3>
          <li>Contribution Bible</li>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </div>
        <div className="cols">
          <h3>COMMUNITY</h3>
          <li>Guidelines</li>
          <li>Discussions</li>
          <li>Leaderboard</li>
        </div>
        <div className="cols">
          <h3>LEGAL</h3>
          <li>Terms of Use</li>
          <li>API Terms of Use</li>
          <li>Privacy Policy</li>
          <li>DMCA Policy</li>
        </div>
      </div>
    </div>
  );
};
