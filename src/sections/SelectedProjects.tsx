import { Github, ExternalLink } from 'lucide-react';

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
    name: 'Blockbase',
    description: 'Minecraft meets Git. CodeJam15 Hackathon Winner!',
    tech: ['Java'],
    github: 'https://github.com/rayyankhan47/Blockbase',
    stars: 53,
  },
  {
    name: 'Tesseract',
    description: 'Cursor meets Minecraft. Hackathon submission for McHacks 13.',
    tech: ['Java'],
    github: 'https://github.com/rayyankhan47/Tesseract',
    stars: 3,
  },
  {
    name: 'grid-heist',
    description:
      'Orchestrating multiple LLMs to compete against each other. Complex multi-agent reasoning in real-time using Backboard.io.',
    tech: ['Python'],
    github: 'https://github.com/rayyankhan47/grid-heist',
  },
  {
    name: 'makemore',
    description:
      'A character-level language model that trains on a dataset of words of a given category, and produces more like them.',
    tech: ['Jupyter Notebook'],
    github: 'https://github.com/rayyankhan47/makemore',
  },
  {
    name: 'Navvi',
    description:
      'An AI onboarding tool for new developers and interns. Submission for SpurHacks 2025.',
    tech: ['TypeScript'],
    github: 'https://github.com/rayyankhan47/Navvi',
  },
  {
    name: 'micrograd',
    description:
      'Building micrograd from scratch. Micrograd is an autograd engine that implements backpropagation and has a small neural net library built on top of it.',
    tech: ['Python'],
    github: 'https://github.com/rayyankhan47/micrograd',
  },
];

const SelectedProjects = () => {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-8 animate-fade-in-up">
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.github || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-foreground" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-foreground/10 text-foreground rounded-md"
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
