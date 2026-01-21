import React, { useState, useCallback, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSongStore } from './hooks/useSongStore';
import { SongList } from './components/SongList';
import { SongEditor } from './components/SongEditor';
import { ChordViewer } from './components/ChordViewer';
import { ControlPanel } from './components/ControlPanel';
import { LoginButton } from './features/auth/LoginButton';
import './index.css';

const LINE_HEIGHT_ESTIMATE = 100; // px

function App() {
  const [user, setUser] = useState(null);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const {
    songs,
    currentSong,
    currentSongId,
    setCurrentSongId,
    addSong,
    updateSong,
    deleteSong,
    loading
  } = useSongStore(user);

  const [isEditing, setIsEditing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(20);

  // Toggle Play/Pause
  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  // Reset Scroll
  const resetScroll = useCallback(() => {
    setIsPlaying(false);
    setScrollPos(0);
  }, []);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && !isEditing) {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, isEditing]);

  // Handle BPM Sync
  const applyBpmSync = useCallback(() => {
    if (currentSong?.bpm) {
      const pxPerSec = (currentSong.bpm / 60 / 4) * LINE_HEIGHT_ESTIMATE;
      setScrollSpeed(Math.round(pxPerSec));
    }
  }, [currentSong]);

  // Handle Song Selection
  const selectSong = (id) => {
    setCurrentSongId(id);
    setIsEditing(false);
    resetScroll();
    const song = songs.find(s => s.id === id);
    if (song?.scrollSpeed) {
      setScrollSpeed(song.scrollSpeed);
    }
  };

  // Handle Save
  const handleSave = async (data) => {
    if (currentSongId) {
      await updateSong(currentSongId, { ...data, scrollSpeed });
    } else {
      const newSong = await addSong({ ...data, scrollSpeed });
      setCurrentSongId(newSong.id);
    }
    setIsEditing(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('この曲を削除してもよろしいですか？')) {
      await deleteSong(id);
      setIsEditing(false);
    }
  };

  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h1>Guitar Scroll</h1>
        </div>

        <LoginButton user={user} />

        <SongList
          songs={songs}
          currentSongId={currentSongId}
          onSelect={selectSong}
        />

        <div className="sidebar-footer">
          <button className="add-button" onClick={() => { setCurrentSongId(null); setIsEditing(true); }}>
            ＋ 新しい曲を追加
          </button>
        </div>
      </nav>

      <main className="main-content">
        <header className="app-header">
          <div className="song-info">
            {currentSong ? (
              <>
                <h2>{currentSong.title}</h2>
                <span>{currentSong.artist} | BPM: {currentSong.bpm}</span>
              </>
            ) : (
              <h2>
                {loading ? '読み込み中...' : '曲を選択してください'}
              </h2>
            )}
          </div>
          <div className="app-actions">
            {currentSong && (
              <button
                className="edit-toggle"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? '閲覧に戻る' : '編集する'}
              </button>
            )}
          </div>
        </header>

        <section className="viewer-area">
          {isEditing ? (
            <SongEditor
              song={currentSong}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
              onDelete={handleDelete}
            />
          ) : currentSong ? (
            <ChordViewer
              song={currentSong}
              isPlaying={isPlaying}
              scrollSpeed={scrollSpeed}
              scrollPos={scrollPos}
              onScrollUpdate={setScrollPos}
            />
          ) : (
            <div className="placeholder-msg">
              <p>左のサイドバーから曲を選択するか、新しく作成してください。</p>
            </div>
          )}
        </section>

        {currentSong && !isEditing && (
          <footer className="controls-area">
            <div className="bpm-sync-panel">
              <button
                className="sync-btn"
                onClick={applyBpmSync}
                title="BPMに合わせて速度を自動計算"
              >
                BPM同期
              </button>
            </div>
            <ControlPanel
              isPlaying={isPlaying}
              onTogglePlay={togglePlay}
              onReset={resetScroll}
              scrollSpeed={scrollSpeed}
              onSpeedChange={setScrollSpeed}
            />
          </footer>
        )}
      </main>

      <style jsx>{`
        .app-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          background-color: var(--bg-color);
        }

        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--surface-color);
          border-right: 1px solid #333;
          display: flex;
          flex-direction: column;
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #333;
        }

        .sidebar-header h1 {
          font-size: 1.25rem;
          color: var(--primary-color);
        }

        .sidebar-footer {
          padding: 1rem;
          border-top: 1px solid #333;
        }

        .add-button {
          padding: 0.75rem;
          background-color: var(--primary-color);
          color: #000;
          font-weight: bold;
          border-radius: 8px;
          width: 100%;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .app-header {
          height: var(--header-height);
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #333;
          background-color: var(--surface-color);
        }

        .song-info h2 {
          font-size: 1.1rem;
          margin-bottom: 0.2rem;
        }

        .song-info span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .edit-toggle {
          font-size: 0.85rem;
          background: #444;
          padding: 0.4rem 1rem;
          border-radius: 4px;
        }

        .viewer-area {
          flex: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-msg {
          text-align: center;
          color: var(--text-muted);
        }

        .controls-area {
          height: var(--control-height);
          background-color: var(--surface-color);
          border-top: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 -5px 20px rgba(0,0,0,0.3);
          position: relative;
        }

        .bpm-sync-panel {
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .sync-btn {
          font-size: 0.75rem;
          padding: 0.4rem 0.8rem;
          background-color: transparent;
          border: 1px solid var(--secondary-color);
          color: var(--secondary-color);
          border-radius: 4px;
        }

        .sync-btn:hover {
          background-color: var(--secondary-color);
          color: #000;
        }
      `}</style>
    </div>
  );
}

export default App;
