const stack = [
  "HTML5",
  "CSS",
  "Javascript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "BetterAuth",
  "React",
  "Next.js",
  "HeroUI",
  "TailwindCSS",
  "Git",
  "Github",
  "Vercel",
  "Figma",
  "Netlify",
];

export default function TechStack() {
  return (
    <div className="mx-auto mt-6 bg-panel max-w-content border-y border-panelLine px-6 py-6 md:px-10">
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium tracking-wide text-muted md:justify-between">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
