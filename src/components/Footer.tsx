"use client"
import React from 'react'
import logo_movie from '../app/images/logotmovie.png'
import Image from 'next/image'
import Link from 'next/link'
import { useMovieStore } from '@/store/useMovieStore'

export default function Footer() {
    const { language } = useMovieStore()
    return (
        <div
            className="w-full sm:min-h-[60vh] min-h-[45vh] relative mb-12 sm:mb-0"
            style={{
                backgroundImage: `url("https://www.huongnghiepaau.com/wp-content/uploads/2022/12/poster-phim.jpg")`,
                backgroundPosition: 'top',
            }}>
            <div className='bg-[#000000bb] absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col'>
                <div className='flex items-center gap-4 mb-14'>
                    <div className='sm:max-w-16 max-w-10 w-full'>
                        <Image src={logo_movie}
                            className='w-full' alt="Ảnh LOGO" />
                    </div>
                    <p className='sm:text-4xl text-2xl font-semibold text-white ' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>theMovies</p>
                </div>
                <div className='text-white font-bold lg:text-xl sm:text-lg text-[12px] flex justify-between lg:w-1/2 w-[90%]'>
                    <div className='flex flex-col sm:gap-4 gap-2'>
                        <Link href="/">{language === "en-US" ? "Home" : "Trang chủ"}</Link>
                        <Link href="/">{language === "en-US" ? "Contact us" : "Liên hệ"}</Link>
                        <Link href="/">{language === "en-US" ? "Term of services" : "Điều khoản"}</Link>
                        <Link href="/">{language === "en-US" ? "About us" : "Giới thiệu"}</Link>
                    </div>
                    <div className='flex flex-col sm:gap-4 gap-2'>
                        <Link href="/">{language === "en-US" ? "Live" : "Trực tiếp"}</Link>
                        <Link href="/">{language === "en-US" ? "FAQ" : "Câu hỏi"}</Link>
                        <Link href="/">{language === "en-US" ? "Premium" : "Gói cao cấp"}</Link>
                    </div>
                    <div className='flex flex-col sm:gap-4 gap-2'>
                        <Link href="/">{language === "en-US" ? "Your must watch" : "Phim nên xem"}</Link>
                        <Link href="/">{language === "en-US" ? "Recent release" : "Phát hành gần đây"}</Link>
                        <Link href="/">{language === "en-US" ? "Top IMDB" : "Top IMDb"}</Link>
                        <Link href="/">{language === "en-US" ? "Privacy policy" : "Bảo mật"}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
