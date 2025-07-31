import ListViewMovieOrTV from '@/components/ListViewMovieOrTV'
import SearchForm from '@/components/SearchForm'
import React from 'react'

export default function TVPageRoute() {
    return (
        <div>
            <div
                className="w-full min-h-[25vh] relative "
                style={{
                    backgroundImage: `url("https://homepage.momocdn.net/blogscontents/momo-upload-api-200326140746-637208284661196092.jpg")`,
                    backgroundPosition: 'center',
                }}>
                <div className=' absolute top-0 left-0 w-full h-full bg-[#000000ba] flex justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white' style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>TV Series</h1>
                </div>
                <div className="absolute bottom-0 w-full h-[150px] bg-gradient-to-t from-gray-950 to-transparent" />

            </div>
            <div className='container-x bg-gray-950 pt-5 pb-15'>
                <ListViewMovieOrTV />
            </div>
        </div>
    )
}
