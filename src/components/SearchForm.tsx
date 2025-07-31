"use client"
import useFetch from '@/hooks/useFetch';
import { useMovieStore } from '@/store/useMovieStore';
import { MovieOrTV } from '@/types';
import { ArrowUpLeft, Search } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function SearchForm() {
    const [keywords, setKeyWords] = useState<MovieOrTV[]>([])
    const { getSearchData } = useFetch()
    const [input, setInput] = useState('')
    const router = useRouter();
    const path = usePathname();
    const endpoint = (path.includes("/movie")) ? "search/movie" : "search/tv"

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getSearchData(endpoint, 1, input);
                setKeyWords(data!.results.slice(0, 5))

            } catch (error) {
                console.error("Lỗi khi fetch movies:", error);
            }
        };

        fetchMovies();
    }, [input]);

    function handleSearch() {
        if (!input.trim()) return;

        const encoded = encodeURIComponent(input.trim());
        router.push(`${path}?keyword=${encoded}`);
        setInput('');
    }

    return (
        <div className='relative mt-10 mb-15 max-w-xl h-[50px] flex gap-3'>
            <input
                className='bg-black shadow-[0_0_2px_gray] text-gray-100 sm:pl-7 pl-5 sm:pr-[150px] pr-5 rounded-3xl w-full h-full outline-none sm:text-base text-sm'
                placeholder='Enter keyword'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <div className='sm:absolute relative bg-red-500 text-white rounded-full h-[50px] w-[70px] sm:w-[130px] flex justify-center items-center top-0 right-0 cursor-pointer shadow-[0_0_20px_5px_#ff0000a1] hover:shadow-[0_0_25px_6px_#ff0000] transition-all font-semibold' onClick={handleSearch}>
                <button className='hidden sm:block text-lg'>Search</button>
                <Search size={20} className='block sm:hidden' />
            </div>
            <div className='absolute w-full bg-gray-800 left-0 top-[50px] z-[10] rounded-xl mt-2'>
                {keywords.map(item => (
                    <h3
                        className='text-white bg-gray-800 m-2 py-2 px-2 sm:px-4 line-clamp-1 cursor-pointer hover:bg-gray-700 transition-all flex gap-3 items-center text-sm sm:text-base'
                        key={item.id} onClick={() => setInput(item.title || item.name)}>
                        <Search className='opacity-50 hidden sm:block' size={17} /> {item.title || item.name}
                    </h3>
                ))}
            </div>
        </div>
    )
}
