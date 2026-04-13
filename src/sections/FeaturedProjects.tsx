import { ExternalLink } from 'lucide-react';

const FeaturedProjects = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-md p-4 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-0.5 bg-accent rounded font-mono text-accent-foreground">
                Currently Building
              </span>
            </div>

            <h3 className="text-lg font-mono font-medium text-foreground mb-2">
              Evalis
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Building a grade calculator for students at my university. 
              It will allow students to easily calculate their GPA and track their academic progress. The project is changing rapidly, so stay tuned for updates.
            </p>

            <a
              href="https://evaiis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>See here</span>
            </a>
          </div>

          {/* Second Card */}
          {/* <div className="bg-card border border-border rounded-md p-4 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up animation-delay-100">
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-foreground">
                Currently Building
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-semibold text-yellow-600 uppercase tracking-wide">
                Hackathon Winner!
              </span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-3">CodeMafia</h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Building "Among Us" for coders alongside my friend Ahmad al-Jabi. Our
              demo video went viral with{' '}
              <span className="font-semibold text-foreground">200k+</span> views and we
              have <span className="font-semibold text-foreground">870+</span>{' '}
              interested users! Interested in playing with your friends on a Discord
              night?
            </p>

            <a
              href="https://tally.so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Sign up here</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
