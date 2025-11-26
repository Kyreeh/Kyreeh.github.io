import React, { useState } from "react";
import Comments from "./Comments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export interface MediaItem {
  type: "image" | "video";
  src: string;
}

export interface GridPost {
  id: string;
  title: string;
  date: string;
  content: string;
  media: MediaItem[];
}

export default function Grid({ posts }: { posts: GridPost[] }) {
  const [activePost, setActivePost] = useState<GridPost | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const closeLightbox = () => {
    setActivePost(null);
    setSlideIndex(0);
  };

  return (
    <>
      {/* GRID VIEW */}
      <div className="ig-grid">
        {posts.map((post) => {
          const first = post.media[0];

          return (
            <div
              key={post.id}
              className="ig-tile"
              onClick={() => {
                setActivePost(post);
                setSlideIndex(0);
              }}
            >
              {first.type === "image" ? (
                <img src={first.src} alt={post.title} />
              ) : (
                <div className="ig-video-thumb">
                  <span className="ig-play">▶</span>
                </div>
              )}

              <div className="ig-overlay">
                <div className="ig-overlay-text">
                  <div className="ig-title">{post.title}</div>
                  <div className="ig-date">{post.date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      {activePost && (
        <div className="ig-lightbox" onClick={closeLightbox}>
          <div className="ig-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="ig-close" onClick={closeLightbox}>
              ✕
            </button>

            <div className="ig-lightbox-media">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                initialSlide={slideIndex}
                className="lb-swiper"
              >
                {activePost.media.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="lightbox-media-wrapper">
                      {item.type === "image" ? (
                        <img src={item.src} className="lightbox-image" />
                      ) : (
                        <video
                          src={item.src}
                          className="lightbox-video"
                          controls
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="ig-lightbox-body">
              <h2>{activePost.title}</h2>
              <p>{activePost.content}</p>
              <Comments postId={activePost.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
