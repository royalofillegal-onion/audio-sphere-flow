
import { useAudioContext } from "../contexts/AudioContext";
import { useEffect, useState } from "react";

export const useAudio = () => {
  const context = useAudioContext();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (context.duration > 0) {
      setProgress((context.currentTime / context.duration) * 100);
    } else {
      setProgress(0);
    }
  }, [context.currentTime, context.duration]);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
    ...context,
    progress,
    formatTime,
  };
};
