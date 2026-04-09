import { Edit3, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const AdminDashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 px-6 max-w-5xl mx-auto pb-32"
    >
      <section className="mb-12 text-center md:text-left">
        <div className="badge badge-accent badge-sm font-bold uppercase tracking-[0.1em] mb-4">
          Gestion Interne
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-base-content mb-4">
          Tableau de bord Admin
        </h1>
        <p className="text-base-content/70 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          Créez et publiez de nouveaux contenus spirituels pour la communauté.
          Maintenez le sanctuaire de la pensée et de la réflexion.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 card bg-base-100 shadow-sm border border-base-200"
        >
          <div className="card-body p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Edit3 className="text-primary" size={24} />
              </div>
              <h2 className="card-title text-xl font-bold">
                Nouvelle Méditation
              </h2>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[0.6875rem] font-bold uppercase tracking-wider text-base-content/60">
                    Titre
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Le Silence Intérieur..."
                  className="input input-bordered bg-base-200 focus:bg-base-100 transition-colors w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[0.6875rem] font-bold uppercase tracking-wider text-base-content/60">
                      Référence Biblique
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Psaume 46:10"
                    className="input input-bordered bg-base-200 focus:bg-base-100 transition-colors w-full"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[0.6875rem] font-bold uppercase tracking-wider text-base-content/60">
                      Verset
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Arrêtez, et sachez..."
                    className="input input-bordered bg-base-200 focus:bg-base-100 transition-colors w-full"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[0.6875rem] font-bold uppercase tracking-wider text-base-content/60">
                    La Pensée
                  </span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Partagez l'aperçu spirituel pour aujourd'hui..."
                  className="textarea textarea-bordered bg-base-200 focus:bg-base-100 transition-colors w-full resize-none text-base"
                />
              </div>
              <div className="pt-4">
                <button className="btn btn-primary w-full h-14 rounded-xl shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all text-white font-bold">
                  <span>Publier la Méditation</span>
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="card shadow-lg relative overflow-hidden aspect-[4/5] bg-primary group editorial-shadow">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80"
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
            <div className="card-body justify-end p-8 text-white relative z-10">
              <span className="badge badge-ghost border-white/20 text-white text-[0.625rem] font-bold uppercase tracking-[0.2em] mb-2 opacity-80 py-3">
                Aperçu Quotidien
              </span>
              <h3 className="card-title text-2xl font-bold mb-2">
                Présence Divine
              </h3>
              <p className="text-sm opacity-80 italic mb-6">
                "Arrêtez, et sachez que je suis Dieu." — Psaume 46:11
              </p>
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-accent shadow-[0_0_10px_rgba(255,223,155,0.5)]" />
              </div>
            </div>
          </div>

          <div className="card bg-base-200 border border-base-300">
            <div className="card-body p-6">
              <h4 className="text-[0.6875rem] font-bold uppercase tracking-wider text-accent mb-4">
                Directives de Contenu
              </h4>
              <ul className="space-y-4">
                {[
                  "Gardez vos pensées axées sur la croissance spirituelle.",
                  "Vérifiez toutes les références bibliques.",
                  "Visez un ton éditorial et réfléchi.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-base-content/70 items-start"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-primary flex-shrink-0 mt-0.5"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
