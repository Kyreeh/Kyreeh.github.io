import { GridPost } from "../Grid";

export const activismPosts: GridPost[] = [
  {
    id: "a1",
    title: "COLA E.A.T.S Food Distribution in Greenview",
    date: "2025-11-22",
    content:
      "Working in cooperation with other community organizers, we provided 63 hot meals to the Historically Black Greenview Neighborhood.",
    media: [
      { type: "image", src: "/activism1.jpg" },
      { type: "video", src: "/ColaEV1.mp4" },
      { type: "image", src: "/ColaE1.jpg" }
    ]
  },
  {
    id: "a2",
    title: "Food not Bombs - midlands",
    date: "2025-07-12",
    content:
      "I organize with the non profit, Food not bombs midlands to provide over 950 meals a month to our unhoused neighbors in Downtown Columbia, SC.",
    media: [{ type: "image", src: "/activism2.jpg" }]
  },
  {
    id: "a3",
    title: "Food not Bombs midlands - 5051 no kings day rally",
    date: "2025-10-18",
    content:
      "In cooperation with the South Carolina chapter of 5051. I was able to collect hundreds of dollars in hygine products and dry goods for our unhoused neighbors in Downtown Columbia, SC.",
    media: [{ type: "image", src: "/5051.jpg" },
            { type: "image", src: "/5051a.jpg" },
            { type: "image", src: "/5051b.jpg" },
            { type: "video", src: "/5051v.mp4" }
    ]
  }

];
