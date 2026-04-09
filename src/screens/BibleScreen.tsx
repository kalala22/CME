import {
  ChevronDown,
  Search,
  ChevronLeft,
  ChevronRight,
  Type,
  Bookmark,
  BookOpen,
} from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export const BibleScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-5 max-w-2xl mx-auto pb-32"
    >
      <div className="mb-8 text-center md:text-left">
        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary mb-1">
          Écritures Sacrées
        </p>
        <h2 className="text-[32px] font-headline font-bold text-on-surface tracking-tight leading-tight">
          Bible
        </h2>
      </div>

      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-[20px] shadow-sm p-4 flex items-center justify-between cursor-pointer group active:scale-[0.98] transition-transform">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase text-on-surface-variant/70 tracking-wider mb-0.5">
                Version
              </span>
              <span className="text-sm font-bold text-on-surface">
                Louis Segond (LSG)
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary/5 transition-colors">
              <ChevronDown
                className="text-primary"
                size={16}
              />
            </div>
          </div>
          
          <div className="bg-white rounded-[20px] shadow-sm p-4 flex items-center gap-3">
            <Search className="text-on-surface-variant/60" size={18} />
            <input
              type="text"
              placeholder="Rechercher des versets..."
              className="border-none shadow-none focus:outline-none focus:ring-0 bg-transparent w-full text-sm font-medium text-on-surface placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-5 px-5">
          {["Genèse", "Exode", "Lévitique", "Nombres", "Deutéronome"].map(
            (book, i) => (
              <button
                key={book}
                className={cn(
                  "py-2.5 px-5 rounded-full text-sm font-bold whitespace-nowrap active:scale-95 transition-all text-center flex items-center justify-center",
                  i === 0
                    ? "bg-primary text-white shadow-sm shadow-primary/20"
                    : "bg-surface-container-low text-on-surface hover:bg-surface-container-high/50",
                )}
              >
                {book}
              </button>
            ),
          )}
        </div>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-[32px] shadow-sm overflow-hidden relative"
      >
        <div className="absolute -top-10 -right-10 text-primary/5 pointer-events-none select-none">
          <BookOpen size={200} />
        </div>
        <div className="p-8 md:p-10 relative z-10">
          <header className="flex justify-between items-start mb-10">
            <div>
              <h3 className="text-[28px] font-headline font-bold text-on-surface leading-tight">
                Genèse 1
              </h3>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
                Création du Monde
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 active:scale-90 transition-all">
                <Type size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 active:scale-90 transition-all">
                <Bookmark size={18} />
              </button>
            </div>
          </header>

          <div className="space-y-6 leading-relaxed text-[17px] font-body text-on-surface">
            {[
              "Au commencement, Dieu créa les cieux et la terre.",
              "La terre était informe et vide: il y avait des ténèbres à la surface de l'abîme, et l'esprit de Dieu se mouvait au-dessus des eaux.",
              "Dieu dit: Que la lumière soit! Et la lumière fut.",
              "Dieu vit que la lumière était bonne; et Dieu sépara la lumière d'avec les ténèbres.",
              "Dieu appela la lumière jour, et il appela les ténèbres nuit. Ainsi, il y eut un soir, et il y eut un matin: ce fut le premier jour.",
            ].map((verse, i) => (
              <p key={i} className="relative group pl-6">
                <span className="absolute left-0 top-1.5 text-[10px] font-bold text-primary/60">
                  {i + 1}
                </span>
                {verse}
              </p>
            ))}
          </div>

          <div className="mt-12 -mx-8 md:-mx-10 pl-8 md:pl-10">
            <div className="w-full h-[200px] rounded-l-[32px] overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                alt="Atmosphère spirituelle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="mt-10 space-y-6 leading-relaxed text-[17px] font-body text-on-surface">
            {[
              "Dieu dit: Qu'il y ait une étendue entre les eaux, pour séparer les eaux d'avec les eaux.",
              "Et Dieu fit l'étendue, et il sépara les eaux qui sont au-dessous de l'étendue d'avec les eaux qui sont au-dessus de l'étendue. Et cela fut ainsi.",
            ].map((verse, i) => (
              <p key={i + 5} className="relative group pl-6">
                <span className="absolute left-0 top-1.5 text-[10px] font-bold text-primary/60">
                  {i + 6}
                </span>
                {verse}
              </p>
            ))}
          </div>
        </div>
      </motion.article>

      <div className="mt-8 flex justify-between items-center mb-10">
        <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest active:opacity-50 transition-opacity p-2">
          <ChevronLeft size={16} />
          Précédent
        </button>
        <div className="h-1.5 w-1.5 rounded-full bg-surface-container-high" />
        <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest active:opacity-50 transition-opacity p-2">
          Suivant
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};
