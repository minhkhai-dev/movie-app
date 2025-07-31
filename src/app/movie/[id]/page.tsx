import React, { useEffect, useState } from 'react'
import MovieOrTVDetail from '../components/MovieOrTVDetail';

interface Para {
    params: {
        id: string;
    };
}

export default function Page({ params }: Para) {    
    return (
        <MovieOrTVDetail id={params.id}/>
    )
}
