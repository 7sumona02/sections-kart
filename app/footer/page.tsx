import { CodePreview } from "@/components/code-preview"
import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const footerCode = `import { Instagram, Twitter } from 'lucide-react'
import React from 'react'

const MinimalFooter = () => {
  return (
    <div className='absolute bottom-0'>
        <div className='w-screen h-full bg-black text-white pt-12 px-14 '>
            <div className='border-b-2 border-b-neutral-600 flex justify-between items-end pb-6'>
                <div className='space-y-8'>
                    <div className='font-[PPMondWest] text-5xl'>sections-kart</div>
                    <div className='text-neutral-200 max-w-lg leading-tight font-medium'>A library of cool, aesthetic, ready-to-use components — built with Tailwind CSS & Next.js. Just copy, paste, and ship.</div>
                </div>
                <div className='flex text-neutral-200 gap-4 font-medium'>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Home</div>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Blog</div>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Help</div>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Contact</div>
                </div>
            </div>
            <div className='text-neutral-400 text-sm font-medium py-8 flex justify-between'>
                <div>2025 sections-kart. All rights reserved.</div>
                <div className='flex gap-4 items-center'>
                    <div><Instagram fill='white' className='size-5' /></div>
                    <div><Twitter fill='white' className='size-5' /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MinimalFooter`

  const footerPreview = (
    <div className=''>
        <div className='w-full h-full bg-black text-white pt-12 px-14 '>
            <div className='border-b-2 border-b-neutral-600 flex justify-between gap-40 items-end pb-6'>
                <div className='space-y-8'>
                    <div className='font-[PPMondWest] text-5xl'>sections-kart</div>
                    <div className='text-neutral-200 max-w-lg leading-tight font-medium'>A library of cool, aesthetic, ready-to-use components — built with Tailwind CSS & Next.js. Just copy, paste, and ship.</div>
                </div>
                <div className='flex text-neutral-200 gap-4 font-medium'>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Home</div>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Blog</div>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Help</div>
                    <div className='cursor-pointer hover:text-neutral-200/70 transition-all duration-200'>Contact</div>
                </div>
            </div>
            <div className='text-neutral-400 text-sm font-medium py-8 flex justify-between'>
                <div>&copy;2025 sections-kart. All rights reserved.</div>
                <div className='flex gap-4 items-center text-neutral-400'>
                    <Link href='/'><div className="cursor-pointer"><Instagram fill='white' className='size-5' /></div></Link>
                    <Link href='/'><div className="cursor-pointer"><Twitter fill='white' className='size-5' /></div></Link>
                </div>
            </div>
        </div>
    </div>
  )

  return (
    <div className="container mx-auto p-6 py-40">
      <CodePreview
        code={footerCode}
        title="Minimal Footer Component"
        description="A clean, aesthetic footer built with Tailwind CSS & Next.js — always stays at the bottom."
        preview={footerPreview}
      />
    </div>
  )
}
