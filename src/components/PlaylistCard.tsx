
import React from "react";
import { Playlist } from "../data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { useAudioContext } from "@/contexts/AudioContext";

interface PlaylistCardProps {
  playlist: Playlist;
  className?: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, className }) => {
  const navigate = useNavigate();
  const { setCurrentTrack } = useAudioContext();

  const handleClick = () => {
    navigate(`/playlist/${playlist.id}`);
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (playlist.tracks && playlist.tracks.length > 0) {
      setCurrentTrack(playlist.tracks[0]);
    }
  };

  return (
    <Card 
      className={`bg-spotify-gray border-none overflow-hidden music-card-hover cursor-pointer ${className || ""}`}
      onClick={handleClick}
    >
      <CardContent className="p-3">
        <div className="relative group">
          <img 
            src={playlist.imageUrl} 
            alt={playlist.title} 
            className="w-full aspect-square object-cover rounded-md mb-3"
          />
          <button 
            className="absolute bottom-3 right-3 bg-spotify-purple text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={handlePlay}
          >
            <Play size={18} />
          </button>
        </div>
        <h3 className="font-semibold text-white truncate">{playlist.title}</h3>
        <p className="text-sm text-gray-400 truncate">{playlist.description}</p>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
