import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useMovieStore } from '@/store/useMovieStore';
import useFetch from '@/hooks/useFetch';
import { MovieOrTV } from '@/types';
import { Play } from 'lucide-react';
import Link from 'next/link';
import Loading from '@/components/Loading';


function MovieTypeItem({ list, type }: { list: MovieOrTV, type: string }) {
    const { url_image } = useMovieStore()
    return (
        <Link href={`/${type}/${list.id}`} className='w-full text-white hover:text-red-500 transition-all cursor-pointer'>
            <div
                className='w-full md:h-[300px] h-[200px] bg-cover bg-center rounded-xl relative'
                style={{
                    backgroundImage: `url("${url_image}${list.poster_path}")`,
                }}>
                <div className=' absolute top-0 left-0 bg-[#000000b0] w-full h-full duration-300 opacity-0 hover:opacity-100 transition-all grid place-content-center'>
                    <Play size={30} className='text-gray-50 shadow-[0_0_25px_2px_#fb2c36] bg-red-500 rounded-4xl p-4 w-[80px] h-[50px] hover:shadow-[0_0_25px_5px_#fb2c36] transition-all scale-95 hover:scale-100' />
                </div>
            </div>
            <h1 className=' font-semibold md:text-lg text-sm my-3'>{list.title || list.name}</h1>
        </Link>
    )
}

export default function ListMovieOrTVByKey({ typename, linkto, type }: { typename: string, linkto: string, type: string }) {

    const { getData, loading } = useFetch()
    const [movies, setMovies] = useState<MovieOrTV[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await getData(`${type}/${linkto}`);
                setMovies(res!.results);

            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };

        fetchMovies();
    }, []);


    return (
        <div className='w-full sm:pt-6 pt-3 bg-gray-950 '>
            <div className='flex justify-between items-center mb-7'>
                <h1 className='sm:text-2xl tetx-xl text-white font-semibold'>{typename}</h1>
                {typename != "Similar" &&
                    <Link href={`/${type}?type=${linkto}`} className='sm:border-[3px] border-[1px] sm:text-sm text-xs border-white py-1 sm:px-6 px-4 font-semibold rounded-full text-white cursor-pointer hover:bg-white hover:text-red-500 transition-all'>View more
                    </Link>
                }
            </div>

            {loading ?
                <Loading /> :
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    // freeMode={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    className='w-full'
                >

                    {movies.map((movie) => (
                        <SwiperSlide className="md:!w-[220px] !w-[120px]" key={movie.id}>
                            <MovieTypeItem list={movie} type={type} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            }

        </div>
    )
}
