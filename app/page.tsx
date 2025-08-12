import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white text-black space-y-4">
      <div className="text-5xl font-medium tracking-tighter font-['PPMondWest']">Build Beautiful Faster</div>
      <div className='text-neutral-500 font-medium max-w-lg text-center leading-tight'>A library of cool, aesthetic, ready-to-use components — built with Tailwind CSS & Next.js. Just copy, paste, and ship.</div>
      <div className="p-4">
        <a
          href='/card'
          rel="noopener noreferrer"
          className="px-6 py-3.5 text-neutral-500 text-sm flex justify-center border border-neutral-500 font-medium rounded-full hover:bg-black/90 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          Browse Components
        </a>
      </div>
    </div>
  )
}

export default page