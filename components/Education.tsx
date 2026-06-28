const education = [
    {
        program: "B.Sc. in Computer Science",
        institution: "University of British Columbia",
        status: "Current",
        focus: "Second Degree Program (BCS)",
    },
    {
        program: "B.Sc. in Cognitive Systems",
        institution: "University of British Columbia",
        status: "Completed",
        focus: "Brain & Cognition Specialization",
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="bg-black px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                            Education
                        </h2>
                    </div>
                </div>

                <div className="mt-16 border-t border-zinc-800">
                    {education.map((item) => (
                        <article
                            key={item.program}
                            className="grid gap-6 border-b border-zinc-800 py-8 md:grid-cols-[160px_1fr]"
                        >
                            <p className="text-sm font-medium uppercase text-zinc-400">
                                {item.status}
                            </p>

                            <div className="grid gap-5 md:grid-cols-[1fr_1.2fr]">
                                <div>
                                    <h3 className="text-2xl font-semibold">{item.program}</h3>
                                    <p className="mt-2 text-base text-zinc-300">
                                        {item.institution}
                                    </p>
                                </div>

                                <p className="text-base leading-7 text-zinc-300">
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
