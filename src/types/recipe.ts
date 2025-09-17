export interface Recipe {
  id: number;
  title: string;
  category: 'street-food' | 'main-dish' | 'traditional-sweets';
  image: string;
  portion: number;
  prep_time: number; // minutes
  cook_time: number; // minutes
  total_time: number; // minutes
  difficulty: 'easy' | 'medium' | 'hard';
  calories: number; // per portion
  ingredients: Ingredient[];
  nutritional: {
    calories: number;
    protein: number; // grams
    fat: number; // grams
    carbs: number; // grams
  };
  method: Step[];
  tags: string[];
  rating: number; // average rating 0-5
  reviews: Review[];
  favorite: boolean;
  created_at: string;
  updated_at: string;
  is_trendy: boolean;
  origin: string; // Algerian region
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string; // metric units
  category?: string;
}

export interface Step {
  step_number: number;
  instruction: string;
  time_estimate?: number; // minutes
  tip?: string;
}

export interface Review {
  id: number;
  user: string;
  text: string;
  stars: number; // 1-5
  date: string;
  helpful: number; // helpful votes
}

export type Category = 'street-food' | 'main-dish' | 'traditional-sweets';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type SortOption = 'trending' | 'newest' | 'rating' | 'time';