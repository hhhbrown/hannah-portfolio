const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Athletics", href: "#athletics" },
    { label: "Management", href: "#management" },
];

export default function Hero() {
    return (
        <section className="min-h-screen bg-zinc-950 px-6 py-8 text-white sm:px-10 lg:px-16">
            <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col">
                <header className="flex items-center justify-between gap-8">
                    <a
                        href="#top"
                        className="text-sm font-semibold uppercase"
                    >
                        Hannah
                    </a>
                    <nav aria-label="Main navigation" className="hidden md:block">
                        <ul className="flex gap-8 text-sm text-zinc-300">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a className="hover:text-white" href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <div
                    id="top"
                    className="flex flex-1 items-center justify-center py-20 text-center sm:py-24 lg:py-28"
                >
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
                        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                            Hannah Brown
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                            Current Computer Science student, and former Team Canada athlete with a previous degree in Cognitive Systems. Interested in building software that improves systems, simplifies workflows, and creates better user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
