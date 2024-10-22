import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Upcomming = () => {
    const APIKEY=process.env.REACT_APP_API_KEY;

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getMovies = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=ko-KR`);

            setUpcomingMovies(response.data.results);
            // console.log(response.data);
            setLoading(false);
        } catch (err) {
            console.error('Error:', err);
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovies()
    }, []);

    const getRandomMovie = () => {
        const randomIndex = Math.floor(Math.random() * upcomingMovies.length);
        return upcomingMovies[randomIndex]
    }

    const randomMovie = getRandomMovie();

    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2000 , disableOnInteraction :true }}
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                upcomingMovies.slice(0,5).map((item) => (
                    <SwiperSlide>
                        <div>
                            {
                                isLoading ? (<div>Loading...</div>) : (
                                    <div className='upMovie'>
                                        <div className="upBackImg">
                                            <img src={`http://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title} />
                                        </div>
                                        <div className='upinfoWrap'>
                                            <div className="upInfo">
                                                <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                                            </div>
                                            <div className="upinfoText">
                                                <p className="upTitle">
                                                    {item.original_title}
                                                </p>
                                                <p className="upRelease">
                                                    {item.tagline}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </SwiperSlide>
                ))


            }


            ...
        </Swiper>

    );
};

export default Upcomming;