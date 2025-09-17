import { Recipe } from '@/types/recipe';

// Import all recipe images
import couscouskabyleImg from '@/assets/recipes/couscous-kabyle.jpg';
import chakhchoukhaImg from '@/assets/recipes/chakhchoukha.jpg';
import mahjoubaImg from '@/assets/recipes/mahjouba.jpg';
import rechtaImg from '@/assets/recipes/rechta.jpg';
import hariraImg from '@/assets/recipes/harira.jpg';
import makroutImg from '@/assets/recipes/makrout.jpg';
import bourekImg from '@/assets/recipes/bourek.jpg';
import karantitaImg from '@/assets/recipes/karantita.jpg';
import baklawaImg from '@/assets/recipes/baklawa.jpg';
import chorbaImg from '@/assets/recipes/chorba.jpg';
import kalbelouzImg from '@/assets/recipes/kalb-el-louz.jpg';
import mhajebImg from '@/assets/recipes/mhajeb.jpg';
import tajineImg from '@/assets/recipes/tajine.jpg';
import chouarakImg from '@/assets/recipes/chouarak.jpg';
import kesraImg from '@/assets/recipes/kesra.jpg';
import loubiaImg from '@/assets/recipes/loubia.jpg';
import chbahessafraImg from '@/assets/recipes/chbah-essafra.jpg';
import meshwiImg from '@/assets/recipes/meshwi.jpg';
import taminaImg from '@/assets/recipes/tamina.jpg';
import dolmaImg from '@/assets/recipes/dolma.jpg';
import brikImg from '@/assets/recipes/brik.jpg';
import qalbelouzImg from '@/assets/recipes/qalb-el-louz.jpg';
import merguezImg from '@/assets/recipes/merguez.jpg';
import zlabiaImg from '@/assets/recipes/zlabia.jpg';

