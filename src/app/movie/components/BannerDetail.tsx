import React from 'react'
import { Casts, Detail } from '../types'
import { useMovieStore } from '@/store/useMovieStore'

export default function BannerDetail({ movie, cast }: { movie: Detail, cast: Casts[] }) {
    const { url_image, language } = useMovieStore()
    return (
        <div className='w-full sm:max-h-[125vh] max-h-[80vh] h-full bg-gray-950 overflow-hidden'>
            <div className='w-full sm:h-[60vh] h-[40vh] bg-cover bg-center relative'
                style={{
                    backgroundImage: `url("${url_image}${movie?.backdrop_path}")`,
                }}>
                <div className='absolute top-0 left-0 bg-[#0000007d] w-full h-full' />
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-gray-950 to-transparent" />
            </div>

            <div className='relative top-0 left-0 -translate-y-2/5 '>
                <div className='container-x flex gap-x-[3%]'>
                    <div className='hidden lg:block max-w-[350px] w-full h-[500px] bg-cover bg-center rounded-2xl shadow-2xl'
                        style={{
                            backgroundImage: `url("${url_image}${movie?.poster_path}")`,
                        }} >
                    </div>

                    <div className='w-full'>
                        <h1 className='md:text-7xl sm:text-5xl text-4xl text-white font-semibold mb-6'>{movie?.title || movie?.name}</h1>

                        <div className='flex gap-3 mb-6 flex-wrap'>
                            {movie?.genres.map(gen => (
                                <h2 key={gen.id} className='text-white sm:border-2 border border-white py-1 px-3 rounded-full sm:text-sm text-[12px]'>{gen.name}</h2>
                            ))}
                        </div>

                        <p className='text-white sm:text-lg text-sm sm:mb-8 mb-5 text-justify line-clamp-4 sm:line-clamp-6'>{movie?.overview}</p>

                        <div>
                            <h2 className='text-white sm:text-2xl text-lg font-semibold sm:mb-4 mb-2'>{language === "en-US" ? "Casts" : "Diễn viên"}</h2>
                            <div className='sm:my-8 my-5 flex sm:gap-x-4 gap-x-2 overflow-x-scroll scroll-smooth scroll-hidden' >
                                {cast?.map(ca => (
                                    <div key={ca.id}>
                                        <div className='sm:w-[100px] sm:h-[120px] w-[60px] h-[80px] bg-cover bg-center rounded-xl'
                                            style={{
                                                backgroundImage: `url("${url_image}${ca?.profile_path}")`,
                                            }} />
                                        <h3 className='text-white mt-3 sm:text-sm text-[10px]'>{ca.name}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
