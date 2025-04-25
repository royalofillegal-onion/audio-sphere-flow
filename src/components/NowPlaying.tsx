
import React from 'react';
import { useAudio } from '@/hooks/useAudio';
import { Slider } from '@/components/ui/slider';
import { Volume, SkipBack, SkipForward, Play, Pause, Heart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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

  const isMobile = useIsMobile();

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
    <div className="bg-spotify-gray border-t border-gray-800 flex flex-col md:flex-row items-center px-2 sm:px-4 py-2 sm:py-3 h-auto md:h-24 gap-2 md:gap-0 w-full">
      <div className="flex items-center w-full md:w-1/4">
        <img 
          src={currentTrack.imageUrl} 
          alt={currentTrack.title} 
          className="h-10 w-10 md:h-14 md:w-14 object-cover rounded-md"
        />
        <div className="ml-2 sm:ml-3 truncate flex-1 max-w-[150px] sm:max-w-none">
          <div className="text-white text-xs sm:text-sm font-medium truncate">{currentTrack.title}</div>
          <div className="text-gray-400 text-xs truncate">{currentTrack.artist}</div>
        </div>
        <button className="ml-2 sm:ml-4 text-gray-400 hover:text-spotify-purple">
          <Heart size={16} className="sm:size-18" />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center w-full md:flex-1 gap-1 sm:gap-2">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <button 
            className="text-gray-400 hover:text-white"
            onClick={prevTrack}
          >
            <SkipBack size={16} className="sm:size-18" />
          </button>
          
          <button 
            className="bg-white rounded-full p-1 sm:p-1.5"
            onClick={togglePlay}
          >
            {isPlaying ? 
              <Pause size={16} className="text-black sm:size-18" /> : 
              <Play size={16} className="text-black sm:size-18 ml-0.5" />
            }
          </button>
          
          <button 
            className="text-gray-400 hover:text-white"
            onClick={nextTrack}
          >
            <SkipForward size={16} className="sm:size-18" />
          </button>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2 w-full max-w-[250px] sm:max-w-md">
          <div className="text-[10px] sm:text-xs text-gray-400 w-8 sm:w-10 text-right">
            {formatTime(currentTime)}
          </div>
          
          <Slider
            value={[progress]}
            max={100}
            step={0.1}
            className="flex-1"
            onValueChange={handleSliderChange}
          />
          
          <div className="text-[10px] sm:text-xs text-gray-400 w-8 sm:w-10">
            {formatTime(duration)}
          </div>
        </div>
      </div>
      
      {!isMobile && (
        <div className="hidden md:flex items-center justify-end w-full md:w-1/4 space-x-2">
          <Volume size={18} className="text-gray-400" />
          <Slider
            value={[volume * 100]}
            max={100}
            step={1}
            className="w-24"
            onValueChange={handleVolumeChange}
          />
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
