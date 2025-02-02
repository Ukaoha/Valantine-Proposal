
import React, { useEffect } from 'react';
import confettiGif from '../assets/confetti.gif';
import romanticMusic from '../assets/romantic-music.mp3';

const YesPage = () => {
    useEffect(() => {
        const audio = new Audio(romanticMusic);
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="response" data-aos="zoom-in">
            <h3>Yay! You made me the happiest person alive! 💖</h3>
            <img src={confettiGif} alt="Confetti" />
        </div>
    );
};

export default YesPage;
