import { url } from 'inspector'
import React from 'react'
import logo_movie from '../app/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <div
            className="w-full min-h-[60vh] relative"
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
                    <div className='flex flex-col gap-4'>
                        <Link href="/" >Home</Link>
                        <Link href="/" >Contact us</Link>
                        <Link href="/" >Term of services</Link>
                        <Link href="/" >About us</Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Link href="/" >Live</Link>
                        <Link href="/" >FAQ</Link>
                        <Link href="/" >Premium</Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Link href="/" >Your must watch</Link>
                        <Link href="/" >Recent release</Link>
                        <Link href="/" >Top IMDB</Link>
                        <Link href="/" >Pravacy policy</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
