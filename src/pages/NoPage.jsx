
import React, { useEffect } from 'react';
import sadGif from '../assets/sad.gif';
import sadMusic from '../assets/sad-music.mp3';

const NoPage = () => {
    useEffect(() => {
        const audio = new Audio(sadMusic);
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className="response" data-aos="zoom-in">
            <h3>Aw, that's okay. Forget that I asked ☹️</h3>
            <img src={sadGif} alt="Sad" />
        </div>
    );
};

export default NoPage;
