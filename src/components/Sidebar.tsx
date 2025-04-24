
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, Headphones, PlusCircle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { playlists } from '@/data/mockData';

interface SidebarProps {
  collapsed?: boolean;
  toggleCollapse?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, toggleCollapse }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div
      className={cn(
        "bg-spotify-black h-full flex flex-col border-r border-gray-800 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <div className="text-2xl font-bold text-gradient">SoundWave</div>
        )}
        {collapsed && <div className="mx-auto text-2xl font-bold text-gradient">SW</div>}
      </div>

      <div className="mt-6 px-4">
        <nav className="space-y-2">
          <Link
            to="/"
            className={cn(
              "flex items-center px-3 py-2 rounded-md transition-colors",
              isActive("/")
                ? "bg-spotify-gray text-white"
                : "text-gray-400 hover:text-white hover:bg-spotify-gray/50"
            )}
          >
            <Home size={22} />
            {!collapsed && <span className="ml-3">Home</span>}
          </Link>

          <Link
            to="/search"
            className={cn(
              "flex items-center px-3 py-2 rounded-md transition-colors",
              isActive("/search")
                ? "bg-spotify-gray text-white"
                : "text-gray-400 hover:text-white hover:bg-spotify-gray/50"
            )}
          >
            <Search size={22} />
            {!collapsed && <span className="ml-3">Search</span>}
          </Link>

          <Link
            to="/library"
            className={cn(
              "flex items-center px-3 py-2 rounded-md transition-colors",
              isActive("/library")
                ? "bg-spotify-gray text-white"
                : "text-gray-400 hover:text-white hover:bg-spotify-gray/50"
            )}
          >
            <Library size={22} />
            {!collapsed && <span className="ml-3">Your Library</span>}
          </Link>
        </nav>
      </div>

      <div className="mt-8 px-4">
        {!collapsed && (
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-400">PLAYLISTS</h3>
            <PlusCircle size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center">
            <PlusCircle size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 mt-2 px-2">
        {!collapsed && (
          <div className="space-y-1 px-2">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                to={`/playlist/${playlist.id}`}
                className="text-gray-400 hover:text-white text-sm py-2 px-2 rounded-md flex items-center hover:bg-spotify-gray/50 transition-colors truncate"
              >
                {playlist.title}
              </Link>
            ))}
          </div>
        )}
      </ScrollArea>

      <div className="mt-auto p-4">
        <button
          onClick={toggleCollapse}
          className="w-full py-2 text-gray-400 hover:text-white text-sm flex items-center justify-center"
        >
          {collapsed ? 
            <Headphones size={20} />
            :
            <span>Collapse</span>
          }
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
