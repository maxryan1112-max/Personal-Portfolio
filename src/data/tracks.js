// Music tracks used by the MusicWindow.
// Place the actual mp3 files in public/audio/.
const base = import.meta.env.BASE_URL;
const tracks = [
  {
    id: 1,
    title: 'Lofi Hip Hop Beat',
    
    src: `${base}audio/Chill Lofi Hip Hop Beat.mp3`
  },
  {
    id: 2,
    title: 'Jazz Sessions',
    src: '/audio/jazz.mp3',
  },
  {
    id: 3,
    title: 'My Podcast',
    src: '/audio/podcast.mp3',
  },
];

export default tracks;