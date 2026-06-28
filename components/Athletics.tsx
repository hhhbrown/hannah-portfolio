import Image from "next/image";

const athleticHighlights = [
    "World Cup Finalist",
    "World Championship medalist",
    "National Champion",
];

const athleticsPhotos = [
    { src: "/images/img2.jpg", alt: "Athletics photo 1" },
    { src: "/images/img3.jpg", alt: "Athletics photo 2" },
    { src: "/images/img4.jpg", alt: "Athletics photo 3" },
    { src: "/images/img5.png", alt: "Athletics photo 4" },
];

export default function Athletics() {
    return (
        <section
            id="athletics"
            className="bg-zinc-950 px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                            Athletics
                        </h2>
                        <h3 className="mt-1 max-w-lg text-2xl font-semibold leading-tight sm:text-3xl">
                            Trampoline Gymnastics
                        </h3>
                    </div>

                    <div>
                        <h4 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                            Canadian National Team Member:  2021 - 2023
                        </h4>
                        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                            {athleticHighlights.map((highlight) => (
                                <li
                                    key={highlight}
                                    className="border-t border-zinc-700 pt-4 text-base leading-7 text-zinc-200"
                                >
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {athleticsPhotos.map((photo) => (
                        <div
                            key={photo.src}
                            className="relative aspect-[4/5] overflow-hidden border border-zinc-700 bg-zinc-900"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
