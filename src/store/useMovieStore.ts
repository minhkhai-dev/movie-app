import { Movie } from "@/types";
import { create } from "zustand";

interface MovieStore {
    api_key: string;
    api_url: string;
    url_image: string;
    showTrailer: boolean;
    setShowTrailer: (text: boolean) => void;
    trailerId: string;
    setTrailetId: (text: string) => void;
    language: string;
    setLanguage: (lang: string) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY || '',
    api_url: "https://api.themoviedb.org/3/",
    url_image: "https://image.tmdb.org/t/p/original",
    showTrailer: false,
    setShowTrailer: (text : boolean) => set({showTrailer: text}),
    trailerId: '0',
    setTrailetId: (text: string) => set({trailerId: text}),
    language: "en-US",
    setLanguage: (lang: string) => set({language: lang}),
}));