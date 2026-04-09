import WindowFrame from './WindowFrame';

// Placeholder component for your Unity game.  Replace the <div> with a WebGL iframe once you export your build.
export default function GameWindow({ onClose }) {
    return (
        <WindowFrame title="Game" onClose={onClose}>
            <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-center">
                    Your Unity WebGL build will appear here.<br />
                    Replace this div with an <code>&lt;iframe&gt;</code> or canvas pointing to your WebGL files.
                </p>
            </div>
        </WindowFrame>
    );
}