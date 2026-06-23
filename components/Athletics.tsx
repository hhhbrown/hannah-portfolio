import Image from "next/image";

const athleticHighlights = [
    "World Cup Finalist",
    "World Championship medalist",
    "NCCP Level 3 Coach",
];

const athleticsPhotos = [
    { src: "/images/img2.jpg", alt: "Athletics photo 1" },
    { src: "/images/img3.jpg", alt: "Athletics photo 2" },
    { src: "/images/img4.jpg", alt: "Athletics photo 3" },
    { src: "/images/img5.jpg", alt: "Athletics photo 4" },
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
                        <p className="text-sm font-medium uppercase text-zinc-400">
                            Athletics
                        </p>
                        <h2 className="mt-6 max-w-lg text-4xl font-semibold sm:text-5xl">
                            Trampoline Gymnastics
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-2xl text-xl leading-9 text-zinc-300 sm:text-2xl sm:leading-10">
                            Canadian National Team Member:  2021 - 2023
                        </p>
                        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
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
