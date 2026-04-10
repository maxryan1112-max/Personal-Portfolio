import { useState, useEffect, useRef } from 'react';
import WindowFrame from './WindowFrame';
import tracks from '../data/tracks';

// Simple audio player with a “next track” button.
export default function MusicWindow({ onClose }) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audioEl = audioRef.current;
        if (audioEl) {
            audioEl.load();
            audioEl.play().catch(() => {
            });
        }
    }, [currentTrackIndex]);

    const nextTrack = () => {
        setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
    };

    return (
        <WindowFrame title="Music Player" onClose={onClose}>
            <p className="mb-2">Now playing: {tracks[currentTrackIndex].title}</p>
            <audio ref={audioRef} controls className="w-full">
                <source src={tracks[currentTrackIndex].src} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={nextTrack} className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
                Next Track
            </button>
        </WindowFrame>
    );
}