import MovieOrTVDetail from '@/app/movie/components/MovieOrTVDetail';
import React, { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {  
    return (
        <MovieOrTVDetail id={params.id} />
    )
}
