export interface Casts {
    id: string,
    name: string,
    profile_path: string,
}

export interface Detail {
    id: string,
    title: string,
    name: string,
    backdrop_path: string,
    poster_path: string,
    genres: [{ id: number, name: string }],
    overview: string,
}

export interface Video {
    id: string,
    key: string,
    name: string,
    
}
