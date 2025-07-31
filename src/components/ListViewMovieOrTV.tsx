"use client"
import React, { useEffect, useState } from 'react'
import { ListTodo, Play, RefreshCw } from 'lucide-react';
import { useMovieStore } from '@/store/useMovieStore';
import useFetch from '@/hooks/useFetch';
import { MovieOrTV } from '@/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import SearchForm from './SearchForm';


export default function ListViewMovieOrTV() {

    const { url_image } = useMovieStore()
    const { getData, loading, getSearchData } = useFetch()
    const [movies, setMovies] = useState<MovieOrTV[]>([])
    const [page, setPage] = useState<number>(1)
    const searchParams = useSearchParams();
    const keyword = searchParams.get('keyword')?.trim() || '';
    const category = searchParams.get('type')?.trim() || "popular"
    const path = usePathname();
    const type = (path.includes("/movie")) ? "movie" : "tv";
    const endpoinSearch = (path.includes("/movie")) ? "search/movie" : "search/tv"

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let res;
                if (keyword.length > 0) {
                    res = await getSearchData(endpoinSearch, page, keyword);
                } else {
                    res = await getData(`${type}/${category}`, page);
                }

                if (!res) return;

                setMovies(prev => {
                    const map = new Map();
                    [...prev, ...res.results].forEach(movie => {
                        map.set(movie.id, movie);
                    });
                    return Array.from(map.values());
                });
            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };

        fetchMovies();
    }, [page, keyword, category]);

    // Cai nay de reset trang
    useEffect(() => {
        setMovies([]);
        setPage(1);
    }, [keyword, category]);

    function formatLabel(text: string): string {
        return text
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <div>
            {category !== "popular" ?
                <h1 className='sm:text-2xl tetx-xl text-white font-semibold mt-5 sm:mb-10 mb-5 flex gap-3 items-center'>
                    <ListTodo size={25}/>{formatLabel(category)}
                </h1> :
                <SearchForm />
            }
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 sm:gap-5 gap-3'>
                {movies.map(movie => (
                    <Link href={`${type}/${movie.id}`}
                        className='w-full text-white hover:text-red-500 transition-all  animate-[slideDown_0.3s_ease-out_0.1s_forwards] cursor-pointer opacity-0' key={movie.id}>
                        <div
                            className='w-full sm:h-[300px] h-[200px] bg-cover bg-center rounded-xl relative'
                            style={{
                                backgroundImage: `url("${url_image}${movie.poster_path}")`,
                            }}>

                            <div className=' absolute top-0 left-0 bg-[#000000b0] w-full h-full duration-300 opacity-0 hover:opacity-100 transition-all grid place-content-center'>
                                <Play size={30} className='text-gray-50 shadow-[0_0_25px_2px_#fb2c36] bg-red-500 rounded-4xl p-4 sm:w-[80px] w-[50px] h-[50px] hover:shadow-[0_0_25px_5px_#fb2c36] transition-all scale-90 hover:scale-100' />
                            </div>
                        </div>
                        <h1 className=' font-semibold sm:text-lg text-[15px] my-3 line-clamp-2'>{movie.title || movie.name} </h1>
                    </Link>
                ))}
            </div>
            <div className='text-center mt-5'>
                <button onClick={() => setPage(page + 1)} className='border border-white font-semibold py-2 sm:px-9 px-6 rounded-full sm:text-[16px] text-[12px] text-white cursor-pointer hover:bg-white hover:text-red-500 transition-all'>
                    {loading ? <RefreshCw className='animate-spin' /> : "Watch more"}
                </button>
            </div>
        </div>
    )
}