export const recipes: Recipe[] = [
  // MAIN DISHES
  {
    id: 1,
    title: "Couscous Kabyle Traditionnel",
    category: "main-dish",
    image: couscouskabyleImg,
    portion: 6,
    prep_time: 30,
    cook_time: 90,
    total_time: 120,
    difficulty: "medium",
    calories: 680,
    origin: "Kabylie",
    ingredients: [
      { name: "Semoule de couscous", quantity: 500, unit: "g" },
      { name: "Agneau coupé en morceaux", quantity: 800, unit: "g" },
      { name: "Pois chiches", quantity: 200, unit: "g" },
      { name: "Courgettes", quantity: 2, unit: "pièces" },
      { name: "Carottes", quantity: 3, unit: "pièces" },
      { name: "Navets", quantity: 2, unit: "pièces" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" },
      { name: "Sel", quantity: 1, unit: "cuillère à café" },
      { name: "Poivre", quantity: 0.5, unit: "cuillère à café" },
      { name: "Curcuma", quantity: 1, unit: "cuillère à café" },
      { name: "Coriandre fraîche", quantity: 1, unit: "bouquet" }
    ],
    nutritional: {
      calories: 680,
      protein: 35,
      fat: 22,
      carbs: 85
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire tremper les pois chiches la veille. Préparer la semoule en la roulant avec un peu d'eau et d'huile d'olive.",
        time_estimate: 15
      },
      {
        step_number: 2,
        instruction: "Dans le bas du couscoussier, faire revenir la viande avec l'oignon émincé et les épices.",
        time_estimate: 20
      },
      {
        step_number: 3,
        instruction: "Ajouter les pois chiches égouttés et couvrir d'eau. Laisser mijoter 45 minutes.",
        time_estimate: 45
      },
      {
        step_number: 4,
        instruction: "Ajouter les légumes coupés en gros morceaux et cuire encore 30 minutes.",
        time_estimate: 30
      },
      {
        step_number: 5,
        instruction: "Cuire la semoule à la vapeur dans le haut du couscoussier en 3 fois, en l'aérant entre chaque cuisson.",
        time_estimate: 45
      },
      {
        step_number: 6,
        instruction: "Servir la semoule dans un plat, arroser de bouillon et disposer la viande et les légumes.",
        time_estimate: 5
      }
    ],
    tags: ["traditionnel", "famille", "festif", "kabyle"],
    rating: 4.8,
    reviews: [
      {
        id: 1,
        user: "Fatima",
        text: "Recette authentique de ma grand-mère ! Parfait pour les grandes occasions.",
        stars: 5,
        date: "2024-01-15",
        helpful: 12
      },
      {
        id: 2,
        user: "Ahmed",
        text: "Excellent goût, j'ai suivi exactement la recette. Un peu long mais ça vaut le coup.",
        stars: 4,
        date: "2024-01-20",
        helpful: 8
      }
    ],
    favorite: false,
    created_at: "2024-01-01",
    updated_at: "2024-01-01",
    is_trendy: true
  },
  {
    id: 2,
    title: "Chakhchoukha Constantinoise",
    category: "main-dish",
    image: chakhchoukhaImg,
    portion: 4,
    prep_time: 20,
    cook_time: 60,
    total_time: 80,
    difficulty: "medium",
    calories: 520,
    origin: "Constantine",
    ingredients: [
      { name: "Galettes de pain (rougag)", quantity: 4, unit: "pièces" },
      { name: "Agneau en morceaux", quantity: 600, unit: "g" },
      { name: "Tomates", quantity: 4, unit: "pièces" },
      { name: "Pois chiches", quantity: 150, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Concentré de tomate", quantity: 2, unit: "cuillères à soupe" },
      { name: "Huile d'olive", quantity: 3, unit: "cuillères à soupe" },
      { name: "Harissa", quantity: 1, unit: "cuillère à café" },
      { name: "Cumin", quantity: 1, unit: "cuillère à café" },
      { name: "Sel et poivre", quantity: 1, unit: "pincée" }
    ],
    nutritional: {
      calories: 520,
      protein: 28,
      fat: 18,
      carbs: 65
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire tremper les pois chiches la veille.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Faire revenir la viande avec l'oignon dans l'huile d'olive.",
        time_estimate: 15
      },
      {
        step_number: 3,
        instruction: "Ajouter les tomates concassées, le concentré de tomate et les épices.",
        time_estimate: 10
      },
      {
        step_number: 4,
        instruction: "Incorporer les pois chiches et laisser mijoter 45 minutes.",
        time_estimate: 45
      },
      {
        step_number: 5,
        instruction: "Déchirer les galettes en morceaux et les incorporer dans la sauce.",
        time_estimate: 5
      },
      {
        step_number: 6,
        instruction: "Laisser absorber quelques minutes et servir chaud.",
        time_estimate: 10
      }
    ],
    tags: ["constantinoise", "épicé", "consistant"],
    rating: 4.6,
    reviews: [
      {
        id: 3,
        user: "Leila",
        text: "Délicieux ! Rappelle les saveurs de mon enfance à Constantine.",
        stars: 5,
        date: "2024-01-18",
        helpful: 15
      }
    ],
    favorite: false,
    created_at: "2024-01-02",
    updated_at: "2024-01-02",
    is_trendy: true
  },
  {
    id: 3,
    title: "Rechta aux Légumes",
    category: "main-dish",
    image: rechtaImg,
    portion: 4,
    prep_time: 25,
    cook_time: 45,
    total_time: 70,
    difficulty: "medium",
    calories: 450,
    origin: "Alger",
    ingredients: [
      { name: "Pâtes rechta", quantity: 400, unit: "g" },
      { name: "Poulet coupé en morceaux", quantity: 500, unit: "g" },
      { name: "Courgettes", quantity: 2, unit: "pièces" },
      { name: "Carottes", quantity: 2, unit: "pièces" },
      { name: "Petits pois", quantity: 150, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Bouillon de volaille", quantity: 1, unit: "litre" },
      { name: "Huile d'olive", quantity: 3, unit: "cuillères à soupe" },
      { name: "Cannelle", quantity: 0.5, unit: "cuillère à café" },
      { name: "Gingembre", quantity: 0.5, unit: "cuillère à café" }
    ],
    nutritional: {
      calories: 450,
      protein: 32,
      fat: 15,
      carbs: 48
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire revenir le poulet avec l'oignon émincé.",
        time_estimate: 15
      },
      {
        step_number: 2,
        instruction: "Ajouter les épices et cuire 2 minutes.",
        time_estimate: 2
      },
      {
        step_number: 3,
        instruction: "Verser le bouillon et laisser mijoter 20 minutes.",
        time_estimate: 20
      },
      {
        step_number: 4,
        instruction: "Ajouter les légumes coupés en dés et cuire 15 minutes.",
        time_estimate: 15
      },
      {
        step_number: 5,
        instruction: "Cuire les pâtes rechta dans le bouillon jusqu'à tendreté.",
        time_estimate: 8
      },
      {
        step_number: 6,
        instruction: "Servir chaud avec le bouillon et les légumes.",
        time_estimate: 2
      }
    ],
    tags: ["algérois", "léger", "nutritif"],
    rating: 4.4,
    reviews: [],
    favorite: false,
    created_at: "2024-01-03",
    updated_at: "2024-01-03",
    is_trendy: false
  },
  {
    id: 4,
    title: "Harira Algéroise",
    category: "main-dish",
    image: hariraImg,
    portion: 6,
    prep_time: 15,
    cook_time: 60,
    total_time: 75,
    difficulty: "easy",
    calories: 320,
    origin: "Alger",
    ingredients: [
      { name: "Lentilles", quantity: 200, unit: "g" },
      { name: "Pois chiches", quantity: 150, unit: "g" },
      { name: "Viande d'agneau", quantity: 300, unit: "g" },
      { name: "Tomates", quantity: 3, unit: "pièces" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Céleri", quantity: 2, unit: "branches" },
      { name: "Coriandre fraîche", quantity: 1, unit: "bouquet" },
      { name: "Concentré de tomate", quantity: 2, unit: "cuillères à soupe" },
      { name: "Farine", quantity: 2, unit: "cuillères à soupe" },
      { name: "Citron", quantity: 1, unit: "pièce" }
    ],
    nutritional: {
      calories: 320,
      protein: 22,
      fat: 8,
      carbs: 42
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire tremper les légumineuses la veille.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Faire revenir la viande avec l'oignon émincé.",
        time_estimate: 10
      },
      {
        step_number: 3,
        instruction: "Ajouter les tomates concassées et le concentré.",
        time_estimate: 5
      },
      {
        step_number: 4,
        instruction: "Incorporer les lentilles, pois chiches et 1,5L d'eau.",
        time_estimate: 5
      },
      {
        step_number: 5,
        instruction: "Laisser mijoter 45 minutes avec les herbes.",
        time_estimate: 45
      },
      {
        step_number: 6,
        instruction: "Délayer la farine et ajouter pour épaissir. Servir avec du citron.",
        time_estimate: 10
      }
    ],
    tags: ["ramadan", "soupe", "réconfortant"],
    rating: 4.7,
    reviews: [],
    favorite: false,
    created_at: "2024-01-04",
    updated_at: "2024-01-04",
    is_trendy: true
  },
  {
    id: 5,
    title: "Chorba Algérienne",
    category: "main-dish",
    image: chorbaImg,
    portion: 4,
    prep_time: 20,
    cook_time: 40,
    total_time: 60,
    difficulty: "easy",
    calories: 280,
    origin: "Alger",
    ingredients: [
      { name: "Viande d'agneau", quantity: 400, unit: "g" },
      { name: "Vermicelles", quantity: 100, unit: "g" },
      { name: "Tomates", quantity: 2, unit: "pièces" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Menthe fraîche", quantity: 1, unit: "bouquet" },
      { name: "Coriandre", quantity: 1, unit: "bouquet" },
      { name: "Concentré de tomate", quantity: 1, unit: "cuillère à soupe" },
      { name: "Huile d'olive", quantity: 3, unit: "cuillères à soupe" },
      { name: "Cannelle", quantity: 0.5, unit: "cuillère à café" }
    ],
    nutritional: {
      calories: 280,
      protein: 25,
      fat: 12,
      carbs: 18
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire revenir la viande coupée en petits morceaux.",
        time_estimate: 10
      },
      {
        step_number: 2,
        instruction: "Ajouter l'oignon émincé et les tomates concassées.",
        time_estimate: 8
      },
      {
        step_number: 3,
        instruction: "Incorporer le concentré de tomate et les épices.",
        time_estimate: 2
      },
      {
        step_number: 4,
        instruction: "Couvrir d'eau et laisser mijoter 25 minutes.",
        time_estimate: 25
      },
      {
        step_number: 5,
        instruction: "Ajouter les vermicelles et les herbes ciselées.",
        time_estimate: 8
      },
      {
        step_number: 6,
        instruction: "Cuire encore 5 minutes et servir chaud.",
        time_estimate: 5
      }
    ],
    tags: ["traditionnel", "réconfortant", "léger"],
    rating: 4.5,
    reviews: [],
    favorite: false,
    created_at: "2024-01-05",
    updated_at: "2024-01-05",
    is_trendy: false
  },
  {
    id: 6,
    title: "Tajine aux Légumes",
    category: "main-dish",
    image: tajineImg,
    portion: 4,
    prep_time: 25,
    cook_time: 75,
    total_time: 100,
    difficulty: "medium",
    calories: 380,
    origin: "Oran",
    ingredients: [
      { name: "Agneau en morceaux", quantity: 600, unit: "g" },
      { name: "Aubergines", quantity: 2, unit: "pièces" },
      { name: "Courgettes", quantity: 2, unit: "pièces" },
      { name: "Pommes de terre", quantity: 3, unit: "pièces" },
      { name: "Tomates", quantity: 3, unit: "pièces" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Olives vertes", quantity: 100, unit: "g" },
      { name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" },
      { name: "Gingembre", quantity: 1, unit: "cuillère à café" },
      { name: "Safran", quantity: 1, unit: "pincée" }
    ],
    nutritional: {
      calories: 380,
      protein: 28,
      fat: 18,
      carbs: 32
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire dorer la viande dans le tajine avec l'huile d'olive.",
        time_estimate: 15
      },
      {
        step_number: 2,
        instruction: "Ajouter l'oignon émincé et les épices.",
        time_estimate: 5
      },
      {
        step_number: 3,
        instruction: "Incorporer les tomates concassées et un peu d'eau.",
        time_estimate: 10
      },
      {
        step_number: 4,
        instruction: "Laisser mijoter 30 minutes à feu doux.",
        time_estimate: 30
      },
      {
        step_number: 5,
        instruction: "Ajouter les légumes coupés en gros morceaux.",
        time_estimate: 15
      },
      {
        step_number: 6,
        instruction: "Cuire encore 30 minutes avec les olives.",
        time_estimate: 30
      }
    ],
    tags: ["tajine", "oranais", "légumes"],
    rating: 4.3,
    reviews: [],
    favorite: false,
    created_at: "2024-01-06",
    updated_at: "2024-01-06",
    is_trendy: false
  },
  {
    id: 7,
    title: "Loubia aux Épinards",
    category: "main-dish",
    image: loubiaImg,
    portion: 4,
    prep_time: 15,
    cook_time: 45,
    total_time: 60,
    difficulty: "easy",
    calories: 290,
    origin: "Kabylie",
    ingredients: [
      { name: "Haricots blancs", quantity: 300, unit: "g" },
      { name: "Épinards frais", quantity: 500, unit: "g" },
      { name: "Viande d'agneau", quantity: 200, unit: "g" },
      { name: "Tomates", quantity: 2, unit: "pièces" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Ail", quantity: 2, unit: "gousses" },
      { name: "Huile d'olive", quantity: 3, unit: "cuillères à soupe" },
      { name: "Cumin", quantity: 1, unit: "cuillère à café" },
      { name: "Paprika", quantity: 1, unit: "cuillère à café" }
    ],
    nutritional: {
      calories: 290,
      protein: 20,
      fat: 10,
      carbs: 35
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire tremper les haricots la veille.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Faire revenir la viande avec l'oignon et l'ail.",
        time_estimate: 10
      },
      {
        step_number: 3,
        instruction: "Ajouter les tomates concassées et les épices.",
        time_estimate: 5
      },
      {
        step_number: 4,
        instruction: "Incorporer les haricots égouttés et couvrir d'eau.",
        time_estimate: 5
      },
      {
        step_number: 5,
        instruction: "Laisser mijoter 25 minutes.",
        time_estimate: 25
      },
      {
        step_number: 6,
        instruction: "Ajouter les épinards et cuire 10 minutes.",
        time_estimate: 10
      }
    ],
    tags: ["végétarien possible", "nutritif", "kabyle"],
    rating: 4.2,
    reviews: [],
    favorite: false,
    created_at: "2024-01-07",
    updated_at: "2024-01-07",
    is_trendy: false
  },
  {
    id: 8,
    title: "Dolma aux Légumes Farcis",
    category: "main-dish",
    image: dolmaImg,
    portion: 6,
    prep_time: 45,
    cook_time: 60,
    total_time: 105,
    difficulty: "hard",
    calories: 420,
    origin: "Constantine",
    ingredients: [
      { name: "Courgettes moyennes", quantity: 6, unit: "pièces" },
      { name: "Tomates moyennes", quantity: 6, unit: "pièces" },
      { name: "Viande hachée", quantity: 400, unit: "g" },
      { name: "Riz", quantity: 150, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Menthe fraîche", quantity: 1, unit: "bouquet" },
      { name: "Persil", quantity: 1, unit: "bouquet" },
      { name: "Concentré de tomate", quantity: 2, unit: "cuillères à soupe" },
      { name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" }
    ],
    nutritional: {
      calories: 420,
      protein: 25,
      fat: 16,
      carbs: 48
    },
    method: [
      {
        step_number: 1,
        instruction: "Évider délicatement les courgettes et tomates.",
        time_estimate: 20
      },
      {
        step_number: 2,
        instruction: "Préparer la farce avec viande, riz, oignon et herbes.",
        time_estimate: 15
      },
      {
        step_number: 3,
        instruction: "Farcir les légumes avec le mélange.",
        time_estimate: 20
      },
      {
        step_number: 4,
        instruction: "Disposer dans un plat avec un peu d'eau.",
        time_estimate: 5
      },
      {
        step_number: 5,
        instruction: "Cuire au four à 180°C pendant 45 minutes.",
        time_estimate: 45
      },
      {
        step_number: 6,
        instruction: "Servir chaud avec la sauce de cuisson.",
        time_estimate: 5
      }
    ],
    tags: ["farci", "constantinoise", "élaboré"],
    rating: 4.6,
    reviews: [],
    favorite: false,
    created_at: "2024-01-08",
    updated_at: "2024-01-08",
    is_trendy: false
  },

  // STREET FOOD
  {
    id: 9,
    title: "Mahjouba aux Épinards",
    category: "street-food",
    image: mahjoubaImg,
    portion: 4,
    prep_time: 20,
    cook_time: 15,
    total_time: 35,
    difficulty: "medium",
    calories: 280,
    origin: "Alger",
    ingredients: [
      { name: "Farine", quantity: 300, unit: "g" },
      { name: "Épinards frais", quantity: 400, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Eau tiède", quantity: 200, unit: "ml" },
      { name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" },
      { name: "Sel", quantity: 1, unit: "cuillère à café" },
      { name: "Poivre", quantity: 0.5, unit: "cuillère à café" },
      { name: "Harissa", quantity: 1, unit: "cuillère à café" }
    ],
    nutritional: {
      calories: 280,
      protein: 8,
      fat: 12,
      carbs: 35
    },
    method: [
      {
        step_number: 1,
        instruction: "Préparer une pâte fine avec farine, eau et sel.",
        time_estimate: 10
      },
      {
        step_number: 2,
        instruction: "Faire revenir les épinards avec l'oignon émincé.",
        time_estimate: 8
      },
      {
        step_number: 3,
        instruction: "Étaler la pâte très finement.",
        time_estimate: 5
      },
      {
        step_number: 4,
        instruction: "Répartir la farce sur la moitié de la pâte.",
        time_estimate: 3
      },
      {
        step_number: 5,
        instruction: "Plier et cuire sur une plaque chaude huilée.",
        time_estimate: 8
      },
      {
        step_number: 6,
        instruction: "Servir chaud avec harissa.",
        time_estimate: 1
      }
    ],
    tags: ["street-food", "crêpe", "épinards"],
    rating: 4.4,
    reviews: [
      {
        id: 4,
        user: "Yacine",
        text: "Comme chez le vendeur de rue ! Parfait pour un en-cas.",
        stars: 4,
        date: "2024-01-22",
        helpful: 6
      }
    ],
    favorite: false,
    created_at: "2024-01-09",
    updated_at: "2024-01-09",
    is_trendy: true
  },
  {
    id: 10,
    title: "Karantita Croustillante",
    category: "street-food",
    image: karantitaImg,
    portion: 4,
    prep_time: 10,
    cook_time: 25,
    total_time: 35,
    difficulty: "easy",
    calories: 220,
    origin: "Oran",
    ingredients: [
      { name: "Farine de pois chiches", quantity: 200, unit: "g" },
      { name: "Eau", quantity: 500, unit: "ml" },
      { name: "Sel", quantity: 1, unit: "cuillère à café" },
      { name: "Cumin", quantity: 1, unit: "cuillère à café" },
      { name: "Huile d'olive", quantity: 3, unit: "cuillères à soupe" },
      { name: "Harissa", quantity: 2, unit: "cuillères à café" },
      { name: "Citron", quantity: 1, unit: "pièce" }
    ],
    nutritional: {
      calories: 220,
      protein: 12,
      fat: 8,
      carbs: 28
    },
    method: [
      {
        step_number: 1,
        instruction: "Mélanger la farine de pois chiches avec l'eau froide.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Ajouter sel, cumin et bien fouetter.",
        time_estimate: 3
      },
      {
        step_number: 3,
        instruction: "Cuire à feu moyen en remuant constamment.",
        time_estimate: 15
      },
      {
        step_number: 4,
        instruction: "Verser dans un plat et laisser refroidir.",
        time_estimate: 10
      },
      {
        step_number: 5,
        instruction: "Découper en portions et faire griller.",
        time_estimate: 8
      },
      {
        step_number: 6,
        instruction: "Servir avec harissa et citron.",
        time_estimate: 2
      }
    ],
    tags: ["oranais", "sans-gluten", "économique"],
    rating: 4.2,
    reviews: [],
    favorite: false,
    created_at: "2024-01-10",
    updated_at: "2024-01-10",
    is_trendy: true
  },
  {
    id: 11,
    title: "Mhajeb aux Herbes",
    category: "street-food",
    image: mhajebImg,
    portion: 6,
    prep_time: 30,
    cook_time: 20,
    total_time: 50,
    difficulty: "medium",
    calories: 310,
    origin: "Constantine",
    ingredients: [
      { name: "Farine", quantity: 400, unit: "g" },
      { name: "Semoule fine", quantity: 100, unit: "g" },
      { name: "Épinards", quantity: 300, unit: "g" },
      { name: "Coriandre", quantity: 1, unit: "bouquet" },
      { name: "Persil", quantity: 1, unit: "bouquet" },
      { name: "Oignon vert", quantity: 3, unit: "tiges" },
      { name: "Huile", quantity: 5, unit: "cuillères à soupe" },
      { name: "Eau tiède", quantity: 250, unit: "ml" },
      { name: "Sel", quantity: 1, unit: "cuillère à café" }
    ],
    nutritional: {
      calories: 310,
      protein: 9,
      fat: 10,
      carbs: 48
    },
    method: [
      {
        step_number: 1,
        instruction: "Préparer une pâte avec farine, semoule, eau et sel.",
        time_estimate: 15
      },
      {
        step_number: 2,
        instruction: "Laisser reposer 30 minutes.",
        time_estimate: 30
      },
      {
        step_number: 3,
        instruction: "Préparer la farce avec les herbes ciselées.",
        time_estimate: 10
      },
      {
        step_number: 4,
        instruction: "Étaler la pâte finement et garnir.",
        time_estimate: 8
      },
      {
        step_number: 5,
        instruction: "Former des carrés et cuire sur plaque.",
        time_estimate: 15
      },
      {
        step_number: 6,
        instruction: "Servir chaud avec du thé.",
        time_estimate: 2
      }
    ],
    tags: ["herbes", "constantinoise", "crêpe"],
    rating: 4.3,
    reviews: [],
    favorite: false,
    created_at: "2024-01-11",
    updated_at: "2024-01-11",
    is_trendy: false
  },
  {
    id: 12,
    title: "Bourek au Fromage",
    category: "street-food",
    image: bourekImg,
    portion: 8,
    prep_time: 25,
    cook_time: 20,
    total_time: 45,
    difficulty: "medium",
    calories: 340,
    origin: "Alger",
    ingredients: [
      { name: "Feuilles de brick", quantity: 8, unit: "pièces" },
      { name: "Fromage blanc", quantity: 300, unit: "g" },
      { name: "Œufs", quantity: 2, unit: "pièces" },
      { name: "Persil ciselé", quantity: 3, unit: "cuillères à soupe" },
      { name: "Menthe fraîche", quantity: 2, unit: "cuillères à soupe" },
      { name: "Poivre", quantity: 0.5, unit: "cuillère à café" },
      { name: "Huile pour friture", quantity: 500, unit: "ml" }
    ],
    nutritional: {
      calories: 340,
      protein: 15,
      fat: 22,
      carbs: 20
    },
    method: [
      {
        step_number: 1,
        instruction: "Mélanger fromage, œufs et herbes ciselées.",
        time_estimate: 10
      },
      {
        step_number: 2,
        instruction: "Assaisonner avec du poivre.",
        time_estimate: 2
      },
      {
        step_number: 3,
        instruction: "Placer la farce sur les feuilles de brick.",
        time_estimate: 8
      },
      {
        step_number: 4,
        instruction: "Rouler en forme de cigares.",
        time_estimate: 10
      },
      {
        step_number: 5,
        instruction: "Frire dans l'huile chaude jusqu'à doré.",
        time_estimate: 12
      },
      {
        step_number: 6,
        instruction: "Égoutter et servir chaud.",
        time_estimate: 3
      }
    ],
    tags: ["frit", "fromage", "apéritif"],
    rating: 4.5,
    reviews: [],
    favorite: false,
    created_at: "2024-01-12",
    updated_at: "2024-01-12",
    is_trendy: true
  },
  {
    id: 13,
    title: "Brik à l'Œuf",
    category: "street-food",
    image: brikImg,
    portion: 4,
    prep_time: 15,
    cook_time: 12,
    total_time: 27,
    difficulty: "easy",
    calories: 290,
    origin: "Annaba",
    ingredients: [
      { name: "Feuilles de brick", quantity: 4, unit: "pièces" },
      { name: "Œufs", quantity: 4, unit: "pièces" },
      { name: "Thon en boîte", quantity: 120, unit: "g" },
      { name: "Câpres", quantity: 2, unit: "cuillères à soupe" },
      { name: "Persil", quantity: 2, unit: "cuillères à soupe" },
      { name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" },
      { name: "Poivre", quantity: 1, unit: "pincée" }
    ],
    nutritional: {
      calories: 290,
      protein: 18,
      fat: 18,
      carbs: 12
    },
    method: [
      {
        step_number: 1,
        instruction: "Préparer le mélange thon, câpres et persil.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Placer une cuillère de mélange sur chaque brick.",
        time_estimate: 3
      },
      {
        step_number: 3,
        instruction: "Casser un œuf au centre de chaque brick.",
        time_estimate: 2
      },
      {
        step_number: 4,
        instruction: "Plier en triangle en gardant l'œuf entier.",
        time_estimate: 5
      },
      {
        step_number: 5,
        instruction: "Cuire dans l'huile chaude 3-4 minutes par côté.",
        time_estimate: 8
      },
      {
        step_number: 6,
        instruction: "Servir immédiatement.",
        time_estimate: 1
      }
    ],
    tags: ["œuf", "rapide", "croustillant"],
    rating: 4.6,
    reviews: [],
    favorite: false,
    created_at: "2024-01-13",
    updated_at: "2024-01-13",
    is_trendy: false
  },
  {
    id: 14,
    title: "Kesra aux Graines",
    category: "street-food",
    image: kesraImg,
    portion: 6,
    prep_time: 15,
    cook_time: 25,
    total_time: 40,
    difficulty: "easy",
    calories: 250,
    origin: "Kabylie",
    ingredients: [
      { name: "Farine", quantity: 500, unit: "g" },
      { name: "Semoule fine", quantity: 100, unit: "g" },
      { name: "Eau tiède", quantity: 300, unit: "ml" },
      { name: "Levure boulangère", quantity: 7, unit: "g" },
      { name: "Sel", quantity: 1, unit: "cuillère à café" },
      { name: "Huile d'olive", quantity: 3, unit: "cuillères à soupe" },
      { name: "Graines de sésame", quantity: 2, unit: "cuillères à soupe" },
      { name: "Graines de nigelle", quantity: 1, unit: "cuillère à soupe" }
    ],
    nutritional: {
      calories: 250,
      protein: 8,
      fat: 6,
      carbs: 42
    },
    method: [
      {
        step_number: 1,
        instruction: "Diluer la levure dans l'eau tiède.",
        time_estimate: 3
      },
      {
        step_number: 2,
        instruction: "Mélanger farine, semoule et sel.",
        time_estimate: 2
      },
      {
        step_number: 3,
        instruction: "Former une pâte avec l'eau et l'huile.",
        time_estimate: 8
      },
      {
        step_number: 4,
        instruction: "Laisser lever 30 minutes.",
        time_estimate: 30
      },
      {
        step_number: 5,
        instruction: "Former un pain rond, parsemer de graines.",
        time_estimate: 5
      },
      {
        step_number: 6,
        instruction: "Cuire sur tajine ou plaque 25 minutes.",
        time_estimate: 25
      }
    ],
    tags: ["pain", "graines", "kabyle"],
    rating: 4.1,
    reviews: [],
    favorite: false,
    created_at: "2024-01-14",
    updated_at: "2024-01-14",
    is_trendy: false
  },
  {
    id: 15,
    title: "Merguez Grillées",
    category: "street-food",
    image: merguezImg,
    portion: 4,
    prep_time: 5,
    cook_time: 15,
    total_time: 20,
    difficulty: "easy",
    calories: 420,
    origin: "Toute l'Algérie",
    ingredients: [
      { name: "Merguez", quantity: 8, unit: "pièces" },
      { name: "Pain", quantity: 4, unit: "petits pains" },
      { name: "Tomates", quantity: 2, unit: "pièces" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Harissa", quantity: 2, unit: "cuillères à soupe" },
      { name: "Huile d'olive", quantity: 2, unit: "cuillères à soupe" },
      { name: "Coriandre", quantity: 2, unit: "cuillères à soupe" }
    ],
    nutritional: {
      calories: 420,
      protein: 22,
      fat: 28,
      carbs: 25
    },
    method: [
      {
        step_number: 1,
        instruction: "Piquer les merguez avec une fourchette.",
        time_estimate: 2
      },
      {
        step_number: 2,
        instruction: "Griller sur barbecue ou plancha 12-15 minutes.",
        time_estimate: 15
      },
      {
        step_number: 3,
        instruction: "Couper tomates et oignon en rondelles.",
        time_estimate: 3
      },
      {
        step_number: 4,
        instruction: "Réchauffer les pains.",
        time_estimate: 2
      },
      {
        step_number: 5,
        instruction: "Garnir avec merguez, légumes et harissa.",
        time_estimate: 3
      },
      {
        step_number: 6,
        instruction: "Servir immédiatement.",
        time_estimate: 1
      }
    ],
    tags: ["grillé", "épicé", "sandwich"],
    rating: 4.4,
    reviews: [],
    favorite: false,
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
    is_trendy: true
  },
  {
    id: 16,
    title: "Meshwi aux Légumes",
    category: "street-food",
    image: meshwiImg,
    portion: 4,
    prep_time: 20,
    cook_time: 15,
    total_time: 35,
    difficulty: "easy",
    calories: 380,
    origin: "Oran",
    ingredients: [
      { name: "Agneau coupé en cubes", quantity: 500, unit: "g" },
      { name: "Poivrons", quantity: 2, unit: "pièces" },
      { name: "Courgettes", quantity: 1, unit: "pièce" },
      { name: "Tomates cerises", quantity: 200, unit: "g" },
      { name: "Oignon", quantity: 1, unit: "pièce" },
      { name: "Huile d'olive", quantity: 4, unit: "cuillères à soupe" },
      { name: "Cumin", quantity: 1, unit: "cuillère à café" },
      { name: "Paprika", quantity: 1, unit: "cuillère à café" },
      { name: "Citron", quantity: 1, unit: "pièce" }
    ],
    nutritional: {
      calories: 380,
      protein: 30,
      fat: 20,
      carbs: 18
    },
    method: [
      {
        step_number: 1,
        instruction: "Mariner la viande avec épices, huile et citron.",
        time_estimate: 15
      },
      {
        step_number: 2,
        instruction: "Couper tous les légumes en gros morceaux.",
        time_estimate: 8
      },
      {
        step_number: 3,
        instruction: "Enfiler sur brochettes en alternant viande et légumes.",
        time_estimate: 10
      },
      {
        step_number: 4,
        instruction: "Griller sur barbecue 12-15 minutes.",
        time_estimate: 15
      },
      {
        step_number: 5,
        instruction: "Tourner régulièrement pour une cuisson uniforme.",
        time_estimate: 5
      },
      {
        step_number: 6,
        instruction: "Servir avec du pain et de la salade.",
        time_estimate: 2
      }
    ],
    tags: ["brochettes", "légumes", "grillé"],
    rating: 4.2,
    reviews: [],
    favorite: false,
    created_at: "2024-01-16",
    updated_at: "2024-01-16",
    is_trendy: false
  },

  // TRADITIONAL SWEETS
  {
    id: 17,
    title: "Makrout aux Dattes",
    category: "traditional-sweets",
    image: makroutImg,
    portion: 20,
    prep_time: 45,
    cook_time: 25,
    total_time: 70,
    difficulty: "medium",
    calories: 180,
    origin: "Sud Algérien",
    ingredients: [
      { name: "Semoule fine", quantity: 500, unit: "g" },
      { name: "Dattes dénoyautées", quantity: 400, unit: "g" },
      { name: "Beurre fondu", quantity: 100, unit: "g" },
      { name: "Eau de fleur d'oranger", quantity: 3, unit: "cuillères à soupe" },
      { name: "Miel", quantity: 200, unit: "ml" },
      { name: "Cannelle", quantity: 1, unit: "cuillère à café" },
      { name: "Huile d'olive", quantity: 50, unit: "ml" }
    ],
    nutritional: {
      calories: 180,
      protein: 3,
      fat: 4,
      carbs: 36
    },
    method: [
      {
        step_number: 1,
        instruction: "Mélanger semoule avec beurre et eau de fleur d'oranger.",
        time_estimate: 10
      },
      {
        step_number: 2,
        instruction: "Préparer la pâte de dattes avec la cannelle.",
        time_estimate: 15
      },
      {
        step_number: 3,
        instruction: "Former des rouleaux avec la pâte et la farce.",
        time_estimate: 20
      },
      {
        step_number: 4,
        instruction: "Découper en losanges et disposer sur plaque.",
        time_estimate: 10
      },
      {
        step_number: 5,
        instruction: "Cuire au four à 180°C pendant 20 minutes.",
        time_estimate: 20
      },
      {
        step_number: 6,
        instruction: "Tremper dans le miel chaud et laisser refroidir.",
        time_estimate: 15
      }
    ],
    tags: ["dattes", "miel", "traditionnel"],
    rating: 4.7,
    reviews: [
      {
        id: 5,
        user: "Khadija",
        text: "Exactement comme ma grand-mère les faisait ! Délicieux.",
        stars: 5,
        date: "2024-01-25",
        helpful: 18
      }
    ],
    favorite: false,
    created_at: "2024-01-17",
    updated_at: "2024-01-17",
    is_trendy: true
  },
  {
    id: 18,
    title: "Baklawa aux Amandes",
    category: "traditional-sweets",
    image: baklawaImg,
    portion: 16,
    prep_time: 40,
    cook_time: 30,
    total_time: 70,
    difficulty: "hard",
    calories: 220,
    origin: "Constantine",
    ingredients: [
      { name: "Feuilles de brick", quantity: 12, unit: "pièces" },
      { name: "Amandes en poudre", quantity: 300, unit: "g" },
      { name: "Sucre", quantity: 150, unit: "g" },
      { name: "Beurre fondu", quantity: 150, unit: "g" },
      { name: "Miel", quantity: 250, unit: "ml" },
      { name: "Eau de rose", quantity: 2, unit: "cuillères à soupe" },
      { name: "Pistaches concassées", quantity: 50, unit: "g" }
    ],
    nutritional: {
      calories: 220,
      protein: 6,
      fat: 14,
      carbs: 20
    },
    method: [
      {
        step_number: 1,
        instruction: "Mélanger amandes en poudre avec sucre et eau de rose.",
        time_estimate: 10
      },
      {
        step_number: 2,
        instruction: "Badigeonner les feuilles de brick avec du beurre.",
        time_estimate: 15
      },
      {
        step_number: 3,
        instruction: "Superposer en alternant avec la farce aux amandes.",
        time_estimate: 20
      },
      {
        step_number: 4,
        instruction: "Découper en losanges avant cuisson.",
        time_estimate: 5
      },
      {
        step_number: 5,
        instruction: "Cuire au four à 170°C pendant 25-30 minutes.",
        time_estimate: 30
      },
      {
        step_number: 6,
        instruction: "Arroser de miel chaud et parsemer de pistaches.",
        time_estimate: 10
      }
    ],
    tags: ["feuilleté", "amandes", "miel"],
    rating: 4.8,
    reviews: [],
    favorite: false,
    created_at: "2024-01-18",
    updated_at: "2024-01-18",
    is_trendy: true
  },
  {
    id: 19,
    title: "Kalb el Louz",
    category: "traditional-sweets",
    image: kalbelouzImg,
    portion: 12,
    prep_time: 20,
    cook_time: 35,
    total_time: 55,
    difficulty: "medium",
    calories: 260,
    origin: "Alger",
    ingredients: [
      { name: "Semoule fine", quantity: 300, unit: "g" },
      { name: "Amandes en poudre", quantity: 200, unit: "g" },
      { name: "Sucre", quantity: 200, unit: "g" },
      { name: "Œufs", quantity: 4, unit: "pièces" },
      { name: "Beurre", quantity: 100, unit: "g" },
      { name: "Lait", quantity: 200, unit: "ml" },
      { name: "Levure chimique", quantity: 1, unit: "sachet" },
      { name: "Eau de fleur d'oranger", quantity: 2, unit: "cuillères à soupe" },
      { name: "Sirop de sucre", quantity: 300, unit: "ml" }
    ],
    nutritional: {
      calories: 260,
      protein: 8,
      fat: 10,
      carbs: 36
    },
    method: [
      {
        step_number: 1,
        instruction: "Battre œufs avec sucre jusqu'à blanchiment.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Ajouter beurre fondu et lait tiède.",
        time_estimate: 3
      },
      {
        step_number: 3,
        instruction: "Incorporer semoule, amandes et levure.",
        time_estimate: 8
      },
      {
        step_number: 4,
        instruction: "Verser dans un moule beurré.",
        time_estimate: 2
      },
      {
        step_number: 5,
        instruction: "Cuire au four à 180°C pendant 30-35 minutes.",
        time_estimate: 35
      },
      {
        step_number: 6,
        instruction: "Arroser de sirop froid et découper en losanges.",
        time_estimate: 10
      }
    ],
    tags: ["semoule", "amandes", "sirop"],
    rating: 4.5,
    reviews: [],
    favorite: false,
    created_at: "2024-01-19",
    updated_at: "2024-01-19",
    is_trendy: false
  },
  {
    id: 20,
    title: "Chbah Essafra",
    category: "traditional-sweets",
    image: chbahessafraImg,
    portion: 25,
    prep_time: 30,
    cook_time: 20,
    total_time: 50,
    difficulty: "medium",
    calories: 140,
    origin: "Constantine",
    ingredients: [
      { name: "Semoule fine", quantity: 400, unit: "g" },
      { name: "Beurre", quantity: 150, unit: "g" },
      { name: "Sucre glace", quantity: 100, unit: "g" },
      { name: "Jaunes d'œufs", quantity: 3, unit: "pièces" },
      { name: "Eau de fleur d'oranger", quantity: 3, unit: "cuillères à soupe" },
      { name: "Amandes effilées", quantity: 100, unit: "g" },
      { name: "Colorant jaune alimentaire", quantity: 1, unit: "pincée" }
    ],
    nutritional: {
      calories: 140,
      protein: 3,
      fat: 6,
      carbs: 20
    },
    method: [
      {
        step_number: 1,
        instruction: "Mélanger semoule avec beurre ramolli jusqu'à sablage.",
        time_estimate: 10
      },
      {
        step_number: 2,
        instruction: "Ajouter jaunes d'œufs, sucre glace et eau de fleur d'oranger.",
        time_estimate: 5
      },
      {
        step_number: 3,
        instruction: "Incorporer le colorant pour obtenir une couleur dorée.",
        time_estimate: 3
      },
      {
        step_number: 4,
        instruction: "Former des petites boules et aplatir légèrement.",
        time_estimate: 15
      },
      {
        step_number: 5,
        instruction: "Décorer avec des amandes effilées.",
        time_estimate: 7
      },
      {
        step_number: 6,
        instruction: "Cuire au four à 160°C pendant 15-20 minutes.",
        time_estimate: 20
      }
    ],
    tags: ["sablés", "jaune", "amandes"],
    rating: 4.3,
    reviews: [],
    favorite: false,
    created_at: "2024-01-20",
    updated_at: "2024-01-20",
    is_trendy: false
  },
  {
    id: 21,
    title: "Tamina Réconfortante",
    category: "traditional-sweets",
    image: taminaImg,
    portion: 4,
    prep_time: 5,
    cook_time: 15,
    total_time: 20,
    difficulty: "easy",
    calories: 320,
    origin: "Toute l'Algérie",
    ingredients: [
      { name: "Semoule fine", quantity: 200, unit: "g" },
      { name: "Beurre", quantity: 80, unit: "g" },
      { name: "Miel", quantity: 100, unit: "ml" },
      { name: "Lait chaud", quantity: 300, unit: "ml" },
      { name: "Cannelle", quantity: 1, unit: "cuillère à café" },
      { name: "Amandes effilées", quantity: 50, unit: "g" },
      { name: "Eau de fleur d'oranger", quantity: 1, unit: "cuillère à soupe" }
    ],
    nutritional: {
      calories: 320,
      protein: 8,
      fat: 12,
      carbs: 48
    },
    method: [
      {
        step_number: 1,
        instruction: "Faire griller la semoule dans une poêle sèche.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Ajouter le beurre et mélanger jusqu'à coloration dorée.",
        time_estimate: 8
      },
      {
        step_number: 3,
        instruction: "Incorporer progressivement le lait chaud.",
        time_estimate: 5
      },
      {
        step_number: 4,
        instruction: "Ajouter miel, cannelle et eau de fleur d'oranger.",
        time_estimate: 2
      },
      {
        step_number: 5,
        instruction: "Cuire en remuant jusqu'à consistance crémeuse.",
        time_estimate: 5
      },
      {
        step_number: 6,
        instruction: "Servir chaud garni d'amandes effilées.",
        time_estimate: 2
      }
    ],
    tags: ["réconfortant", "chaud", "facile"],
    rating: 4.4,
    reviews: [],
    favorite: false,
    created_at: "2024-01-21",
    updated_at: "2024-01-21",
    is_trendy: false
  },
  {
    id: 22,
    title: "Qalb el Louz",
    category: "traditional-sweets",
    image: qalbelouzImg,
    portion: 30,
    prep_time: 35,
    cook_time: 18,
    total_time: 53,
    difficulty: "medium",
    calories: 95,
    origin: "Alger",
    ingredients: [
      { name: "Amandes en poudre", quantity: 300, unit: "g" },
      { name: "Sucre glace", quantity: 200, unit: "g" },
      { name: "Blancs d'œufs", quantity: 2, unit: "pièces" },
      { name: "Eau de rose", quantity: 2, unit: "cuillères à soupe" },
      { name: "Colorant rose", quantity: 2, unit: "gouttes" },
      { name: "Sucre glace pour décor", quantity: 100, unit: "g" }
    ],
    nutritional: {
      calories: 95,
      protein: 4,
      fat: 6,
      carbs: 8
    },
    method: [
      {
        step_number: 1,
        instruction: "Mélanger amandes en poudre avec sucre glace.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Ajouter blancs d'œufs battus et eau de rose.",
        time_estimate: 8
      },
      {
        step_number: 3,
        instruction: "Incorporer le colorant pour une teinte rosée.",
        time_estimate: 2
      },
      {
        step_number: 4,
        instruction: "Former des cœurs avec des emporte-pièces.",
        time_estimate: 20
      },
      {
        step_number: 5,
        instruction: "Cuire au four à 160°C pendant 15-18 minutes.",
        time_estimate: 18
      },
      {
        step_number: 6,
        instruction: "Saupoudrer de sucre glace une fois refroidis.",
        time_estimate: 5
      }
    ],
    tags: ["amandes", "cœurs", "rose"],
    rating: 4.6,
    reviews: [],
    favorite: false,
    created_at: "2024-01-22",
    updated_at: "2024-01-22",
    is_trendy: false
  },
  {
    id: 23,
    title: "Zlabia au Miel",
    category: "traditional-sweets",
    image: zlabiaImg,
    portion: 15,
    prep_time: 20,
    cook_time: 25,
    total_time: 45,
    difficulty: "hard",
    calories: 210,
    origin: "Oran",
    ingredients: [
      { name: "Farine", quantity: 300, unit: "g" },
      { name: "Levure boulangère", quantity: 10, unit: "g" },
      { name: "Eau tiède", quantity: 350, unit: "ml" },
      { name: "Sucre", quantity: 1, unit: "cuillère à soupe" },
      { name: "Sel", quantity: 1, unit: "pincée" },
      { name: "Huile pour friture", quantity: 1, unit: "litre" },
      { name: "Miel", quantity: 300, unit: "ml" },
      { name: "Eau de fleur d'oranger", quantity: 2, unit: "cuillères à soupe" }
    ],
    nutritional: {
      calories: 210,
      protein: 4,
      fat: 8,
      carbs: 32
    },
    method: [
      {
        step_number: 1,
        instruction: "Diluer la levure dans l'eau tiède avec le sucre.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Mélanger avec la farine et le sel pour former une pâte lisse.",
        time_estimate: 10
      },
      {
        step_number: 3,
        instruction: "Laisser lever 1 heure dans un endroit chaud.",
        time_estimate: 60
      },
      {
        step_number: 4,
        instruction: "Former des spirales avec la pâte à l'aide d'un entonnoir.",
        time_estimate: 15
      },
      {
        step_number: 5,
        instruction: "Frire dans l'huile chaude jusqu'à doré.",
        time_estimate: 20
      },
      {
        step_number: 6,
        instruction: "Tremper immédiatement dans le miel chaud parfumé.",
        time_estimate: 5
      }
    ],
    tags: ["spirale", "frit", "miel"],
    rating: 4.2,
    reviews: [],
    favorite: false,
    created_at: "2024-01-23",
    updated_at: "2024-01-23",
    is_trendy: false
  },
  {
    id: 24,
    title: "Chouarak Brioché",
    category: "traditional-sweets",
    image: chouarakImg,
    portion: 8,
    prep_time: 30,
    cook_time: 35,
    total_time: 65,
    difficulty: "medium",
    calories: 280,
    origin: "Constantine",
    ingredients: [
      { name: "Farine", quantity: 500, unit: "g" },
      { name: "Levure boulangère", quantity: 10, unit: "g" },
      { name: "Sucre", quantity: 100, unit: "g" },
      { name: "Œufs", quantity: 3, unit: "pièces" },
      { name: "Beurre", quantity: 100, unit: "g" },
      { name: "Lait tiède", quantity: 200, unit: "ml" },
      { name: "Graines d'anis", quantity: 1, unit: "cuillère à café" },
      { name: "Graines de sésame", quantity: 2, unit: "cuillères à soupe" },
      { name: "Jaune d'œuf pour dorure", quantity: 1, unit: "pièce" }
    ],
    nutritional: {
      calories: 280,
      protein: 9,
      fat: 8,
      carbs: 44
    },
    method: [
      {
        step_number: 1,
        instruction: "Diluer la levure dans le lait tiède avec un peu de sucre.",
        time_estimate: 5
      },
      {
        step_number: 2,
        instruction: "Mélanger farine, sucre restant, œufs et beurre ramolli.",
        time_estimate: 10
      },
      {
        step_number: 3,
        instruction: "Incorporer le lait et les graines d'anis.",
        time_estimate: 8
      },
      {
        step_number: 4,
        instruction: "Pétrir jusqu'à obtenir une pâte lisse et élastique.",
        time_estimate: 15
      },
      {
        step_number: 5,
        instruction: "Laisser lever 1h30, puis tresser et dorer au jaune d'œuf.",
        time_estimate: 100
      },
      {
        step_number: 6,
        instruction: "Parsemer de sésame et cuire 30-35 minutes à 180°C.",
        time_estimate: 35
      }
    ],
    tags: ["brioche", "tressé", "anis"],
    rating: 4.5,
    reviews: [],
    favorite: false,
    created_at: "2024-01-24",
    updated_at: "2024-01-24",
    is_trendy: false
  }
];