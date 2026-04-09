'use client'
import useFetch from '@/hooks/useFetch'
import { Review } from '../types'
import { useMovieStore } from '@/store/useMovieStore'
import { useFormatDate } from '@/hooks/useFormatDate'

export default function ReviewDetail({ reviews }: { reviews: Review[] }) {
    const { language, url_image } = useMovieStore()
    const { formatDate } = useFormatDate()
    return (
        <section className="text-white my-8">
            <h1 className="sm:text-2xl text-base font-bold mb-6 pb-3 border-b border-gray-700 flex items-center gap-3">
                {language === "en-US" ? "Reviews" : "Bình luận"}
                {reviews?.length > 0 && (
                    <span className="sm:text-sm text-xs font-normal text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {reviews.length}
                    </span>
                )}
            </h1>

            {reviews?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-900/70 rounded-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
                            <div className="flex items-start gap-4">
                                <img
                                    src={`${url_image}${item.author_details.avatar_path}`}
                                    alt={item.author}
                                    className="sm:w-11 sm:h-11 w-9 h-9 rounded-full border-2 border-gray-600 object-cover flex-shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold sm:text-lg text-base text-white truncate">
                                        {item.author}
                                    </h3>
                                    <p className="text-gray-400 sm:text-sm text-xs">
                                        @{item.author_details.username}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-gray-300 leading-relaxed line-clamp-4 sm:text-base text-sm text-justify">
                                    {item.content}
                                </p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
                                <span>Posted on {formatDate(item.created_at)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-10 text-center min-h-[180px] flex items-center justify-center">
                    <p className="text-gray-400 text-lg">
                        {language === "en-US"
                            ? "No reviews yet"
                            : "Chưa có bình luận nào !!!"}
                    </p>
                </div>
            )}
        </section>
    )
}
