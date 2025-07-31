import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8 h-full bg-gray-950">
      <div className="animate-spin rounded-full sm:h-20 sm:w-20 h-10 w-10 sm:border-b-8 border-b-5 border-gray-50" style={{animationDuration: '0.4s'}}></div>
    </div>
  );
}
