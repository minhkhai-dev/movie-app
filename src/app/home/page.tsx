"use client"
import Banner from '@/app/home/components/Banner'
import ListMovieOrTVByKey from '@/app/home/components/ListMovieOrTVByKey'
import React from 'react'

export default function HomePageRoute() {
  return (
    <>
      <Banner />
      <div className='container-x bg-gray-950 pt-10 sm:pb-15 pb-5'>
        <ListMovieOrTVByKey typename='Now Playing Movies' linkto="now_playing" type='movie'/>
        <ListMovieOrTVByKey typename='Top Rated Movies' linkto="top_rated" type='movie'/>
        <ListMovieOrTVByKey typename='Trending TV' linkto="airing_today" type='tv'/>
        <ListMovieOrTVByKey typename='Top Rated TV' linkto="top_rated" type='tv'/>
      </div>
    </>
  )
}
