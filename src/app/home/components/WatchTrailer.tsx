import { Video } from '@/app/movie/types'
import Loading from '@/components/Loading'
import useFetch from '@/hooks/useFetch'
import { useMovieStore } from '@/store/useMovieStore'
import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function WatchTrailer() {

    const { getData, loading } = useFetch()
    const [video, setVideo] = useState<Video | null>()
    const {trailerId, setShowTrailer, setTrailetId, language } = useMovieStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const id = trailerId;
                const res = await getData(`movie/${id}/videos`);
                const trailer = res.results.find((v: { type: string; site: string; key: string }) =>
                    v.type === 'Trailer' && v.site === 'YouTube'
                )
                setVideo(trailer)

            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };

        fetchMovies();
    }, [language]);


    return (
        <div className='w-full flex min-h-screen bg-[#0000008f] fixed top-0 left-0 z-[101] justify-center items-center'>
            <div className='w-[110vh] sm:h-[85vh] h-[45vh] bg-[#111111ca] sm:p-9 p-0 text-2xl text-white relative'>
                <X className=' absolute top-3 right-3 cursor-pointer hover:text-red-500 transition-all'
                    onClick={() => {
                        setShowTrailer(false);
                        setTrailetId('0')
                    }} />
                <div className="w-full h-full rounded-lg">
                    {loading && <Loading />}
                    <iframe
                        className="w-full h-full aspect-video border-none"
                        src={`https://www.youtube.com/embed/${video?.key}`}
                        title={video?.name}
                        loading='lazy'
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
