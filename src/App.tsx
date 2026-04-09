import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from './types';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { HomeScreen } from './screens/HomeScreen';
import BibleReader from './components/BibleReader';
import { CommunityScreen } from './screens/CommunityScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AdminDashboard } from './screens/AdminDashboard';

// --- Main App ---

export default function App() {
  const [currentScreen, setScreen] = useState<Screen>('home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home': return <HomeScreen />;
      case 'bible': return <BibleReader />;
      case 'community': return <CommunityScreen />;
      case 'notifications': return <NotificationsScreen />;
      case 'profile': return <ProfileScreen onAdminClick={() => setScreen('admin')} />;
      case 'admin': return <AdminDashboard />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <TopAppBar onMenuClick={() => {}} />
      
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      <BottomNavBar currentScreen={currentScreen} setScreen={setScreen} />
    </div>
  );
}
