import { X } from 'lucide-react';

// A reusable wrapper for every window: it gives a title bar with a close button
export default function WindowFrame({ title, onClose, children }) {
  return (
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <header className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-800">
          <h2 className="font-medium text-gray-700 dark:text-gray-200">{title}</h2>
          <button onClick={onClose} aria-label="Close window">
            <X className="w-5 h-5 text-gray-700 dark:text-gray-200" />
          </button>
        </header>
        <div className="p-4">{children}</div>
      </div>
  );
}