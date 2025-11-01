import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

export const Vision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Heart className="h-12 w-12 text-primary mr-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("visionTitle")}
          </h2>
        </div>
        
        <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p className="bg-card p-8 rounded-[2rem] shadow-lg border-2 border-muted">
            {t("visionText1")}
          </p>
          
          <p className="bg-gradient-hope text-white p-8 rounded-[2rem] shadow-lg">
            {t("visionText2")}
          </p>
          
          <p className="bg-card p-8 rounded-[2rem] shadow-lg border-2 border-muted">
            {t("visionText3")}
          </p>
        </div>
      </div>
    </section>
  );
};
