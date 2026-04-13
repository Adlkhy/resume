import {  ArrowUpRight } from 'lucide-react';

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
    name: 'Folio',
    description: 'This is my first creative portfolio website built with Next.js, Tailwind CSS, and TypeScript. Hosted on Vercel.',
    tech: ['TypeScript', 'GSAP', 'React'],
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
    <section id="projects" className="py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase mb-6 animate-fade-in-up">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.github || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-md p-4 hover:shadow-md hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-mono font-medium text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-2">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 bg-foreground/10 text-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.stars !== undefined && (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{project.stars}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
