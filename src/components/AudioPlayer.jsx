import React, { useState, useRef } from 'react';
import { Box, IconButton, Typography, Slider, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue;
    }
  };

  return (
    <Paper
      elevation={10}
      sx={{
        position: 'fixed',
        bottom: 30,
        left: 30,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        px: 2,
        py: 1,
        borderRadius: '50px',
        background: 'rgba(10, 10, 12, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          background: 'rgba(10, 10, 12, 0.95)',
          borderColor: 'var(--primary)',
        }
      }}
    >
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Demo URL, user should replace with their own
        loop
      />
      
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={togglePlay}
          sx={{
            color: 'var(--primary)',
            bgcolor: 'rgba(0, 242, 255, 0.1)',
            '&:hover': { bgcolor: 'rgba(0, 242, 255, 0.2)' }
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>

      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Typography variant="caption" sx={{ color: 'white', fontWeight: 800, display: 'block', lineHeight: 1 }}>
          DEMO REEL
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
          Master Beat Mix
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: 80, ml: 1 }}>
        <VolumeUpIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem' }} />
        <Slider
          size="small"
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolumeChange}
          sx={{
            color: 'var(--primary)',
            '& .MuiSlider-thumb': { width: 12, height: 12 }
          }}
        />
      </Box>
    </Paper>
  );
};

export default AudioPlayer;
