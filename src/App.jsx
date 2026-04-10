import { useState, useEffect, useRef } from 'react';
import TopBar from './components/TopBar';
import HomeWindow from './components/HomeWindow';
import AboutWindow from './components/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow';
import LinksWindow from './components/LinksWindow';
import MusicWindow from './components/MusicWindow';
import GameWindow from './components/GameWindow';

import tracks from './data/tracks';

export default function App() {
    // which window is currently open
    const [currentWindow, setCurrentWindow] = useState('home');
    // theme state (light/dark)
    const [darkMode, setDarkMode] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    
    

    // toggle dark mode by applying the 'dark' class to <html>
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            if (isPlaying) {
                audioRef.current.play().catch(() => {});
            }
        }
    }, [currentTrackIndex, isPlaying]);

    // functions to control windows and theme
    const openWindow = (name) => setCurrentWindow(name);
    const closeWindow = () => setCurrentWindow('home');
    const toggleTheme = () => setDarkMode((prev) => !prev);

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error('Audio playback failed:', error);
            }
        }
    };

    const playTrack = async (index) => {
        setCurrentTrackIndex(index);
        setIsPlaying(true);

        requestAnimationFrame(async () => {
            if (!audioRef.current) return;
            try {
                await audioRef.current.play();
            } catch (error) {
                console.error('Track start failed:', error);
            }
        });
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    };
    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        setCurrentTime(audioRef.current.currentTime);
    };

const handleLoadedMetadata = () => {
        if (!audioRef.current) return;
        setDuration(audioRef.current.duration || 0);
    };

const toggleMute = () => {
        if (!audioRef.current) return;

const newMuteState = !isMuted;
        audioRef.current.muted = newMuteState;
        setIsMuted(newMuteState);
};

const handleSeek = (event) => {
    const value = Number(event.target.value);
        if (!audioRef.current) return;
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    // picks which window component to display
    let windowComponent ;
    switch (currentWindow) {
        case 'about':
            windowComponent = <AboutWindow onClose={closeWindow} />;
            break;
        case 'projects':
            windowComponent = <ProjectsWindow onClose={closeWindow} />;
            break;
        case 'links':
            windowComponent = <LinksWindow onClose={closeWindow} />;
            break;
        case 'contact':
            windowComponent = <ContactWindow onClose={closeWindow} />;
            break;
        case 'music':
            windowComponent = (<MusicWindow onClose={closeWindow}
                tracks={tracks}
                currentTrackIndex={currentTrackIndex}
                isPlaying={isPlaying}
                togglePlay={togglePlay}
                nextTrack={nextTrack}
                playTrack={playTrack}
                currentTime={currentTime}
                duration={duration}
                onSeek={handleSeek}
    />
  );
  break;
        case 'game':
            windowComponent = <GameWindow onClose={closeWindow} />;
            break;
        default:
            windowComponent = (
                <HomeWindow
                    onOpen={openWindow}
                    openMusic={() => openWindow('music')}
                />
            );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f4efff] via-[#efe7ff] 
        to-[#dbeafe] text-slate-900 dark:from-[#090b17] dark:via-[#121a33] dark:to-[#1a1038] 
        dark:text-slate-100 transition-colors duration-500">

            <audio
                ref={audioRef}
                onEnded={nextTrack}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
>
                <source src={tracks[currentTrackIndex].src} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <TopBar
                darkMode={darkMode}
                toggleTheme={toggleTheme}
                isMuted={isMuted}
                toggleMute={toggleMute}
/>

            <main className="flex-grow flex items-center justify-center p-">
                {windowComponent}
            </main>

            <footer className="text-center py-4 opacity-75">
                © {new Date().getFullYear()} Ryan Mwaura
            </footer>
        </div>
    );
}