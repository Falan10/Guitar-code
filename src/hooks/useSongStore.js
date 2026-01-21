import { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import {
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp,
    orderBy
} from 'firebase/firestore';

const LOCAL_STORAGE_KEY = 'guitar_scroll_songs';

/**
 * useSongStore hook
 * LocalStorage 兼 Firestore のデータ管理
 */
export function useSongStore(user) {
    const [songs, setSongs] = useState([]);
    const [currentSongId, setCurrentSongId] = useState(null);
    const [loading, setLoading] = useState(true);

    // 1. Initial Load (LocalStorage)
    useEffect(() => {
        if (!user) {
            const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (saved) {
                setSongs(JSON.parse(saved));
            }
            setLoading(false);
        }
    }, [user]);

    // 2. Sync with Firestore (if user is logged in)
    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, 'songs'),
            where('userId', '==', user.uid),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const songList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                // Firestore Timestamp を JS Date/Number に変換
                createdAt: doc.data().createdAt?.toMillis() || Date.now()
            }));
            setSongs(songList);
            setLoading(false);
        }, (err) => {
            console.error('Firestore sync error:', err);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    // Actions
    const addSong = useCallback(async (songData) => {
        const newSongDraft = {
            title: '名称未設定の曲',
            artist: '',
            key: 'C',
            bpm: 120,
            content: '',
            imageUrl: '',
            displayType: 'text',
            scrollSpeed: 20,
            ...songData,
        };

        if (user) {
            // Add to Firestore
            const docRef = await addDoc(collection(db, 'songs'), {
                ...newSongDraft,
                userId: user.uid,
                createdAt: serverTimestamp()
            });
            return { id: docRef.id, ...newSongDraft };
        } else {
            // Add to Local
            const newSong = { id: crypto.randomUUID(), ...newSongDraft, createdAt: Date.now() };
            const updated = [newSong, ...songs];
            setSongs(updated);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
            return newSong;
        }
    }, [user, songs]);

    const updateSong = useCallback(async (id, updates) => {
        if (user) {
            const docRef = doc(db, 'songs', id);
            await updateDoc(docRef, { ...updates, updatedAt: serverTimestamp() });
        } else {
            const updated = songs.map((s) => (s.id === id ? { ...s, ...updates } : s));
            setSongs(updated);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
        }
    }, [user, songs]);

    const deleteSong = useCallback(async (id) => {
        if (user) {
            await deleteDoc(doc(db, 'songs', id));
        } else {
            const updated = songs.filter((s) => s.id !== id);
            setSongs(updated);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
        }
        if (currentSongId === id) setCurrentSongId(null);
    }, [user, songs, currentSongId]);

    const currentSong = songs.find((s) => s.id === currentSongId) || null;

    return {
        songs,
        currentSong,
        currentSongId,
        setCurrentSongId,
        addSong,
        updateSong,
        deleteSong,
        loading
    };
}
