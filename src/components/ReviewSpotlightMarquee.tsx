"use client";

import { Marquee } from "@/components/magicui/marquee";
import SpotlightCard from "@/components/SpotlightCard";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Super smooth and delightful experience. I’m impressed!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "This library makes my UI shine ✨. Totally worth it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Clean animations and easy to use. Highly recommend!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jack",
    username: "@ack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@ill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@ohn",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  }
];

const oneThird = Math.ceil(reviews.length / 3);
const firstRow = reviews.slice(0, oneThird);
const secondRow = reviews.slice(oneThird, oneThird * 2);
const thirdRow = reviews.slice(oneThird * 2);


function ReviewCard({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) {
  return (
    <SpotlightCard
      spotlightColor="rgba(64, 255, 170, 0.25)"
      className="w-64"
    >
      <figure className="w-80 sm:w-64 md:w-72 h-18">
        <div className="flex items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt={name}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          {body}
        </blockquote>
      </figure>
    </SpotlightCard>
  );
}

export default function ReviewSpotlightMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
                <Marquee className="[--duration:25s]">
    {firstRow.map((review, index) => (
        <ReviewCard key={`${review.username}-${index}`} {...review} />
    ))}
    </Marquee>

    <Marquee reverse className="[--duration:25s]">
    {secondRow.map((review, index) => (
        <ReviewCard key={`${review.username}-${index}`} {...review} />
    ))}
    </Marquee>

    <Marquee className="[--duration:25s]">
    {thirdRow.map((review, index) => (
        <ReviewCard key={`${review.username}-${index}`} {...review} />
    ))}
    </Marquee>



      {/* gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
