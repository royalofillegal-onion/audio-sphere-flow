
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import NowPlaying from '@/components/NowPlaying';
import { useAudioContext } from '@/contexts/AudioContext';

const MainLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { currentTrack } = useAudioContext();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-spotify-black text-white overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed} toggleCollapse={toggleSidebar} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <Outlet />
        </div>
        
        {currentTrack && <NowPlaying />}
      </main>
    </div>
  );
};

export default MainLayout;
