import React from "react";

export interface PostData {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  videoUrl?: string; // YouTube embed URL
}

const Post: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <article className="post-card">
      {post.image && (
        <img src={post.image} alt={post.title} className="post-image" loading="lazy" />
      )}

      {post.videoUrl && (
        <div className="post-video">
          <iframe
            src={post.videoUrl}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <h2 className="post-title">{post.title}</h2>
      <p className="post-date">{post.date}</p>
      <p className="post-content">{post.content}</p>
    </article>
  );
};

export default Post;
