import React, { useState } from "react";
import Comments from "./Comments";

export interface GridPost {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  video?: string;
}

export default function Grid({ posts }: { posts: GridPost[] }) {
  const [activePost, setActivePost] = useState<GridPost | null>(null);

  return (
    <>
      <div className="ig-grid">
        {posts.map((post) => (
          <div
            key={post.id}
            className="ig-tile"
            onClick={() => setActivePost(post)}
          >
            {post.image ? (
              <img src={post.image} alt={post.title} />
            ) : post.video ? (
              <div className="ig-video-thumb">
                <span className="ig-play">▶</span>
              </div>
            ) : null}

            <div className="ig-overlay">
              <div className="ig-overlay-text">
                <div className="ig-title">{post.title}</div>
                <div className="ig-date">{post.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------------
          LIGHTBOX for active post
      ---------------------------- */}
      {activePost && (
        <div className="ig-lightbox" onClick={() => setActivePost(null)}>
          <div
            className="ig-lightbox-inner"
            onClick={(e) => e.stopPropagation()}  // so clicking inside doesn't close
          >
            <button className="ig-close" onClick={() => setActivePost(null)}>
              ✕
            </button>

            {/* LEFT SIDE — MEDIA */}
            <div className="ig-lightbox-media">
              {activePost.image && (
                <img src={activePost.image} alt={activePost.title} />
              )}

              {activePost.video && (
                <video src={activePost.video} controls />
              )}
            </div>

            {/* RIGHT SIDE — TEXT + COMMENTS */}
            <div className="ig-lightbox-body">
              <h2>{activePost.title}</h2>
              <p>{activePost.content}</p>

              {/* ⭐ COMMENTS PER POST */}
              <Comments postId={activePost.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
