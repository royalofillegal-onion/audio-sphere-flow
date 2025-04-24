
import React from 'react';
import { useParams } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Play, Heart, Clock } from 'lucide-react';
import { albums } from '@/data/mockData';
import { useAudioContext } from '@/contexts/AudioContext';
import { Link } from 'react-router-dom';

const AlbumPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setCurrentTrack } = useAudioContext();
  
  const album = albums.find(album => album.id === id);
  
  if (!album) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Album not found</h1>
      </div>
    );
  }

  const handlePlayAlbum = () => {
    if (album.tracks.length > 0) {
      setCurrentTrack(album.tracks[0]);
    }
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <ScrollArea className="h-full">
      <div>
        <div className="bg-gradient-to-b from-spotify-purple/20 to-spotify-black p-6 flex flex-col md:flex-row items-center md:items-end gap-6">
          <img 
            src={album.imageUrl} 
            alt={album.title} 
            className="w-48 h-48 shadow-xl"
          />
          <div>
            <p className="text-sm uppercase mb-1">Album</p>
            <h1 className="text-5xl font-bold mb-2">{album.title}</h1>
            <div className="flex items-center text-sm text-gray-300">
              <Link to={`/artist/${album.artistId}`} className="font-semibold hover:underline">
                {album.artist}
              </Link>
              <span className="mx-1">•</span>
              <span>{album.releaseYear}</span>
              <span className="mx-1">•</span>
              <span>{album.tracks.length} songs</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-8">
            <Button 
              className="rounded-full bg-spotify-purple hover:bg-spotify-vibrant-purple w-12 h-12 flex items-center justify-center p-0"
              onClick={handlePlayAlbum}
            >
              <Play size={24} className="ml-1" />
            </Button>
            <Button variant="outline" className="rounded-full border border-gray-700 bg-transparent hover:bg-gray-800">
              <Heart size={18} className="mr-2" />
              Save
            </Button>
          </div>
          
          <div className="mb-8">
            <div className="grid grid-cols-[16px_4fr_minmax(120px,1fr)] md:grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 border-b border-gray-700 text-gray-400 text-sm">
              <div className="text-center">#</div>
              <div>Title</div>
              <div className="hidden md:block">Album</div>
              <div className="flex justify-end">
                <Clock size={16} />
              </div>
            </div>
            
            {album.tracks.map((track, index) => (
              <div 
                key={track.id}
                className="grid grid-cols-[16px_4fr_minmax(120px,1fr)] md:grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-3 hover:bg-spotify-gray/40 rounded-md cursor-pointer"
                onClick={() => setCurrentTrack(track)}
              >
                <div className="flex items-center justify-center text-gray-400">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src={track.imageUrl} 
                    alt={track.title} 
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <div className="text-white">{track.title}</div>
                    <div className="text-sm text-gray-400">{track.artist}</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center text-gray-400">
                  {album.title}
                </div>
                <div className="flex items-center justify-end text-gray-400">
                  {formatDuration(track.duration)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AlbumPage;
