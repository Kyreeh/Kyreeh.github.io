import React, { useEffect, useState } from "react";
import Giscus from "@giscus/react";

interface CommentsProps {
  postId: string; // unique ID from each post
}

export default function Comments({ postId }: CommentsProps) {
  const [theme, setTheme] = useState("light");

  // Detect dark mode from body class
  useEffect(() => {
    const applyTheme = () =>
      setTheme(document.body.classList.contains("dark") ? "dark" : "light");
    applyTheme();

    const observer = new MutationObserver(applyTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <Giscus
        repo="Kyreeh/Kyreeherron.com"
        repoId="R_kgDOQc7xWA"         // from giscus.app or API
        category="Comments"                    // category name you created
        categoryId="DIC_kwDOQc7xWM4CzDh2"//
        mapping="specific"       // ⭐ Individual comment thread per post
        term={postId}            // ⭐ Tie comments directly to this post's ID
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
