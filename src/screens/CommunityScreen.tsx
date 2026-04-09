import {
  Waves,
  HandHelping,
  Star,
  MessageSquare,
  Info,
  Smile,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { MOCK_CHAT } from "../constants";

export const CommunityScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-5 max-w-2xl mx-auto pb-32 space-y-8"
    >
      <header className="space-y-2">
        <h1 className="text-[28px] font-headline font-bold text-on-surface leading-tight text-primary">
          Communauté
        </h1>
        <p className="text-on-surface-variant text-sm">
          Partagez votre voyage, vos réflexions et vos prières avec la famille CME.
        </p>
      </header>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-on-surface">
            Sujets Actifs
          </h2>
          <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-white px-3 py-1.5 rounded-full shadow-sm">
            3 Nouvelles
          </div>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide -mx-5 px-5">
          {[
            {
              title: "Foi & Épreuves",
              desc: "Naviguer dans les tempêtes de la vie avec une foi constante.",
              icon: Waves,
              color: "text-blue-500",
              bgColor: "bg-blue-50",
            },
            {
              title: "Prière du jour",
              desc: "Intentions quotidiennes et pétitions communes.",
              icon: HandHelping,
              color: "text-orange-500",
              bgColor: "bg-orange-50",
            },
            {
              title: "Témoignages",
              desc: "Célébrer les percées et les miracles trouvés.",
              icon: Star,
              color: "text-primary",
              bgColor: "bg-primary-container",
              featured: true,
            },
          ].map((topic, index) => (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={topic.title}
              className={cn(
                "min-w-[240px] p-5 rounded-[24px] shadow-sm relative overflow-hidden flex flex-col",
                topic.featured
                  ? "bg-primary text-white shadow-primary/20"
                  : "bg-white text-on-surface"
              )}
            >
              {/* Decorative circle */}
              <div
                className={cn(
                  "absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-50",
                  topic.featured ? "bg-white/10" : topic.bgColor
                )}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center mb-4 shadow-sm", topic.featured ? "bg-white/20 text-white" : cn(topic.bgColor, topic.color))}>
                  <topic.icon size={20} strokeWidth={2.5} />
                </div>
                
                <h3 className="font-bold text-[15px] mb-1.5">
                  {topic.title}
                </h3>
                <p className={cn("text-xs leading-relaxed mb-6 flex-grow", topic.featured ? "text-white/80" : "text-on-surface-variant")}>
                  {topic.desc}
                </p>
                
                <div className="flex justify-between items-end mt-auto">
                  {topic.featured ? (
                    <div className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Salon Actif
                    </div>
                  ) : (
                    <div className="flex -space-x-2">
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm">
                           <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" className="w-full h-full object-cover" />
                         </div>
                       ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chat Section */}
      <section className="bg-white rounded-[24px] shadow-sm overflow-hidden flex flex-col h-[500px]">
        {/* Chat Header */}
        <div className="p-4 flex items-center justify-between border-b border-surface-container-high/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
              <MessageSquare size={18} fill="currentColor" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">
                Chat des Témoignages
              </h4>
              <p className="text-[11px] text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> 18 membres actifs
              </p>
            </div>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors active:scale-95">
            <Info size={18} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 flex flex-col scrollbar-hide bg-surface-container-low/30">
          {MOCK_CHAT.map((msg) => (
            <div
              key={msg.id}
              className={cn("flex flex-col max-w-[85%]", msg.isMe ? "self-end items-end" : "self-start items-start")}
            >
              <div className="flex items-end gap-2">
                {!msg.isMe && msg.avatarUrl && (
                  <div className="w-7 h-7 rounded-full overflow-hidden shadow-sm flex-shrink-0 mb-1">
                    <img src={msg.avatarUrl} alt={msg.sender} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                )}
                
                <div className={cn("flex flex-col gap-1", msg.isMe ? "items-end" : "items-start")}>
                  <div className="flex items-center gap-1.5 px-1">
                    <span className="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-wide">
                      {msg.sender}
                    </span>
                    <span className="text-[9px] text-on-surface-variant/50">
                      {msg.time}
                    </span>
                  </div>
                  
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-[20px] text-[13px] shadow-sm leading-relaxed",
                      msg.isMe
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white text-on-surface rounded-bl-sm border border-surface-container-high/30"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-3 bg-white">
          <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-4 py-2 border border-surface-container-high/50">
            <button className="text-on-surface-variant hover:text-primary active:scale-95 transition-all">
              <Smile size={18} />
            </button>
            <input
              type="text"
              placeholder="Écrivez un message..."
              className="bg-transparent border-none focus:outline-none flex-1 text-sm text-on-surface py-1.5 placeholder:text-on-surface-variant/50 min-w-0"
            />
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white active:scale-90 transition-transform shadow-sm flex-shrink-0">
              <Send size={14} className="ml-0.5" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
