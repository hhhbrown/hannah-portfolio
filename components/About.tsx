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
                    <p className="text-sm font-medium uppercase text-zinc-500">
                        About
                    </p>
                </div>

                <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
                    <div>
                        <p className="max-w-2xl text-xl leading-9 text-zinc-800 sm:text-2xl sm:leading-10">
                            I&apos;m currently studying Computer Science at the University of British Columbia. 
                            After completing my first degree in Cognitive Systems, I competed internationally for Canada in trampoline gymnastics, 
                            earning a World Championship team medal and developing a deep appreciation for discipline, 
                            consistency, and community involvement. Today, I'm interested in applying those same principles to software. 
                            My background spans software development, coaching, event management, and operations. 
                            I'm particularly drawn to building products that improve systems, simplify workflows, 
                            and create better experiences for the people and communities they serve.
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
