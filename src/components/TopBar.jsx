import { Sun, Moon } from 'lucide-react';

// A minimal top bar with just a theme toggle.
export default function TopBar({ darkMode, toggleTheme }) {
    return (
        <div className="flex justify-end items-center p-4">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full border border-white/20 bg-white/10 dark:bg-white/10 backdrop-blur-md p-3 shadow-lg hover:scale-105 hover:bg-white/20 transition-all duration-300">
                {darkMode ? <Sun /> : <Moon />}
            </button>
        </div>
    );
}