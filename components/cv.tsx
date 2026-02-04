import { Button } from "./ui/button";

export default function CV() {
  return (
    <section>
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-white tracking-tight">
              Laurynas Miškinis
            </h1>

            <a
              href="mailto:laurynasmiskinis1@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
            >
              laurynasmiskinis1@gmail.com
            </a>

            <p className="mt-1 text-sm text-zinc-400">Vilnius, Lithuania</p>
          </div>

          <Button
            variant="ghost"
            size="xs"
            className="text-xs variant-dark rounded-sm border border-zinc-700"
            asChild
          >
            <a href="/Laurynas_Miskinis_CV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="space-y-10">
        {/* Summary */}
        <section>
          <h2 className="text-sm font-medium text-white mb-3">
            Professional Summary
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[80ch]">
            Software Engineer with 2+ years of experience in full-stack web
            development. Enjoys working across frontend and backend to
            understand data flow, system design, and how different parts of an
            application connect to deliver a polished user experience.
          </p>
        </section>

        {/* Work */}
        <section>
          <h2 className="text-sm font-medium text-white mb-4">
            Work Experience
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="text-base font-semibold text-white">
                    Bartus IT
                  </p>
                  <p className="text-sm text-zinc-400">
                    Software Engineer — Hybrid
                  </p>
                </div>
                <p className="text-sm text-zinc-400">12/2023 – 11/2025</p>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400 leading-relaxed">
                <li>
                  Contributed to feature development and ongoing improvements.
                </li>
                <li>
                  Developed and maintained scalable web applications using
                  Laravel, Vue.js, and MySQL.
                </li>
                <li>
                  Collaborated with UI/UX designers to deliver user-focused
                  features and improve overall user experience.
                </li>
              </ul>
            </div>

            <div className="h-px bg-zinc-800" />

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-white">Balticbet</p>
                <p className="text-sm text-zinc-400">
                  Software Engineer — Hybrid
                </p>
              </div>
              <p className="text-sm text-zinc-400">09/2015 – 11/2017</p>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-white">OVIO Soft</p>
                <p className="text-sm text-zinc-400">
                  Junior Web Developer — On-site
                </p>
              </div>
              <p className="text-sm text-zinc-400">03/2015 – 09/2015</p>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-white">Digitouch</p>
                <p className="text-sm text-zinc-400">
                  Junior Web Developer — On-site
                </p>
              </div>
              <p className="text-sm text-zinc-400">10/2014 – 03/2015</p>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-white">
                  Armed Forces — Lithuania
                </p>
                <p className="text-sm text-zinc-400">Military</p>
              </div>
              <p className="text-sm text-zinc-400">12/2017 – 12/2023</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-sm font-medium text-white mb-3">Education</h2>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-white">
                University of Applied Sciences
              </p>
              <p className="text-sm text-zinc-400">
                Bachelor&apos;s Degree in Accounting Science
              </p>
            </div>
            <p className="text-sm text-zinc-400">2014</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-medium text-white mb-3">Skills</h2>

          <ul className="space-y-2 text-sm text-zinc-400 leading-relaxed">
            <li>
              <span className="text-white font-medium">Languages:</span>{" "}
              JavaScript, TypeScript, PHP
            </li>
            <li>
              <span className="text-white font-medium">Web:</span> React,
              Next.js, Node.js, Vue.js, Laravel, HTML, CSS
            </li>
            <li>
              <span className="text-white font-medium">Cloud:</span> Vercel,
              Supabase
            </li>
            <li>
              <span className="text-white font-medium">DevOps:</span> Docker
            </li>
            <li>
              <span className="text-white font-medium">Databases:</span> MySQL,
              PostgreSQL
            </li>
            <li>
              <span className="text-white font-medium">Soft Skills:</span>{" "}
              Communication, Problem-solving, Team Collaboration
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-sm font-medium text-white mb-4">Projects</h2>

          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-base font-semibold text-white">
                  Productivity Web Application{" "}
                  <span className="text-zinc-400 font-normal">
                    (Personal Project)
                  </span>
                </p>

                <Button
                  variant="ghost"
                  size="xs"
                  className="text-xs variant-dark rounded-sm border border-zinc-700"
                  asChild
                >
                  <a
                    href="https://productivity.laurynas.space/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                </Button>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400 leading-relaxed">
                <li>
                  Built a full-stack productivity app with focus timer, notes,
                  and habit tracking using Next.js and TypeScript
                </li>
                <li>
                  Implemented authentication with NextAuth.js and data
                  validation with Zod
                </li>
                <li>
                  Designed backend APIs using Next.js API routes, Prisma ORM,
                  and PostgreSQL
                </li>
                <li>
                  Styled UI with Tailwind CSS and shadcn/ui, including Framer
                  Motion animations
                </li>
                <li>Deployed on Vercel with PostgreSQL hosted on Supabase</li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/SpaceJack777/next-js-productivity-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
                  >
                    github.com/SpaceJack777/next-js-productivity-app
                  </a>
                </li>
              </ul>
            </div>

            <div className="h-px bg-zinc-800" />

            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-base font-semibold text-white">
                  OPS24{" "}
                  <span className="text-zinc-400 font-normal">
                    – Insurance Administration Platform
                  </span>
                </p>

                <Button
                  variant="ghost"
                  size="xs"
                  className="text-xs variant-dark rounded-sm border border-zinc-700"
                  asChild
                >
                  <a href="https://ops24.eu/" target="_blank" rel="noreferrer">
                    Visit
                  </a>
                </Button>
              </div>

              <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-400 leading-relaxed">
                <li>
                  Built a full-stack insurance administration platform for
                  internal operational teams
                </li>
                <li>
                  Implemented frontend dashboards using Vue 3.5 with JavaScript
                  and TypeScript
                </li>
                <li>
                  Developed backend functionality with Laravel 12 and REST APIs
                </li>
                <li>Containerized the application using Docker</li>
                <li>
                  Styled UI with Tailwind CSS and built frontend with Vite
                </li>
                <li>
                  OPS24:{" "}
                  <a
                    href="https://ops24.eu/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-300 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
                  >
                    ops24.eu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
