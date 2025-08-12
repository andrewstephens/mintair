// src/components/BlogPostLayout.jsx
import React from "react";
import { Link } from "react-router-dom";
import LeadCaptureForm from "../components/LeadCaptureform";

export default function BlogPostLayout({ post, children }) {
  const defaultImage = `https://source.unsplash.com/1600x900/?hvac,airconditioner`;

  return (
    <article className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="relative mb-12 h-[60vh] min-h-[400px] w-full overflow-hidden rounded-2xl">
        <img
          src={post.image || defaultImage}
          alt={post.imageAlt || post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            <time dateTime={post.date} className="text-sm opacity-75">
              {post.dateFormatted}
            </time>
            <div className="flex gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg mx-auto">{children}</div>
      <LeadCaptureForm className="mt-16" />
    </article>
  );
}
