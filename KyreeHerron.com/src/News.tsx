import React from "react";
import Grid, { GridPost } from "./Grid";
import { newsPosts } from "./data/newsPosts";
<Grid posts={newsPosts} />


export default function News() {
  return (
    <div className="page-container">
      <h1>News</h1>

      <Grid posts={newsPosts} />
    </div>
  );
}
