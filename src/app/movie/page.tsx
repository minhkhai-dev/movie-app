"use client" 
import ListViewMovieOrTV from '@/components/ListViewMovieOrTV'
import { useMovieStore } from '@/store/useMovieStore'
import React, { Suspense } from 'react'

export default function MoviePageRoute() {
    const {language} = useMovieStore()
    return (
        <div>
            <div
                className="w-full sm:min-h-[30vh] min-h-[25vh] relative "
                style={{
                    backgroundImage: `url("https://media.dolenglish.vn/PUBLIC/MEDIA/65232f00-d78e-451a-ab4e-07c056e061b3.jpg")`,
                    backgroundPosition: 'center',
                }}>
                <div className=' absolute top-0 left-0 w-full h-full bg-[#000000ba] flex justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>{language === "en-US" ? "Movies" : "Phim ảnh"}</h1>
                </div>
                <div className="absolute bottom-0 w-full sm:h-[150px] h-[80px] bg-gradient-to-t from-gray-950 to-transparent" />
            </div>
            <div className='container-x bg-gray-950 pt-5 pb-15'>
                <Suspense fallback={<div className="text-center text-white p-8"></div>}>
                    <ListViewMovieOrTV />
                </Suspense>
            </div>
        </div>
    )
}