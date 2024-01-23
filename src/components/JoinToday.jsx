import React from "react";

export const JoinToday = () => {
  return (
    <div className="wrapper-background" >
      <div className=" layout1">
      <h1 style={{ marginTop: "27px", display:'inline-block'}}>
        Join Today
      </h1>
      <div className= 'wrap'style={{display:'flex',lineHeight:"23px" ,marginTop:"0px",fontSize:"17px"}}>
      <div className='paragraph' >
        <p style={{marginTop:"0px"}}>
          Get access to maintain your own <span className="colored">custom personal lists</span>, <span className="colored">track what
          you've seen</span> and search and filter for <span className="colored">what to watch next</span>—regardless if
          it's in theatres, on TV or available on popular streaming services
          like Netflix, Amazon Prime Video, Zee5, Sun Nxt, and Rooster Teeth.
        </p>
        <button className="signup-butt"type="submit" value="sign up">Sign Up</button>
      </div>
      <div  style={{lineHeight:"21px"}}>
        <ul style={{marginTop:"0px", opacity:"0.7"}}>
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>Filter by your subscribed streaming services and find something to watch</li>
          <li>Log the movies and TV shows you've seen<br/></li>
          <li>Build custom lists</li>
          <li>Contribute to and improve our database</li>
         
        </ul>
      </div>
      </div>
    </div>
    </div>
  );
};
