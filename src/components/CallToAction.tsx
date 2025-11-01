import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          {t("ctaTitle")}
        </h2>
        <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
          {t("ctaDescription")}
        </p>
        <Link to="/gallery">
          <Button 
            size="lg" 
            variant="default"
            className="rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-hope border-0"
          >
            {t("ctaButton")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
