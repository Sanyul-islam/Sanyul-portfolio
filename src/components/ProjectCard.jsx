import Image from "next/image";
import { Card,Chip } from "@heroui/react";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

export default function ProjectCard({ project, reverse }) {
  const { title, tags, description, image, githubUrl, liveUrl } = project;

  return (
    <Card
      className={`grid items-center gap-8 border-b border-panel-line bg-transparent py-5 shadow-none md:grid-cols-2 md:gap-14 md:py-14 first:pt-0 last:border-none ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <Card.Header className="flex-col items-start p-0">
          <Card.Title className="font-display header-gradient text-2xl font-semibold md:text-[26px]">
            {title}
          </Card.Title>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </ul>
          <Card.Description className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            {description}
          </Card.Description>
        </Card.Header>

        <Card.Footer className="mt-6 flex flex-wrap items-center gap-6 p-0">
          <a href={githubUrl} className="btn-filled text-sm">
            View Github
          </a>
          <div className="flex flex-col p-3">
            <div className="flex items-center justify-center">
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold header-gradient hover:text-accent"
              >
                <LuExternalLink className="text-md text-blue-300" />
                View project
              </Link>
            </div>
            <div className="mt-3 h-0.5 w-full bg-accent"></div>
          </div>
        </Card.Footer>
      </div>

      <Card.Content className="overflow-hidden rounded-xl border border-panel-line bg-panel p-2">
        <Image
          src={image}
          alt={`${title} preview`}
          height={300}
          width={300}
          className="h-full w-full object-cover rounded-2xl"
        />
      </Card.Content>
    </Card>
  );
}