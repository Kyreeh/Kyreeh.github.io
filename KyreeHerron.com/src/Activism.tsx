import React from "react";
import Post, { PostData } from "./Post";

const activismPosts: PostData[] = [
  {
    id: "a1",
    title: "COLA E.A.T.S Food Distribution in Greeview",
    date: "2025-11-22",
    content: "Working in cooperation with other community organizers, we provided 63 hot meals to the Historically Black Greenview Neighborhood.",
    image: "/activism1.jpg",
     // or import img from "./assets..."
  },
  {
    id: "a2",
    title: "Food not Bombs - midlands",
    date: "2025-07-12",
    content: "i organize with the non profit, Food not bombs midlands to provide over 950 meals a month to our unhoused neighbors in Downtown Columbia, SC. ",
    image: "activism2.jpg",
  }
];

export default function Activism() {
  return (
    <div className="page-container">
      <h1>Activism</h1>

      {activismPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
