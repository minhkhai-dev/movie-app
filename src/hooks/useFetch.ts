// import { useMovieStore } from '@/store/useMovieStore';
// import React, { useState } from 'react'

// export default function useFetch() {
//     const { api_key, api_url } = useMovieStore();
//     const [loading, setLoading] = useState(false)

//     const getData = async (endpoint: string, page: number = 1) => {
//         setLoading(true);
//         try {
//             const response = await fetch(`${api_url}${endpoint}?api_key=${api_key}&page=${page}`);
//             const data = await response.json();
//             // console.log(data)
//             setLoading(false)
//             return data;
//         } catch (error) {
//             console.error("Lỗi khi fetch movies:", error);
//             return null;
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { getData, loading };
// }


import { useMovieStore } from '@/store/useMovieStore';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function useFetch() {
    const { api_key, api_url } = useMovieStore();
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();

    const getData = async (endpoint: string, page: number = 1) => {
        const queryKey = ['movies', endpoint, page];

        setLoading(true);
        try {
            const data = await queryClient.fetchQuery({
                queryKey,
                queryFn: async () => {
                    const res = await fetch(`${api_url}${endpoint}?api_key=${api_key}&page=${page}`);
                    if (!res.ok) throw new Error('Lỗi khi gọi API');
                    return res.json();
                },
            });
            return data;
        }
        catch (err) {
            console.error('Lỗi khi fetch movies:', err);
            return null;
        }
        finally {
            setLoading(false);
        }
    };

    const getSearchData = async (endpoint: string, page: number = 1, query: string) => {
        const queryKey = ['movies', endpoint, page, query];

        setLoading(true);
        try {
            const data = await queryClient.fetchQuery({
                queryKey,
                queryFn: async () => {
                    const res = await fetch(`${api_url}${endpoint}?query=${query}&include_adult=false&api_key=${api_key}&page=${page}`);
                    if (!res.ok) throw new Error('Lỗi khi gọi API');
                    return res.json();
                },
            });
            return data;
        }
        catch (err) {
            console.error('Lỗi khi fetch movies:', err);
            return null;
        }
        finally {
            setLoading(false);
        }
    };

    return { getData, loading, getSearchData };
}
