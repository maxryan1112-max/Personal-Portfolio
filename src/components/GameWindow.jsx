import WindowFrame from './WindowFrame';

//Component for the Unity game
export default function GameWindow({ onClose }) {
    return (
        <WindowFrame title="Game" onClose={onClose}>
            <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <p className="text-center">
                    My Unity WebGL build will appear here.<br />
                </p>
            </div>
        </WindowFrame>
    );
}