import { Bell, ChevronDown } from "lucide-react";

export const TopAppBar = ({ onMenuClick }: { onMenuClick?: () => void }) => (
  <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 h-20 pt-4 bg-transparent">
    <div className="flex items-center">
      <div className="h-10 w-10.5 rounded-full overflow-hidden border-2 border-surface shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
          alt="User avatar"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    
    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
      <span className="text-sm font-semibold text-on-surface">Paris, France</span>
      <ChevronDown size={16} className="text-on-surface-variant" />
    </div>

    <div className="flex items-center">
      <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] active:scale-95 transition-transform text-on-surface">
        <Bell size={20} strokeWidth={2} />
      </button>
    </div>
  </header>
);
