import { Github, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <div className="animate-fade-in-up">
          <p className="text-lg text-foreground leading-relaxed">
            Hi! I'm a computer science student interested in{' '}
            <span className="bg-foreground/10 px-1.5 py-0.5 rounded text-foreground font-medium">
              machine learning
            </span>{' '}
            and{' '}
            <span className="bg-foreground/10 px-1.5 py-0.5 rounded text-foreground font-medium">
              startup ventures
            </span>
            .
          </p>
        </div>

        {/* Photo Placeholder */}
        <div className="mt-8 animate-fade-in-up animation-delay-100">
          <div className="relative w-full aspect-16/10 bg-foreground/10 rounded-lg overflow-hidden border border-foreground/20">
            {/* Skeleton/Placeholder for user photo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-foreground/10 to-foreground/20">
              <div className="w-20 h-20 rounded-full bg-foreground/20 flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10 text-foreground/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-foreground/50">Add your photo here</p>
              <p className="text-xs text-foreground/40 mt-1">
                My friends and I (2nd from the left) winning a hackathon
              </p>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mt-8 animate-fade-in-up animation-delay-200">
          <p className="text-muted-foreground leading-relaxed">
            I'm currently pursuing my B.Sc. at{' '}
            <span className="font-semibold text-foreground">McGill University</span>, in
            Honours Mathematics & Computer Science, and I'm working on my own startup
            ventures. I'm also interested in ML/DL research.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-6 animate-fade-in-up animation-delay-300">
          <p className="text-muted-foreground">
            I'm always open to research collaborations and startup opportunities. Feel
            free to reach out!
          </p>
          <p className="mt-2 text-foreground font-medium">
            ryankhann[at]gmail[dot]com
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube</span>
          </a>
          <a
            href="https://devpost.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Devpost</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
