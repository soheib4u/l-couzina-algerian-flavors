import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeCardProps {
  id: number;
  title: string;
  image: string;
  duration: number;
  servings: number;
  origin: string;
  difficulty: "Facile" | "Moyen" | "Festin Familial";
  category: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id: number) => void;
  onClick?: (id: number) => void;
}

export const RecipeCard = ({
  id,
  title,
  image,
  duration,
  servings,
  origin,
  difficulty,
  category,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
}: RecipeCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "bg-saffron text-saffron-foreground";
      case "Moyen":
        return "bg-accent text-accent-foreground";
      case "Festin Familial":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-warm hover:shadow-elevated transition-all duration-300 cursor-pointer bg-card"
      onClick={() => onClick?.(id)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 rounded-full backdrop-blur-sm ${
              isFavorite ? "bg-paprika text-paprika-foreground" : "bg-background/80 text-foreground"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle?.(id);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
        </div>
        <div className="absolute top-2 left-2">
          <Badge className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{servings} pers.</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{origin}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
      </CardFooter>
    </Card>
  );
};