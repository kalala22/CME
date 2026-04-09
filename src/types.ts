export type Screen = 'home' | 'bible' | 'community' | 'notifications' | 'profile' | 'admin';

export interface Meditation {
  id: string;
  title: string;
  reference: string;
  verse: string;
  thought: string;
  imageUrl: string;
  date: string;
}

export interface Notification {
  id: string;
  type: 'meditation' | 'social' | 'achievement' | 'reminder';
  title: string;
  content: string;
  time: string;
  actionLabel?: string;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  time: string;
  isMe: boolean;
  avatarUrl?: string;
}
