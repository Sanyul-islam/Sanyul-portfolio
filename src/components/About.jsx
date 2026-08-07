const services = [
  {
    title: "Website Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M8 4L2 12l6 8M16 4l6 8-6 8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "App Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="6"
          y="2"
          width="12"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M10 18h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Website Hosting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="3"
          y="4"
          width="18"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="3"
          y="14"
          width="18"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="7" cy="7" r="0.8" fill="currentColor" />
        <circle cx="7" cy="17" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

const stats = [
  { value: "3", suffix: "+", label: "Completed Projects" },
  { value: "95", suffix: "%", label: "Client satisfaction" },
  { value: "1", suffix: "+", label: "Years of experience" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24 md:px-10">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Services */}
        <ul>
          {services.map((service) => (
            <li
              key={service.title}
              className="
        relative flex items-center gap-4 py-4 pl-5
        after:absolute
        after:left-0.75
        after:top-1/2
        after:h-full
        after:w-0.5
        after:bg-accent
        last:after:hidden
      "
            >
              {/* Dot */}
              <span
                className="absolute left-0 top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-accent"
                aria-hidden="true"
              />

              {/* Icon */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-panelLine text-accent">
                {service.icon}
              </span>

              {/* Title */}
              <span className="font-display text-lg font-medium">
                {service.title}
              </span>
            </li>
          ))}
        </ul>

        {/* Copy + stats */}
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            About me
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            I am a passionate Frontend Web Developer with a deep interest in
            building modern, user-centric digital solutions. My journey is
            driven by a curiosity for innovative tech, leading me to specialize
            in building Modern Frontend Architectures with React, Tailwind CSS
            and modern UI Libraries.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold md:text-3xl">
                  {stat.value}
                  <span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
