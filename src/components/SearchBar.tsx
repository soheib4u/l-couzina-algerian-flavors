import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
  variant?: 'default' | 'hero';
}

export const SearchBar = ({ onSearch, className, variant = 'default' }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const isHero = variant === 'hero';

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative">
        <Search className={cn(
          "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground",
          isHero ? "h-5 w-5" : "h-4 w-4"
        )} />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className={cn(
            "pl-10 pr-10",
            isHero && "py-3 text-lg bg-white/95 backdrop-blur-sm border-0 text-foreground placeholder:text-muted-foreground h-12"
          )}
          aria-label={t('searchPlaceholder')}
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className={cn(
              "absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0",
              isHero && "h-10 w-10"
            )}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </form>
  );
};