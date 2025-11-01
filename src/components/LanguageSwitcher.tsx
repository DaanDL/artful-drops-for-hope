import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 items-center">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="font-medium"
      >
        EN
      </Button>
      <Button
        variant={language === "de" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("de")}
        className="font-medium"
      >
        DE
      </Button>
    </div>
  );
};
