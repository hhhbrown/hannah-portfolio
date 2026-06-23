import Image from "next/image";

const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Email", href: "#" },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-white px-6 py-24 text-zinc-950 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase text-zinc-500">
                        About
                    </p>
                </div>

                <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
                    <div>
                        <p className="max-w-2xl text-xl leading-9 text-zinc-800 sm:text-2xl sm:leading-10">
                            I&apos;m a Cognitive Systems graduate and Computer Science student
                            at the University of British Columbia with interests in software
                            engineering, systems design, user experience, and operations. My
                            background spans web development, high-performance sport,
                            coaching, and event management. As a former Team Canada athlete
                            and World Championship medalist, I&apos;ve spent years working in
                            environments where discipline, consistency, and continuous
                            improvement matter. Today, I bring that same mindset to building
                            software. I&apos;m particularly interested in creating products that
                            improve systems, simplify workflows, and make complex processes
                            easier for people to navigate.
                        </p>

                        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-zinc-300 pt-6">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="text-base font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative aspect-[4/5] w-full overflow-hidden border border-zinc-300 bg-zinc-100">
                        <Image
                            src="/images/img.jpg"
                            alt="Portrait of Hannah"
                            fill
                            sizes="(min-width: 1024px) 360px, 100vw"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
