
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import AlbumCard from '@/components/AlbumCard';
import ArtistCard from '@/components/ArtistCard';
import PlaylistCard from '@/components/PlaylistCard';
import { useAudioContext } from '@/contexts/AudioContext';
import { featuredContent, categories, recentlyPlayed, newReleases } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const { setCurrentTrack } = useAudioContext();

  const handleTrackPlay = (trackId: string) => {
    const track = recentlyPlayed.find(track => track.id === trackId);
    if (track) {
      setCurrentTrack(track);
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Good afternoon</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredContent.playlists.map((playlist) => (
              <Link 
                key={playlist.id} 
                to={`/playlist/${playlist.id}`}
                className="bg-spotify-gray/60 hover:bg-spotify-gray rounded-md flex items-center overflow-hidden h-16"
              >
                <img 
                  src={playlist.imageUrl} 
                  alt={playlist.title} 
                  className="h-16 w-16 object-cover"
                />
                <span className="font-semibold ml-4">{playlist.title}</span>
              </Link>
            ))}
            
            {featuredContent.albums.map((album) => (
              <Link 
                key={album.id} 
                to={`/album/${album.id}`}
                className="bg-spotify-gray/60 hover:bg-spotify-gray rounded-md flex items-center overflow-hidden h-16"
              >
                <img 
                  src={album.imageUrl} 
                  alt={album.title} 
                  className="h-16 w-16 object-cover"
                />
                <span className="font-semibold ml-4">{album.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Recently played</h2>
            <Link to="/library" className="text-sm text-gray-400 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {recentlyPlayed.map((track) => (
              <div 
                key={track.id}
                className="bg-spotify-gray p-4 rounded-md cursor-pointer music-card-hover"
                onClick={() => handleTrackPlay(track.id)}
              >
                <div className="relative">
                  <img 
                    src={track.imageUrl} 
                    alt={track.title} 
                    className="w-full aspect-square object-cover rounded-md mb-3"
                  />
                </div>
                <h3 className="font-medium text-white truncate">{track.title}</h3>
                <p className="text-sm text-gray-400 truncate">{track.artist}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Made for you</h2>
            <Link to="/library" className="text-sm text-gray-400 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {featuredContent.playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">New releases</h2>
            <Link to="/search" className="text-sm text-gray-400 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {newReleases.map((album) => (
              <AlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Popular artists</h2>
            <Link to="/search" className="text-sm text-gray-400 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {featuredContent.artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse all</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="relative h-52 overflow-hidden rounded-lg music-card-hover"
              >
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Index;
