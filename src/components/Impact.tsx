import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Backpack, Globe } from "lucide-react";

export const Impact = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, label: t("impactStat1"), value: "150+" },
    { icon: Backpack, label: t("impactStat2"), value: "150+" },
    { icon: Globe, label: t("impactStat3"), value: "12" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-nature text-white relative overflow-hidden">
      {/* Organic background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-[45%_55%_60%_40%/55%_45%_40%_60%] blur-2xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-[40%_60%_55%_45%/60%_40%_45%_55%] blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t("impactTitle")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-[2rem] border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <p className="text-xl text-center leading-relaxed max-w-3xl mx-auto">
          {t("impactDescription")}
        </p>
      </div>
    </section>
  );
};
