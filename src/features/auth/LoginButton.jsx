import React from 'react';
import { auth, googleProvider } from '../../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

/**
 * LoginButton Component
 * Googleログイン・ログアウトの制御
 */
export function LoginButton({ user }) {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error('Login failed', err);
            alert('ログインに失敗しました。Firebase ConsoleでGoogle Authを有効にし、ドメインを承認しているか確認してください。');
        }
    };

    const handleLogout = () => {
        if (window.confirm('ログアウトしますか？')) {
            signOut(auth);
        }
    };

    return (
        <div className="auth-area">
            {user ? (
                <div className="user-profile">
                    <img src={user.photoURL} alt={user.displayName} className="user-avatar" />
                    <div className="user-info">
                        <span className="user-name">{user.displayName}</span>
                        <button className="auth-btn logout" onClick={handleLogout}>
                            ログアウト
                        </button>
                    </div>
                </div>
            ) : (
                <button className="auth-btn login" onClick={handleLogin}>
                    Googleでログイン
                </button>
            )}

            <style jsx>{`
        .auth-area {
          padding: 1rem;
          border-bottom: 1px solid #333;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--primary-color);
        }

        .user-info {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .user-name {
          font-size: 0.8rem;
          font-weight: bold;
        }

        .auth-btn {
          font-size: 0.7rem;
          padding: 0.3rem 0.6rem;
          border-radius: 4px;
          font-weight: bold;
          text-align: center;
        }

        .login {
          background-color: var(--primary-color);
          color: #000;
          width: 100%;
        }

        .logout {
          background-color: transparent;
          color: var(--text-muted);
          border: 1px solid #444;
          width: fit-content;
        }
      `}</style>
        </div>
    );
}
