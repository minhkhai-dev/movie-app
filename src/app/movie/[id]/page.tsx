import React, { useEffect, useState } from 'react'
import MovieOrTVDetail from '../components/MovieOrTVDetail';


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
