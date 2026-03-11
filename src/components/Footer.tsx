import { ModeToggle } from "./mode-toggle";
const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center">
          <ModeToggle />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rayyan Ahmed Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
