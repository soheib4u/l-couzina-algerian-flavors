import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroCouscous from "@/assets/hero-couscous.jpg";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCouscous}
          alt="Couscous traditionnel algérien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              L'<span className="text-saffron">couzina</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Découvrez les secrets de la cuisine algérienne traditionnelle
            </p>
            <div className="flex items-center justify-center space-x-2 text-saffron">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Authentiques recettes d'Algérie</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Rechercher une recette, un ingrédient..."
                className="pl-10 pr-4 py-3 text-lg bg-white/95 backdrop-blur-sm border-0 text-foreground placeholder:text-muted-foreground"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    onSearch?.(e.currentTarget.value);
                  }
                }}
              />
            </div>
          </div>

          {/* Quick Access Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              Couscous
            </Button>
            <Button variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              Street Food
            </Button>
            <Button variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              Ramadan
            </Button>
            <Button variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              Pâtisseries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};