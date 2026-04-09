import { Meditation, Notification, ChatMessage } from './types';

export const MOCK_MEDITATIONS: Meditation[] = [
  {
    id: '1',
    title: "Quand Dieu te protège, même tes ennemies sont limités",
    reference: 'GENÈSE 31:22-35',
    verse: " Ma main est assez forte pour vous faire du mal; mais le DIEU de votre père m`a dit hier: Garde-toi de parler à Jacob ni en bien ni en mal!",
    thought: "Dieu peut parler à tes ennemis pour te protéger ",
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    date: 'Mercredi 8 Avril 2026'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'meditation',
    title: 'Nouvelle méditation disponible',
    content: '"Le calme de l\'océan" — Une nouvelle session guidée de 15 minutes vous attend.',
    time: 'IL Y A 2M',
    actionLabel: 'COMMENCER LA SESSION'
  },
  {
    id: '2',
    type: 'social',
    title: 'Quelqu\'un a répondu à votre message',
    content: 'Elena a commenté votre post dans "Gratitude Quotidienne" : "Cela résonne profondément en moi aujourd\'hui..."',
    time: 'IL Y A 45M',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '3',
    type: 'achievement',
    title: 'Succès déverrouillé',
    content: "Vous avez complété 7 jours consécutifs de pleine conscience. Votre esprit rayonne.",
    time: 'IL Y A 1J'
  },
  {
    id: '4',
    type: 'reminder',
    title: 'Réflexion Quotidienne',
    content: 'Il est temps de vous détendre pour la soirée. Prenez 5 minutes pour vous.',
    time: 'IL Y A 1J'
  }
];

export const MOCK_CHAT: ChatMessage[] = [
  {
    id: '1',
    sender: 'Gabriel',
    content: "Aujourd'hui, pendant la méditation de la Rosée du Matin, j'ai ressenti un profond sentiment de paix que je n'avais pas connu depuis des mois. Merci à tous pour cette énergie partagée.",
    time: '10:42',
    isMe: false,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
  },
  {
    id: '2',
    sender: 'Vous',
    content: "J'ai ressenti ça aussi ! Il y a vraiment quelque chose de spécial dans notre concentration collective aujourd'hui. La grâce était au rendez-vous.",
    time: '10:45',
    isMe: true
  },
  {
    id: '3',
    sender: 'Elena',
    content: "Quelqu'un a-t-il une écriture de base ou un passage spécifique qu'il a utilisé pour la session 'Foi et Épreuves' aujourd'hui ? J'aimerais le garder avec moi.",
    time: '10:48',
    isMe: false,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
  }
];
