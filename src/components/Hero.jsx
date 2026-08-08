import Image from "next/image";

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
            <a href="#contacts" className="btn-filled">
              Got a project?
            </a>
            <a href="#" className="btn-outline header-gradient">
              My resume
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="relative h-125 w-full mt-4 hidden md:flex">
          {/* <Image
            src="/hero-image.jpg"
            alt="Banner"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover  bg-linear-to-tr from-accent to-accent/50 p-0.5 md:h-150"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
