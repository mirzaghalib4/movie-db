import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
    const APIURL = 'https://api.themoviedb.org/3/search/multi?';
    const img_url ='https://image.tmdb.org/t/p/w500';

    const [searchItem, setsearchItem] = useState([]);
    let [searchParams] = useSearchParams();
    const query = searchParams.get("query");

    const getData = async () => {
            const { data: { results } } = await axios.get(APIURL, {
            params: {
                api_key: '40ba7941c447be055292d434b41ecaf1',
                query
            }
        })

        setsearchItem(results);
}
useEffect(() => {
  getData()

})

console.log(searchItem)

return (
  <div>
  <div className="search-Data">
   
       { searchItem
       .filter(movie => movie.poster_path) 
       .map(movie=> 
       <div className="search-item">

    
    {movie.poster_path ? <img className='movie-card' src={`${img_url}${movie.poster_path}`} alt=''/>
       : null }

    {movie.title ? <h3 className='title-card'>{movie.title}</h3>
    : <h3 className='title-card'>{movie.name}</h3>}

{movie.release_date ? (
  <h4 className='release-date'>
    {new Date(movie.release_date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}
  </h4>
) : (
  <h4 className='release-date'>
    {new Date(movie.first_air_date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })}
  </h4>
)}

    {movie.overview ? <p className='overview'>{movie.overview}</p>
     : null}

 

    </div>
       ) 
} 
</div>
{/* {searchItem .filter(elem => elem.media_type === 'person')
.map(elem=> 


   <div className='search-item'>
     {elem.profile_path ? <img className='movie-card' src={`${img_url}${elem.profile_path}`} alt=''/>
       : <img className='movie-card' src={`${img_url}${elem.profile_path}`} alt=''/> }
    <p>{elem.name}</p><p><li className='dot'>{elem.known_for_department}</li></p>
   
   </div>
)} */}

 </div>
               
             
             

       )
}
export default SearchPage