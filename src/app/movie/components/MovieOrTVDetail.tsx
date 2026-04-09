"use client"
import React, { useEffect, useState } from 'react'
import { Casts, Detail, Review, Video } from '../types'
import BannerDetail from './BannerDetail'
import useFetch from '@/hooks/useFetch'
import VideoBox from './VideoBox'
import ListMovieOrTVByKey from '@/app/home/components/ListMovieOrTVByKey'
import Loading from '@/components/Loading'
import { usePathname } from 'next/navigation'
import { useMovieStore } from '@/store/useMovieStore'
import ReviewDetail from './ReviewDetail'
import { useLocalSaveStore } from '@/store/useLocalSaveStore'

export default function MovieOrTVDetail({ id }: { id: string }) {

    const [movie, setMovie] = useState<Detail | null>()
    const [cast, setCast] = useState<Casts[] | null>()
    const [videos, setVideos] = useState<Video[] | null>()
    const [reviews, setReviews] = useState<Review[] | null>()
    const { getData, loading } = useFetch()
    const { language } = useMovieStore()
    const path = usePathname();
    const type = (path.includes("/movie")) ? "movie" : "tv";
    const movieId = Number(id);
    const { addToSave } = useLocalSaveStore()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const dataMovie = await getData(`${type}/${movieId}`);
                setMovie(dataMovie)
                const dataCast = await getData(`${type}/${movieId}/credits`)
                setCast(dataCast.cast.slice(0, 5))
                const dataVideo = await getData(`${type}/${movieId}/videos`)
                setVideos(dataVideo.results.slice(0, 5))
                const dataReview = await getData(`${type}/${movieId}/reviews`);
                setReviews(dataReview.results.slice(0, 6));

            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };
        
        fetchMovies();
    }, [id, type, language]);

    useEffect(() => {
        if (movie){
            addToSave({
            id: movie.id,
            title: movie.title || movie.name,
            poster_path: movie.poster_path,
            media_type: type
        })
        }
    }, [movie])

    return (
        <div className='bg-gray-950 pb-10'>
            {loading ?
                <div className='sm:h-screen h-[70vh]'><Loading /></div> :
                <>
                    <BannerDetail movie={movie!} cast={cast!} type={type!} />
                    <div className='bg-gray-950 container-x '>
                        {videos?.map(video => (
                            <VideoBox key={video.id} video={video} />
                        ))}
                        <ReviewDetail reviews={reviews!} />
                        <ListMovieOrTVByKey typename={language === "en-US" ? "Similar" : "Gợi ý"} linkto={`${movieId}/similar`} type={type} />
                    </div>
                </>
            }
        </div>
    )
}
