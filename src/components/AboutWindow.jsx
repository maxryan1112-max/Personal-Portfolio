import WindowFrame from './WindowFrame';

// About section with profile, bio, skills, and tools
export default function AboutWindow({ onClose }) {
    const skills = [
        'Frontend Development',
        'Game Development',
        'UI / UX Design',
        'Interactive Media',
        'XR / VR Research',
        'Creative Coding',
    ];

    const tools = [
        'React',
        'JavaScript',
        'Unity',
        'C#',
        'Java',
        'Tailwind CSS',
        'GitHub',
        'Figma',
        'VS Code',
    ];

    return (
        <WindowFrame title="About Me" onClose={onClose}>
            <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
                <div className="flex justify-center md:justify-start">
                    <img
                        src="/images/profile-picture.jpeg"
                        alt="Ryan Mwaura profile"
                        className="w-36 h-36 md:w-40 md:h-40 rounded-2xl object-cover border border-white/20 shadow-xl"
                    />
                </div>

                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        Ryan Mwaura
                    </h2>

                    <p className="mb-4 text-slate-200 leading-8 text-base md:text-lg">
                         I build digital worlds that people don’t just use, but experience!
                    </p>

                    <p className="mb-4 text-slate-200 leading-8 text-base md:text-lg">
                        I’m a Computer Science student at Algoma University specializing in game technology and creative arts, currently working as a Research Assistant developing XR/VR immersive learning experiences. My work blends game development with emerging technologies, with a focus on designing interactive systems and environments that feel engaging, intuitive, and meaningful.
                    </p>

                    <p className="text-slate-200 leading-8 text-base md:text-lg">
                        Outside of development, my background in student leadership and music shapes how I approach my work. I value creativity just as much as technical precision, and I bring a collaborative, people-focused mindset into everything I build. Right now, I’m focused on growing as a developer and creating projects that connect creativity, technology, and real-world impact.
                    </p>
                </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
                <section className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-cyan-200 mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full border border-white/15 bg-black/20 text-slate-100 text-sm md:text-base"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-cyan-200 mb-4">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 rounded-full border border-white/15 bg-black/20 text-slate-100 text-sm md:text-base"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </WindowFrame>
    );
}