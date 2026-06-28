import Image from "next/image";

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hannah-brown-0ab629308/" },
    { label: "GitHub", href: "https://github.com/hhhbrown" },
    { label: "Email", href: "mailto:hmbrown@student.ubc.ca" },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-white px-6 py-24 text-zinc-950 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl">
                        About
                    </h2>
                </div>

                <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
                    <div>
                        <p className="max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg sm:leading-8">
                            After graduating from Cognitive Systems at UBC, I spent several years competing internationally
                            for Canada in trampoline gymnastics. I retired after a pretty serious knee injury in 2024 and
                            took on more leadership roles, including organizing competitions, training camps, and other programs
                            for athletes across British Columbia.

                            I&apos;ve always enjoyed finding better ways to do things, whether that&apos;s creating a competition
                            schedule with no event conflicts or finding a new drill that helps an athlete learn a skill more easily.
                            Over time, that interest led me toward software and back to UBC to study Computer Science. Since then,
                            I&apos;ve enjoyed learning how to turn my ideas into tools that other people can use.
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
