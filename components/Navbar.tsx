import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Link href='/'>
      <div className={`fixed w-screen h-20 flex items-center justify-center top-0 font-['PPMondWest'] text-xl font-semibold bg-white/30 border-b border-neutral-50/40 backdrop-blur-lg z-50`}>
        sections-kart
      </div>
    </Link>
  )
}

export default Navbar