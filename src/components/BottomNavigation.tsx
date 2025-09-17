import { Home, BookOpen, Heart, Settings } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { cn } from '@/lib/utils';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  const { t } = useTranslation();

  const tabs = [
    { id: 'home', icon: Home, label: t('home') },
    { id: 'recipes', icon: BookOpen, label: t('recipes') },
    { id: 'favorites', icon: Heart, label: t('favorites') },
    { id: 'settings', icon: Settings, label: t('settings') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center justify-center min-w-[44px] min-h-[44px] px-2 py-1 rounded-lg transition-colors",
              activeTab === id
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
            role="tab"
            aria-selected={activeTab === id}
            aria-label={label}
          >
            <Icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};