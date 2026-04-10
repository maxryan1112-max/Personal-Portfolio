import { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import HomeWindow from './components/HomeWindow';
import AboutWindow from './components/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow';
import LinksWindow from './components/LinksWindow';
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
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f4efff] via-[#efe7ff] to-[#dbeafe] text-slate-900 dark:from-[#090b17] dark:via-[#121a33] dark:to-[#1a1038] dark:text-slate-100 transition-colors duration-500">

            <TopBar darkMode={darkMode} toggleTheme={toggleTheme} />

            <main className="flex-grow flex items-center justify-center p-">
                {windowComponent}
            </main>

            <footer className="text-center py-4 opacity-75">
                © {new Date().getFullYear()} Ryan Mwaura
            </footer>
        </div>
    );
}