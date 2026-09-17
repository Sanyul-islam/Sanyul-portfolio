import Image from "next/image";

// Replace with your real certifications.
const CERTIFICATIONS = [
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    date: "Jan 1, 2026 – Aug 2026",
    credentialUrl:
      "https://drive.google.com/file/d/1pVK-8KT16IQeYxF6yIDtRudPoeBwq1Np/view?usp=sharing",
    image: "/Certificate-b13.png",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-content px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center gap-0.5">
          <span className="section-eyebrow"></span>
          <p className="font-display text-muted text-lg md:text-xl">
            Credentials
          </p>
        </div>
        <h2 className="mt-3 font-display header-gradient text-3xl font-bold leading-tight md:text-4xl">
          Certifications
        </h2>
        <p className="mt-4 text-muted">
          Courses and credentials I&apos;ve completed along the way.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
        {CERTIFICATIONS.map((cert) => (
          <a
            key={cert.title}
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
          >
            <div className="relative aspect-[4/3] w-full border-b border-white/10 bg-black/30">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 
              text-xs text-white">
                {cert.date}
              </span>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                View credential →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
