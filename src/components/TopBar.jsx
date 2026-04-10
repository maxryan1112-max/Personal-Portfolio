import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';

export default function TopBar({ darkMode, toggleTheme, isMuted, toggleMute }) {
    return (
        <div className="flex justify-start items-center gap-3 p-4">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-3 shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
                {darkMode ? <Sun /> : <Moon />}
            </button>

            {/* Mute Toggle */}
            <button
                onClick={toggleMute}
                aria-label="Toggle mute"
                className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md p-3 shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
                {isMuted ? <VolumeX /> : <Volume2 />}
            </button>
        </div>
    );
}