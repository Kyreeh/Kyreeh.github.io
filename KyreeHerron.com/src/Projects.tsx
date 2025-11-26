import React from "react";
import Grid, { GridPost } from "./Grid";
import { projectPosts } from "./data/projectPosts";
<Grid posts={projectPosts} />


export default function Projects() {
  return (
    <div className="page-container">
      <h1>Projects</h1>

      <Grid posts={projectPosts} />
    </div>
  );
}
