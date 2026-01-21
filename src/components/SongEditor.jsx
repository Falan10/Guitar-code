import React, { useState, useRef, useCallback } from 'react';

/**
 * Image processing utility
 * 画像をCanvasでリサイズしてBase64文字列に変換する
 */
const resizeImage = (file, maxWidth = 1200) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // JPEG形式で圧縮してBase64化 (容量節約)
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
};

export function SongEditor({ song, onSave, onCancel, onDelete }) {
  const [formData, setFormData] = useState({
    title: song?.title || '',
    artist: song?.artist || '',
    bpm: song?.bpm || 120,
    content: song?.content || '',
    imageUrl: song?.imageUrl || '',
    displayType: song?.displayType || 'text', // 'text' or 'image'
  });

  const [isResizing, setIsResizing] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'bpm' ? Number(value) : value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsResizing(true);
    try {
      const resizedBase64 = await resizeImage(file);
      setFormData(prev => ({
        ...prev,
        imageUrl: resizedBase64,
        displayType: 'image'
      }));
    } catch (err) {
      alert('画像の処理に失敗しました');
      console.error(err);
    } finally {
      setIsResizing(false);
    }
  };

  const clearImage = () => {
    setFormData(prev => ({ ...prev, imageUrl: '', displayType: 'text' }));
  };

  return (
    <div className="song-editor">
      <div className="editor-header">
        <h3>{song ? '曲を編集' : '新しい曲を追加'}</h3>
        {song && (
          <button className="delete-link" onClick={() => onDelete(song.id)}>
            削除
          </button>
        )}
      </div>

      <div className="form-group">
        <label>曲名</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="曲名を入力"
        />
      </div>

      <div className="form-row">
        <div className="form-group flex-1">
          <label>アーティスト</label>
          <input
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            placeholder="アーティスト名"
          />
        </div>
        <div className="form-group w-80">
          <label>BPM</label>
          <input
            type="number"
            name="bpm"
            value={formData.bpm}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="display-type-tabs">
        <button
          className={formData.displayType === 'text' ? 'active' : ''}
          onClick={() => setFormData(prev => ({ ...prev, displayType: 'text' }))}
        >
          テキスト
        </button>
        <button
          className={formData.displayType === 'image' ? 'active' : ''}
          onClick={() => setFormData(prev => ({ ...prev, displayType: 'image' }))}
        >
          画像・楽譜
        </button>
      </div>

      {formData.displayType === 'text' ? (
        <div className="form-group content-editor">
          <label>コード譜 (テキスト入力)</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="C  G  Am  F..."
          />
        </div>
      ) : (
        <div className="form-group image-upload-area">
          <label>楽譜画像</label>
          {formData.imageUrl ? (
            <div className="image-preview-container">
              <img src={formData.imageUrl} alt="preview" className="img-preview" />
              <div className="image-actions">
                <button className="btn-secondary" onClick={() => fileInputRef.current.click()}>変更</button>
                <button className="btn-danger" onClick={clearImage}>削除</button>
              </div>
            </div>
          ) : (
            <div className="upload-placeholder" onClick={() => fileInputRef.current.click()}>
              {isResizing ? '処理中...' : 'クリックして画像を選択（楽譜、ブラウザのスクショなど）'}
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
      )}

      <div className="editor-actions">
        <button className="btn-cancel" onClick={onCancel}>キャンセル</button>
        <button className="btn-save" onClick={() => onSave(formData)}>保存する</button>
      </div>

      <style jsx>{`
        .song-editor {
          width: 100%;
          max-width: 700px;
          background-color: var(--surface-color);
          padding: 2rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          max-height: 90vh;
          overflow-y: auto;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .delete-link {
          color: var(--error-color);
          font-size: 0.9rem;
          text-decoration: underline;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: flex;
          gap: 1rem;
        }

        .flex-1 { flex: 1; }
        .w-80 { width: 80px; }

        label {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .display-type-tabs {
          display: flex;
          gap: 0.5rem;
          border-bottom: 1px solid #333;
          padding-bottom: 0.5rem;
        }

        .display-type-tabs button {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .display-type-tabs button.active {
          background-color: #333;
          color: var(--primary-color);
          font-weight: bold;
        }

        .content-editor textarea {
          height: 300px;
          font-family: var(--font-mono);
          resize: none;
        }

        .image-upload-area {
          min-height: 200px;
        }

        .upload-placeholder {
          border: 2px dashed #444;
          border-radius: 8px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--text-muted);
          cursor: pointer;
          padding: 1rem;
        }

        .upload-placeholder:hover {
          border-color: var(--primary-color);
          background-color: rgba(255, 255, 255, 0.02);
        }

        .image-preview-container {
          position: relative;
        }

        .img-preview {
          width: 100%;
          border-radius: 4px;
          border: 1px solid #333;
        }

        .image-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-secondary { background: #333; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.8rem; }
        .btn-danger { color: var(--error-color); font-size: 0.8rem; }

        .editor-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn-save {
          background-color: var(--primary-color);
          color: #000;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: bold;
        }

        .btn-cancel {
          padding: 0.75rem 1.5rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
