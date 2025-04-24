
import React from 'react';
import { useParams } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Play, Heart } from 'lucide-react';
import { artists, albums } from '@/data/mockData';
import { useAudioContext } from '@/contexts/AudioContext';
import AlbumCard from '@/components/AlbumCard';

const ArtistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setCurrentTrack } = useAudioContext();
  
  const artist = artists.find(artist => artist.id === id);
  const artistAlbums = albums.filter(album => album.artistId === id);
  
  if (!artist) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Artist not found</h1>
      </div>
    );
  }

  const handlePlayArtist = () => {
    if (artistAlbums.length > 0 && artistAlbums[0].tracks.length > 0) {
      setCurrentTrack(artistAlbums[0].tracks[0]);
    }
  };

  return (
    <ScrollArea className="h-full">
      <div>
        <div 
          className="relative h-80 bg-cover bg-center flex items-end"
          style={{ 
            backgroundImage: `url(${artist.imageUrl})`,
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-spotify-black to-transparent" />
          <div className="relative z-10 p-6">
            <h1 className="text-5xl font-bold mb-2">{artist.name}</h1>
            <p className="text-gray-300">Artist</p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-8">
            <Button 
              className="rounded-full bg-spotify-purple hover:bg-spotify-vibrant-purple w-12 h-12 flex items-center justify-center p-0"
              onClick={handlePlayArtist}
            >
              <Play size={24} className="ml-1" />
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-700 bg-transparent hover:bg-gray-800">
              <Heart size={18} className="mr-2" />
              Follow
            </Button>
          </div>
          
          {artistAlbums.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Albums</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {artistAlbums.map(album => (
                  <AlbumCard key={album.id} album={album} />
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular</h2>
            <div className="bg-spotify-gray/40 rounded-md overflow-hidden">
              {artistAlbums.flatMap(album => album.tracks).slice(0, 5).map((track, index) => (
                <div 
                  key={track.id}
                  className="flex items-center px-4 py-3 hover:bg-spotify-gray/80 cursor-pointer"
                  onClick={() => setCurrentTrack(track)}
                >
                  <div className="w-6 text-center text-gray-400 mr-4">{index + 1}</div>
                  <img 
                    src={track.imageUrl} 
                    alt={track.title} 
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="text-white">{track.title}</div>
                    <div className="text-sm text-gray-400">{track.album}</div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <div className="bg-spotify-gray/40 rounded-md p-6">
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Biography</h3>
                <p className="text-gray-300">
                  {artist.name} is an innovative artist known for pushing boundaries and creating unique sounds.
                  Their music blends electronic elements with atmospheric textures, creating a distinctive sonic landscape.
                </p>
              </div>
              
              <div>
                <img 
                  src={artist.imageUrl} 
                  alt={artist.name} 
                  className="w-full max-w-lg mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ArtistPage;
