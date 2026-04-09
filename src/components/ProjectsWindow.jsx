import WindowFrame from './WindowFrame';
import projects from '../data/projects';

// Displays a list of projects from src/data/projects.js.
export default function ProjectsWindow({ onClose }) {
    return (
        <WindowFrame title="Projects" onClose={onClose}>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className="mb-4">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm mb-1">{project.description}</p>
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Visit
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </WindowFrame>
    );
}