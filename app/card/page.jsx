// import React from 'react'
// import TweetCard from './_components/tweet-card'

import { CodePreview } from "./_components/code-preview"
import { TweetCard } from "./_components/tweet-card"

// const page = () => {
//   return (
//     <div className='min-h-screen w-full flex justify-center items-center text-2xl bg-white text-black'>
//         <TweetCard
//   profileImg="https://cdn.cosmos.so/21b4dd53-6fe0-4983-b33d-79aa072ee0a1?format=webp&w=300"
//   name="Joe Diver"
//   username="joediver"
//   text="A selection of my favorite typographic work this year."
//   images={[
//     "https://cdn.cosmos.so/d29dc9b9-8601-492f-9a5e-35b960a55b27?format=jpeg",
//     "https://cdn.cosmos.so/d35a17ad-c081-4dc9-8a4e-10416b6fed55?format=jpeg",
//     "https://cdn.cosmos.so/f07eb4cf-c6b6-43a6-a8e0-8d78f74ab493?format=jpeg",
//     "https://cdn.cosmos.so/8dc17a73-3d46-4c8f-9eff-92246bef8017?format=jpeg",
//   ]}
//   twitterUrl="https://twitter.com/joediver/status/123456789"
// />

//     </div>
//   )
// }

// export default page

export default function Home() {
  const tweetCardCode = `// TweetCard Component
import { Twitter } from 'lucide-react'

interface TweetCardProps {
  profileImg: string
  name: string
  username: string
  text: string
  images?: string[]
  twitterUrl: string
}

export function TweetCard({ profileImg, name, username, text, images = [], twitterUrl }: TweetCardProps) {
  return (
    <div className="bg-neutral-800 h-[57vh] w-[30vw] rounded-xl">
      {/* Header */}
      <div className="w-full flex justify-between items-start p-4">
        <div className="flex gap-2 items-center">
          <img src={profileImg || "/placeholder.svg"} alt={name} className="size-8 rounded-full" />
          <div className="-space-y-0.5">
            <div className="text-white font-medium tracking-tight text-base">{name}</div>
            <div className="text-neutral-400 text-sm">@{username}</div>
          </div>
        </div>
        <Twitter fill="white" stroke="0" />
      </div>

      {/* Tweet text */}
      <div className="text-white text-base px-4">{text}</div>

      {/* Tweet images */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 px-4 pt-4 gap-1">
          {images.map((img, idx) => (
            <div key={idx} className="h-30 w-full overflow-hidden relative">
              <img
                src={img || "/placeholder.svg"}
                alt={\`tweet-img-\${idx}\`}
                className="absolute inset-0 -top-1/2 object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="p-4">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3.5 text-neutral-300 text-sm flex justify-center border border-neutral-500 font-medium rounded-full cursor-pointer"
        >
          Read more on Twitter
        </a>
      </div>
    </div>
  )
}

// Usage Example
import React from 'react'
import TweetCard from './_components/tweet-card'

const page = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center text-2xl bg-white text-black'>
      <TweetCard
        profileImg="https://cdn.cosmos.so/21b4dd53-6fe0-4983-b33d-79aa072ee0a1?format=webp&w=300"
        name="Joe Diver"
        username="joediver"
        text="A selection of my favorite typographic work this year."
        images={[
          "https://cdn.cosmos.so/d29dc9b9-8601-492f-9a5e-35b960a55b27?format=jpeg",
          "https://cdn.cosmos.so/d35a17ad-c081-4dc9-8a4e-10416b6fed55?format=jpeg",
          "https://cdn.cosmos.so/f07eb4cf-c6b6-43a6-a8e0-8d78f74ab493?format=jpeg",
          "https://cdn.cosmos.so/8dc17a73-3d46-4c8f-9eff-92246bef8017?format=jpeg",
        ]}
        twitterUrl="https://twitter.com/joediver/status/123456789"
      />
    </div>
  )
}

export default page`

  const tweetPreview = (
    <div className="min-h-screen w-full flex justify-center items-center text-2xl bg-white text-black">
      <TweetCard
        profileImg="https://cdn.cosmos.so/21b4dd53-6fe0-4983-b33d-79aa072ee0a1?format=webp&w=300"
        name="Joe Diver"
        username="joediver"
        text="A selection of my favorite typographic work this year."
        images={[
          "https://cdn.cosmos.so/d29dc9b9-8601-492f-9a5e-35b960a55b27?format=jpeg",
          "https://cdn.cosmos.so/d35a17ad-c081-4dc9-8a4e-10416b6fed55?format=jpeg",
          "https://cdn.cosmos.so/f07eb4cf-c6b6-43a6-a8e0-8d78f74ab493?format=jpeg",
          "https://cdn.cosmos.so/8dc17a73-3d46-4c8f-9eff-92246bef8017?format=jpeg",
        ]}
        twitterUrl="https://twitter.com/joediver/status/123456789"
      />
    </div>
  )

  return (
    <div className="container mx-auto p-6 py-40">
      <CodePreview
        code={tweetCardCode}
        title="Tweet Card Component"
        description="A complete Twitter-style card component with profile, text, images, and usage example"
        preview={tweetPreview}
      />
    </div>
  )
}
