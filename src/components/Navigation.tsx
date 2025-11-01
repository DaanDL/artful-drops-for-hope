import { LanguageSwitcher } from "./LanguageSwitcher";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
          Joy for People
        </Link>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};
