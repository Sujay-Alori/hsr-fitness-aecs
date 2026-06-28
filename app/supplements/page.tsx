import { Metadata } from "next";
import SupplementsHero from "@/components/sections/supplements/SupplementsHero";
import SupplementsCatalog from "@/components/sections/supplements/SupplementsCatalog";
import SupplementsFeatures from "@/components/sections/supplements/SupplementsFeatures";
import SupplementsFAQ from "@/components/sections/supplements/SupplementsFAQ";
import SupplementsCTA from "@/components/sections/supplements/SupplementsCTA";

export const metadata: Metadata = {
  title: "Premium Supplements | HSR Fitness World",
  description: "100% genuine fitness supplements from trusted international brands. Find Whey Protein, Creatine, Pre-Workout, and more at HSR Fitness World.",
};

export default function SupplementsPage() {
  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-red-500/30">
      <SupplementsHero />
      <SupplementsCatalog />
      <SupplementsFeatures />
      <SupplementsFAQ />
      <SupplementsCTA />
    </main>
  );
}
