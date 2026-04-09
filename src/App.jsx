import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import HomeWindow from './components/HomeWindow';
import AboutWindow from './components/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow';
import LinksWindow from './components/LinksWindow';
import ContactWindow from './components/ContactWindow';
import MusicWindow from './components/MusicWindow';
import GameWindow from './components/GameWindow';

export default function App() {
    // which window is currently open
    const [currentWindow, setCurrentWindow] = useState('home');
    // theme state (light/dark)
    const [darkMode, setDarkMode] = useState(false);

    // toggle dark mode by applying the 'dark' class to <html>
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // functions to control windows and theme
    const openWindow = (name) => setCurrentWindow(name);
    const closeWindow = () => setCurrentWindow('home');
    const toggleTheme = () => setDarkMode((prev) => !prev);

    // pick which window component to display
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
            windowComponent = <MusicWindow onClose={closeWindow} />;
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
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 to-purple-700 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-50">
            {/* top bar contains theme toggle (and could hold other controls later) */}
            <TopBar darkMode={darkMode} toggleTheme={toggleTheme} />

            {/* main content: centre the currently active window */}
            <main className="flex-grow flex items-center justify-center p-4">
                {windowComponent}
            </main>

            {/* simple footer */}
            <footer className="text-center py-4 opacity-75">
                © {new Date().getFullYear()} Your Name
            </footer>
        </div>
    );
}