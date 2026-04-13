import { ExternalLink } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  link?: string;
}

const experiences: Experience[] = [
  // {
  //   title: 'Software Developer Intern',
  //   company: 'Quantolio',
  //   period: 'September 2025 – November 2025',
  //   description:
  //     'Working on HVAC smart AI applications.',
  //   tech: [
  //     'TypeScript',
  //     'Next.js',
  //     'FastAPI',
  //     'PostgreSQL',
  //     'Docker',
  //     'AWS',
  //   ],
  // },
  {
    title: 'Freelance Web Developer',
    company: 'Independent',
    period: 'March 2024 – Present',
    description:
      'Designed and developed a full-stack web application for university students to calculate their GPA and visualize their academic progress with leaderboards. The app features a user-friendly interface, secure authentication, and real-time data visualization.',
    tech: ['React.js', 'Tailwind CSS', 'Supabase', 'TypeScript', 'Vercel'],
    link: 'https://evaiis.vercel.app/',
  },
  // {
  //   title: 'MAIS 202 - Machine Learning Workshop',
  //   company: 'McGill University',
  //   period: 'February 2025 – April 2025',
  //   description:
  //     'Participated in an 8-week intensive ML/AI workshop, learning about core Machine Learning principles, Neural Networks, and Convolutional Neural Networks.',
  //   tech: ['Python', 'scikit-learn', 'TensorFlow'],
  // },
];

const WorkExperience = () => {
  return (
    <section id="work" className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase mb-2 animate-fade-in-up">
          Work & Experience
        </h2>
        <p className="text-sm text-muted-foreground mb-8 animate-fade-in-up">
          Professional experience and notable projects I've contributed to.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="font-semibold font-mono text-foreground text-sm">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-mono">{exp.period}</p>
                </div>
                <div className="mt-1 sm:mt-0">
                  <p className="font-medium text-sm font-mono text-foreground">{exp.company}</p>
                </div>
              </div>

              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                {exp.description}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground hover:text-accent transition-colors"
                  >
                    <span>(view project)</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 font-mono bg-foreground/10 text-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
