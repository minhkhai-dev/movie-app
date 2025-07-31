import React, { useEffect, useState } from 'react'
import MovieOrTVDetail from '../components/MovieOrTVDetail';


export default function Page({ params }: { params: { id: string } }) {  
    return (
        <MovieOrTVDetail id={params.id}/>
    )
}
