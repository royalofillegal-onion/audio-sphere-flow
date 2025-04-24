
import React from "react";
import { Artist } from "../data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ArtistCardProps {
  artist: Artist;
  className?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist/${artist.id}`);
  };

  return (
    <Card 
      className={`bg-spotify-gray border-none overflow-hidden music-card-hover cursor-pointer ${className || ""}`}
      onClick={handleClick}
    >
      <CardContent className="p-3">
        <div className="relative">
          <img 
            src={artist.imageUrl} 
            alt={artist.name} 
            className="w-full aspect-square object-cover rounded-full mb-3"
          />
        </div>
        <h3 className="font-semibold text-white text-center truncate">{artist.name}</h3>
        <p className="text-sm text-gray-400 text-center">Artist</p>
      </CardContent>
    </Card>
  );
};

export default ArtistCard;
