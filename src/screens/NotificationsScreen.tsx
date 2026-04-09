import { Play, MessageSquare, Trophy, Clock, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { MOCK_NOTIFICATIONS } from "../constants";

export const NotificationsScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 max-w-2xl mx-auto pb-32"
    >
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary mb-2">
          Notifications
        </h2>
        <p className="text-base-content/70 font-medium">
          Les dernières mises à jour de votre sanctuaire
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="badge badge-outline border-base-300 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-accent">
            Aujourd'hui
          </span>
          <div className="h-[1px] flex-grow bg-base-300" />
        </div>

        {MOCK_NOTIFICATIONS.map((notif, index) => {
          const Icon =
            notif.type === "meditation"
              ? Play
              : notif.type === "social"
                ? MessageSquare
                : notif.type === "achievement"
                  ? Trophy
                  : Clock;

          const iconColor =
            notif.type === "meditation"
              ? "text-primary bg-primary/10"
              : notif.type === "social"
                ? "text-secondary bg-secondary/10"
                : "text-accent bg-accent/10";

          return (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              key={notif.id}
              className="card bg-base-100 shadow-sm border border-base-200 hover:bg-base-200 transition-all cursor-pointer"
            >
              <div className="card-body p-5 flex-row gap-5">
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                    iconColor,
                  )}
                >
                  <Icon size={24} />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-base-content leading-tight">
                      {notif.title}
                    </h3>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-base-content/50">
                      {notif.time}
                    </span>
                  </div>
                  <p className="text-base-content/70 text-sm leading-relaxed mb-3">
                    {notif.content}
                  </p>
                  {notif.actionLabel && (
                    <button className="btn btn-ghost btn-xs text-primary uppercase tracking-widest gap-1 p-0 hover:bg-transparent">
                      {notif.actionLabel === "Listen Now"
                        ? "Écouter"
                        : notif.actionLabel === "View Discussion"
                          ? "Voir la discussion"
                          : notif.actionLabel}
                      <ChevronRight size={14} />
                    </button>
                  )}
                  {notif.avatarUrl && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="avatar">
                        <div className="w-6 rounded-full">
                          <img
                            src={notif.avatarUrl}
                            alt="Avatar"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <span className="text-xs text-base-content/70 font-medium">
                        Voir la réponse
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}

        <div className="flex items-center gap-3 pt-4 mb-4">
          <span className="badge badge-outline border-base-300 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-base-content/60">
            Hier
          </span>
          <div className="h-[1px] flex-grow bg-base-300" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: MOCK_NOTIFICATIONS.length * 0.1 }}
          className="card bg-base-200 shadow-sm border border-base-300 opacity-80 hover:opacity-100 transition-all cursor-pointer"
        >
          <div className="card-body p-5 flex-row gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <Trophy size={24} />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-base-content leading-tight">
                  Succès Débloqué
                </h3>
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-base-content/50">
                  IL Y A 1J
                </span>
              </div>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Vous avez terminé 7 jours de pleine conscience consécutifs.
                Votre esprit brille de mille feux.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
