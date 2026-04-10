import WindowFrame from './WindowFrame';
import projects from '../data/projects';

// Projects section with thumbnail cards
export default function ProjectsWindow({ onClose }) {
    return (
        <WindowFrame title="Projects" onClose={onClose}>
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
                    Featured Projects
                </h2>
                <p className="text-slate-200 text-base md:text-lg leading-8 max-w-3xl">
                    This section highlights the projects that reflect my interests in creative technology, game development, interaction design, and immersive digital experiences.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="rounded-2xl border border-white/15 bg-white/5 overflow-hidden shadow-xl backdrop-blur-sm"
                    >
                        <div className="h-48 w-full bg-slate-800/70 border-b border-white/10 flex items-center justify-center">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-slate-400 text-sm md:text-base">
                                    Project Thumbnail
                                </span>
                            )}
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                {project.title}
                            </h3>

                            <p className="text-slate-200 text-sm md:text-base leading-7 mb-4">
                                {project.description}
                            </p>

                            {project.tags && (
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full border border-white/10 bg-black/20 text-slate-100 text-xs md:text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 rounded-full bg-cyan-200 text-slate-900 font-medium hover:bg-cyan-100 transition-colors duration-300"
                                >
                                    View Project
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </WindowFrame>
    );
}