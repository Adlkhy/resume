import PixelCard from "@/components/PixelCard";

const FeaturedProjects = () => {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <div className="bg-card border border-border rounded-md p-4 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-0.5 bg-accent rounded font-mono text-accent-foreground">
                Currently Building
              </span>
            </div>
            <a
              href="https://evaiis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
            <h3 className="text-lg font-mono font-medium text-foreground mb-2">
              Evalis
            </h3>
            </a>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Building a grade calculator for students at my university. 
              It will allow students to easily calculate their GPA and track their academic progress. 
              The project is changing rapidly, so stay tuned for updates.
            </p>
          </div> */}
          <PixelCard className="h-55">
            <div className="absolute inset-0 border border-border p-4 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-0.5 bg-accent rounded font-mono text-accent-foreground">
                Currently Building
              </span>
            </div>
            <a
              href="https://evaiis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
            <h3 className="text-lg font-mono font-medium text-foreground mb-2">
              Evalis
            </h3>
            </a>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Building a grade calculator for students at my university. 
              It will allow students to easily calculate their GPA and track their academic progress. 
              The project is changing rapidly, so stay tuned for updates.
            </p>
            </div>
          </PixelCard>
          {/* Second Card */}
          <PixelCard className="h-55">
            <div className="absolute inset-0 border border-border p-4 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2 py-0.5 bg-accent rounded font-mono text-accent-foreground">
                Currently Building
              </span>
              </div>
              <a
              href="https://cookolingo.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
            <h3 className="text-lg font-mono font-medium text-foreground mb-2">
              Cookolingo
            </h3>
            </a>

            <p className=" text-muted-foreground text-sm leading-relaxed">
              Building a calm, colorful educational platform for teaching cooking, life skills, and educational games to kids 8-16, including autistic learners and children with special educational needs.
            </p>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
