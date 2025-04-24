
import React, { useEffect, useRef } from 'react';
import { useAudioContext } from '../contexts/AudioContext';

interface AudioVisualizerProps {
  className?: string;
}

const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { audioRef, isPlaying } = useAudioContext();
  const animationFrameRef = useRef<number>(0);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    let audioSourceNode: MediaElementAudioSourceNode | undefined;

    const setupAudioAnalyzer = () => {
      if (!audioRef.current) return;

      // Create audio context
      audioContextRef.current = new window.AudioContext();
      
      // Create analyzer
      analyzerRef.current = audioContextRef.current.createAnalyser();
      analyzerRef.current.fftSize = 256;
      
      // Create source node from audio element
      audioSourceNode = audioContextRef.current.createMediaElementSource(audioRef.current);
      audioSourceNode.connect(analyzerRef.current);
      analyzerRef.current.connect(audioContextRef.current.destination);
      
      // Create data array
      const bufferLength = analyzerRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);
    };

    const drawVisualizer = () => {
      if (!canvasRef.current || !analyzerRef.current || !dataArrayRef.current) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      // Set canvas dimensions to match its display size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const WIDTH = canvas.width;
      const HEIGHT = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      
      // Get frequency data
      analyzerRef.current.getByteFrequencyData(dataArrayRef.current);
      
      // Draw visualizer
      const barWidth = (WIDTH / dataArrayRef.current.length) * 2.5;
      let barHeight;
      let x = 0;
      
      for (let i = 0; i < dataArrayRef.current.length; i++) {
        barHeight = dataArrayRef.current[i] / 2;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
        gradient.addColorStop(0, '#9b87f5');
        gradient.addColorStop(1, '#0FA0CE');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
      
      animationFrameRef.current = requestAnimationFrame(drawVisualizer);
    };

    if (isPlaying) {
      if (!audioContextRef.current) {
        setupAudioAnalyzer();
      } else if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      
      drawVisualizer();
    } else {
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        audioContextRef.current.suspend();
      }
      
      cancelAnimationFrame(animationFrameRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isPlaying, audioRef]);

  return (
    <div className={`w-full h-24 ${className || ''}`}>
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default AudioVisualizer;
