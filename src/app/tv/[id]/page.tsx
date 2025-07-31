import MovieOrTVDetail from '@/app/movie/components/MovieOrTVDetail';
import React, { useEffect, useState } from 'react'

interface PageProps  {
    params: {
        id: string;
    };
}

export default function Page({ params }: PageProps ) {    
    return (
        <MovieOrTVDetail id={params.id} />
    )
}
