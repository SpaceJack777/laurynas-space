import { IconName } from "tech-stack-icons";
import { TechIconBadge } from "./tech-icon-badge";
import { Button } from "./ui/button";

type StackItem = {
  iconName: IconName;
  label: string;
  variant?: "light" | "dark" | "grayscale";
};

function ProjectBlock({
  title,
  description,
  stack,
  href,
}: {
  title: string;
  description: string;
  stack: StackItem[];
  href?: string;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-2">
        <h2 className="text-xl font-semibold text-white hover:opacity-90">
          <a href={href ?? ""} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>

        {href ? (
          <Button
            variant="ghost"
            size="xs"
            className="text-xs variant-dark rounded-sm border border-zinc-700"
            asChild
          >
            <a href={href} target="_blank" rel="noreferrer">
              Visit
            </a>
          </Button>
        ) : null}
      </div>
      <p className="text-sm text-zinc-400 mb-5">{description}</p>
      <div className="mb-5">
        <h3 className="text-sm font-medium text-white mb-3">Tech Stack</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {stack.map((item) => (
            <TechIconBadge
              key={`${item.label}-${String(item.iconName)}`}
              iconName={item.iconName}
              label={item.label}
              variant={item.variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const spaceProdStack: StackItem[] = [
    { iconName: "nextjs2", label: "Next.js 16" },
    { iconName: "react", label: "React 19" },
    { iconName: "typescript", label: "TypeScript" },
    { iconName: "tailwindcss", label: "Tailwind CSS" },
    { iconName: "framer", label: "Framer Motion", variant: "dark" },
    { iconName: "zola", label: "Zustand", variant: "dark" },
    { iconName: "shadcnui", label: "Shadcn UI", variant: "dark" },
    { iconName: "prisma", label: "Prisma ORM" },
    { iconName: "postgresql", label: "PostgreSQL" },
    { iconName: "zod", label: "Zod" },
    { iconName: "supabase", label: "Supabase" },
    { iconName: "vercel", label: "Vercel", variant: "dark" },
    { iconName: "git", label: "Git" },
  ];

  const movieAppStack: StackItem[] = [
    { iconName: "react", label: "React 19" },
    { iconName: "typescript", label: "TypeScript" },
    { iconName: "vitejs", label: "Vite" },
    { iconName: "tailwindcss", label: "Tailwind CSS 4" },
    { iconName: "zod", label: "Zod" },
    { iconName: "i18next", label: "i18next / react-i18next" },
    { iconName: "expressjs", label: "Express", variant: "dark" },
    { iconName: "vercel", label: "Vercel", variant: "dark" },
    { iconName: "git", label: "Git" },
  ];

  const ops24Stack: StackItem[] = [
    { iconName: "laravel", label: "Laravel 12" },
    { iconName: "vuejs", label: "Vue 3.5" },
    { iconName: "docker", label: "Docker" },
    { iconName: "js", label: "JavaScript" },
    { iconName: "typescript", label: "TypeScript" },
    { iconName: "vitejs", label: "Vite" },
    { iconName: "tailwindcss", label: "Tailwind CSS 4" },
    { iconName: "php", label: "PHP" },
    { iconName: "git", label: "Git" },
  ];

  return (
    <section className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 pb-18">
        <ProjectBlock
          title="Space prod."
          description="Full-stack productivity application focused on real-world architecture, type safety, and polished UI/UX."
          stack={spaceProdStack}
          href="https://productivity.laurynas.space/"
        />

        <ProjectBlock
          title="Movie Search App"
          description="Responsive movie tracking application with type-safe routing and a lightweight backend service."
          stack={movieAppStack}
          href="https://movieapp.laurynas.space/"
        />

        <ProjectBlock
          title="Ops 24"
          description="Full-stack insurance administration platform focused on internal tooling, data management, and operational workflows. Built with Laravel and Vue, containerized with Docker."
          stack={ops24Stack}
          href="https://ops24.com"
        />
      </div>
    </section>
  );
}
