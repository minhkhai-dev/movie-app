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
    const { language } = useMovieStore()
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

    }, [input, language]);

    function handleSearch(text: string) {
        if (!text.trim()) return;

        setInput(text);

        const encoded = encodeURIComponent(text.trim());
        router.push(`${path}?keyword=${encoded}`);

        setKeyWords([]);
    }

    return (
        <div className='relative mt-10 sm:mb-15 mb-10 max-w-5xl sm:h-[60px] h-[45px] flex gap-3'>
            <input
                className='bg-black shadow-[0_0_2px_gray] text-gray-100 sm:pl-7 pl-5 sm:pr-[150px] pr-5 rounded-xl w-full h-full outline-none sm:text-base text-sm'
                placeholder={language === "en-US" ? 'Enter keyword...' : 'Nhập tên phim, truyền hình...'}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch(input)
                    }
                }}
            />
            <button
                onClick={() => handleSearch(input)}
                className='sm:absolute relative bg-red-500 text-white sm:rounded-r-xl rounded-xl h-[45px] sm:h-[60px] w-[70px] sm:w-[130px] flex justify-center items-center top-0 right-0 cursor-pointer shadow-[0_0_20px_5px_#ff0000a1] hover:shadow-[0_0_25px_6px_#ff0000] transition-all font-semibold'
            >
                <span className='hidden sm:block'>
                    {language === "en-US" ? "Search" : "Tìm kiếm"}
                </span>
                <Search size={20} className='block sm:hidden' />
            </button>
            <div className='absolute w-full bg-gray-800 left-0 top-full z-[10] rounded-xl mt-2'>
                {keywords.length > 0 && (
                    <div className='absolute w-full bg-gray-800 left-0 top-[50px] z-[10] rounded-xl mt-2'>
                        {keywords.map(item => (
                            <h3
                                key={item.id}
                                className='text-white bg-gray-800 sm:m-2 m-1 py-2 px-2 sm:px-4 line-clamp-1 cursor-pointer hover:bg-gray-700 transition-all flex gap-3 items-center text-sm sm:text-base'
                                onClick={() => {
                                    handleSearch(item.title || item.name)
                                }}
                            >
                                <Search className='opacity-50 hidden sm:block' size={17} />
                                {item.title || item.name}
                            </h3>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
