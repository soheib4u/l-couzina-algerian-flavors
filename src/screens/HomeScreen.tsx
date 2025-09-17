import { useState, useMemo } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { RecipeGrid } from '@/components/RecipeGrid';
import { CategoryChips } from '@/components/CategoryChips';
import { useTranslation } from '@/hooks/useTranslation';
import { recipes } from '@/data/recipes';
import { Recipe, Category } from '@/types/recipe';
import heroCouscous from '@/assets/hero-couscous.jpg';

interface HomeScreenProps {
  onRecipeClick: (recipe: Recipe) => void;
}

export const HomeScreen = ({ onRecipeClick }: HomeScreenProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const categories: Category[] = ['street-food', 'main-dish', 'traditional-sweets'];

  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some(ingredient => 
          ingredient.name.toLowerCase().includes(query)
        ) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.origin.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const trendingRecipes = useMemo(() => 
    recipes.filter(recipe => recipe.is_trendy).slice(0, 6), []
  );

  const newRecipes = useMemo(() => 
    [...recipes].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    ).slice(0, 6), []
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCouscous}
            alt="Couscous traditionnel algérien"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                L'<span className="text-saffron">couzina</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Découvrez les secrets de la cuisine algérienne traditionnelle
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <SearchBar
                onSearch={setSearchQuery}
                variant="hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Category Filter */}
        <CategoryChips
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Search Results or Default Content */}
        {searchQuery || selectedCategory !== 'all' ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              {searchQuery ? `Results for "${searchQuery}"` : selectedCategory !== 'all' ? t(selectedCategory) : 'All Recipes'}
            </h2>
            <RecipeGrid recipes={filteredRecipes} onRecipeClick={onRecipeClick} />
          </div>
        ) : (
          <>
            {/* Trending Recipes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{t('trendingRecipes')}</h2>
              <RecipeGrid recipes={trendingRecipes} onRecipeClick={onRecipeClick} />
            </section>

            {/* New Recipes */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{t('newRecipes')}</h2>
              <RecipeGrid recipes={newRecipes} onRecipeClick={onRecipeClick} />
            </section>

            {/* All Categories Preview */}
            {categories.map(category => {
              const categoryRecipes = recipes
                .filter(recipe => recipe.category === category)
                .slice(0, 4);
              
              return (
                <section key={category} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-foreground">{t(category)}</h2>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="text-primary hover:text-primary-foreground hover:bg-primary px-3 py-1 rounded-md transition-colors text-sm font-medium"
                    >
                      View All
                    </button>
                  </div>
                  <RecipeGrid recipes={categoryRecipes} onRecipeClick={onRecipeClick} />
                </section>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};