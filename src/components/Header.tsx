"use client"
import React, { useEffect, useState } from 'react'
import logo_movie from '../app/images/logotmovie.png'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Loading from './Loading';

export default function Header() {
    const [scroll, setScroll] = useState(0)
    const path = usePathname();
    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className={`fixed z-[100] w-full flex sm:top-0 bottom-0 left-0 items-center justify-between container-x h-12 sm:h-24 ${scroll > 100 ? 'shadow-2xl bg-gray-950': ""} transition-all`}>
            <Link href="/" className='sm:flex items-center gap-3 hidden'>
                <div className='max-w-12 w-full '>
                    <Image src={logo_movie}
                        className='w-full' alt="Ảnh LOGO" />
                </div>
                <p className='text-3xl font-semibold text-white ' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>theMovies</p> 
            </Link>

            <nav className='flex h-full md:text-2xl sm:text-xl text-sm bg-gray-950 sm:!bg-transparent justify-around sm:justify-between items-center min-w-full sm:min-w-[25%] font-semibold gap-5'>
                <Link
                    href="/home"
                    className={`hover:font-semibold transition text-white hover:text-red-500 hover:border-b-red-500 hover:border-b-2 pb-[2px] active:-translate-y-1
                    ${(path.includes("/home") || path === '/') ? " border-b-red-500 border-b-2" : ""}`}>Home
                </Link>
                <Link
                    href="/movie"
                    className={`hover:font-semibold transition text-white hover:text-red-500 hover:border-b-red-500 hover:border-b-2 pb-[2px] active:-translate-y-1
                    ${path.includes("/movie") ? " border-b-red-500 border-b-2" : ""}`}>Movies
                </Link>
                <Link
                    href="/tv"
                    className={`hover:font-semibold transition text-white hover:text-red-500 hover:border-b-red-500 hover:border-b-2 pb-[2px] active:-translate-y-1
                    ${path.includes("/tv") ? " border-b-red-500 border-b-2" : ""}`}>TV Series
                </Link>
            </nav>
        </div>
    )
}
