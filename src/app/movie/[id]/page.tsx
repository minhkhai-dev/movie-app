import React, { useEffect, useState } from 'react'
import MovieOrTVDetail from '../components/MovieOrTVDetail';

interface PageProps {
    params: {
        id: string;
    };
}

export default function Page({ params }: PageProps) {    
    return (
        <MovieOrTVDetail id={params.id}/>
    )
}
