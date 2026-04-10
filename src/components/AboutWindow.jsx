import WindowFrame from './WindowFrame';

// Basic About section
export default function AboutWindow({ onClose }) {
    return (
        <WindowFrame title="About" onClose={onClose}>
            <p className="mb-3">
                Hello! I’m Ryan Mwaura and I build digital worlds that people don’t just use, but experience.
            </p>
<p className="mb-3">
                I’m a Computer Science student at Algoma University specializing in game technology and creative arts,
                 currently working as a Research Assistant developing XR/VR immersive learning experiences. My work blends game development with emerging 
                 technologies, focusing on designing interactive systems and environments that are engaging, intuitive, and meaningful.
            </p>
            <p className="mb-3">
               Outside of development, my background in student leadership and music shapes how I approach my work. 
               I value creativity just as much as technical precision, and I bring a collaborative, people-focused mindset into everything I build.
                Right now, I’m focused on growing as a developer and creating projects that connect creativity, technology, and real-world impact.
               Feel free to explore and reach out if you’d like to collaborate!
            </p>
        </WindowFrame>
    );
}