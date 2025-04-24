
import React from 'react';
import { useAudio } from '@/hooks/useAudio';
import { Slider } from '@/components/ui/slider';
import { Volume2, SkipBack, SkipForward, Play, Pause, Volume, VolumeX } from 'lucide-react';
import AudioVisualizer from './AudioVisualizer';
import { useIsMobile } from '@/hooks/use-mobile';

const MusicPlayer: React.FC = () => {
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

  const renderVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume size={20} />;
    return <Volume2 size={20} />;
  };

  if (!currentTrack) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-spotify-dark to-black p-4 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">No track selected</h2>
        <p className="text-gray-400 text-center max-w-md px-4">
          Choose a track from your library to start listening, or explore our featured playlists for some recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-spotify-dark to-black p-4 md:p-8">
      <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={currentTrack.imageUrl} 
            alt={currentTrack.title} 
            className="w-full max-w-[280px] md:max-w-xs aspect-square rounded-lg shadow-2xl"
          />
        </div>
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-6 md:mb-8 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{currentTrack.title}</h1>
            <h2 className="text-lg md:text-xl text-gray-300">{currentTrack.artist}</h2>
            <p className="text-gray-400">{currentTrack.album}</p>
          </div>
          
          <AudioVisualizer className="mb-6 md:mb-8" />
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
              <span className="text-sm text-gray-400">{formatTime(duration)}</span>
            </div>
            
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              className="w-full"
              onValueChange={handleSliderChange}
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {!isMobile && (
              <div className="flex items-center space-x-2">
                {renderVolumeIcon()}
                <Slider
                  value={[volume * 100]}
                  max={100}
                  step={1}
                  className="w-24"
                  onValueChange={handleVolumeChange}
                />
              </div>
            )}
            
            <div className="flex items-center space-x-8">
              <button 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={prevTrack}
              >
                <SkipBack size={isMobile ? 24 : 28} />
              </button>
              
              <button 
                className="bg-spotify-purple rounded-full p-3 hover:scale-105 transition-transform"
                onClick={togglePlay}
              >
                {isPlaying 
                  ? <Pause size={isMobile ? 24 : 28} className="text-white" /> 
                  : <Play size={isMobile ? 24 : 28} className="text-white ml-1" />
                }
              </button>
              
              <button 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={nextTrack}
              >
                <SkipForward size={isMobile ? 24 : 28} />
              </button>
            </div>
            
            <div className="w-24 md:w-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
