import { TbArrowUpRight } from "react-icons/tb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  stars?: number;
}

const projects: Project[] = [
  {
    name: 'Evalis',
    description: 'A grade calculator for students at my university. It allows students to easily calculate their GPA and track their academic progress.',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/Adlkhy/AITU-calculator',
  },
  {
    name: 'AuditBase',
    description: 'Supabase Auditor — a browser tool that checks your Supabase project for exposed tables and bad RLS configs.',
    tech: ['TypeScript', 'React', 'Vite', 'jsPDF'],
    github: 'https://github.com/Adlkhy/AuditBase',
  },
  {
    name: 'Folio',
    description: 'This is my first creative portfolio website built with Next.js, Tailwind CSS, and TypeScript. Hosted on Vercel.',
    tech: ['TypeScript', 'GSAP', 'Next.js', 'React'],
    github: 'https://github.com/Adlkhy/folio',
  },
  {
    name: 'CS50P & CS50W Projects',
    description: 'A collection of projects from the CS50P (Python) and CS50W (Web Programming) courses.',
    tech: ['Python', 'JavaScript', 'Django'],
    github: 'https://github.com/Adlkhy/python-projects',
  }
];

const SelectedProjects = () => {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm sm:text-md font-mono font-medium text-muted-foreground uppercase mb-6 animate-fade-in-up">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.github || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Card className="h-full gap-0 rounded-none bg-background border-border p-0 transition-all duration-300 group-hover:border-primary ">
                <CardHeader className="flex flex-row items-start justify-between gap-2 p-4 pb-1">
                  <CardTitle className="font-mono font-medium text-foreground transition-colors group-hover:text-primary">
                    <span className="relative inline-flex overflow-hidden">
                      <div className="translate-y-0 transition duration-500 group-hover:translate-y-[-160%]">
                        {project.name}
                      </div>
                      <div className="absolute translate-y-[164%] transition duration-500 group-hover:translate-y-0">
                        {project.name}
                      </div>
                    </span>
                  </CardTitle>
                  <TbArrowUpRight className="h-5 w-5 shrink-0 text-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </CardHeader>

                <CardContent className="p-4 pt-0">
                  <p className="mb-2 text-sm font-mono leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          variant='outline'
                          className="rounded-md px-2.5 py-1 font-mono text-xs sm:text-md"
                        >{tech}</Badge>
                      ))}
                    </div>

                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{project.stars}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
