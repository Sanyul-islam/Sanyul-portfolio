import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-content ">
      <div className="grid items-center gap-12 md:grid-cols-2">
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
          <div className="relative aspect-square w-[300px] md:w-[400px]">
            {/* background */}
            <div className="absolute inset-0 z-0 rounded-full bg-gradient-to-b from-accent/20 to-accent/10 blur-[100px]"></div>
            {/* portrait */}
            <div className="absolute inset-[8%] z-10 overflow-hidden rounded-full bg-linear-to-tr from-accent to-accent/50 p-0.5">
              <div className="relative h-full w-full overflow-hidden rounded-full">
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
