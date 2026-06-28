export interface Supplement {
  id: string;
  name: string;
  brand: string;
  category: "Whey Protein" | "Creatine" | "BCAA" | "Pre Workout" | "Mass Gainer" | "Fat Burner" | "Multivitamins";
  description: string;
  image: string;
}

export const supplementCategories = [
  "Whey Protein",
  "Creatine",
  "BCAA",
  "Pre Workout",
  "Mass Gainer",
  "Fat Burner",
  "Multivitamins",
] as const;

export const supplementsData: Supplement[] = [
  // WHEY PROTEIN
  {
    id: "whey-1",
    brand: "Optimum Nutrition",
    name: "Gold Standard Whey",
    category: "Whey Protein",
    description: "Premium whey protein isolate for muscle support and recovery.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-2",
    brand: "MuscleBlaze",
    name: "Biozyme Whey",
    category: "Whey Protein",
    description: "Clinically tested for 50% higher protein absorption.",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-3",
    brand: "Avvatar",
    name: "Whey Protein",
    category: "Whey Protein",
    description: "100% vegetarian whey protein packed with natural EAAs and BCAAs.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-4",
    brand: "Dymatize",
    name: "ISO100",
    category: "Whey Protein",
    description: "Hydrolyzed whey protein isolate for ultra-fast absorption.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-5",
    brand: "Ultimate Nutrition",
    name: "Prostar Whey",
    category: "Whey Protein",
    description: "Advanced whey blend with isolate and concentrate for maximum gains.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-6",
    brand: "MyProtein",
    name: "Impact Whey",
    category: "Whey Protein",
    description: "Premium quality whey packed with 21g of protein per serving.",
    image: "https://images.unsplash.com/photo-1579722822152-64ebbf2387ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-7",
    brand: "GNC",
    name: "Pro Performance Whey",
    category: "Whey Protein",
    description: "100% whey maco-nutrient profile to boost your workout routine.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "whey-8",
    brand: "BigMuscles",
    name: "Whey Protein",
    category: "Whey Protein",
    description: "Affordable and effective protein blend for muscle growth.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
  },

  // CREATINE
  {
    id: "creatine-1",
    brand: "Optimum Nutrition",
    name: "Micronized Creatine",
    category: "Creatine",
    description: "Pure micronized creatine monohydrate for strength and power.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "creatine-2",
    brand: "MuscleBlaze",
    name: "Creatine",
    category: "Creatine",
    description: "High-quality creapure formula to enhance athletic performance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "creatine-3",
    brand: "MyProtein",
    name: "Creatine",
    category: "Creatine",
    description: "Essential supplement for high-intensity training.",
    image: "https://images.unsplash.com/photo-1579722822152-64ebbf2387ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "creatine-4",
    brand: "GNC",
    name: "Creatine",
    category: "Creatine",
    description: "Unflavored creatine for versatile mixing and endurance.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "creatine-5",
    brand: "Avvatar",
    name: "Creatine",
    category: "Creatine",
    description: "Supports ATP production and muscle hydration.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
  },

  // BCAA
  {
    id: "bcaa-1",
    brand: "Optimum Nutrition",
    name: "BCAA",
    category: "BCAA",
    description: "Intra-workout support with an optimal 2:1:1 ratio.",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bcaa-2",
    brand: "MuscleBlaze",
    name: "BCAA",
    category: "BCAA",
    description: "Branched-chain amino acids for rapid muscle recovery.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bcaa-3",
    brand: "BigMuscles",
    name: "BCAA",
    category: "BCAA",
    description: "Refreshing flavors loaded with essential recovery amino acids.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bcaa-4",
    brand: "MyProtein",
    name: "BCAA",
    category: "BCAA",
    description: "Vegan-friendly amino acid blend for peak performance.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "bcaa-5",
    brand: "GAT",
    name: "BCAA",
    category: "BCAA",
    description: "Advanced formula combining BCAAs with hydration complex.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
  },

  // PRE WORKOUT
  {
    id: "pre-1",
    brand: "Cellucor",
    name: "C4 Original",
    category: "Pre Workout",
    description: "Explosive energy and focus for intense training sessions.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pre-2",
    brand: "MuscleBlaze",
    name: "PRE Workout",
    category: "Pre Workout",
    description: "Potent blend of caffeine and pump-inducing ingredients.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pre-3",
    brand: "GAT",
    name: "Nitraflex",
    category: "Pre Workout",
    description: "Hyperemia and testosterone enhancing pre-workout.",
    image: "https://images.unsplash.com/photo-1579722822152-64ebbf2387ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pre-4",
    brand: "MyProtein",
    name: "THE Pre Workout",
    category: "Pre Workout",
    description: "Designed for serious lifters seeking maximum focus.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pre-5",
    brand: "BigMuscles",
    name: "Freak",
    category: "Pre Workout",
    description: "Intense energy formula for mind-muscle connection.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
  },

  // MASS GAINER
  {
    id: "mass-1",
    brand: "Optimum Nutrition",
    name: "Serious Mass",
    category: "Mass Gainer",
    description: "High-calorie weight gain formula for serious size.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mass-2",
    brand: "MuscleBlaze",
    name: "Mass Gainer",
    category: "Mass Gainer",
    description: "Complex carbs and protein blend for healthy weight gain.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mass-3",
    brand: "Avvatar",
    name: "Mass Gainer",
    category: "Mass Gainer",
    description: "Nutrient-dense mass building formula from fresh milk.",
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mass-4",
    brand: "BigMuscles",
    name: "Real Mass",
    category: "Mass Gainer",
    description: "Clean calories specifically formulated for hard gainers.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },

  // FAT BURNER
  {
    id: "fat-1",
    brand: "MuscleTech",
    name: "Hydroxycut",
    category: "Fat Burner",
    description: "Advanced thermogenic formula for weight loss support.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fat-2",
    brand: "Nutrex",
    name: "Lipo 6",
    category: "Fat Burner",
    description: "Fast-acting liquid capsules for maximum fat metabolism.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fat-3",
    brand: "MuscleBlaze",
    name: "Fat Burner",
    category: "Fat Burner",
    description: "Natural herbal extracts combined with caffeine for metabolism.",
    image: "https://images.unsplash.com/photo-1579722822152-64ebbf2387ea?q=80&w=800&auto=format&fit=crop",
  },

  // MULTIVITAMINS
  {
    id: "multi-1",
    brand: "Optimum Nutrition",
    name: "Opti-Men",
    category: "Multivitamins",
    description: "Comprehensive nutrient optimization system for active men.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "multi-2",
    brand: "GNC",
    name: "Mega Men",
    category: "Multivitamins",
    description: "Clinically studied multivitamin blend tailored for athletes.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "multi-3",
    brand: "MuscleBlaze",
    name: "Multivitamin",
    category: "Multivitamins",
    description: "Daily immunity and vitality booster for intense workouts.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
];
