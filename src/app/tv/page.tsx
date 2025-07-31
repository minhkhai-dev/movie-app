import ListViewMovieOrTV from '@/components/ListViewMovieOrTV'
import React, { Suspense } from 'react'

export default function TVPageRoute() {
    return (
        <div>
            <div
                className="w-full min-h-[25vh] relative "
                style={{
                    backgroundImage: `url("https://static.ybox.vn/2021/10/1/1635098468144-ezgif.com-gif-maker.jpg")`,
                    backgroundPosition: 'center',
                }}>
                <div className=' absolute top-0 left-0 w-full h-full bg-[#000000ba] flex justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>TV Shows</h1>
                </div>
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-gray-950 to-transparent" />
            </div>
            <div className='container-x bg-gray-950 pt-5 pb-15'>
                <Suspense fallback={<div className="text-center text-white p-8">Đang tải danh sách TV...</div>}>
                    <ListViewMovieOrTV />
                </Suspense>
            </div>
        </div>
    )
}