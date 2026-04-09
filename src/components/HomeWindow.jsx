import { User, Folder, Link, Gamepad } from 'lucide-react';

// Landing screen displayed when no other window is open.
// onOpen() will be called with section names like 'about' or 'projects'.
export default function HomeWindow({ onOpen, openMusic }) {
    return (
        <div className="flex flex-col items-center text-center max-w-lg">
            <h1 className="text-3xl font-bold mb-2">hi! i’m Your Name</h1>
            <p className="mb-4">developer • creative • musician</p>

            <div className="grid grid-cols-2 gap-6 my-4">
                <button onClick={() => onOpen('about')} className="flex flex-col items-center">
                    <User className="w-8 h-8 mb-1" />
                    <span>About</span>
                </button>
                <button onClick={() => onOpen('projects')} className="flex flex-col items-center">
                    <Folder className="w-8 h-8 mb-1" />
                    <span>Projects</span>
                </button>
                <button onClick={() => onOpen('links')} className="flex flex-col items-center">
                    <Link className="w-8 h-8 mb-1" />
                    <span>Links</span>
                </button>
                <button onClick={() => onOpen('game')} className="flex flex-col items-center">
                    <Gamepad className="w-8 h-8 mb-1" />
                    <span>Game</span>
                </button>
            </div>

            {/* easter‑egg music button */}
            <button onClick={openMusic} className="mt-6 text-2xl" aria-label="Open music player">
                🎧
            </button>
        </div>
    );
}