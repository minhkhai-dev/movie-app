import MovieOrTVDetail from '@/app/movie/components/MovieOrTVDetail';
import React, { useEffect, useState } from 'react'

type MovieParams = {
  params: {
    id: string;
  };
};

export default function Page({ params }: MovieParams) {  
    return (
        <MovieOrTVDetail id={params.id} />
    )
}
