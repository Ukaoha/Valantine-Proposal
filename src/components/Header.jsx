import React from 'react';
import heartGif from '../assets/heart.gif'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Will You Be My Val?</h1>
                  <img src={heartGif} alt="Confetti" className='gif' />
      
    </header>
  );
};

export default Header;