"use client"
import { useMovieStore } from '@/store/useMovieStore';
import { Movie } from '@/types';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import useFetch from '@/hooks/useFetch';
import Loading from '@/components/Loading';
import Link from 'next/link';
import { Detail } from '@/app/movie/types';
import WatchTrailer from './WatchTrailer';


function BannerItem({ movie }: { movie: Detail }) {
    const { url_image } = useMovieStore()
    const { setShowTrailer, setTrailetId} = useMovieStore()
    return (
        <div
            className="relative w-full sm:min-h-screen min-h-[50vh] bg-cover bg-center"
            style={{
                backgroundImage: `url("${url_image}${movie.backdrop_path}")`,
            }}
        >
            <div className="absolute bg-[#00000083] top-0 left-0 w-full h-full container-x flex items-center justify-between gap-x-5 pt-10">
                <div className="text-white max-w-full md:max-w-[50%]">
                    <h1 className="lg:text-7xl sm:text-5xl text-4xl font-bold opacity-0 animate-[slideDown_0.4s_ease-out_0.4s_forwards]" >{movie.title}</h1>
                    <p className="sm:my-10 my-5 sm:text-lg text-base line-clamp-4 opacity-0 animate-[slideDown_0.4s_ease-out_0.8s_forwards]">{movie.overview}</p>

                    <div className="flex flex-wrap gap-4 mt-4 opacity-0 animate-[slideDown_0.4s_ease-out_1s_forwards]">
                        <Link href={`/movie/${movie.id}`} className="bg-red-600 text-white font-bold py-3 sm:px-10 px-6 rounded-full sm:text-base text-sm transition-all cursor-pointer shadow-[0_0_20px_5px_#ff0000a1] hover:shadow-[0_0_25px_10px_#ff0000a1]" >
                            Watch now
                        </Link>

                        <button className="hidden sm:block border border-white text-white font-bold py-3 sm:px-10 px-7 rounded-full hover:bg-white sm:text-[16px] text-sm hover:text-red-500 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                setShowTrailer(true);
                                setTrailetId(movie.id)
                                }}>
                            Watch trailer
                        </button>
                    </div>
                </div>

                <div
                    className="relative hidden md:block lg:w-[320px] lg:h-[500px] w-[280px] h-[450px] lg:mr-[3%] mr-0 shadow-2xl rounded-2xl overflow-hidden bg-right bg-cover"
                    style={{
                        backgroundImage: `url("${url_image}${movie.poster_path}")`,
                        animation: 'scaleUp .5s ease-out forwards',
                    }}
                />
            </div>
            <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-gray-950 to-transparent" />

        </div>
    );
}

export default function Banner() {

    const { getData, loading } = useFetch()
    const [movies, setMovies] = useState<Detail[]>([])
    const { showTrailer} = useMovieStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await getData("movie/popular");
                setMovies(res!.results.slice(0, 10));

            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };

        fetchMovies();
    }, []);
    // console.log(movies)

    return (
        <div className='w-full bg-gray-950'>
            {loading ?
                <div className='h-[50vh]'><Loading /></div> :
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={1}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}>
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <BannerItem
                                movie={movie}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
            {showTrailer && <WatchTrailer />}
        </div>
    );
}
