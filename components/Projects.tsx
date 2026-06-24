import Image from "next/image";

type Project = {
    title: string;
    subtitle: string;
    problem: string;
    solution: string;
    tech: string[];
    image?: {
        src: string;
        alt: string;
        fit?: "cover" | "contain";
    };
    placeholderLabel: string;
    links: {
        label: string;
        href: string;
    }[];
};

const trainingTrackerProject: Project = {
    title: "Training Tracker",
    subtitle: "A tool for logging training sessions and reviewing progress.",
    problem:
        "Training plans often span notebooks, spreadsheets, and memory, making it harder to see patterns over time or share between coaches.",
    solution:
        "A shared system for coaches that keeps sessions and routines in one place so progress can be reviewed and tracked over time.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    image: {
        src: "/images/trainingtracker.png",
        alt: "Training Tracker project screenshot",
    },
    placeholderLabel: "Training dashboard placeholder",
    links: [
        { label: "GitHub", href: "https://github.com/hhhbrown/trampoline-training-tracker" },
        { label: "Demo", href: "https://trampoline-training-tracker.vercel.app/" },
    ],
};

const saveToDesktopProject: Project = {
    title: "Save to Desktop",
    subtitle: "In progress: A web app for organizing and sharing event photos.",
    problem:
        "Finding and collecting event photos after the fact can be challenging.",
    solution:
        "A simple app that allows event organizers to create an event and share a link for guests to upload photos.",
    tech: ["Cloud Storage", "AWS", "S3",],
    image: {
        src: "/images/savetodesktop.png",
        alt: "Save to Desktop project screenshot",
    },
    placeholderLabel: "Saved resource placeholder",
    links: [
        { label: "GitHub", href: "https://github.com/hhhbrown/save-to-desktop" },
    ],
};

const registrationManagerProject: Project = {
    title: "Registration Manager",
    subtitle: "Java desktop application developed as part of a software construction course.",
    problem:
        "The project focused on applying object-oriented design principles to a real-world registration system while practicing testing, persistence, and software architecture.",
    solution:
        "Built a desktop application for managing athlete registrations and competition entries, with JSON persistence and comprehensive JUnit testing.",
    tech: ["Java", "Swing", "JUnit", "JSON"],
    image: {
        src: "/images/UML_Design_Diagram.jpg",
        alt: "Registration Manager UML design diagram",
        fit: "contain",
    },
    placeholderLabel: "UML design diagram",
    links: [
        { label: "GitHub", href: "https://github.com/hhhbrown/registration-manager" },
    ],
};

const projects: Project[] = [
    trainingTrackerProject,
    saveToDesktopProject,
    registrationManagerProject,
];

function ProjectVisual({ project }: { project: Project }) {
    return (
        <div className="relative flex aspect-[16/10] items-end overflow-hidden border border-zinc-300 bg-zinc-100 p-5 sm:p-8">
            {project.image ? (
                <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={project.image.fit === "contain" ? "object-contain" : "object-cover"}
                />
            ) : (
                <div>
                    <p className="text-sm font-medium uppercase text-zinc-500">
                        Screenshot
                    </p>
                    <p className="mt-2 max-w-xs text-xl leading-8 text-zinc-700">
                        {project.placeholderLabel}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-white px-6 py-24 text-zinc-950 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 border-t border-zinc-300 pt-8 lg:grid-cols-[0.75fr_1.25fr]">
                    <p className="text-sm font-medium uppercase text-zinc-500">
                        Projects
                    </p>
                </div>

                <div className="mt-20 space-y-24 lg:space-y-32">
                    {projects.map((project, index) => {
                        const reverseLayout = index % 2 === 1;

                        return (
                            <article
                                key={project.title}
                                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16"
                            >
                                <div className={reverseLayout ? "lg:order-2" : undefined}>
                                    <ProjectVisual project={project} />
                                </div>

                                <div className={reverseLayout ? "lg:order-1" : undefined}>
                                    <p className="text-sm font-medium uppercase text-zinc-500">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <h3 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-4 text-xl leading-8 text-zinc-700">
                                        {project.subtitle}
                                    </p>

                                    <div className="mt-8 space-y-7 border-t border-zinc-300 pt-7">
                                        <div>
                                            <h4 className="text-sm font-medium uppercase text-zinc-500">
                                                Problem
                                            </h4>
                                            <p className="mt-3 text-base leading-8 text-zinc-700">
                                                {project.problem}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium uppercase text-zinc-500">
                                                Solution
                                            </h4>
                                            <p className="mt-3 text-base leading-8 text-zinc-700">
                                                {project.solution}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium uppercase text-zinc-500">
                                                Tech
                                            </h4>
                                            <ul className="mt-4 flex flex-wrap gap-2">
                                                {project.tech.map((tool) => (
                                                    <li
                                                        key={tool}
                                                        className="border border-zinc-300 px-3 py-1 text-sm text-zinc-700"
                                                    >
                                                        {tool}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-medium uppercase text-zinc-500">
                                                Links
                                            </h4>
                                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                                                {project.links.map((link) => (
                                                    <a
                                                        key={link.label}
                                                        href={link.href}
                                                        className="text-base font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950"
                                                    >
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
