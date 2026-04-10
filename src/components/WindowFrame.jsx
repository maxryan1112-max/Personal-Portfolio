import { X } from 'lucide-react';

export default function WindowFrame({ title, onClose, children }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-10">
      <div className="rounded-[2rem] border border-white/20 bg-[#0f2343]/95 shadow-2xl overflow-hidden min-h-[640px] w-full">
        <header className="flex justify-between items-center px-6 py-4 h-16 border-b border-white/20 bg-black/35">
          <h2 className="text-2xl lowercase text-white/90">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close window"
            className="rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        <div className="p-8 md:p-10 h-[calc(640px-64px)] overflow-y-auto text-white">
          {children}
        </div>
      </div>
    </div>
  );
}