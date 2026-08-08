import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Book Lover",
    tags: [
      "React",
      "Next.js",
      "Swiper.js",
      "Framer-motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "BetterAuth",
      "JWT Authentication",
      "Vercel",
      "HTML",
      "CSS",
      "Javascript",
    ],
    description:
      "Book Lover is a modern online book delivery and library management platform that allows readers to discover books, request home delivery, make secure payments, and share reviews. Librarians can submit and manage books, while administrators oversee approvals, inventory, and user roles.",
    image: "/book-lover.png",
    githubUrl: "https://github.com/Sanyul-islam/book-lover",
    liveUrl: "https://book-lover-seven.vercel.app",
  },
  {
    title: "Pet Home",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "MongoDB",
      "Express.js",
      "JWT Authentication",
      "HTML",
      "CSS",
      "Javascript",
    ],
    description:
      "Pet Home is a modern pet adoption platform that connects pet owners, shelters, and adopters in one place. Users can browse pets available for adoption, submit adoption requests, manage their own pet listings, and securely authenticate using Google or email/password. The application aims to simplify the pet adoption process while providing a responsive and user-friendly experience.",
    image: "/pet-home.png",
    githubUrl: "https://github.com/Sanyul-islam/Pet-Adoption-Platform",
    liveUrl: "https://pet-home-xi.vercel.app/",
  },
  {
    title: "Tiles Gallery",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Swiper.js",
      "Better Auth",
      "MongoDB",
      "Express.js",
      "HTML",
      "CSS",
      "Javascript",
    ],
    description:
      "A modern tile discovery platform where users can browse, search, and explore aesthetic tile designs. Users can create accounts, log in, view tile details, and manage their profiles.",
    image: "/tiles-gallery.png",
    githubUrl: "https://github.com/Sanyul-islam/tiles-gallery",
    liveUrl: "https://tiles-gallery-lilac-seven.vercel.app/",
  },
  {
    title: "Timeline & Analytics App",
    tags: [
      "Next.js",
      "React.js",
      "Context API",
      "Recharts",
      "Tailwind CSS",
      "DaisyUI",
      "React Icons",
      "React Toastify",
      "HTML",
      "CSS",
      "Javascript",
    ],
    description:
      "This project is a modern web application that tracks user interactions (Text, Call, Video) with friends and visualizes them through a timeline and analytics dashboard. It helps users understand their communication patterns using interactive charts and a responsive UI.",
    image: "/keen-keeper.png",
    githubUrl: "https://github.com/Sanyul-islam/keen-keeper",
    liveUrl: "https://keen-keeper-six-tawny.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-content px-6 py-24 md:px-10"
    >
      <div className="text-center">
        <h2 className="font-display header-gradient text-3xl font-bold md:text-4xl">
          Projects
        </h2>
        <span className="mx-auto mt-3 block h-6 w-px bg-accent" />
      </div>

      <div className="mt-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
