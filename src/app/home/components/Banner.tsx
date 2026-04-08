"use client"
import { useMovieStore } from '@/store/useMovieStore';
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
    const { setShowTrailer, setTrailetId, language } = useMovieStore()
    return (
        <div
            className="relative w-full sm:min-h-screen min-h-[60vh] bg-cover bg-center"
            style={{
                backgroundImage: `url("${url_image}${movie.backdrop_path}")`,
            }}
        >
            <div className="absolute bg-[#00000083] top-0 left-0 w-full h-full container-x flex md:flex-row flex-col-reverse items-center md:justify-between justify-end gap-x-5 sm:pt-10 pt-5">
                <div className="text-white max-w-full md:max-w-[55%] sm:px-0 px-1">
                    <h1 className="lg:text-7xl sm:text-5xl text-4xl font-bold opacity-0 animate-[slideDown_0.4s_ease-out_0.4s_forwards]" >{movie.title}</h1>
                    <p className="sm:my-10 my-5 sm:text-lg text-sm sm:line-clamp-4 line-clamp-3 opacity-0 animate-[slideDown_0.4s_ease-out_0.8s_forwards]">{movie.overview}</p>

                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 opacity-0 animate-[slideDown_0.4s_ease-out_1s_forwards] z-10">
                        <Link href={`/movie/${movie.id}`} className="bg-red-600 text-white font-bold sm:py-3 py-1 sm:px-10 px-5 rounded-full sm:text-base text-[12px] transition-all cursor-pointer shadow-[0_0_20px_5px_#ff0000a1] hover:shadow-[0_0_25px_10px_#ff0000a1]" >
                            {language === "en-US" ? "Watch now" : "Xem ngay"}
                        </Link>

                        <button className="  border border-white text-white font-bold sm:py-3 py-1 sm:px-10 px-5 rounded-full hover:bg-white sm:text-[16px] text-[12px] hover:text-red-500 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                setShowTrailer(true);
                                setTrailetId(movie.id)
                            }}>
                            {language === "en-US" ? "Watch trailer" : "Giới thiệu"}
                        </button>
                    </div>
                </div>

                <div
                    className="lg:max-w-[350px] relative sm:max-w-[240px] max-w-[150px] w-full lg:h-[500px] md:h-[350px] sm:h-[300px] h-[200px] bg-cover bg-center sm:rounded-2xl rounded-lg shadow-2xl my-5 lg:my-0 mx-auto flex items-end overflow-hidden"
                    style={{
                        backgroundImage: `url("${url_image}${movie.poster_path}")`,
                        animation: 'scaleUp .5s ease-out forwards',
                    }}
                />
            </div>
            <div className="absolute bottom-0 w-full sm:h-[150px] h-[50px] bg-gradient-to-t from-gray-950 to-transparent" />

        </div>
    );
}

export default function Banner() {

    const { getData, loading } = useFetch()
    const [movies, setMovies] = useState<Detail[]>([])
    const { showTrailer, language } = useMovieStore()

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
    }, [language]);

    return (
        <div className='w-full bg-gray-950'>
            {loading ?
                <div className='h-[50vh]'><Loading /></div> :
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={1}
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
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
