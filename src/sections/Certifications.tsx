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
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    description:
      'Foundational understanding of AWS Cloud services, security, architecture, pricing, and support.',
    link: '#',
    credentialId: 'AWS-CCP-12345',
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Oct 2024',
    description:
      'Proficiency in using TensorFlow to build and train neural networks for image classification, NLP, and time series forecasting.',
    link: '#',
    credentialId: 'TF-DEV-67890',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    date: 'Aug 2024',
    description:
      'Comprehensive course covering supervised learning, unsupervised learning, and best practices in ML.',
    link: '#',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'Jun 2024',
    description:
      'Neural networks, hyperparameter tuning, convolutional networks, sequence models, and transformers.',
    link: '#',
  },
];

const Certifications = () => {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 animate-fade-in-up">
          Certifications
        </h2>
        <p className="text-muted-foreground mb-8 animate-fade-in-up">
          Professional certifications and credentials I've earned.
        </p>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-background border border-border rounded-xl p-5 hover:shadow-md hover:border-muted-foreground transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {cert.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  )}

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground mb-2">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
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
