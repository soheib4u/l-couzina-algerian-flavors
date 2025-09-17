import { useMemo } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RecipeGrid } from '@/components/RecipeGrid';
import { useTranslation } from '@/hooks/useTranslation';
import { useFavorites } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

interface FavoritesScreenProps {
  onRecipeClick: (recipe: Recipe) => void;
}

export const FavoritesScreen = ({ onRecipeClick }: FavoritesScreenProps) => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useFavorites();
  const { toast } = useToast();

  const favoriteRecipes = useMemo(() => {
    return recipes.filter(recipe => favorites.includes(recipe.id));
  }, [favorites]);

  const clearAllFavorites = () => {
    setFavorites([]);
    toast({
      title: "All favorites cleared",
      description: "All recipes have been removed from your favorites",
    });
  };

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <Heart className="h-12 w-12 text-muted-foreground" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">No favorites yet</h2>
      <p className="text-muted-foreground text-lg max-w-md">
        {t('noFavoritesYet')}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">{t('favorites')}</h1>
              <p className="text-sm text-muted-foreground">
                {favoriteRecipes.length} recipe{favoriteRecipes.length !== 1 ? 's' : ''} saved
              </p>
            </div>
            
            {favoriteRecipes.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAllFavorites}
                className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {favoriteRecipes.length === 0 ? (
          <EmptyState />
        ) : (
          <RecipeGrid recipes={favoriteRecipes} onRecipeClick={onRecipeClick} />
        )}
      </div>
    </div>
  );
};