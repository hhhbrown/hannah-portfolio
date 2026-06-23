type Project = {
    title: string;
    summary: string;
    tools: string[];
    href?: string;
};

const projects: Project[] = [];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-white px-6 py-24 text-zinc-950 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="border-t border-zinc-300 pt-8">
                    <p className="text-sm font-medium uppercase text-zinc-500">
                        Projects
                    </p>
                    <p className="mt-6 max-w-xl text-xl leading-8 text-zinc-700">
                        Selected work coming soon.
                    </p>
                </div>

                {projects.length > 0 && (
                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {projects.map((project) => (
                            <article
                                key={project.title}
                                className="border-t border-zinc-300 pt-6"
                            >
                                <h3 className="text-2xl font-semibold">{project.title}</h3>
                                <p className="mt-4 text-lg leading-8 text-zinc-600">
                                    {project.summary}
                                </p>
                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <li
                                            key={tool}
                                            className="border border-zinc-300 px-3 py-1 text-sm text-zinc-600"
                                        >
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
