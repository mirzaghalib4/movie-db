import PopularCard from './PopularCard';
import React, { useState, useEffect } from 'react';


import axios from 'axios';
//const API = 'https://api.themoviedb.org/3/movie/popular?api_key=40ba7941c447be055292d434b41ecaf1&language=en-US&page=1';

function Movie() {
    const API_URL='https://api.themoviedb.org/3';

    const [popular, setpopular] = useState([]);
    const [searchKey] = useState('');

      const fetchPopular = async () => {
        const type = searchKey ? 'search' : 'discover'
        const {data:{results}} = await axios.get(`${API_URL}/${type}/movie`,{
            params:{
                api_key:'40ba7941c447be055292d434b41ecaf1',
                query : searchKey
            }
        })
        setpopular(results);
        console.log(popular);
    }
    useEffect(() => {
    fetchPopular();
    })

    // const searchMovies = (e) => {
    //     e.preventDefault()
    //     fetchPopular(searchKey)
    // }
    
const renderPopular = () =>(
    popular.map(movie => (
        <PopularCard
        key={movie.id}
        movie={movie}
        />
    )
         )
)
    return (
        <div>
        <div className='dropdown'>
            <div className='pop-container'>
                {renderPopular()}
            </div>
            </div>

        
        </div>
    )
}
export default Movie;