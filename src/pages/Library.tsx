
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { playlists, albums, artists } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import AlbumCard from '@/components/AlbumCard';
import ArtistCard from '@/components/ArtistCard';
import PlaylistCard from '@/components/PlaylistCard';

type LibraryTab = 'playlists' | 'artists' | 'albums';

const Library: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LibraryTab>('playlists');

  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Your Library</h1>
        
        <div className="mb-6 flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full bg-transparent border-gray-700 hover:bg-gray-800 hover:text-white",
              activeTab === 'playlists' && "bg-white text-black hover:bg-white/90 hover:text-black border-white"
            )}
            onClick={() => setActiveTab('playlists')}
          >
            Playlists
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full bg-transparent border-gray-700 hover:bg-gray-800 hover:text-white",
              activeTab === 'artists' && "bg-white text-black hover:bg-white/90 hover:text-black border-white"
            )}
            onClick={() => setActiveTab('artists')}
          >
            Artists
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full bg-transparent border-gray-700 hover:bg-gray-800 hover:text-white",
              activeTab === 'albums' && "bg-white text-black hover:bg-white/90 hover:text-black border-white"
            )}
            onClick={() => setActiveTab('albums')}
          >
            Albums
          </Button>
        </div>
        
        <div>
          {activeTab === 'playlists' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {playlists.map(playlist => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          )}
          
          {activeTab === 'artists' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {artists.map(artist => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          )}
          
          {activeTab === 'albums' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {albums.map(album => (
                <AlbumCard key={album.id} album={album} />
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Library;
