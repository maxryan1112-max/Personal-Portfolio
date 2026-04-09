import WindowFrame from './WindowFrame';

// Basic About section.  Replace the text with your own biography.
export default function AboutWindow({ onClose }) {
    return (
        <WindowFrame title="About" onClose={onClose}>
            <p className="mb-3">
                Hello! I’m Your Name, a creative developer who blends software engineering with
                game design and music. I love building playful experiences and immersive interfaces.
            </p>
            <p className="mb-3">
                In this portfolio you’ll find a mix of coding projects, web prototypes, and
                personal art. Feel free to explore and reach out if you’d like to collaborate!
            </p>
        </WindowFrame>
    );
}