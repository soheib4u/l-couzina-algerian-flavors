import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onViewAll?: () => void;
}

export const CategorySection = ({
  title,
  description,
  children,
  onViewAll,
}: CategorySectionProps) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>
        {onViewAll && (
          <Button
            variant="ghost"
            onClick={onViewAll}
            className="text-primary hover:text-primary-foreground hover:bg-primary"
          >
            Voir tout
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};