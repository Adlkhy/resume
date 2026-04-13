import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    name: 'Introduction to Programming with Python',
    issuer: 'Harvard University (edX)',
    date: 'Jul 2024',
    description:
      'Fundamental programming concepts using Python, including data structures, algorithms, and software engineering principles.',
    link: 'https://cs50.harvard.edu/certificates/4244d9e0-4f4c-41ad-89d6-0a9d35930cc8',
    credentialId: '4244d9e0-4f4c-41ad-89d6-0a9d35930cc8',
  },
  {
    name: 'Introduction to Social Media Marketing by Meta',
    issuer: 'Meta (Coursera)',
    date: 'Sep 2024',
    description:
      'Comprehensive introduction to social media marketing strategies, tools, and best practices for businesses and individuals.',
    link: 'https://coursera.org/verify/M093TQGK0G3X',
    credentialId: 'M093TQGK0G3X',
  },
  {
    name: 'Web Programming with Python and JavaScript',
    issuer: 'Harvard University (edX)',
    date: 'Oct 2024',
    description:
      'Full-stack web development using Python, JavaScript, and frameworks like Flask and React.',
    link: 'https://cs50.harvard.edu/certificates/e180c108-c5a8-4f5e-b536-dfdd234d917b',
    credentialId: 'e180c108-c5a8-4f5e-b536-dfdd234d917b',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google (Coursera)',
    date: 'Dec 2024',
    description:
      'Comprehensive training in data analytics, including data cleaning, visualization, and analysis using tools like SQL and R.',
    link: 'https://www.credly.com/earner/earned/badge/2f9f2b2f-9f8b-4a8e-a135-f0bc7fec7729',
    credentialId: '2f9f2b2f-9f8b-4a8e-a135-f0bc7fec7729',
  },
  {
    name: 'Cisco Cybersecurity Specialist',
    issuer: 'Cisco',
    date: 'Feb 2026',
    description:
      'Comprehensive training in cybersecurity fundamentals, including network security, threat analysis, and incident response.',
    link: 'https://www.credly.com/earner/earned/badge/01d951d1-654b-4071-ace8-34201b7a0a5d',
    credentialId: '01d951d1-654b-4071-ace8-34201b7a0a5d',
  },
];

const Certifications = () => {
  return (
    <section id='certifications' className="py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-mono font-medium text-muted-foreground uppercase mb-4 animate-fade-in-up">
          Certifications
        </h2>
        <p className="text-sm text-muted-foreground mb-6 animate-fade-in-up">
          Professional certifications and credentials I've earned.
        </p>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-card border border-border rounded-md p-4 hover:shadow-md hover:border-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-foreground" />
                    <h3 className="font-mono font-medium text-sm text-foreground">{cert.name}</h3>
                  </div>

                  <div className="flex flex-wrap justify-between items-center gap-4 mb-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-xs">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-mono text-xs">{cert.date}</span>
                    </div>
                  </div>

                  {cert.description && (
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  )}

                  {cert.credentialId && (
                    <p className="text-xs font-mono text-muted-foreground mb-2">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-mono text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Credential</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
