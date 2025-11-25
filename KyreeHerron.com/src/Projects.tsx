import React from "react";
import Post, { PostData } from "./Post";

const projectPosts: PostData[] = [
  {
    id: "p1",
    title: "Updated KyreeHerron.com Project using typescript.",
    date: "2025-11-25",
    content: "Major improvement from the HTML framework version. A TypeScript project that redesigns my resume site to be an interactive dynamic site hosted online with a dedicated domain. This very website! Built with Vite, React, TypeScript...",
    image: "/project1.jpg",
  },
  {
    id: "p2",
    title: "Project Management and ServiceNow training",
    date: "2025-12-05",
    content: "I have completed my CAPM, and ServiceNow Platform Admin and Analyitics trainings.",
    image: "capm.png",
  }
];

export default function Projects() {
  return (
    <div className="page-container">
      <h1>Projects</h1>

      {projectPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
