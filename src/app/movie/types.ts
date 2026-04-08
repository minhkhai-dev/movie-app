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
    release_date: string,
    runtime: number,
    vote_average: string,
    status: string,
}

export interface Video {
    id: string,
    key: string,
    name: string,
}

export interface Review {
    id: string,
    author: string,
    author_details: {name: string, avatar_path: string, username: string},
    content: string,
    created_at: string,
}
