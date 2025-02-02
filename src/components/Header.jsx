import React from 'react';
import GifPlayer from 'react-gif-player';
import heartGif from '../assets/heart.gif'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Will You Be My Val?</h1>
      <GifPlayer gif={heartGif} autoplay className='gif' />
    </header>
  );
};

export default Header;