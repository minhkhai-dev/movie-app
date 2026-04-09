"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useFetch from '@/hooks/useFetch';
import { Genres } from '@/types';


interface Props {
    endpoint: string;
    isVisible: boolean;
    onClose: () => void;
}

export default function GenresList({ endpoint, isVisible, onClose }: Props) {
    const { getData } = useFetch();
    const [genres, setGenres] = useState<Genres[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        const fetchGenres = async () => {
            setLoading(true);
            try {
                const data = await getData(endpoint);
                setGenres(data?.genres || []);
            } catch (error) {
                console.error("Lỗi fetch genres:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, [endpoint, isVisible]);

    if (!isVisible) return null;

    return (
        <section 
            className="container-x absolute sm:top-full sm:translate-y-0 top-auto -translate-y-2/3 left-0 z-[100] w-full flex justify-end pt-2"
            onMouseLeave={onClose}
            onClick={onClose}
        >
            <div className="w-full max-w-3xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl py-7 sm:px-8 px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-3 gap-4">
                {loading ? (
                    Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-10 bg-gray-800 rounded-xl animate-pulse" />
                    ))
                ) : (
                    genres.map((item) => (
                        <Link
                            key={item.id}
                            href={`/${endpoint.includes('movie') ? 'movie' : 'tv'}?with_genres=${item.id}&title=${item.name}`}
                            onClick={onClose}
                            className="px-5 py-3 text-sm text-gray-300 hover:bg-red-600 hover:text-white rounded-sm transition-all duration-200 hover:translate-x-1"
                        >
                            {item.name}
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}