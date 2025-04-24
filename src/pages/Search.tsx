
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search as SearchIcon } from 'lucide-react';
import { albums, artists, tracks, categories } from '@/data/mockData';
import { useAudioContext } from '@/contexts/AudioContext';
import { Link } from 'react-router-dom';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { setCurrentTrack } = useAudioContext();

  const filteredAlbums = albums.filter(album => 
    album.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    album.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredArtists = artists.filter(artist => 
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTrackPlay = (track: typeof tracks[0]) => {
    setCurrentTrack(track);
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-6">
        <div className="mb-8">
          <div className="relative mb-6">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              className="pl-10 bg-spotify-gray border-none text-white placeholder:text-gray-400 h-12 text-base w-full md:w-96"
              placeholder="What do you want to listen to?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {searchQuery ? (
            <>
              {filteredTracks.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Songs</h2>
                  <div className="bg-spotify-gray/40 rounded-md overflow-hidden">
                    {filteredTracks.slice(0, 5).map((track, index) => (
                      <div 
                        key={track.id}
                        className="flex items-center px-4 py-2 hover:bg-spotify-gray/80 cursor-pointer"
                        onClick={() => handleTrackPlay(track)}
                      >
                        <div className="w-6 text-center text-gray-400 mr-4">{index + 1}</div>
                        <img 
                          src={track.imageUrl} 
                          alt={track.title} 
                          className="w-10 h-10 object-cover mr-4"
                        />
                        <div className="flex-1">
                          <div className="text-white">{track.title}</div>
                          <div className="text-sm text-gray-400">{track.artist}</div>
                        </div>
                        <div className="text-gray-400 text-sm">
                          {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {filteredArtists.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Artists</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {filteredArtists.map((artist) => (
                      <Link 
                        key={artist.id}
                        to={`/artist/${artist.id}`}
                        className="bg-spotify-gray p-4 rounded-md hover:bg-spotify-gray/80"
                      >
                        <img 
                          src={artist.imageUrl} 
                          alt={artist.name} 
                          className="w-full aspect-square object-cover rounded-full mb-3"
                        />
                        <div className="text-white font-medium text-center">{artist.name}</div>
                        <div className="text-gray-400 text-sm text-center">Artist</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredAlbums.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Albums</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {filteredAlbums.map((album) => (
                      <Link 
                        key={album.id}
                        to={`/album/${album.id}`}
                        className="bg-spotify-gray p-4 rounded-md hover:bg-spotify-gray/80"
                      >
                        <img 
                          src={album.imageUrl} 
                          alt={album.title} 
                          className="w-full aspect-square object-cover rounded-md mb-3"
                        />
                        <div className="text-white font-medium truncate">{album.title}</div>
                        <div className="text-gray-400 text-sm truncate">{album.artist}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {filteredTracks.length === 0 && filteredArtists.length === 0 && filteredAlbums.length === 0 && (
                <div className="text-center py-16">
                  <h2 className="text-2xl font-bold mb-2">No results found for "{searchQuery}"</h2>
                  <p className="text-gray-400">Please try another search term.</p>
                </div>
              )}
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Browse all</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.map((category) => (
                  <div 
                    key={category.id}
                    className="relative h-40 overflow-hidden rounded-lg bg-spotify-gray cursor-pointer music-card-hover"
                    style={{
                      backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                    }}
                  >
                    <img 
                      src={category.imageUrl} 
                      alt={category.name} 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <h3 className="text-xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default Search;
