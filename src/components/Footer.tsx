import { ModeToggle } from "./mode-toggle";
import { FiArrowUpCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border bg-background">
      <div className="max-w-3xl flex items-center justify-between mx-auto">
        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Adilkhan Ersin. All rights reserved.
        </p>

        <div className="flex gap-4 items-center">
          <ModeToggle />
          <FiArrowUpCircle
            className="w-6 h-6 text-foreground cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
