'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useMovieStore } from '@/store/useMovieStore';
import { LocalSaveItem } from '@/types';
import { AlarmClockCheck, Play } from 'lucide-react';
import Link from 'next/link';
import { useLocalSaveStore } from '@/store/useLocalSaveStore';


function MovieTypeItem({ list }: { list: LocalSaveItem }) {
    const { url_image } = useMovieStore()
    return (
        <Link href={`/${list.media_type}/${list.id}`} className='w-full text-white hover:text-red-500 transition-all cursor-pointer'>
            <div
                className='w-full md:h-[300px] h-[180px] bg-cover bg-center rounded-xl relative'
                style={{
                    backgroundImage: `url("${url_image}${list.poster_path}")`,
                }}>
                <div className=' absolute top-0 left-0 bg-[#000000b0] w-full h-full duration-300 opacity-0 hover:opacity-100 transition-all grid place-content-center'>
                    <Play size={30} className='text-gray-50 shadow-none sm:shadow-[0_0_25px_2px_#fb2c36] sm:bg-red-500 bg-transparent rounded-4xl p-4 w-[80px] h-[50px] hover:shadow-none sm:hover:shadow-[0_0_25px_5px_#fb2c36] transition-all scale-95 hover:scale-100' />
                </div>
            </div>
            <h1 className=' font-semibold md:text-lg text-sm my-3 line-clamp-2'>{list.title}</h1>
        </Link>
    )
}

export default function ListWatched() {
    const { localSaves, clearAllLocal } = useLocalSaveStore()
    const { language } = useMovieStore()
    function ClearAll() {
        if (confirm(language === "en-US" ? "Delete all watched" : "Xóa tất cả"))
            clearAllLocal()
    }

    if (localSaves.length == 0) return

    return (
        <div className='w-full sm:pt-6 pt-3 bg-gray-950 '>
            <div className='flex justify-between items-center mb-7'>
                <h1 className='sm:text-2xl tetx-xl text-white font-semibold flex items-center gap-2'>
                    <AlarmClockCheck className='sm:block hidden' /> {language === "en-US" ? "Watched Movie / TV" : "Phim / TV đã xem"}
                </h1>
                <div className='sm:text-base text-sm border-white py-1 sm:px-6 px-4 font-semibold rounded-full text-white cursor-pointer hover:underline hover:text-red-400 transition-all' onClick={ClearAll}>
                    {language === "en-US" ? "Delete all" : "Xóa tất cả"}
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView='auto'
                autoplay={{
                    delay: 5000,
                }}
                className='w-full'
            >

                {localSaves.map((movie) => (
                    <SwiperSlide className="md:!w-[220px] !w-[120px]" key={movie.id}>
                        <MovieTypeItem list={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}
