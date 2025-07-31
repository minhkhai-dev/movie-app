import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center p-8 h-full bg-gray-950">
      <div className="animate-spin rounded-full h-20 w-20 border-b-8 border-gray-50" style={{animationDuration: '0.1s'}}></div>
    </div>
  );
}
