import WindowFrame from './WindowFrame';

// UI-only music panel. Audio is controlled by App.jsx
export default function MusicWindow({
  onClose,
  tracks,
  currentTrackIndex,
  isPlaying,
  togglePlay,
  nextTrack,
  playTrack,
  currentTime,
  duration,
  onSeek,
}) {
  const formatTime = (time) => {
    if (!Number.isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <WindowFrame title="Music Player" onClose={onClose}>
      <p className="mb-2">Now playing: {tracks[currentTrackIndex].title}</p>

      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={onSeek}
          className="w-full accent-purple-500"
        />
        <div className="mt-1 flex justify-between text-sm text-slate-600 dark:text-slate-300">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex gap-3 mt-4 mb-6">
        <button
          onClick={togglePlay}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={nextTrack}
          className="px-4 py-2 bg-slate-700 text-white rounded"
        >
          Next Track
        </button>
      </div>

      <ul className="space-y-2">
        {tracks.map((track, index) => (
          <li key={track.id}>
            <button
              onClick={() => playTrack(index)}
              className={`w-full text-left px-3 py-2 rounded border ${
                index === currentTrackIndex
                  ? 'bg-purple-100 dark:bg-purple-900 border-purple-400'
                  : 'bg-transparent border-slate-300 dark:border-slate-700'
              }`}
            >
              {track.title}
            </button>
          </li>
        ))}
      </ul>
    </WindowFrame>
  );
  
}