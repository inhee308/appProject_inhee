import React, { useEffect, useState } from 'react';
import './Movies.scss';
import Movie from './../components/Movie';
import Movieform from '../components/Movieform';

const Movies = () => {
    const [movies, setMovies]=useState([]);

    const removeMovie=(id)=>{
        setMovies(movies.filter(movie=>{
            return movie.id !==id
        }))
    }

   useEffect(()=>{
      console.log('render')
   });

   const renderMovies=movies.length ? movies.map((movie, i)=>{
    return (
       <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
    )
 }) : (<div className='strongText'>보고싶은 영화가 없습니다</div>)

 const addMovie=(movie)=>{
    setMovies([
        ...movies,
        movie
    ])
 }

   return (
      <div className='movies'>
         <h1>Movie List</h1>
         <Movieform addMovie={addMovie}/>
         {renderMovies}
      </div>
   );
};

export default Movies;