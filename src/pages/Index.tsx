import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { RecipeCard } from "@/components/RecipeCard";
import { useToast } from "@/hooks/use-toast";

// Import images
import chakhchoukhaImg from "@/assets/chakhchoukha.jpg";
import mahjoubaImg from "@/assets/mahjouba.jpg";
import algerianSweetsImg from "@/assets/algerian-sweets.jpg";

const Index = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<number[]>([]);

  // Sample data - in a real app, this would come from your API
  const featuredRecipes = [
    {
      id: 1,
      title: "Couscous Kabyle Traditionnel",
      image: chakhchoukhaImg,
      duration: 120,
      servings: 6,
      origin: "Kabylie",
      difficulty: "Festin Familial" as const,
      category: "Couscous"
    },
    {
      id: 2,
      title: "Chakhchoukha Constantinoise",
      image: chakhchoukhaImg,
      duration: 90,
      servings: 4,
      origin: "Constantine",
      difficulty: "Moyen" as const,
      category: "Pâtes"
    },
    {
      id: 3,
      title: "Mahjouba de Rue",
      image: mahjoubaImg,
      duration: 30,
      servings: 2,
      origin: "Alger",
      difficulty: "Facile" as const,
      category: "Street Food"
    },
    {
      id: 4,
      title: "Makrout aux Dattes",
      image: algerianSweetsImg,
      duration: 60,
      servings: 8,
      origin: "Sud Algérien",
      difficulty: "Moyen" as const,
      category: "Pâtisseries"
    }
  ];

  const ramadanSpecials = [
    {
      id: 5,
      title: "Harira Algéroise",
      image: chakhchoukhaImg,
      duration: 45,
      servings: 4,
      origin: "Alger",
      difficulty: "Facile" as const,
      category: "Soupes"
    },
    {
      id: 6,
      title: "Bourek aux Épinards",
      image: mahjoubaImg,
      duration: 75,
      servings: 6,
      origin: "Oran",
      difficulty: "Moyen" as const,
      category: "Ramadan"
    },
    {
      id: 7,
      title: "Chbah Essafra",
      image: algerianSweetsImg,
      duration: 40,
      servings: 8,
      origin: "Constantine",
      difficulty: "Facile" as const,
      category: "Pâtisseries"
    }
  ];

  const handleFavoriteToggle = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
    
    const isAdding = !favorites.includes(id);
    toast({
      title: isAdding ? "Recette ajoutée aux favoris" : "Recette retirée des favoris",
      description: isAdding ? "Retrouvez-la dans votre collection personnelle" : "La recette a été supprimée de vos favoris",
    });
  };

  const handleRecipeClick = (id: number) => {
    toast({
      title: "Ouverture de la recette",
      description: "Mode détaillé bientôt disponible",
    });
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast({
        title: "Recherche lancée",
        description: `Recherche pour: "${query}"`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onSearch={handleSearch} />
      
      <div className="container mx-auto px-4 py-12 space-y-16">
        <CategorySection
          title="Recettes Incontournables"
          description="Les grands classiques de la cuisine algérienne que chaque famille doit maîtriser"
        >
          {featuredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              isFavorite={favorites.includes(recipe.id)}
              onFavoriteToggle={handleFavoriteToggle}
              onClick={handleRecipeClick}
            />
          ))}
        </CategorySection>

        <CategorySection
          title="Spécialités Ramadan"
          description="Les saveurs traditionnelles qui accompagnent le mois sacré"
        >
          {ramadanSpecials.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              isFavorite={favorites.includes(recipe.id)}
              onFavoriteToggle={handleFavoriteToggle}
              onClick={handleRecipeClick}
            />
          ))}
        </CategorySection>
      </div>
    </div>
  );
};

export default Index;