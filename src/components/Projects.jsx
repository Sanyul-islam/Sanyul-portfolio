import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Battleship",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    description:
      "Used components of Javascript to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed.",
    image:
      "https://images.pexels.com/photos/38730271/pexels-photo-38730271.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Movie Titles API",
    tags: ["HTML", "CSS", "Javascript", "API", "Version control"],
    description:
      "Uses a public movie API to build a collection of movies like that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user's favorite movies into another container.",
    image:
      "https://images.pexels.com/photos/38730271/pexels-photo-38730271.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Javascript Calculator",
    tags: ["HTML", "CSS", "Javascript", "Node.js"],
    description:
      "Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal.",
    image:
      "https://images.pexels.com/photos/38730271/pexels-photo-38730271.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "SaaS Landing Page",
    tags: ["HTML", "CSS"],
    description:
      "Used HTML elements such as creating a form and a slideshow. It also used components of both the grid and flexbox elements to produce a landing page.",
    image:
      "https://images.pexels.com/photos/38730271/pexels-photo-38730271.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-content px-6 py-24 md:px-10"
    >
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
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
