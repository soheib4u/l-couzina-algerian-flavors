import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BottomNavigation } from '@/components/BottomNavigation';
import { HomeScreen } from '@/screens/HomeScreen';
import { RecipesScreen } from '@/screens/RecipesScreen';
import { RecipeDetailScreen } from '@/screens/RecipeDetailScreen';
import { FavoritesScreen } from '@/screens/FavoritesScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { useSettings } from '@/hooks/useLocalStorage';
import { Recipe } from '@/types/recipe';

const queryClient = new QueryClient();

const App = () => {
  const [settings] = useSettings();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Apply theme on mount and when settings change
  useEffect(() => {
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.theme]);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackFromRecipe = () => {
    setSelectedRecipe(null);
  };

  const renderCurrentScreen = () => {
    if (selectedRecipe) {
      return (
        <RecipeDetailScreen 
          recipe={selectedRecipe} 
          onBack={handleBackFromRecipe}
        />
      );
    }

    switch (activeTab) {
      case 'home':
        return <HomeScreen onRecipeClick={handleRecipeClick} />;
      case 'recipes':
        return <RecipesScreen onRecipeClick={handleRecipeClick} />;
      case 'favorites':
        return <FavoritesScreen onRecipeClick={handleRecipeClick} />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen onRecipeClick={handleRecipeClick} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          {renderCurrentScreen()}
          {!selectedRecipe && (
            <BottomNavigation 
              activeTab={activeTab} 
              onTabChange={setActiveTab}
            />
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
