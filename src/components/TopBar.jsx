import { Sun, Moon } from 'lucide-react';

// A minimal top bar with just a theme toggle.
// You can extend this for audio toggles, login buttons, etc.
export default function TopBar({ darkMode, toggleTheme }) {
    return (
        <div className="flex justify-end items-center p-4">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="text-2xl">
                {darkMode ? <Sun /> : <Moon />}
            </button>
        </div>
    );
}