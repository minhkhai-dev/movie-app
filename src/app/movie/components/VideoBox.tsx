import React from 'react'
import { Video } from '../types'

export default function VideoBox({video}: {video: Video}) {
    return (
        <div className="text-white sm:pb-20 pb-15">
            <h2 className="sm:text-xl text-[15px] font-bold mb-4">
                {video.name}
            </h2>

            <div className="w-full rounded-lg">
                <iframe
                    className="w-full aspect-video border-none"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title={video.name}
                    loading='lazy'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
