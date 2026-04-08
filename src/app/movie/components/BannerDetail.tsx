import React from 'react'
import { Casts, Detail } from '../types'
import { useMovieStore } from '@/store/useMovieStore'
import WatchTrailer from '@/app/home/components/WatchTrailer'
import { Star } from 'lucide-react'
import Link from 'next/link'

export default function BannerDetail({ movie, cast, type }: { movie: Detail, cast: Casts[], type: string }) {
    const { url_image, language, setTrailetId, setShowTrailer, showTrailer } = useMovieStore()
    return (
        <div className='w-full sm:max-h-[125vh] max-h-[85vh] h-full bg-gray-950 overflow-hidden'>
            <div className='w-full sm:h-[70vh] h-[30vh] bg-cover bg-center relative'
                style={{
                    backgroundImage: `url("${url_image}${movie?.backdrop_path}")`,
                }}>
                <div className='absolute top-0 left-0 bg-[#0000007d] w-full h-full' />
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-gray-950 to-transparent" />
            </div>

            <div className='relative top-0 left-0 sm:-translate-y-3/5 -translate-y-2/6'>
                <div className='container-x flex lg:flex-row flex-col gap-x-[3%]'>
                    <div className='lg:max-w-[350px] sm:max-w-[240px] max-w-[150px] w-full lg:h-[500px] sm:h-[300px] h-[200px] bg-cover bg-center sm:rounded-2xl rounded-lg shadow-2xl my-5 lg:my-0 mx-auto flex items-end overflow-hidden'
                        style={{
                            backgroundImage: `url("${url_image}${movie?.poster_path}")`,
                        }} >
                        <h1 className='bg-red-500 hover:bg-red-600 md:text-lg sm:text-sm text-xs md:py-3 py-2 w-full text-white text-center font-semibold cursor-pointer '
                            onClick={() => {
                                setShowTrailer(true);
                                setTrailetId(movie.id)
                            }}>
                            {language === "en-US" ? "Official Trailer" : "Xem Trailer"}
                        </h1>
                    </div>

                    <div className='w-full'>
                        <h1 className='md:text-7xl sm:text-4xl text-2xl text-white font-semibold mb-6 text-center lg:text-left'>{movie?.title || movie?.name}</h1>

                        <div className='flex gap-3 mb-6 flex-wrap justify-center lg:justify-start'>
                            {movie?.genres.map(gen => (
                                <Link href={`/${type}?with_genres=${gen.id}&title=${gen.name}`}
                                    key={gen.id} className='text-white sm:border-2 border border-white py-1 px-3 rounded-full sm:text-sm text-[12px] hover:text-gray-900 hover:bg-white transition-all cursor-pointer'>
                                    {gen.name}
                                </Link>
                            ))}
                        </div>

                        <div className='flex flex-col sm:gap-3 gap-2 mb-5'>
                            <p className='text-white sm:text-lg text-sm text-justify line-clamp-3 md:line-clamp-4 lg:line-clamp-5'>{movie?.overview}</p>
                            <p className='text-gray-300 sm:text-lg text-sm text-justify'>
                                {language === "en-US" ?
                                    `Release date: ${movie?.release_date ? `${movie?.release_date}` : "Updating..."}`
                                    :
                                    `Ngày phát hành: ${movie?.release_date ? `${movie?.release_date}` : "Đang cập nhật..."}`
                                }
                            </p>
                            <p className='text-gray-300 sm:text-lg text-sm text-justify'>
                                {language === "en-US" ?
                                    `Rumtime: ${movie?.runtime ? `${movie?.runtime} minute` : "Updating..."}`
                                    :
                                    `Thời lượng: ${movie?.runtime ? `${movie?.runtime} phút` : "Đang cập nhật..."}`
                                }
                            </p>
                            <p className='text-gray-300 sm:text-lg text-sm text-justify flex items-center gap-2'>
                                {language === "en-US" ?
                                    `Evaluate: ${movie?.vote_average ? `${Math.floor(Number(movie?.vote_average))}/10` : "Updating..."}`
                                    :
                                    `Đánh giá: ${movie?.vote_average ? `${Math.floor(Number(movie?.vote_average))}/10` : "Đang cập nhật..."}`
                                }
                                <Star size={20} color='yellow' />
                            </p>
                            <p className='text-gray-300 sm:text-lg text-sm text-justify flex items-center gap-2'>
                                {language === "en-US" ? "Status: " : "Trạng thái: "}
                                {getStatusText(movie?.status, language)}
                            </p>
                        </div>

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
            {showTrailer && <WatchTrailer />}
        </div>
    )
}

const getStatusText = (status: string | undefined, language: string) => {
    if (language === "vi-VN") {
        switch (status?.toLowerCase()) {
            case "released":
                return "Đã phát hành";
            case "in production":
                return "Đang sản xuất";
            case "upcoming":
                return "Sắp ra mắt";
            case "ended":
                return "Đã kết thúc";
            case "post production":
                return "Hậu kỳ";
            case "rumored":
                return "Tin đồn";
            case "returning series":
                return "Loạt phim trở lại";
            default:
                return status || "Đang cập nhật...";
        }
    }
    
    return status || "Updating...";
};