import { Search, SlidersHorizontal, Calendar, Clock, BookOpen, Heart, Users, Sparkles, Play, Star, CheckCircle2 } from "lucide-react";
import { MOCK_MEDITATIONS } from "../constants";

export const HomeScreen = () => {
  const meditation = MOCK_MEDITATIONS[0];
  
  return (
    <div className="pt-24 px-5 max-w-2xl mx-auto pb-32">
      
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-[28px] font-headline font-bold text-on-surface leading-tight">
          La croissance spirituelle<br/>rendue simple 🙏
        </h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-2xl p-2 shadow-sm mb-8 border border-surface-container-high/50">
        <div className="pl-3 pr-2 opacity-50">
          <Search size={20} className="text-on-surface-variant"/>
        </div>
        <input 
          type="text" 
          placeholder="Rechercher des méditations..." 
          className="flex-1 bg-transparent text-black text-sm outline-none placeholder:text-on-surface-variant/50"
        />
        <button className="bg-surface-container-low p-2.5 rounded-xl ml-2 active:scale-95 transition-transform">
          <SlidersHorizontal size={18} className="text-on-surface-variant" />
        </button>
      </div>

      {/* Featured Card */}
      <div className="mb-8">
        <h2 className="text-base font-bold text-on-surface mb-3">Méditation du jour</h2>
        <div className="bg-primary text-white p-5 rounded-[24px] shadow-lg shadow-primary/20 relative overflow-hidden">
          {/* Top Info */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center p-0.5 relative">
                <img src={meditation.imageUrl} alt="Meditation" className="w-full h-full rounded-full object-cover" />
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                  <CheckCircle2 size={12} className="text-white bg-green-500 rounded-full" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[15px] leading-tight">La Rosée du Matin</h3>
                <p className="text-white/80 text-xs mt-0.5">Pasteur Chretien Kalala</p>
              </div>
            </div>
            <button className="h-10 w-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
              <Play size={18} fill="currentColor" />
            </button>
          </div>
          
          {/* Divider */}
          <div className="w-full h-[1px] bg-white/20 mb-4" />
          
          {/* Bottom Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 opacity-90">
              <Calendar size={14} />
              <span className="text-xs font-medium">Nov 30, 2024</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-90">
              <Clock size={14} />
              <span className="text-xs font-medium">10:00 - 10:15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-on-surface">Spécialités</h2>
          <button className="text-xs font-semibold text-on-surface-variant bg-white px-3 py-1.5 rounded-full shadow-sm">
            Voir tout
          </button>
        </div>
        
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[60px] w-[60px] bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center shadow-sm">
              <BookOpen size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface/80 text-center leading-tight">Lecture<br/>Biblique</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[60px] w-[60px] bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center shadow-sm">
              <Sparkles size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface/80 text-center leading-tight">Parole<br/>Inspirée</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[60px] w-[60px] bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center shadow-sm">
              <Heart size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface/80 text-center leading-tight">Prière<br/>Guidée</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[60px] w-[60px] bg-green-50 text-green-500 rounded-2xl flex items-center justify-center shadow-sm">
              <Users size={24} />
            </div>
            <span className="text-xs font-medium text-on-surface/80 text-center leading-tight">Groupes<br/>Sociaux</span>
          </div>
        </div>
      </div>

      {/* List */}
      <div>
        <div className="flex gap-1.5 justify-center mb-4">
           <div className="h-1.5 w-1.5 rounded-full bg-surface-container-high"></div>
           <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
           <div className="h-1.5 w-1.5 rounded-full bg-surface-container-high"></div>
        </div>

        <div className="bg-white p-4 rounded-[20px] mb-3 shadow-sm flex items-center gap-4">
          <div className="relative h-[46px] w-[46px]">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" alt="Pasteur" className="rounded-full object-cover w-full h-full" />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-white">
               <CheckCircle2 size={10} className="text-white bg-green-500 rounded-full" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-on-surface text-[15px]">Elena Sofia</h4>
            <div className="flex items-center gap-1 mt-0.5 text-xs text-on-surface-variant font-medium">
              <Star size={12} className="text-orange-400" fill="currentColor" />
              <span className="text-on-surface">4.9</span>
              <span className="mx-0.5">•</span>
              <span>Guide Spirituel</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-[20px] mb-3 shadow-sm flex items-center gap-4 opacity-75">
          <div className="relative h-[46px] w-[46px]">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Pasteur" className="rounded-full object-cover w-full h-full" />
          </div>
          <div>
            <h4 className="font-bold text-on-surface text-[15px]">David Chen</h4>
            <div className="flex items-center gap-1 mt-0.5 text-xs text-on-surface-variant font-medium">
              <Star size={12} className="text-orange-400" fill="currentColor" />
              <span className="text-on-surface">4.7</span>
              <span className="mx-0.5">•</span>
              <span>Pasteur</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
