import React from "react";
import Grid, { GridPost } from "./Grid";
import { activismPosts } from "./data/activismPosts";
<Grid posts={activismPosts} />

export default function Activism() {
  return (
    <div className="page-container">
      <h1>Activism</h1>

      <Grid posts={activismPosts} />
    </div>
  );
}
