import {
  User,
  Settings,
  ShieldCheck,
  LogOut,
  Flame,
  BookOpen,
  ChevronRight,
  Edit3,
} from "lucide-react";
import { motion } from "motion/react";

export const ProfileScreen = ({
  onAdminClick,
}: {
  onAdminClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-5 max-w-2xl mx-auto pb-32"
    >
      {/* Header Profile Info */}
      <section className="relative mb-10 flex flex-col items-center md:flex-row md:items-end gap-6 md:gap-8 text-center md:text-left">
        <div className="relative">
          <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-[32px] bg-white p-2 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              alt="Profile"
              className="w-full h-full rounded-[24px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-3 right-0 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded-full border-4 border-background shadow-sm">
            Premium
          </div>
        </div>
        <div className="flex-1 pb-2">
          <h2 className="text-[32px] font-headline font-bold text-on-surface leading-tight mb-1">
            Elena Rostova
          </h2>
          <p className="text-sm text-on-surface-variant font-medium">
            Exploratrice Spirituelle depuis 2023
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 gap-4 mb-10">
        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-white rounded-[24px] p-6 flex flex-col justify-between items-center sm:items-start text-center sm:text-left shadow-sm"
        >
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
             <Flame className="text-orange-500" size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-[32px] font-headline font-bold text-on-surface leading-none mb-1">
              12
            </p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">
              Série (🔥 jours)
            </p>
          </div>
        </motion.div>

        <motion.div
          whileTap={{ scale: 0.98 }}
          className="bg-primary text-white rounded-[24px] p-6 flex flex-col justify-between items-center sm:items-start text-center sm:text-left shadow-sm shadow-primary/20"
        >
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
            <BookOpen className="text-white" size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-[32px] font-headline font-bold leading-none mb-1">
              148
            </p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/80">
              Méditations lues
            </p>
          </div>
        </motion.div>
      </section>

      {/* Menu Actions */}
      <section className="space-y-6 mb-10">
        <div className="space-y-3">
          <h3 className="text-[11px] uppercase tracking-widest font-bold text-on-surface-variant/50 ml-4 mb-2">
            Gestion du compte
          </h3>

          <div className="bg-white rounded-[24px] shadow-sm overflow-hidden flex flex-col">
            <button className="flex items-center justify-between p-4 px-5 active:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <User size={18} />
                </div>
                <span className="font-bold text-sm text-on-surface">
                  Modifier le profil
                </span>
              </div>
              <ChevronRight className="text-on-surface-variant/40" size={18} />
            </button>
            
            <div className="h-[1px] bg-surface-container-high/50 mx-5" />

            <button className="flex items-center justify-between p-4 px-5 active:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <Settings size={18} />
                </div>
                <span className="font-bold text-sm text-on-surface">
                  Paramètres
                </span>
              </div>
              <ChevronRight className="text-on-surface-variant/40" size={18} />
            </button>

            <div className="h-[1px] bg-surface-container-high/50 mx-5" />

            <button
              onClick={onAdminClick}
              className="flex items-center justify-between p-4 px-5 active:bg-surface-container-low transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                  <ShieldCheck size={18} />
                </div>
                <span className="font-bold text-sm text-on-surface">
                  Tableau de bord Admin
                </span>
              </div>
              <ChevronRight className="text-on-surface-variant/40" size={18} />
            </button>
          </div>
        </div>

        <div className="pt-2">
          <button className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-white text-red-500 font-bold active:scale-95 transition-transform shadow-sm">
            <LogOut size={18} />
            <span className="text-sm">Se déconnecter</span>
          </button>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="bg-white rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-[65%]">
          <p className="text-[22px] font-headline font-bold leading-tight mb-2 text-on-surface">
            Approfondissez votre pratique
          </p>
          <p className="text-xs text-on-surface-variant mb-6 leading-relaxed">
            Découvrez des chemins guidés conçus pour votre paix intérieure.
          </p>
          <button className="px-6 py-2.5 bg-primary text-white rounded-full text-xs font-bold shadow-sm active:scale-95 transition-transform">
            Explorer
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full w-[45%]">
          <img
            src="https://images.unsplash.com/photo-1518005020250-6859b2827c17?auto=format&fit=crop&w=400&q=80"
            alt="Inspiration"
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
        </div>
      </section>
    </motion.div>
  );
};
