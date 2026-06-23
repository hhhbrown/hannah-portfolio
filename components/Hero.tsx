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
                    className="flex flex-1 items-center justify-center py-20 text-center lg:py-28"
                >
                    <div>
                        <h1 className="max-w-2xl text-2xl font-semibold leading-snug sm:text-4xl lg:text-5xl">
                            Hello, I&apos;m a Cognitive Systems Graduate and current Computer
                            Science Student.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
