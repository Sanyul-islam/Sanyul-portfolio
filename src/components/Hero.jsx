import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[70vh] max-w-content items-center px-6"
    >
      <div className="grid w-full items-center gap-12 md:grid-cols-2">
        {/* Text column */}
        <div className="px-6 pt-6 md:px-10 md:pt-10">
          <div className="flex gap-0.5">
            <span className="section-eyebrow"></span>
            <p className="font-display  text-muted text-2xl md:text-3xl">
              Hello<span className="text-accent">.</span>
            </p>
          </div>
          <p className="mt-2 font-display text-2xl text-muted md:text-3xl">
            I&apos;m Sanyul
          </p>
          <h1 className="mt-3 font-display header-gradient text-4xl font-bold leading-tight md:text-5xl">
            Frontend Developer
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contacts" className="btn-filled">
              Got a project?
            </Link>
            <Link
              href="https://drive.google.com/file/d/1UTwMsZoFQ7LpRarDFf1CRbreXEBJaY9e/view?usp=sharing"
              target="_blank"
              className="btn-outline header-gradient"
            >
              My resume
            </Link>
          </div>
        </div>

        {/* Image column */}
        <div className="relative flex justify-center">
          <div className="relative aspect-square w-75 md:w-[400px]">
            {/* Outer nebula glow */}
            <div
              className="absolute inset-[5%] rounded-full
      bg-[conic-gradient(from_0deg,#60a5fa,#a78bfa,#22d3ee,#c084fc,#60a5fa)]
      opacity-50 blur-[35px]
      animate-nebula-glow"
            />

            {/* Animated nebula border */}
            <div
              className="absolute inset-[7%] overflow-hidden rounded-full
      animate-nebula-border"
            >
              <div
                className="absolute inset-[-20%]
        bg-[conic-gradient(from_0deg,#60a5fa,#a78bfa,#22d3ee,#c084fc,#60a5fa)]"
              />
            </div>

            {/* Static portrait */}
            <div className="absolute inset-[7%] rounded-full p-0.5">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0b121f]">
                <Image
                  src="/hero-image.jpg"
                  alt="Banner"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
