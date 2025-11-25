import React from "react";
import Post, { PostData } from "./Post";

const newsPosts: PostData[] = [
  {
    id: "n1",
    title: "BREAKING!!! NIDDIE CONFIRMED STINKY!!!!!",
    date: "2025-11-26",
    content: "Sources confirmed kitty nidde is A SMELLY POOP BUTT.",
    image: "/news1.jpg"
  }
];

export default function News() {
  return (
    <div className="page-container">
      <h1>News</h1>

      {newsPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
