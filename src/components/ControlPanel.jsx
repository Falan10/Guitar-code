import React from 'react';

/**
 * ControlPanel Component
 * 再生・停止・スクロール速度の制御パネル
 */
export function ControlPanel({
    isPlaying,
    onTogglePlay,
    onReset,
    scrollSpeed,
    onSpeedChange
}) {
    return (
        <div className="control-panel">
            <div className="controls-group">
                <button className="ctrl-btn secondary" onClick={onReset} title="最初に戻る">
                    ⏮
                </button>
                <button
                    className={`ctrl-btn main ${isPlaying ? 'playing' : ''}`}
                    onClick={onTogglePlay}
                >
                    {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
                </button>
            </div>

            <div className="speed-control">
                <label>速度: {scrollSpeed} px/s</label>
                <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={scrollSpeed}
                    onChange={(e) => onSpeedChange(Number(e.target.value))}
                />
            </div>

            <style jsx>{`
        .control-panel {
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 0 2rem;
          width: 100%;
          justify-content: center;
        }

        .controls-group {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .ctrl-btn {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          font-weight: bold;
          transition: transform 0.1s;
        }

        .ctrl-btn:active {
          transform: scale(0.95);
        }

        .ctrl-btn.main {
          width: 140px;
          background-color: var(--secondary-color);
          color: #000;
          font-size: 1rem;
        }

        .ctrl-btn.main.playing {
          background-color: var(--primary-color);
        }

        .ctrl-btn.secondary {
          width: 48px;
          background-color: #333;
          color: #fff;
          font-size: 1.2rem;
        }

        .speed-control {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          min-width: 200px;
        }

        .speed-control label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        input[type="range"] {
          width: 100%;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}
