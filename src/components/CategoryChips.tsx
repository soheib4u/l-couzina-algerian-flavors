import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { Category } from '@/types/recipe';
import { cn } from '@/lib/utils';

interface CategoryChipsProps {
  categories: Category[];
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  className?: string;
}

export const CategoryChips = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  className 
}: CategoryChipsProps) => {
  const { t } = useTranslation();

  const allCategories = ['all' as const, ...categories];

  return (
    <div className={cn("flex gap-2 overflow-x-auto pb-2", className)}>
      {allCategories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={cn(
            "whitespace-nowrap min-w-fit px-4 py-2 rounded-full",
            selectedCategory === category && "bg-primary text-primary-foreground"
          )}
        >
          {category === 'all' ? t('allCategories') : t(category)}
        </Button>
      ))}
    </div>
  );
};