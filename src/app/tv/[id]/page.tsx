import MovieOrTVDetail from '@/app/movie/components/MovieOrTVDetail';
import React, { useEffect, useState } from 'react'

interface Para {
    params: {
        id: number;
    };
}

export default function Page({ params }: Para) {    
    return (
        <MovieOrTVDetail id={params.id} />
    )
}
