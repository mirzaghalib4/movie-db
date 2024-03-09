import React from 'react';    
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Movie from './components/Movie';
import { Layout } from './components/Layout';

import  SearchPage  from './components/SearchPage';
import MovieData from './components/MovieData';
import { Nowplaying } from './components/Nowplaying';
import { Homepage } from './pages/home';
import { Upcoming } from './components/Upcoming';
import { Toprated } from './components/Toprated';
import { Populartv } from './components/Populartv';
import { Airingtoday } from './components/Airingtoday';
import { Ontv } from './components/Ontv';
import { TopratedTv } from './components/TopratedTv';


const App = () => {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: "/movies",
          element: <Movie />
        },
        {
          path: '/search',
          element: <SearchPage />
         },
         {
          path: '/movie',
          element: <MovieData  />
         },
        {
          path: "/now-playing",
          element: <Nowplaying />,
        },
        {
          path:"/upcoming",
          element: <Upcoming />,
        },
        {
          path:"/top-rated",
          element: <Toprated />
        },
        {
          path: "/tv",
          element: <Populartv />
        },
        {
          path:"/tv/airing-today",
          element: <Airingtoday/>
        },
        {
          path:"/tv/on-the-air",
          element: <Ontv />
        },
        {
          path: "/tv/top-rated",
          element: <TopratedTv />
        }
      ]
    },
    // {
    //   path: "movies",
    //   element: <Movie />,
    // }


  ]);
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App