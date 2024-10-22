import React from 'react';

const Movie = ({movie, removeMovie}) => {
    return (
        <div className="movie">
            <div className='titleAndyear'>
                <div className="movie-title">{movie.title}</div>
                <div className="movie-year">{movie.year}</div>
            </div>
            <div className="deleteBtn"><button onClick={()=>removeMovie(movie.id)}>삭제</button></div>
        </div>
    );
};

//props사용할때 방법2
// const Movie = (props) => {
//     return (
//         <div className="movie">
//         <div className="movie-title">{props.movie.title}</div>
//         <div className="movie-year">{props.movie.year}</div>
//     </div>
//     );
// };

export default Movie;