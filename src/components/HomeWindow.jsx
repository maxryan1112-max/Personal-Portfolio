import { User, Folder, Link, Gamepad } from 'lucide-react';

// onOpen() will be called with section names
export default function HomeWindow({ onOpen, openMusic }) {
    return (
        <div className="flex flex-col items-center text-center max-w-lg">
            <h1 className="text-3xl font-bold mb-2">Hello, I’m Ryan Mwaura!</h1>
            <p className="mb-4">Developer • Creative • Musician</p>

            <div className="grid grid-cols-2 gap-6 my-4">
                <button onClick={() => onOpen('about')} className="group flex flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-violet-300">
                    <User className="w-8 h-8 mb-1" />
                    <span>About</span>
                </button>
                <button onClick={() => onOpen('projects')} className="group flex flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-violet-300">
                    <Folder className="w-8 h-8 mb-1" />
                    <span>Projects</span>
                </button>
                <button onClick={() => onOpen('links')} className="group flex flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-violet-300">
                    <Link className="w-8 h-8 mb-1" />
                    <span>Links</span>
                </button>
                <button onClick={() => onOpen('game')} className="group flex flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-violet-300">
                    <Gamepad className="w-8 h-8 mb-1" />
                    <span>Game</span>
                </button>
            </div>

            {/* music button */}
            <button onClick={openMusic} className="group flex flex-col items-center gap-2 rounded-2xl px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-violet-300">
                🎧
            </button>
        </div>
    );
}