import { SiTryhackme, SiGithub,} from "react-icons/si";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="pt-32 pb-8 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Introduction */}
        <div className="animate-fade-in-up">
          <p className="text-lg text-foreground leading-relaxed">
            Hi! I'm a cybersecurity student interested in{' '}
            <span className="font-medium">
              Penetration Testing
            </span>{' '}
            and{' '}
            <span className="font-medium">
              building cool stuff
            </span>
            .
          </p>
        </div>

        {/* Photo Placeholder */}
        <div className="mt-8 animate-fade-in-up animation-delay-100">
          <figure className="relative w-full aspect-square">
            <img src="/hero.png" alt="User Photo" className="w-full h-full object-cover rounded-md border border-border" />
            <figcaption className="mt-2 text-sm text-muted-foreground text-center">
              This is me (not really)
            </figcaption>
          </figure>
        </div>

        {/* Bio */}
        <div className="mt-6 animate-fade-in-up animation-delay-200">
          <p className="text-base text-muted-foreground leading-relaxed">
            I'm currently pursuing my B.Sc. at{' '}
            <span className=" text-foreground">Astana IT University</span>, studying
            Cybersecurity, and I'm working on my own startup
            ventures. I'm also interested in Software Engineering.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-6 animate-fade-in-up animation-delay-300">
          <p className="text-base leading-relaxed text-muted-foreground">
            I'm always open to research collaborations and startup opportunities. Feel
            free to reach out!
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="mailto:ersinadilhan.51@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <LuMail className="w-4 h-4" />
            <span>ersinadilkhan[at]gmail[dot]com</span>
          </a>
          <a
            href="https://github.com/adlkhy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ersinadilkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedinIn className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/adilikecious/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <a
            href="https://tryhackme.com/p/adlk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <SiTryhackme className="w-4 h-4" />
            <span>TryHackMe</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
