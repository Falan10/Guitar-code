import React, { useRef, useEffect } from 'react';

/**
 * ChordViewer Component
 * コード譜（テキストまたは画像）を表示し、スクロールを実行する
 */
export function ChordViewer({ song, isPlaying, scrollSpeed, scrollPos, onScrollUpdate }) {
  const scrollRef = useRef(null);
  const { content, imageUrl, displayType } = song;

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const scroll = (currentTime) => {
      if (isPlaying) {
        const deltaTime = (currentTime - lastTime) / 1000; // seconds
        const distance = scrollSpeed * deltaTime;
        onScrollUpdate((prev) => prev + distance);
      }
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, scrollSpeed, onScrollUpdate]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollPos;
    }
  }, [scrollPos]);

  return (
    <div className="chord-viewer" ref={scrollRef}>
      <div className="chord-content-wrapper">
        {displayType === 'image' && imageUrl ? (
          <img src={imageUrl} alt="Sheet Music" className="sheet-image" />
        ) : (
          <pre className="text-chord-content">
            {content || 'コードを入力してください'}
          </pre>
        )}
      </div>

      <style jsx>{`
        .chord-viewer {
          width: 100%;
          height: 100%;
          overflow-y: auto;
          scroll-behavior: auto;
          background-color: var(--bg-color);
          scrollbar-width: thin;
        }

        .chord-content-wrapper {
          padding: 2rem;
          padding-bottom: 70vh; /* 末尾までスクロール可能にする */
          max-width: 1000px;
          margin: 0 auto;
        }

        .text-chord-content {
          font-family: var(--font-mono);
          font-size: 1.5rem;
          line-height: 2.5;
          color: var(--text-color);
          white-space: pre-wrap;
          word-break: break-all;
        }

        .sheet-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Hide scrollbar for cleaner look during performance */
        .chord-viewer::-webkit-scrollbar {
          width: 8px;
        }
        .chord-viewer::-webkit-scrollbar-track {
          background: transparent;
        }
        .chord-viewer::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
