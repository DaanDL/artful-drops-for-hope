import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-foreground">
            {language === "en" ? "Art Gallery" : "Kunstgalerie"}
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            {language === "en" 
              ? "The collection is coming soon. Each piece will carry a story of hope and transformation."
              : "Die Kollektion kommt bald. Jedes Stück wird eine Geschichte von Hoffnung und Transformation tragen."}
          </p>
          
          {/* Placeholder for future gallery grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-warm rounded-[2rem] shadow-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
