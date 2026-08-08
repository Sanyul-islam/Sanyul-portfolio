import { Card } from "@heroui/react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiSwiper,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiVercel,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { RiShieldKeyholeLine } from "react-icons/ri";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Swiper.js", icon: SiSwiper },
      { name: "Framer Motion", icon: SiFramer },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Javascript", icon: SiJavascript },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "BetterAuth", icon: RiShieldKeyholeLine },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

function SkillGrid({ skills }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {skills.map(({ name, icon: Icon }) => (
        <Card
          key={name}
          variant="secondary"
          className="border border-panel-line bg-panel transition-colors hover:border-accent"
        >
          <Card.Content className="flex flex-col items-center gap-3 py-8 text-center">
            <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
            <p className="text-sm font-medium text-white">{name}</p>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24 md:px-10">
      <div className="text-center">
        <h2 className="font-display header-gradient text-3xl font-bold md:text-4xl">
          Skills
        </h2>
        <span
          className="mx-auto mt-3 block h-6 w-px bg-accent"
          aria-hidden="true"
        />
      </div>

      <div className="mt-16 space-y-16">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-display text-xl font-semibold header-gradient text-center">
              {group.label}
            </h3>
            <div className="mt-6">
              <SkillGrid skills={group.skills} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
