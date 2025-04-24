
import React from 'react';
import { useAudio } from '@/hooks/useAudio';
import { Slider } from '@/components/ui/slider';
import { Volume, SkipBack, SkipForward, Play, Pause, Heart } from 'lucide-react';

const NowPlaying: React.FC = () => {
  const { 
    currentTrack, 
    isPlaying,
    volume,
    togglePlay,
    setVolume,
    nextTrack,
    prevTrack,
    progress,
    formatTime,
    currentTime,
    duration,
    seek
  } = useAudio();

  const handleSliderChange = (value: number[]) => {
    if (duration) {
      seek((value[0] / 100) * duration);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0] / 100);
  };

  if (!currentTrack) return null;

  return (
    <div className="bg-spotify-gray border-t border-gray-800 flex items-center px-4 py-3 h-24">
      <div className="flex items-center w-1/4">
        <img 
          src={currentTrack.imageUrl} 
          alt={currentTrack.title} 
          className="h-14 w-14 object-cover rounded-md"
        />
        <div className="ml-3 truncate">
          <div className="text-white text-sm font-medium truncate">{currentTrack.title}</div>
          <div className="text-gray-400 text-xs truncate">{currentTrack.artist}</div>
        </div>
        <button className="ml-4 text-gray-400 hover:text-spotify-purple">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <button 
            className="text-gray-400 hover:text-white"
            onClick={prevTrack}
          >
            <SkipBack size={18} />
          </button>
          
          <button 
            className="bg-white rounded-full p-1.5"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black" />}
          </button>
          
          <button 
            className="text-gray-400 hover:text-white"
            onClick={nextTrack}
          >
            <SkipForward size={18} />
          </button>
        </div>
        
        <div className="flex items-center space-x-2 w-full max-w-md">
          <div className="text-xs text-gray-400 w-10">
            {formatTime(currentTime)}
          </div>
          
          <Slider
            value={[progress]}
            max={100}
            step={0.1}
            className="flex-1"
            onValueChange={handleSliderChange}
          />
          
          <div className="text-xs text-gray-400 w-10">
            {formatTime(duration)}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-end w-1/4 space-x-2">
        <Volume size={18} className="text-gray-400" />
        <Slider
          value={[volume * 100]}
          max={100}
          step={1}
          className="w-24"
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default NowPlaying;
