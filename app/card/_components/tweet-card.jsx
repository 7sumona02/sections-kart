import { Twitter } from "lucide-react";
import React from "react";

export function TweetCard ({
  profileImg,
  name,
  username,
  text,
  images = [],
  twitterUrl,
}) {
  return (
    <div className="bg-neutral-800 h-full w-[30vw] rounded-xl">
      {/* Header */}
      <div className="w-full flex justify-between items-start p-4">
        <div className="flex gap-2 items-center">
          <img
            src={profileImg}
            alt={name}
            className="size-8 rounded-full"
          />
          <div className="-space-y-0.5">
            <div className="text-white font-medium tracking-tight text-base">
              {name}
            </div>
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
            <div
              key={idx}
              className="h-30 w-full overflow-hidden relative"
            >
              <img
                src={img}
                alt={`tweet-img-${idx}`}
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
  );
};
