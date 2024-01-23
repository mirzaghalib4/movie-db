import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
const img_url = "https://image.tmdb.org/t/p/w200";

export const Cast = ({ cast }) => {
  return (
    <div className='castContainer'>
      <h3
        style={{
          fontWeight: "600",
          fontSize: "1.4em",
          fontFamily: '"Source Sans Pro",Arial,sans-serif',
        }}
      >
        Top Billed Cast
      </h3>
      <div className="castRender">
        {cast?.slice(0, 9).map((element) => {
          return (
            <div key={element.id} className="castCard">
              <img
                style={{
                  height: "200px",
                  width: "150px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: '8px'
                }}
                src={`${img_url}${element.profile_path}`}
              />
              <h4 style={{margin:'0px',marginTop:"5px",padding:'7px', paddingBottom:"0px"}}>{element.name}</h4>
              <p style={{margin:'0',marginBottom:'10px', padding:'5px', fontSize: "small"}}>{element.character}</p>
            </div>
             
          );
        })}
        <div className="viewmore"> <h4 style={{width:'150px',fontWeight:'700'}}>View More <FontAwesomeIcon icon={faArrowRight}/></h4></div>
       
      </div>
      <h4 style={{fontWeight: "500",
          fontSize: "1.3em",
          fontFamily: '"Source Sans Pro",Arial,sans-serif'}}>Full Cast & Crew</h4>
      <hr></hr>
    </div>
  );
};
