"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, MessageCircle, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { EASE_OUT } from "@/lib/motion";
import { supplementsData, supplementCategories, Supplement } from "@/lib/data/supplements";

/* ── Product Card Component ── */
function ProductCard({ product }: { product: Supplement }) {
  const { openModal } = useModal();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className="group relative bg-white/[0.02] border border-white/5 hover:border-red-600/30 rounded-2xl overflow-hidden flex flex-col h-full transition-colors duration-300"
    >
      {/* Image Container */}
      <div className="relative h-56 w-full bg-white/5 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        
        {/* Brand Badge */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
          {product.brand}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-red-500 text-xs font-bold tracking-widest uppercase mb-1">{product.category}</p>
          <h3 className="text-xl font-black text-white mb-2 leading-tight">{product.name}</h3>
          <p className="text-white/50 text-sm line-clamp-2 leading-relaxed mb-4">{product.description}</p>
        </div>

        {/* Availability Badge */}
        <div className="flex items-center gap-2 mb-5 text-xs text-white/70">
          <CheckCircle2 size={14} className="text-emerald-500" />
          <span>Available at HSR Fitness World</span>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-600 text-sm font-bold text-white transition-colors duration-300"
        >
          <MessageCircle size={16} />
          Enquire Now
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ── Main Catalog Component ── */
export default function SupplementsCatalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeBrand, setActiveBrand] = useState<string>("All");

  // Derive unique brands from data
  const brands = useMemo(() => {
    const unique = new Set(supplementsData.map((s) => s.brand));
    return ["All", ...Array.from(unique)].sort();
  }, []);

  // Filter logic
  const filteredProducts = useMemo(() => {
    return supplementsData.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.brand.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "All" || product.category === activeCategory;
      const matchBrand = activeBrand === "All" || product.brand === activeBrand;
      return matchSearch && matchCategory && matchBrand;
    });
  }, [search, activeCategory, activeBrand]);

  return (
    <section className="section-padding bg-[#030303] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters Header */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-end">
          
          {/* Search */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-white/40" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search supplements..."
                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 focus:border-red-500 rounded-xl text-white placeholder-white/40 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Category</label>
            <div className="relative">
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full appearance-none px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-pointer focus:border-red-500 transition-colors"
              >
                <option value="All" className="bg-[#050505]">All Categories</option>
                {supplementCategories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#050505]">{cat}</option>
                ))}
              </select>
              <Filter size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
            </div>
          </div>

          {/* Brand Filter */}
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Brand</label>
            <div className="relative">
              <select
                value={activeBrand}
                onChange={(e) => setActiveBrand(e.target.value)}
                className="w-full appearance-none px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white outline-none cursor-pointer focus:border-red-500 transition-colors"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand} className="bg-[#050505]">{brand}</option>
                ))}
              </select>
              <Filter size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-white/50 text-sm">
          Showing <span className="text-white font-bold">{filteredProducts.length}</span> supplements
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
              <Search size={24} className="text-white/40" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No supplements found</h3>
            <p className="text-white/50">Try adjusting your filters or search query.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
                setActiveBrand("All");
              }}
              className="mt-6 text-red-400 hover:text-red-300 font-semibold underline underline-offset-4"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
