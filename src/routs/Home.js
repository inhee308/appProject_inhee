import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';
import Appmovie from '../components/Appmovie';
import Upcomming from '../components/Upcomming';

const Home = () => {
    //const APIKEY =process.env.REACT_APP_API_KEY;
    const [appMovie, setAppMovie] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [VisibleMovies, setVisibleMovies] = useState(6);
    const moviesPerPage = 3;

    const getMovies = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`);

            setAppMovie(response.data.results);
            // console.log(response.data)
            setLoading(false)

        } catch (error) {
            console.log('Error:', error)
            setLoading(false)
        }
    }

    // http://openapi.foodsafetykorea.go.kr/api/81229f43ae1247cab397/COOKRCP01/json/1/5
    // 인증키 81229f43ae1247cab397

    //546c72b99cf64514c2c03c7ef473011b - 선생님 키

    useEffect(() => {
        getMovies()
    }, []);

    const handleLodeMore=() => {
        setVisibleMovies((prevVisible) =>VisibleMovies+moviesPerPage);
    }

    return (
        <>
            <Upcomming />

            <div className='homeWrap'>
                <h2 className='title'>상영작</h2>
                {
                    isLoading ? (<div><span className='load'>Loading...</span></div>) : (
                        <div className="appWrap">
                            {appMovie.slice(0, VisibleMovies).map((amovie) => (<Appmovie key={amovie.id} id={amovie.id} title={amovie.title} poster_path={amovie
                                .poster_path} release_date={amovie.release_date} />))}
                        </div>
                    )
                }
                {
                    appMovie.length > VisibleMovies && (
                        <div className='more'>
                            <button className='moreBtn' onClick={handleLodeMore}>더보기</button>
                        </div>
                    )

                }
            </div>
        </>
    );
};

export default Home;