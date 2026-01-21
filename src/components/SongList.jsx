import React from 'react';

/**
 * SongList Component
 * 登録されている楽曲の一覧を表示
 */
export function SongList({ songs, currentSongId, onSelect, onAdd }) {
    return (
        <div className="song-list-container">
            {songs.length === 0 ? (
                <div className="empty-msg">楽曲が登録されていません</div>
            ) : (
                <ul className="list-items">
                    {songs.map((song) => (
                        <li
                            key={song.id}
                            className={`song-item ${song.id === currentSongId ? 'active' : ''}`}
                            onClick={() => onSelect(song.id)}
                        >
                            <div className="song-title">{song.title}</div>
                            <div className="song-meta">{song.artist || 'Unknown'} / BPM: {song.bpm}</div>
                        </li>
                    ))}
                </ul>
            )}

            <style jsx>{`
        .song-list-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .empty-msg {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .list-items {
          list-style: none;
        }

        .song-item {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #222;
          cursor: pointer;
          transition: background 0.2s;
        }

        .song-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .song-item.active {
          background-color: rgba(187, 134, 252, 0.1);
          border-left: 4px solid var(--primary-color);
        }

        .song-title {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }

        .song-meta {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
        </div>
    );
}
