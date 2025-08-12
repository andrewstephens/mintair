// src/pages/BlogPosts.jsx
import React from "react";
import BlogPostLayout from "../components/BlogPostLayout";

export default function BlogPosts() {
  const posts = [
    {
      title: "HVAC Benefits for 2025",
      date: "2025-01-15",
      dateFormatted: "January 15, 2025",
      tags: ["Energy Efficiency", "Smart HVAC", "California", "Home Comfort"],
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&h=900",
      content: (
        <>
          <h2>The Future of Home Comfort is Here</h2>
          <p>
            As we step into 2025, revolutionary advances in HVAC technology are
            transforming how we think about home comfort. Smart HVAC systems are
            now more efficient, sustainable, and connected than ever before.
          </p>
          <p>Key benefits of modern HVAC systems include:</p>
          <ul>
            <li>Up to 40% reduction in energy consumption</li>
            <li>AI-powered temperature optimization</li>
            <li>Remote control via smartphone apps</li>
            <li>Improved air quality monitoring</li>
          </ul>
          <p>
            California homeowners can especially benefit from these
            improvements, with new state incentives making upgrades more
            affordable than ever.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {posts.map((post, index) => (
        <BlogPostLayout key={index} post={post}>
          {post.content}
        </BlogPostLayout>
      ))}
    </>
  );
}
