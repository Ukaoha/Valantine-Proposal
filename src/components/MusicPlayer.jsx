
import React, { useState } from 'react';
import musicFile from '../assets/romantic-music.mp3';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        const audio = document.getElementById('background-music');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <audio id="background-music" loop>
                <source src={musicFile} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {/* <button onClick={toggleMusic}>
                {isPlaying ? 'Pause Music 🎵' : 'Play Music 🎵'}
            </button> */}
        </div>
    );
};

export default MusicPlayer;