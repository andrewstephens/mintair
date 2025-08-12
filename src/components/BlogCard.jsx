// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <article className="flex flex-col items-start group">
      <div className="relative w-full overflow-hidden rounded-2xl">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={post.date} className="text-gray-500">
            {post.dateFormatted}
          </time>
          <div className="flex gap-2">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
            <Link to={post.slug}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.excerpt}
          </p>
        </div>
      </div>
    </article>
  );
}
