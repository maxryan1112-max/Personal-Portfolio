import { User, Folder, Link, Gamepad } from 'lucide-react';

// onOpen() will be called with section names
export default function HomeWindow({ onOpen, openMusic }) {
    return (
        <div className="relative w-full max-w-6xl mx-auto px-6 py-10">
            {/* Static background window shape */}
            <div className="absolute inset-x-20 top-6 bottom-8 rounded-[2rem] border border-white/20 bg-[#0f2343]/95 shadow-2xl" />
            <div className="absolute inset-x-20 top-6 h-16 rounded-t-[2rem] border-b border-white/20 bg-black/35" />
            <div className="absolute left-25 top-2.6 text-2xl lowercase text-white/90 z-10">home</div>

    
            {/* Main content */}
            <div className="relative z-10 min-h-[640px] flex flex-col items-center justify-center text-center px-8 pt-28 pb-">
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-none mb-4">
                    Hello, I’m <span className="text-cyan-200">Ryan Mwaura!</span>
                </h1>

                <p className="text-xl md:text-3xl text-slate-200 mb-14">
                    Developer • Creative • Musician
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 my-4">
                    <button
                        onClick={() => onOpen('about')}
                        className="group flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:text-violet-300"
                    >
                        <User className="w-12 h-12 md:w-13 md:h-13 mb-1 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-m md:text-2xl font-medium">About</span>
                    </button>

                    <button
                        onClick={() => onOpen('projects')}
                        className="group flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:text-violet-300"
                    >
                        <Folder className="w-12 h-12 md:w-13 md:h-13 mb-1 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-lg md:text-2xl font-medium">Projects</span>
                    </button>

                    <button
                        onClick={() => onOpen('links')}
                        className="group flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:text-violet-300"
                    >
                        <Link className="w-12 h-12 md:w-13 md:h-13 mb-1 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-lg md:text-2xl font-medium">Links</span>
                    </button>

                    <button
                        onClick={() => onOpen('game')}
                        className="group flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:text-violet-300"
                    >
                        <Gamepad className="w-12 h-12 md:w-13 md:h-13 mb-1 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-lg md:text-2xl font-medium">Game</span>
                    </button>
                </div>

                {/* music button */}
                <button
                    onClick={openMusic}
                    className="mt-10 group flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:text-violet-300"
                >

                </button>
            </div>

            {/* Bottom-right lofi animation */}
            <button
                onClick={openMusic}
                aria-label="Open music player"
                className="fixed bottom-0 right-2 z-20 hidden md:block focus:outline-none"
            >
                <img
                    src={`${import.meta.env.BASE_URL}images/lofi-boy-coding.webp`}
                    alt="Lofi boy coding at a computer"
                    className="w-[460px] lg:w-[580px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 animate-float"
                />
            </button>
        </div>
    );
}