import { useState } from 'react';
import { ArrowLeft, Heart, Share, Download, Clock, Users, Star, ChefHat, Timer, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useTranslation } from '@/hooks/useTranslation';
import { useFavorites, useShoppingList } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';
import { Recipe } from '@/types/recipe';
import { cn } from '@/lib/utils';

interface RecipeDetailScreenProps {
  recipe: Recipe;
  onBack: () => void;
}

export const RecipeDetailScreen = ({ recipe, onBack }: RecipeDetailScreenProps) => {
  const { t } = useTranslation();
  const [favorites, setFavorites] = useFavorites();
  const [shoppingList, setShoppingList] = useShoppingList();
  const [activeStep, setActiveStep] = useState(0);
  const [nutritionOpen, setNutritionOpen] = useState(false);
  const { toast } = useToast();

  const isFavorite = favorites.includes(recipe.id);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== recipe.id));
      toast({
        title: "Recipe removed from favorites",
        description: "The recipe has been removed from your favorites",
      });
    } else {
      setFavorites([...favorites, recipe.id]);
      toast({
        title: "Recipe added to favorites",
        description: "Find it in your personal collection",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: `Check out this delicious ${recipe.title} recipe from L'couzina!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Recipe link has been copied to clipboard",
      });
    }
  };

  const handleAddToShoppingList = () => {
    const newItems = recipe.ingredients.map(ingredient => ({
      id: `${recipe.id}-${ingredient.name}`,
      name: `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`,
      checked: false,
    }));

    const existingIds = shoppingList.map(item => item.id);
    const itemsToAdd = newItems.filter(item => !existingIds.includes(item.id));

    if (itemsToAdd.length > 0) {
      setShoppingList([...shoppingList, ...itemsToAdd]);
      toast({
        title: t('addedToShoppingList'),
        description: `${itemsToAdd.length} ingredients added to your shopping list`,
      });
    } else {
      toast({
        title: "Already in shopping list",
        description: "These ingredients are already in your shopping list",
      });
    }
  };

  const startStepTimer = (stepTime?: number) => {
    if (stepTime) {
      toast({
        title: t('timerStarted'),
        description: `${stepTime} ${t('minutes')} timer started for this step`,
      });
      // In a real app, this would start an actual timer
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Image with Navigation */}
      <div className="relative h-64 md:h-80">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        
        {/* Navigation */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            onClick={onBack}
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 min-w-[44px] min-h-[44px]"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleShare}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 min-w-[44px] min-h-[44px]"
              aria-label={t('share')}
            >
              <Share className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleFavoriteToggle}
              className={cn(
                "backdrop-blur-sm border-white/30 hover:bg-white/30 min-w-[44px] min-h-[44px]",
                isFavorite 
                  ? "bg-red-500/20 text-red-400 border-red-400/30" 
                  : "bg-white/20 text-white"
              )}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
            </Button>
          </div>
        </div>

        {/* Recipe Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{recipe.title}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span className="text-sm">{recipe.origin}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">{recipe.rating}</span>
            </div>
            <span>•</span>
            <span className="text-sm">{recipe.reviews.length} reviews</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Quick Stats */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('servings')}</p>
                  <p className="font-semibold">{recipe.portion}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('totalTime')}</p>
                  <p className="font-semibold">{recipe.total_time} {t('minutes')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('difficulty')}</p>
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    {t(recipe.difficulty)}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <div>
                  <p className="text-sm text-muted-foreground">{t('calories')}</p>
                  <p className="font-semibold">{recipe.calories}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-2 flex-wrap">
          <Button onClick={handleAddToShoppingList} className="flex-1 min-w-[200px]">
            <ShoppingCart className="h-4 w-4 mr-2" />
            {t('addToShoppingList')}
          </Button>
          <Button variant="outline" className="flex-1 min-w-[200px]">
            <Download className="h-4 w-4 mr-2" />
            {t('saveOffline')}
          </Button>
        </div>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle>{t('ingredients')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="font-medium">{ingredient.name}</span>
                <span className="text-muted-foreground">
                  {ingredient.quantity} {ingredient.unit}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Method */}
        <Card>
          <CardHeader>
            <CardTitle>{t('method')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recipe.method.map((step, index) => (
              <div
                key={step.step_number}
                className={cn(
                  "p-4 rounded-lg border transition-colors",
                  activeStep === index ? "bg-primary/5 border-primary" : "bg-muted/50"
                )}
              >
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold",
                    activeStep === index 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    {step.step_number}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base leading-relaxed">{step.instruction}</p>
                    {step.time_estimate && (
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => startStepTimer(step.time_estimate)}
                          className="text-xs"
                        >
                          <Timer className="h-3 w-3 mr-1" />
                          {step.time_estimate} {t('minutes')}
                        </Button>
                      </div>
                    )}
                    {step.tip && (
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        💡 {step.tip}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Nutrition Info */}
        <Collapsible open={nutritionOpen} onOpenChange={setNutritionOpen}>
          <Card>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardTitle className="flex items-center justify-between">
                  {t('nutrition')}
                  <span className="text-sm text-muted-foreground">
                    {nutritionOpen ? 'Hide' : 'Show'}
                  </span>
                </CardTitle>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{recipe.nutritional.calories}</p>
                    <p className="text-sm text-muted-foreground">{t('calories')}</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{recipe.nutritional.protein}g</p>
                    <p className="text-sm text-muted-foreground">{t('protein')}</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{recipe.nutritional.fat}g</p>
                    <p className="text-sm text-muted-foreground">{t('fat')}</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">{recipe.nutritional.carbs}g</p>
                    <p className="text-sm text-muted-foreground">{t('carbs')}</p>
                  </div>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Reviews */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {t('reviews')} ({recipe.reviews.length})
              <Button variant="outline" size="sm">
                {t('addReview')}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recipe.reviews.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">{t('noReviewsYet')}</p>
            ) : (
              recipe.reviews.map((review) => (
                <div key={review.id} className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{review.user}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < review.stars
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm mb-2">{review.text}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                    <span>{review.helpful} helpful</span>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};