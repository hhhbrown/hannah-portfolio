const education = [
    {
        program: "BSc in Computer Science",
        institution: "University of British Columbia",
        status: "Current",
        focus: "Software engineering, systems, and technical problem solving.",
    },
    {
        program: "BSc in Cognitive Systems",
        institution: "University of British Columbia",
        status: "Completed",
        focus: "Brain & Cognition, computation, and human-centered systems.",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="bg-white px-6 py-24 text-zinc-950 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-sm font-medium uppercase text-zinc-500">
                            Education
                        </p>
                    </div>
                </div>

                <div className="mt-16 border-t border-zinc-300">
                    {education.map((item) => (
                        <article
                            key={item.program}
                            className="grid gap-6 border-b border-zinc-300 py-8 md:grid-cols-[160px_1fr]"
                        >
                            <p className="text-sm font-medium uppercase text-zinc-500">
                                {item.status}
                            </p>

                            <div className="grid gap-5 md:grid-cols-[1fr_1.2fr]">
                                <div>
                                    <h3 className="text-2xl font-semibold">{item.program}</h3>
                                    <p className="mt-2 text-base text-zinc-600">
                                        {item.institution}
                                    </p>
                                </div>

                                <p className="text-lg leading-8 text-zinc-700">
                                    {item.focus}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
