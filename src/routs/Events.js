import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Events = () => {
    const APIKEY =process.env.REACT_APP_API_KEY;
    const [appMovie, setAppMovie] = useState([]);
    /*    const [isLoading, setLoading]= useState(true); */
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ko-KR`).then(response => {
            setAppMovie(response.data.results)
            console.log(response.data.results)

        })
    }, []);
    return (
        <>

            <div className='eventsWrap'>
                <h2>전체 이벤트</h2>
                <div className='eventlistWrap'>
                    {
                        appMovie.slice(0, 3).map((item) => (
                            <div className="appEvent" key={item.id}>
                                <Link to={`/events/${item.id}`}>
                                    <div className="eventlist">
                                        <div className='eventImg'><img src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></div>
                                        <div className="eventDate">
                                            {item.release_date}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <br />
                <h3>시사회 / 무대인사</h3>
                <div className='eventlistWrap'>
                    {
                        appMovie.slice(3, 6).map((item) => (
                            <div className="appEvent" key={item.id}>
                                <Link to={`/events/${item.id}`}>
                                    <div className="eventlist">
                                        <div className='eventImg'><img src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></div>
                                        <div className="eventDate">
                                            {item.release_date}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <br />
                <h3>HOT</h3>
                <div className='eventlistWrap'>
                    {
                        appMovie.slice(6, 9).map((item) => (
                            <div className="appEvent" key={item.id}>
                                <Link to={`/events/${item.id}`}>
                                    <div className="eventlist">
                                        <div className='eventImg'><img src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></div>
                                        <div className="eventDate">
                                            {item.release_date}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <br />
                <img src={process.env.PUBLIC_URL + '/banner01.jpg'} alt="eventBanner" />
            </div>
            <div className='bannerWrap'>
                <img src={process.env.PUBLIC_URL + '/banner01.png'} alt="" />
            </div>
        </>
    );
};

export default Events;