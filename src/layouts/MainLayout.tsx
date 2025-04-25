
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import NowPlaying from '@/components/NowPlaying';
import { useAudioContext } from '@/contexts/AudioContext';
import { useIsMobile } from '@/hooks/use-mobile';

const MainLayout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { currentTrack } = useAudioContext();
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex flex-col md:flex-row h-[100svh] w-full bg-spotify-black text-white overflow-hidden">
      <Sidebar collapsed={sidebarCollapsed || isMobile} toggleCollapse={toggleSidebar} />
      
      <main className="flex-1 flex flex-col overflow-hidden w-full">
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <Outlet />
        </div>
        
        {currentTrack && <NowPlaying />}
      </main>
    </div>
  );
};

export default MainLayout;
