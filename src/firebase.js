import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

/**
 * Firebase Configuration
 * User provided config for Project ID: guiter-code-ad4df
 */
const firebaseConfig = {
    apiKey: "AIzaSyBSFq7YkTgMA4gr1AfBxWXbWoBn7JLozQw",
    authDomain: "guiter-code-ad4df.firebaseapp.com",
    projectId: "guiter-code-ad4df",
    storageBucket: "guiter-code-ad4df.firebasestorage.app",
    messagingSenderId: "474318515571",
    appId: "1:474318515571:web:8b128de0df7a71eef42906",
    measurementId: "G-6DGZLTRB7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Enable offline persistence
try {
    enableIndexedDbPersistence(db).catch((err) => {
        if (err.code === 'failed-precondition') {
            console.warn('Firestore persistence failed: Multiple tabs open');
        } else if (err.code === 'unimplemented') {
            console.warn('Firestore persistence failed: Browser not supported');
        }
    });
} catch (e) {
    console.error('Persistence setup error:', e);
}
