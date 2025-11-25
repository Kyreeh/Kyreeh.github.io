import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

type WebPage = {
    id: number; 
    title: string;
    url: string;
};



const pages = [
  { id: 1, title: "Projects", url: "/projects", className: "tile-projects" },
  { id: 2, title: "Activism", url: "/activism", className: "tile-activism" },
  { id: 3, title: "News", url: "/news", className: "tile-news" }
];

const PageList: React.FC = () => {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.id} className={page.className}>
          <Link to={page.url}>{page.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PageList;


