import React from 'react';
import videoWatch from '../Watch_Dogs2-Trailer.mp4';
import '../styles/HomeHeader.css';

function HomeHeader() {
  return (
    <header className="homeHeader">
      <h1 className="Logo">Your New Game</h1>
      <ul className="headerInfo">
        <li className="headerInfo_Title">Watch Dogs</li>
        <li>Action-aventure</li>
        <li>2014-05-27</li>
      </ul>
      <video src={videoWatch} muted loop autoPlay />
    </header>
  );
}

export default HomeHeader;
