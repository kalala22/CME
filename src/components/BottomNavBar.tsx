import { Home, BookOpen, MessageSquare, User } from "lucide-react";
import { cn } from "../lib/utils";
import { Screen } from "../types";

export const BottomNavBar = ({
  currentScreen,
  setScreen,
}: {
  currentScreen: Screen;
  setScreen: (s: Screen) => void;
}) => {
  const navItems: { id: Screen; label: string; icon: any }[] = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "bible", label: "Bible", icon: BookOpen },
    { id: "community", label: "Communauté", icon: MessageSquare },
    { id: "profile", label: "Moi", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full h-[90px] flex justify-around items-center px-4 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-50">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentScreen === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setScreen(item.id)}
            className="flex flex-col items-center justify-center gap-1.5 min-w-[64px] active:scale-95 transition-transform"
          >
            <div className={cn("p-1.5 rounded-2xl transition-colors", isActive ? "text-primary" : "text-on-surface-variant")}>
              <Icon size={24} fill={isActive && (item.id === "home" || item.id === "profile") ? "currentColor" : "none"} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span
              className={cn(
                "text-[10px] font-semibold transition-colors",
                isActive ? "text-primary" : "text-on-surface-variant"
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
