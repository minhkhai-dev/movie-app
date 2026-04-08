"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { useMovieStore } from '@/store/useMovieStore';
import logo_movie from '../../public/images/logotmovie.png'
import logo_VN from '../../public/images/co-vn.png'
import logo_EN from '../../public/images/co-en.png'
import GenresList from './GenresList'

export default function Header() {
    const [scroll, setScroll] = useState(0)
    const [showGenres, setShowGenres] = useState(false)
    const [genreType, setGenreType] = useState<'movie' | 'tv'>('movie')

    const path = usePathname();
    const { language, setLanguage } = useMovieStore();

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleChangeLanguage = () => {
        setLanguage(language === "en-US" ? "vi-VN" : "en-US")
    }

    const openGenres = (type: 'movie' | 'tv') => {
        setGenreType(type)
        setShowGenres(true)
    }

    return (
        <div className={`fixed z-[100] w-full flex sm:top-0 bottom-0 left-0 items-center justify-between container-x h-[50px] sm:h-24 
            ${scroll > 100 ? 'shadow-2xl bg-gray-950' : ""} transition-all`}>

            <Link href="/" className='sm:flex items-center gap-3 hidden'>
                <div className='lg:max-w-12 max-w-10 w-full '>
                    <Image src={logo_movie} className='w-full' alt="Ảnh LOGO" />
                </div>
                <p className='lg:text-3xl text-2xl font-bold text-white ' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>Only2M</p>
            </Link>
            {/* Mobile nha */}
            <Link href="/" className={`flex sm:hidden items-center gap-2 fixed top-0 left-0 py-5 px-3 w-full`}>
                <div className='max-w-8 w-full '>
                    <Image src={logo_movie} className='w-full' alt="Ảnh LOGO" />
                </div>
            </Link>

            <nav className="flex h-full items-center bg-gray-950 sm:bg-transparent 
                justify-between sm:justify-start 
                w-full sm:w-auto gap-6 lg:gap-10 
                text-sm sm:text-base md:text-lg lg:text-xl font-medium">

                <Link
                    href="/home"
                    className={`hover:font-semibold transition-all text-white hover:text-red-500 hover:border-b-red-500 hover:border-b-2 pb-1
            ${(path.includes("/home") || path === '/') ? "border-b-red-500 border-b-2 text-red-500" : ""}`}
                >
                    {language === "en-US" ? "Home" : "Trang chủ"}
                </Link>

                <div className="flex items-center gap-1.5 cursor-pointer group">
                    <Link
                        href="/movie"
                        className={`hover:font-semibold transition-all text-white hover:text-red-500 hover:border-b-red-500 hover:border-b-2 pb-1
                    path.includes("/movie") ? "border-b-red-500 border-b-2 text-red-500" : ""}`}
                    >
                        {language === "en-US" ? "Movies" : "Phim"}
                    </Link>
                    <ChevronDown className={`sm:w-6 sm:h-6 w-5 h-5 transition-transform ${(showGenres && genreType == 'movie') && "rotate-180"} text-white block`}
                        onClick={() => openGenres('movie')} />
                </div>

                <div className="flex items-center gap-1.5 cursor-pointer group">
                    <Link
                        href="/tv"
                        className={`hover:font-semibold transition-all text-white hover:text-red-500 hover:border-b-red-500 hover:border-b-2 pb-1
                        ${path.includes("/tv") ? "border-b-red-500 border-b-2 text-red-500" : ""}`}
                    >
                        {language === "en-US" ? "TV Series" : "Truyền hình"}
                    </Link>
                    <ChevronDown className={`sm:w-6 sm:h-6 w-5 h-5 transition-transform ${(showGenres && genreType == 'tv') && "rotate-180"} text-white block`}
                        onClick={() => openGenres('tv')} />
                </div>

                <div className="ml-auto sm:ml-4 md:ml-6">
                    <Image
                        src={language === "en-US" ? logo_EN : logo_VN}
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full cursor-pointer border border-gray-600 hover:border-gray-400 transition-all"
                        alt="Ngôn ngữ"
                        onClick={handleChangeLanguage}
                    />
                </div>
            </nav>

            <GenresList
                endpoint={genreType === 'movie' ? 'genre/movie/list' : 'genre/tv/list'}
                isVisible={showGenres}
                onClose={() => setShowGenres(false)}
            />
        </div>
    )
}