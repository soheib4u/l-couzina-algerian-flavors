import { Recipe } from '@/types/recipe';
import { RecipeCard } from './RecipeCard';
import { useTranslation } from '@/hooks/useTranslation';
import { useFavorites } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
  className?: string;
}

export const RecipeGrid = ({ recipes, onRecipeClick, className }: RecipeGridProps) => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useFavorites();
  const { toast } = useToast();

  const handleFavoriteToggle = (id: number) => {
    const isCurrentlyFavorite = favorites.includes(id);
    
    if (isCurrentlyFavorite) {
      setFavorites(favorites.filter(fav => fav !== id));
      toast({
        title: "Recipe removed from favorites",
        description: "The recipe has been removed from your favorites",
      });
    } else {
      setFavorites([...favorites, id]);
      toast({
        title: "Recipe added to favorites",
        description: "Find it in your personal collection",
      });
    }
  };

  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="text-6xl mb-4">🍽️</div>
        <p className="text-muted-foreground text-lg">{t('noRecipesFound')}</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${className}`}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          duration={recipe.total_time}
          servings={recipe.portion}
          origin={recipe.origin}
          difficulty={recipe.difficulty}
          category={recipe.category}
          isFavorite={favorites.includes(recipe.id)}
          onFavoriteToggle={() => handleFavoriteToggle(recipe.id)}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </div>
  );
};