import React from 'react';
import { Link } from 'react-router-dom';

const Appmovie = ({id, title, poster_path, release_date}) => {
    return (

        <div className='movie_detail'>
            <Link to={`/about/${id}`}>               
                <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <h2>{title}</h2>
                <div className="date">Date : {release_date}</div>
            </Link>
        </div>


    );
};

export default Appmovie;