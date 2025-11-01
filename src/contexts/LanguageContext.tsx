import React, { createContext, useContext, useState } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    viewArt: "View Art",
    
    // Hero
    heroTitle: "Joy for People",
    heroSubtitle: "Art that creates change. Every purchase brings hope to children in DR Congo.",
    
    // Vision Section
    visionTitle: "The Vision",
    visionText1: "I believe art has the power to transform lives—not just through beauty, but through action.",
    visionText2: "Every piece I create is more than canvas and color. It's a bridge between creativity and compassion, between inspiration and impact.",
    visionText3: "When you purchase my art, you're not just buying a piece for your wall. You're providing a backpack filled with school supplies and a water bottle to a child in the Democratic Republic of Congo. You're giving them the tools to learn, grow, and dream.",
    
    // Impact Section
    impactTitle: "The Impact",
    impactStat1: "Children Supported",
    impactStat2: "Backpacks Delivered",
    impactStat3: "Communities Reached",
    impactDescription: "Every artwork sold directly funds backpacks and clean water bottles for children who need them most. This isn't charity—it's a cycle of joy, where art creates opportunity.",
    
    // CTA
    ctaTitle: "Ready to Make a Difference?",
    ctaDescription: "Explore the collection and choose a piece that speaks to you. Each one carries a story of hope.",
    ctaButton: "Explore the Art",
  },
  de: {
    // Navigation
    viewArt: "Kunst Ansehen",
    
    // Hero
    heroTitle: "Joy for People",
    heroSubtitle: "Kunst, die Veränderung schafft. Jeder Kauf bringt Hoffnung für Kinder im Kongo.",
    
    // Vision Section
    visionTitle: "Die Vision",
    visionText1: "Ich glaube, dass Kunst die Kraft hat, Leben zu verändern – nicht nur durch Schönheit, sondern durch Handeln.",
    visionText2: "Jedes Werk, das ich schaffe, ist mehr als Leinwand und Farbe. Es ist eine Brücke zwischen Kreativität und Mitgefühl, zwischen Inspiration und Wirkung.",
    visionText3: "Wenn Sie meine Kunst kaufen, erwerben Sie nicht nur ein Stück für Ihre Wand. Sie geben einem Kind in der Demokratischen Republik Kongo einen Rucksack voller Schulmaterial und eine Wasserflasche. Sie geben ihnen die Werkzeuge zum Lernen, Wachsen und Träumen.",
    
    // Impact Section
    impactTitle: "Die Wirkung",
    impactStat1: "Unterstützte Kinder",
    impactStat2: "Gelieferte Rucksäcke",
    impactStat3: "Erreichte Gemeinden",
    impactDescription: "Jedes verkaufte Kunstwerk finanziert direkt Rucksäcke und saubere Wasserflaschen für Kinder, die sie am meisten brauchen. Das ist keine Wohltätigkeit – es ist ein Kreislauf der Freude, wo Kunst Möglichkeiten schafft.",
    
    // CTA
    ctaTitle: "Bereit, Etwas zu Bewirken?",
    ctaDescription: "Erkunden Sie die Kollektion und wählen Sie ein Stück, das zu Ihnen spricht. Jedes trägt eine Geschichte der Hoffnung.",
    ctaButton: "Kunst Entdecken",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
