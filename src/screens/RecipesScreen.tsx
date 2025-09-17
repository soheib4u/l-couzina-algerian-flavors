import { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { RecipeGrid } from '@/components/RecipeGrid';
import { CategoryChips } from '@/components/CategoryChips';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/hooks/useTranslation';
import { recipes } from '@/data/recipes';
import { Recipe, Category, SortOption } from '@/types/recipe';

interface RecipesScreenProps {
  onRecipeClick: (recipe: Recipe) => void;
}

export const RecipesScreen = ({ onRecipeClick }: RecipesScreenProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('trending');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories: Category[] = ['street-food', 'main-dish', 'traditional-sweets'];

  const filteredAndSortedRecipes = useMemo(() => {
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

    // Sort recipes
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'trending':
          return (b.is_trendy ? 1 : 0) - (a.is_trendy ? 1 : 0) || b.rating - a.rating;
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'rating':
          return b.rating - a.rating;
        case 'time':
          return a.total_time - b.total_time;
        default:
          return 0;
      }
    });

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">{t('recipes')}</h1>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="min-w-[44px] min-h-[44px]"
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="min-w-[44px] min-h-[44px]"
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={setSearchQuery} />

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <CategoryChips
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              className="flex-1"
            />
            
            <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">{t('trending')}</SelectItem>
                <SelectItem value="newest">{t('newest')}</SelectItem>
                <SelectItem value="rating">{t('rating')}</SelectItem>
                <SelectItem value="time">{t('time')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredAndSortedRecipes.length} recipe{filteredAndSortedRecipes.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <RecipeGrid 
          recipes={filteredAndSortedRecipes} 
          onRecipeClick={onRecipeClick}
          className={viewMode === 'list' ? 'grid-cols-1' : undefined}
        />
      </div>
    </div>
  );
};