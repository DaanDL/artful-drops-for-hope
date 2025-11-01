import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-warm relative overflow-hidden">
      {/* Organic decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-joy-yellow/20 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-joy-orange/20 rounded-[60%_40%_30%_70%/40%_60%_70%_30%] blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          {t("heroSubtitle")}
        </p>
        <Link to="/gallery">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {t("viewArt")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
