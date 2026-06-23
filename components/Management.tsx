import Image from "next/image";

const managementAreas = [
  {
    title: "Team BC Manager",
    description:
      "Supporting athletes, coaches, and team logistics with clear communication and steady coordination.",
  },
  {
    title: "Training Camps | Competitions | Fundraisers",
    description:
      "Planning and coordinating events, schedules, details, and on-site operations.",
  },
  {
    title: "Social Media",
    description:
      "Creating and organizing content that keeps the team visible, informed, and connected.",
  },
];

const managementPhotos = [
  { src: "/images/img6.jpg", alt: "Team management", position: "object-center" },
  {
    src: "/images/img7.png",
    alt: "Management event photo",
    position: "object-center",
  },
  {
    src: "/images/img8.png",
    alt: "Management social media photo",
    position: "object-top",
  },
];

export default function Management() {
  return (
    <section
      id="management"
      className="bg-white px-6 py-24 text-zinc-950 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase text-zinc-500">
              Management
            </p>
            <h2 className="mt-6 max-w-md text-4xl font-semibold sm:text-5xl">
              Team operations and communication.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {managementAreas.map((area) => (
              <article
                key={area.title}
                className="border-t border-zinc-300 pt-6"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {managementPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[3/2] overflow-hidden border border-zinc-300 bg-zinc-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={95}
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 100vw"
                className={`object-cover ${photo.position}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
