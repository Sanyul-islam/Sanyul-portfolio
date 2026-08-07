export default function ProjectCard({ project, reverse }) {
  const { title, tags, description, image, githubUrl, liveUrl } = project;

  return (
    <div
      className={`grid items-center gap-8 border-b border-panel-line py-14 first:pt-0 last:border-none md:grid-cols-2 md:gap-14 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <h3 className="font-display text-2xl font-semibold md:text-[26px]">
          {title}
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="tag-pill">
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a href={githubUrl} className="btn-filled text-sm">
            View Github
          </a>
          <div className="flex flex-col gap-2">
            <a
              href={liveUrl}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent"
            >
              View project
            </a>
            <div className="bg-accent h-0.5 w-full"></div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-panel-line bg-panel">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
