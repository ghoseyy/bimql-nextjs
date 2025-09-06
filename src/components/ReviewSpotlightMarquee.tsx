"use client";
import { useState, useEffect } from "react";
import { Marquee } from "@/components/magicui/marquee";
import SpotlightCard from "@/components/SpotlightCard";
import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import { useTheme } from "@/hooks/useTheme";

interface Blog {
  name: string;
  username: string;
  body: string;
  img: string;
}

interface BlogPostData {
  blogs: Blog[];
}

function BlogCard({ img, name, username, body }: Blog) {
  return (
    <SpotlightCard
      spotlightColor="rgba(64, 255, 170, 0.25)"
      className="w-48 sm:w-56 md:w-64 lg:w-72"
    >
      <figure className="h-16 w-48 p-2 sm:h-18 sm:w-56 md:h-20 md:w-64 lg:w-72">
        <div className="mb-1 flex items-center gap-2">
          <img
            className="flex-shrink-0 rounded-full"
            width="28"
            height="28"
            alt={name}
            src={img}
          />
          <div className="flex min-w-0 flex-1 flex-col">
            <figcaption className="truncate text-sm font-medium text-gray-400 dark:text-white">
              {name}
            </figcaption>
          </div>
        </div>
        <blockquote className="py-3 line-clamp-2 text-sm leading-tight text-gray-400 dark:text-gray-300">
          {body}
        </blockquote>
      </figure>
    </SpotlightCard>
  );
}

export default function BlogSpotlightMarquee() {
  const { theme } = useTheme();
  const darkMode = theme === "dark";

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogpost.json");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data: BlogPostData = await response.json();
        setBlogs(data.blogs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
        <div className="text-gray-500 dark:text-gray-400">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
        <div className="text-red-500 dark:text-red-400">
          Error loading blogs: {error}
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
        <div className="text-gray-500 dark:text-gray-400">No blogs found</div>
      </div>
    );
  }

  const oneThird = Math.ceil(blogs.length / 3);
  const firstRow = blogs.slice(0, oneThird);
  const secondRow = blogs.slice(oneThird, oneThird * 2);
  const thirdRow = blogs.slice(oneThird * 2);

return (
  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20 bg-white dark:bg-black">
    {/* Blog Section Title + Shiny Text */}
    <div className="flex flex-col items-center text-center mb-12">
      <GradientText
        colors={["#8660fa", "#a855f7", "#8400ff", "#a855f7", "#a855f7"]}
        animationSpeed={5}
        showBorder={false}
        className="mb-2"
      >
        <h3 className="text-6xl font-bold">Tiny Rants</h3>
      </GradientText>

      <ShinyText
        className="text-xl text-gray-600 dark:text-gray-300"
        text="Thoughts, projects, and random adventures."
        disabled={false}
        speed={2}
      />
    </div>

    {/* Blog rows */}
    <Marquee className="[--duration:25s]">
      {firstRow.map((blog, index) => (
        <BlogCard key={`${blog.username}-${index}`} {...blog} />
      ))}
    </Marquee>
    <Marquee reverse className="[--duration:25s]">
      {secondRow.map((blog, index) => (
        <BlogCard key={`${blog.username}-${index}`} {...blog} />
      ))}
    </Marquee>
    <Marquee className="[transform:translateX(12px)] [--duration:25s]">
      {thirdRow.map((blog, index) => (
        <BlogCard key={`${blog.username}-${index}`} {...blog} />
      ))}
    </Marquee>

    {/* Gradient fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black"></div>
  </div>
);
}
