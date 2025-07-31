"use client"
import useGetMovie from '@/hooks/useFetch'
import { useMovieStore } from '@/store/useMovieStore'
import { Movie } from '@/types'
import React, { useEffect, useState } from 'react'
import { Casts, Detail, Video } from '../types'
import BannerDetail from './BannerDetail'
import useFetch from '@/hooks/useFetch'
import VideoBox from './VideoBox'
import ListMovieOrTVByKey from '@/app/home/components/ListMovieOrTVByKey'
import Loading from '@/components/Loading'
import { usePathname } from 'next/navigation'

export default function MovieOrTVDetail({ id }: { id: string }) {

    const [movie, setMovie] = useState<Detail | null>()
    const [cast, setCast] = useState<Casts[] | null>()
    const [videos, setVideos] = useState<Video[] | null>()
    const { getData, loading } = useFetch()
    const path = usePathname();
    const type = (path.includes("/movie")) ? "movie" : "tv";

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const dataMovie = await getData(`${type}/${id}`);
                setMovie(dataMovie)
                const dataCast = await getData(`${type}/${id}/credits`)
                setCast(dataCast.cast.slice(0, 5))
                const dataVideo = await getData(`${type}/${id}/videos`)
                setVideos(dataVideo.results.slice(0, 5))

            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };

        fetchMovies();
    }, []);


    return (
        <div className='bg-gray-950 pb-10'>
            {loading ?
                <div className='h-screen'><Loading /></div> :
                <>
                    <BannerDetail movie={movie!} cast={cast!} />
                    <div className='bg-gray-950 min-h-screen container-x '>
                        {videos?.map(video => (
                            <VideoBox key={video.id} video={video} />
                        ))}
                        <ListMovieOrTVByKey typename='Similar' linkto={`${id}/similar`} type={type} />
                    </div>
                </>
            }
        </div>
    )
}
